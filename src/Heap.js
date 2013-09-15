//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}

SCG.Library.Heap = (function() {
	//shared private variables;

	return function() {
		var HEAP = [];

		this.addElement = function(value) {
			if(value) {
				if(HEAP[0] === undefined) {
					HEAP[0] = value;
				} else {
					HEAP.push(value);

					var indexOfNewElement = HEAP.length - 1;
					var indexOfParentElement = Math.floor((indexOfNewElement - 1) / 2);
					var newElement = HEAP[indexOfNewElement];
					var parent = HEAP[indexOfParentElement];

					while(newElement > parent) {
						HEAP[indexOfParentElement] = newElement;
						HEAP[indexOfNewElement] = parent;

						indexOfNewElement = indexOfParentElement;
						indexOfParentElement = Math.floor((indexOfNewElement - 1) / 2);
						newElement = HEAP[indexOfNewElement];
						parent = HEAP[indexOfParentElement];
					}
				}
			} else {
				console.error('Error 1QAZ: You need to provide an input value');
			}
		};

		this.pop = function() {
			var head = HEAP[0];
			
			HEAP[0] = HEAP.pop(); // Take out the last element and put it at the root of the heap
			
			var indexOfNewElement = 0;
			var indexOfChildElement = (2 * indexOfNewElement) + 2;
			var newElement = HEAP[indexOfNewElement];
			var childElement = HEAP[indexOfChildElement];
			
			while(newElement < childElement) {
				HEAP[indexOfNewElement] = childElement;
				HEAP[indexOfChildElement] = newElement;
				
				indexOfNewElement = indexOfChildElement;
				indexOfChildElement = (indexOfChildElement * 2) + 2;
				childElement = HEAP[indexOfChildElement];
			}

			return head;
		};

		this.printHeap = function() {
			return HEAP.join(', ');
		};
	};
})();