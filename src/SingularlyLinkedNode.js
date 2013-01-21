//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}


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