//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}

SCG.Library.Graph = (function() {
	//shared private variables
	var getStartingNode = function(edgeNodes, startNode) {
		var node;
		
		//Setup Queue for the first loop. If a starting node has not been specified. Just pick the first node
		//in the list. Otherwise, use the starting node.
		if(startNode == undefined) {
			node = edgeNodes[0]; //starting node has not been defined. Just get first node in the list
		} else {
			var unsortedObjectHash = {};

			//Go through the array of nodes and create an index of each node's values. 
			for(var i = 0, iLen = edgeNodes.length; i < iLen; i++) {
				var currentNodeValue = edgeNodes[i].getValue();

				if(unsortedObjectHash[currentNodeValue] != undefined) {
					console.error('The graph has two or mode nodes with duplicate value. BFS may not return expected results');
				}

				unsortedObjectHash[currentNodeValue] = edgeNodes[i];
			}

			//With the index built, simply return the 
			node = unsortedObjectHash[startNode];
		}

		return node;
	}
	
	return function() {
		var edgeNodes = [];
		
		this.addNode = function(nodeValue) {
			var newNode = new SCG.Library.GraphNode(nodeValue);
			edgeNodes.push(newNode);
		};
		
		this.connect = function(firstNode, secondNode) {
			var node1 = undefined;
			var node2 = undefined;
			
			for(var i = 0, iLen = edgeNodes.length; i < iLen; i++) {
				var currentNode = edgeNodes[i];
				
				if(firstNode == currentNode.getValue()) {
					node1 = currentNode;
				} else if(secondNode == currentNode.getValue()) {
					node2 = currentNode;
				}
			}
			
			if(node1 && node2) {
				node1.addNeighbor(node2);
				node2.addNeighbor(node1);
				
				return true;
			} else {
				return false;
			}
		};
		
		this.print = function() {
			var stringRepresentation = "";

			for(var i = 0, iLen = edgeNodes.length; i < iLen; i++) {
				var currentNode = edgeNodes[i];

				stringRepresentation += currentNode.getValue() + ": " + currentNode.printNeighbors() + "\n";
			}

			return stringRepresentation;
		};

		this.isEmpty = function() {
			if(edgeNodes.length <= 0) {
				return true;
			} else {
				return false;
			}
		};

		//Breadth First Search Algorithm
		this.bfs = function(startNode) {
			var currentNode, queue, bfs, currentNeighbors, currentNeighbor;

			if(this.isEmpty() == true) {
				return "";
			}

			//Setup for Algorithm
			currentNode = getStartingNode(edgeNodes, startNode); //Get either the first node, or the node specified in startNode
			currentNode.setCustomAttr({visited:true}); //Make the first node as visited
			queue = new SCG.Library.Queue({value:currentNode}); //Add the first node to the queue
			bfs = currentNode.getValue() + " "; //

			while(queue.isEmpty() == false) {
				currentNode = queue.dequeue();
				currentNeighbors = currentNode.getSortedNeighbors();

				for(var j = 0, jLen = currentNeighbors.length; j < jLen; j++) {
					currentNeighbor = currentNeighbors[j];

					if(currentNeighbor.getCustomAttr('visited') != true) {
						bfs += currentNeighbor.getValue() + " ";
						currentNeighbor.setCustomAttr({visited:true});
						queue.enqueue(currentNeighbor);
					}
				}
			}

			//Take off last " " (space) on the string if any
			if(bfs[bfs.length-1] == " ") {
				bfs = bfs.slice(0, bfs.length - 1);
			}

			return bfs;
		};
		
		this.dfs = function(startNode) {
			var currentNode, queue, bfs, currentNeighbors, currentNeighbor, nonVisitedNeighbor;

			if(this.isEmpty() == true) {
				return "";
			}

			//Setup for Algorithm
			currentNode = getStartingNode(edgeNodes, startNode); //Get either the first node, or the node specified in startNode
			currentNode.setCustomAttr({visited:true}); //Make the first node as visited
			stack = new SCG.Library.Stack({value:currentNode}); //Add the first node to the queue
			bfs = currentNode.getValue() + " "; //

			while(stack.isEmpty() == false) {
				currentNode = stack.pop();
				stack.push(currentNode);

				currentNeighbors = currentNode.getSortedNeighbors();
				nonVisitedNeighbor = undefined;
				for(var i = 0, iLen = currentNeighbors.length; i < iLen; i++) {
					if(currentNeighbors[i].getCustomAttr('visited') != true) {
						nonVisitedNeighbor = currentNeighbors[i];
						break;
					}
				}
				
				if(nonVisitedNeighbor == undefined) {
					stack.pop();
				} else {
					bfs += nonVisitedNeighbor.getValue() + " ";
					stack.push(nonVisitedNeighbor);
					nonVisitedNeighbor.setCustomAttr({visited:true});
				}
			}

			//Take off last " " (space) on the string if any
			if(bfs[bfs.length-1] == " ") {
				bfs = bfs.slice(0, bfs.length - 1);
			}

			return bfs;
		}
	};
})();

SCG.Library.GraphNode = (function() {
	//shared private variables

	return function(initialValue) {
		var neighbors = [];
		var value = initialValue;
		var customAttrs = {};

		this.addNeighbor = function(newNode) {
			neighbors.push(newNode);
		};

		this.printNeighbors = function() {
			var stringRepresentation = "";
			var neighborsArray = [];
			
			for(var i = 0, iLen = neighbors.length; i < iLen; i++) {
				var currentNeighbor = neighbors[i];

				neighborsArray.push(currentNeighbor.getValue());
			}
			
			neighborsArray.sort();
			stringRepresentation = neighborsArray.join(' ');

			return stringRepresentation;
		};
		
		this.getNeighbors = function() {
			return neighbors;
		}
		
		this.getSortedNeighbors = function() {
			var unsortedObjectHash = {};
			var keys;
			var currentNodeValue;
			var sortedArray = [];

			//Get Node Values and put into object hash
			for(var i = 0, iLen = neighbors.length; i < iLen; i++) {
				currentNodeValue = neighbors[i].getValue();
				unsortedObjectHash[currentNodeValue] = neighbors[i];
			}

			//Get Keys from object hash
			keys = Object.keys(unsortedObjectHash);

			//Sort Keys
			keys.sort();

			//Create sorted array with objects
			for(var i = 0, iLen = keys.length; i < iLen; i++) {
				sortedArray.push(unsortedObjectHash[keys[i]]);
			}

			return sortedArray;
		};

		this.setCustomAttr = function(customAttr) {
			if(customAttr) {
				for(attr in customAttr) {
					if(customAttr.hasOwnProperty(attr)) {
						customAttrs[attr] = customAttr[attr];
					}
				}
			}
		};
		
		this.getCustomAttr = function(customAttr) {
			if(typeof customAttr == "string") {
				return customAttrs[customAttr];
			}
		}
		
		this.getValue = function() {
			return value;
		};
		
		this.setValue = function(val) {
			value = val;
		}
	};
})();