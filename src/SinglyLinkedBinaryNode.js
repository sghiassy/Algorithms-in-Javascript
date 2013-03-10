//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}


SCG.Library.SinglyLinkedBinaryNode = (function() {

	//shared private variable

	return function(initSettings) {

		//Initialize Object
		if(initSettings == undefined) {
			var VALUE = undefined;
			var LEFT_NODE = undefined;
			var RIGHT_NODE = undefined;
		} else {
			var VALUE = initSettings.value || undefined;
			var LEFT_NODE = initSettings.leftNode || undefined;
			var RIGHT_NODE = initSettings.rightNode || undefined;
		}
		
		this.setValue = function(value) {
			VALUE = value;
		};
		
		this.getValue = function() {
			return VALUE;
		};
		
		this.setLeftNode = function(node) {
			LEFT_NODE = node;
		}
		
		this.getLeftNode = function() {
			return LEFT_NODE;
		};
		
		this.setRightNode = function(node) {
			RIGHT_NODE = node;
		};
		
		this.getRightNode = function() {
			return RIGHT_NODE;
		};
	};
})();