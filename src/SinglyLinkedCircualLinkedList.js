//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}

SCG.Library.SinglyLinkedCircularLinkedList = (function() {

	//shared private variables

	return function() {
		var HEAD = undefined;
		var POINTER = undefined;
		
		this.push = function(val) {
			var node = new SCG.Library.SinglyLinkedNode();
			node.setValue(val);
			
			if(HEAD == undefined) {
				HEAD = node;
				POINTER = node;
				node.setNextNode(HEAD);
			} else {
				var curPointer = HEAD;

				while(curPointer.getNextNode() != HEAD) {
					curPointer = curPointer.getNextNode();
				}

				curPointer.setNextNode(node);
				node.setNextNode(HEAD);
			}
		};
		
		this.pop = function() {
			if(HEAD == undefined) {
				return undefined;
			} else if(HEAD.getNextNode() == HEAD) {
				var nodeValue = HEAD.getValue();
				HEAD = undefined;
				POINTER = undefined;
				return nodeValue;
			} else {
				var curPointer = HEAD.getNextNode();
				var trailingPointer = HEAD;

				do {
					curPointer = curPointer.getNextNode();
					trailingPointer = trailingPointer.getNextNode();
				} while(curPointer.getNextNode() != HEAD);

				var nodeValue = curPointer.getValue();
				trailingPointer.setNextNode(HEAD);
				return nodeValue;
			}
		};
		
		this.removeNodeAtPointer = function() {
			if(POINTER == undefined) {
				return undefined;
			} else if (POINTER.getNextNode() == POINTER) {
				var nodeValue = POINTER.getValue();
				HEAD = undefined;
				POINTER = undefined;
				return nodeValue;
			} else {
				var nodeValue = POINTER.getValue();
				var trailingPointer = HEAD;
				
				while(trailingPointer.getNextNode() != POINTER) {
					trailingPointer = trailingPointer.getNextNode();
				}
				
				trailingPointer.setNextNode(POINTER.getNextNode());
				return nodeValue;
			}
		};
		
		this.next = function() {
			if(HEAD == undefined) {
				return undefined;
			} else {
				POINTER = POINTER.getNextNode();
				return POINTER.getValue();
			}
		};
		
		this.getPointer = function() {
			if(POINTER == undefined) {
				return undefined;
			} else {
				return POINTER.getValue();
			}
		};
		
		this.resetPointer = function() {
			POINTER = HEAD;
		};
		
		this.print = function() {
			var curPointer = HEAD;
			
			if(curPointer == undefined) {
				return undefined;
			} else {
				var string = "";
				
				do {
					string += curPointer.getValue() + " ";
					curPointer = curPointer.getNextNode();
				} while(curPointer != HEAD);
				
				//If the last charecter on the string is a space. Delete it.
				if(string[string.length-1] == " ") {
					string = string.slice(0, string.length - 1);
				}
				
				return string;
			}
		};
	};
})();