//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}

SCG.Library.Graph = (function() {
	//shared private variables
	
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
			if(this.isEmpty() == true) {
				return "";
			}

			var bfs = "";
			
			if(startNode == undefined) {
				//Setup Queue for the first loop
				var currentNode = edgeNodes[0]; //Get First node to look out
			} else {
				var unsortedObjectHash = {};

				for(var i = 0, iLen = edgeNodes.length; i < iLen; i++) {
					var currentNodeValue = edgeNodes[i].getValue();
					unsortedObjectHash[currentNodeValue] = edgeNodes[i];
				}
				
				var currentNode = unsortedObjectHash[startNode];
			}
			
			currentNode.setCustomAttr({visited:true}); //Make the first node as visited
			var queue = new SCG.Library.Queue({value:currentNode}); //Add the first node to the queue
			bfs += currentNode.getValue() + " "; //
		
			while(queue.isEmpty() == false) {
				console.log('');
				console.log('');
				console.log('');
				currentNode = queue.dequeue();
				console.log('Current Node', currentNode.getValue());

				console.log('Current Neighbors:');
				var currentNeighbors = currentNode.getSortedNeighbors();
				//Log Neighbors
				for(var k = 0, kLen = currentNeighbors.length; k < kLen; k++) {
					console.log(currentNeighbors[k].getValue());
				}
				
				for(var j = 0, jLen = currentNeighbors.length; j < jLen; j++) {
					var currentNeighbor = currentNeighbors[j];
					console.log('Looking at Neighbor', currentNeighbor.getValue());
					
					if(currentNeighbor.getCustomAttr('visited') == true) {
						console.log('This neighbor has been visited. Skipping');
					} else {
						console.log('This neighbor has not been visited. Adding to the queue');
						bfs += currentNeighbor.getValue() + " ";
						currentNeighbor.setCustomAttr({visited:true});
						queue.enqueue(currentNeighbor);
					}
				}

				console.log('Finished looking at Neighbor ', currentNode.getValue());
				console.log('The current bfs string is: ', bfs);
				console.log('The current queue is: ');
				queue.map(function(node){console.log(node.getValue().getValue())});
			}
			
			if(bfs[bfs.length-1] == " ") {
				bfs = bfs.slice(0, bfs.length - 1);
			}
		
			return bfs;
		};
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