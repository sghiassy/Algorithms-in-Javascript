//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}


SCG.Library.BinarySearchTree = (function() {

	//shared private variable

	return function() {
		var HEAD = undefined;
		
		this.insert = function(value) {
			if(HEAD == undefined) {
				HEAD = new SCG.Library.SinglyLinkedNode({value:value});
			}
		};
		
		this.print = function() {
			return HEAD.getValue();
		};
	};
})();