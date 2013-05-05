//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}

SCG.Library.Stack = (function() {

	//shared private variable

	return function(initialValue) {
		var HEAD = undefined;

		this.push = function(val) {
			if(HEAD == undefined) {
				HEAD = new SCG.Library.SinglyLinkedNode({value:val});
			} else {
				var curPointer = HEAD;
				var node = new SCG.Library.SinglyLinkedNode({value:val});
				
				while(curPointer.getNextNode() != undefined) {
					curPointer = curPointer.getNextNode();
				}
				
				curPointer.setNextNode(node);
			}
		};
		
		this.pop = function() {
			if(HEAD == undefined) { //Stack size of 0
				return undefined;
			} else if(HEAD.getNextNode() == undefined) { //Stack size of 1
				var nodeValue = HEAD.getValue();
				HEAD = undefined;
				return nodeValue;
			} else { //Stack Size of 1+
				var trailingPointer = HEAD;
				var curPointer = HEAD.getNextNode();
				var nodeValue = undefined;
				
				while(curPointer.getNextNode() != undefined) {
					trailingPointer = trailingPointer.getNextNode();
					curPointer = curPointer.getNextNode();
				}

				nodeValue = curPointer.getValue();
				trailingPointer.setNextNode(undefined);

				return nodeValue;
			}
		};
		
		this.print = function() {
			if(HEAD == undefined) {
				return undefined;
			} else {
				var string = "";
				var curPointer = HEAD;

				do {
					string += curPointer.getValue() + " ";
					curPointer = curPointer.getNextNode();
				} while(curPointer != undefined);

				//If the last charecter on the string is a space. Delete it.
				if(string[string.length-1] == " ") {
					string = string.slice(0, string.length - 1);
				}

				return string;
			}
		};

		this.isEmpty = function() {
			if(HEAD == undefined) {
				return true;
			} else {
				return false;
			}
		};

		//Initialization Script
		if(initialValue) {
			if(initialValue.value) {
				this.push(initialValue.value);
			} else {
				console.error('Error 3SXCD: You need to provide an original value wrapped in an object');
				return false;
			}
		}
	};
})();