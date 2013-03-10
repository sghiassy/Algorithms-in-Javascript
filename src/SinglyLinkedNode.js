//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}


SCG.Library.SinglyLinkedNode = (function() {

	//shared private variable

	return function(obj) {
		if(obj != undefined) {
			var value = obj.value || undefined;
			var nextNode = obj.nextNode || undefined;
		} else {
			var value = undefined;
			var nextNode = undefined;
		}

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