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
				node1.addEdge(node2);
				node2.addEdge(node1);
				
				return true;
			} else {
				return false;
			}
		};
		
		this.print = function() {
			var stringRepresentation = "";
			
			for(var i = 0, iLen = edgeNodes.length; i < iLen; i++) {
				var currentNode = edgeNodes[i];
				
				stringRepresentation += currentNode.getValue() + ": " + currentNode.getEdges() + "\n";
			}
			
			return stringRepresentation;
		};
	};
})();

SCG.Library.GraphNode = (function() {
	//shared private variables
	
	return function(initialValue) {
		var edges = [];
		var value = initialValue;
		
		this.addEdge = function(newNode) {
			edges.push(newNode);
		};
		
		this.getEdges = function() {
			var stringRepresentation = "";
			
			for(var i = 0, iLen = edges.length; i < iLen; i++) {
				var currentEdge = edges[i];
				
				stringRepresentation += currentEdge.getValue() + " ";
			}
			
			//If the last charecter on the string is a space. Delete it.
			if(stringRepresentation[stringRepresentation.length-1] == " ") {
				stringRepresentation = stringRepresentation.slice(0, stringRepresentation.length - 1);
			}
			
			return stringRepresentation;
			
		};
		
		this.getValue = function() {
			return value;
		};
	};
})();