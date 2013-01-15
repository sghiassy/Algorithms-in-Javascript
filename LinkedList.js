SCG = {Library:{}} || SCG;

SCG.Library.LinkedList = (function($) {

	//shared private variables

	return function() {
		var HEAD = new SCG.Library.LinkedNode();
		var TAIL = HEAD;

		this.push = function(val) {
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
		
		this.deleteNodeByIndex = function(index) {
			var curPointer = HEAD;
			var prevPointer = HEAD;
			
			for(var i = 0; i <= index; i++) {
				curPointer = curPointer.getNextNode();

				if(curPointer == undefined) {
					break;
				} else if (i != 0) {
					prevPointer = prevPointer.getNextNode();
				}
			}
		};

		this.print = function() {
			var string = "";
			var curPointer = HEAD;
			
			while(curPointer != TAIL) {
				string += curPointer.getValue() + " ";
				curPointer = curPointer.getNextNode();
			}
			
			return string;
		};

		this.getHead = function() {
			return HEAD;
		};

		this.getTail = function() {
			return TAIL;
		}
	};

})(jQuery);


SCG.Library.LinkedNode = (function($) {
	
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
})(jQuery);
