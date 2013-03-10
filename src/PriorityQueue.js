//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}

SCG.Library.PriorityQueue = (function() {
	
	//shared private variables
	
	return function() {
		var heap = [];
		
		var heapifyUp = function(node) {
			var parentNode = parent(node);
			
			while(heap[parentNode] < heap[node]) {
				//swap the two nodes
				var temp = heap[parentNode];
				heap[parentNode] = heap[node];
				heap[node] = temp;
				
				node = parentNode;
				parentNode = parent(parentNode);
			}
		};
		
		var heapifyDown = function() {
			var parentNode = 0;
			var leftChild = left(parentNode);
			var rightChild = right(parentNode);

			while(heap[parentNode] < heap[leftChild] || heap[parentNode] < heap[rightChild]) {
				if(heap[leftChild] >= heap[rightChild] || heap[rightChild] == undefined) {
					swap(parentNode, leftChild);
					parentNode = leftChild;
				} else {
					swap(parentNode, rightChild);
					parentNode = rightChild;
				}

				leftChild = left(parentNode);
				rightChild = right(parentNode);
			}
		};
		
		var parent = function(node) {
			return Math.floor((node-1) / 2);
		};
		
		var left = function(node) {
			return node * 2 + 1;
		};
		
		var right = function(node) {
			return node * 2 + 2;
		};
		
		var swap = function(node1, node2) {
			var temp = heap[node1];
			heap[node1] = heap[node2];
			heap[node2] = temp;
		};
		
		this.push = function(value) {
			heap.push(value);
			heapifyUp(heap.length -1);
		};
		
		this.pop = function() {
			var highestPriority = heap[0];

			if(heap.length <= 1) {
				heap.pop();
			} else {
				heap[0] = heap.pop();
				heapifyDown();
			}

			return highestPriority;
		};
		
		this.print = function() {
			console.log(heap);
		};
		
		this.exposeHeap = function() {
			return heap;
		};
		
		this.setHeap = function(array) {
			heap = array;
		}
	};
})();