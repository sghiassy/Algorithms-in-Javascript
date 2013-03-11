//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}


SCG.Library.BinarySearchTree = (function() {

	//shared private variable

	return function() {
		var HEAD = undefined;
		
		var insertNode = function(node, value) {
			var leftChild = node.getLeftNode();
			var rightChild = node.getRightNode();
			
			if(value <= node.getValue() && leftChild != undefined) {
				insertNode(leftChild, value);
			} else if (value <= node.getValue() && leftChild == undefined) {
				var newNode = new SCG.Library.SinglyLinkedBinaryNode({value:value});
				node.setLeftNode(newNode);
			} else if (value > node.getValue() && rightChild != undefined) {
				insertNode(rightChild, value);
			} else if (value > node.getValue() && rightChild == undefined) {
				var newNode = new SCG.Library.SinglyLinkedBinaryNode({value:value});
				node.setRightNode(newNode);
			} else {
				console.log('on no, something wen\'t wrong');
				debugger;
			}
		};

		this.insert = function(value) {
			if(HEAD == undefined) {
				HEAD = new SCG.Library.SinglyLinkedBinaryNode({value:value});
			} else {
				insertNode(HEAD, value);
			}
		};

		this.printBreadthFirst = function() {
			var curPointer = HEAD;
			var queue = new SCG.Library.Queue();
			var printString = "";

			if(curPointer != undefined) {
				queue.enqueue(curPointer);

				while(!queue.isEmpty()) {
					curPointer = queue.dequeue();

					printString += curPointer.getValue() + " ";

					if(curPointer.getLeftNode() != undefined) {
						queue.enqueue(curPointer.getLeftNode());
					}
					if(curPointer.getRightNode() != undefined) {
						queue.enqueue(curPointer.getRightNode());
					};
				}
			}

			//If the last charecter on the string is a space. Delete it.
			if(printString[printString.length-1] == " ") {
				printString = printString.slice(0, printString.length - 1);
			}

			return printString;
		};

		this.printDepthFirstPreorder = function() {
			
		};

		this.printDepthFirstInorder = function() {
			
		};

		this.printDepthFirstPostorder = function() {
			
		};
	};
})();