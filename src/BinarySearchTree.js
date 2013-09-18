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
			}
		};

		this.insert = function(value) {
			if(HEAD === undefined) {
				HEAD = new SCG.Library.SinglyLinkedBinaryNode({value:value});
			} else {
				insertNode(HEAD, value);
			}
		};

		this.printBreadthFirst = function() {
			var curPointer = HEAD;
			var queue = new SCG.Library.Queue();
			var printString = "";

			if(curPointer !== undefined) {
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

		this.printDepthFirstPreorder = function(node) {
			var printString = "";

			if(node === undefined) {
				printString += this.printDepthFirstPreorder(HEAD);

				if(printString[printString.length-1] === " ") {
					printString = printString.slice(0, -1);
				}
			} else {
				printString += node.getValue() + " ";

				var leftNode = node.getLeftNode();
				var rightNode = node.getRightNode();

				if(leftNode) {
					printString += this.printDepthFirstPreorder(leftNode);
				}

				if(rightNode) {
					printString += this.printDepthFirstPreorder(rightNode);
				}
			}

			return printString;
		};

		this.printDepthFirstInorder = function(node) {
			var printString = "";

			if(node === undefined) {
				printString += this.printDepthFirstInorder(HEAD);

				if(printString[printString.length - 1] === " ") {
					printString = printString.slice(0, -1);
				}
			} else {
				var leftNode = node.getLeftNode();
				var rightNode = node.getRightNode();

				if(leftNode) {
					printString += this.printDepthFirstInorder(leftNode);
				}

				printString += node.getValue() + " ";

				if(rightNode) {
					printString += this.printDepthFirstInorder(rightNode);
				}
			}

			return printString;
		};

		this.printDepthFirstPostorder = function(node) {
			var printString = "";

			if(node === undefined) {
				printString += this.printDepthFirstPostorder(HEAD);
				
				if(printString[printString.length - 1] === " ") {
					printString = printString.slice(0, -1);
				}
			} else {
				var leftNode = node.getLeftNode();
				var rightNode = node.getRightNode();

				if(leftNode) {
					printString += this.printDepthFirstPostorder(leftNode);
				}

				if(rightNode) {
					printString += this.printDepthFirstPostorder(rightNode);
				}

				printString += node.getValue() + " ";
			}

			return printString;
		};

		this.lowestCommonDenominator = function(node1Val, node2Val) {
			var carryOn = true;
			var curPointer = HEAD;

			while(carryOn) {
				var headValue = curPointer.getValue();

				if(headValue > node1Val && headValue > node2Val) {
					curPointer = curPointer.getLeftNode();
				} else if (headValue < node1Val && headValue < node2Val) {
					curPointer = curPointer.getRightNode();
				} else {
					carryOn = false;
					return curPointer.getValue();
				}
			}
		};
	};
})();