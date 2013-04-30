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
		this.bfs = function() {
			if(this.isEmpty() == true) {
				return "";
			}

			var i = 0;
			var bfs = "";
			var currentNode = edgeNodes[i];
			currentNode.setCustomAttr({visited:true});
			var queue = new SCG.Library.Queue({value:currentNode});
		
			while(queue.isEmpty() == false) {
				if(i == 100) { break; } //Protection against infinite while loop
				i++;
				
				
				var currentNeighbors = currentNode.getNeighbors();
				var numberQueued = 0;
				
				for(var j = 0, jLen = currentNeighbors.length; j < jLen; j++) {
					var currentNeighbor = currentNeighbors[j];
					
					if(currentNeighbor.getCustomAttr('visited') != true) {
						queue.enqueue(currentNeighbor);
						numberQueued++;
					}
				}
				
				var currentNode = queue.dequeue();
				bfs += currentNode.getValue();
			}
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

			for(var i = 0, iLen = neighbors.length; i < iLen; i++) {
				var currentNeighbor = neighbors[i];

				stringRepresentation += currentNeighbor.getValue() + " ";
			}

			//If the last charecter on the string is a space. Delete it.
			if(stringRepresentation[stringRepresentation.length-1] == " ") {
				stringRepresentation = stringRepresentation.slice(0, stringRepresentation.length - 1);
			}

			return stringRepresentation;
		};
		
		this.getNeighbors = function() {
			return neighbors;
		}
		
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