SCG = {Library:{}} || SCG;

SCG.Library.LinkedList = (function() {

	//shared private variables

	return function() {
		var HEAD = new SCG.Library.LinkedNode();
		var TAIL = HEAD;

		this.push = function(val) {
			console.log(val);
			
			if(HEAD.getValue() == undefined) {
				HEAD.setValue(val);
				length++;
			} else {
				var prevTail = TAIL;
				TAIL = new SCG.Library.LinkedNode();
				TAIL.setValue(val);
				prevTail.setNextNode(TAIL);
			}
		};

		this.pop = function() {
			if(HEAD == TAIL) {
				return undefined;
			} else {
				var curPointer = HEAD.getNextNode();
				var followingPointer = HEAD;

				while(curPointer.getNextNode() != undefined) {
					curPointer = curPointer.getNextNode();
					followingPointer = followingPointer.getNextNode();
				} 

				if(HEAD.getNextNode() == undefined) {
					if(TAIL == HEAD) {
						HEAD.setValue(undefined);
					} else {
						TAIL = HEAD;
					}
				}

				TAIL = followingPointer;
				TAIL.setNextNode(undefined);
			}
		}

		this.deleteNodeByIndex = function(index) {
			var curPointer = HEAD.getNextNode();
			var prevPointer = HEAD;
			var i = 0;

			while(curPointer != undefined) {
				i++;

				if(i == index) {
					var futurePointer = curPointer.getNextNode();
					prevPointer.setNextNode(futurePointer);
				} else {
					curPointer = curPointer.getNextNode();
					prevPointer = prevPointer.getNextNode();
				}
			}
		};

		this.print = function() {
			var string = String("");
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
		};

		this.getHead = function() {
			return HEAD;
		};

		this.getTail = function() {
			return TAIL;
		};

		this.next = function(curNode) {
			return curNode.getNextNode();
		};
	};

})();


SCG.Library.LinkedNode = (function() {

	//shared private variable

	return function() {
		var value = undefined;
		var nextNode = undefined;

		this.setValue = function(val) {
			value = val;
		};

		this.setNextNode = function(node) {
			nextNode = node;
		};

		this.getNextNode = function() {
			return nextNode;
		}

		this.getValue = function() {
			return value;
		};
	};
})();