//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}


SCG.Library.Queue = (function() {

	//shared private variable

	return function(initSettings) {
		if(initSettings != undefined) {
			var HEAD = initSettings.value || undefined;
		} else {
			var HEAD = undefined;
		}
		
		
		this.enqueue = function(value) {
			if(HEAD == undefined) {
				HEAD = new SCG.Library.SinglyLinkedNode({value:value});
			} else {
				var newNode = new SCG.Library.SinglyLinkedNode({value:value,nextNode:HEAD});
				HEAD = newNode;
			}
		};
		
		this.dequeue = function() {
			if(HEAD == undefined) {
				return undefined;
			} else if(HEAD.getNextNode() == undefined) {
				var returnValue = HEAD.getValue();
				HEAD = undefined;
				return returnValue;
			} else {
				var curPointer = HEAD.getNextNode();
				var prevPointer = HEAD;
				
				while(curPointer.getNextNode() != undefined) {
					curPointer = curPointer.getNextNode();
					prevPointer = prevPointer.getNextNode();
				}
				
				var returnValue = curPointer.getValue();
				prevPointer.setNextNode(undefined);
				return returnValue;
			}
		};
		
		this.print = function() {
			var curPointer = HEAD;
			var printString = "";
			
			while(curPointer != undefined) {
				printString += curPointer.getValue() + " ";
				curPointer = curPointer.getNextNode();
			}
			
			//If the last charecter on the string is a space. Delete it.
			if(printString[printString.length-1] == " ") {
				printString = printString.slice(0, printString.length - 1);
			}
				
			return printString;
		};
		
		this.isEmpty = function() {
			if(HEAD == undefined) {
				return true;
			} else {
				return false;
			}
		};
	};
})();