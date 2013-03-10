describe("Priority Queue", function() {
	beforeEach(function() {
		window.queue = new SCG.Library.PriorityQueue();
	});
	
	it("should be instantiable", function() {
		expect(queue).toBeTruthy();
	});
	
	it("should hold a value", function() {
		queue.push(45);
		expect(queue.exposeHeap()).toEqual([45]);
	})
	
	it("should be able to accept an initial array", function() {
		queue.setHeap([45,35,23,27,21,22,4,19,5]);
		expect(queue.exposeHeap()).toEqual([45,35,23,27,21,22,4,19,5]);
	});
	
	it("should properly accept a new value and maintain a complete binary tree", function() {
		queue.setHeap([45,35,23,27,21,22,4,19,5]);
		queue.push(30);
		expect(queue.exposeHeap()).toEqual([45,35,23,27,30,22,4,19,5,21]);
	});
	
	it("should be able to pop off the highest priority node, and be able to maintain a complete binary tree", function() {
		queue.setHeap([45,35,23,27,30,22,4,19,5,21]);
		expect(queue.pop()).toEqual(45);
		expect(queue.exposeHeap()).toEqual([35,30,23,27,21,22,4,19,5]);
		expect(queue.pop()).toEqual(35);
		expect(queue.exposeHeap()).toEqual([30,27,23,19,21,22,4,5]);
		expect(queue.pop()).toEqual(30);
		expect(queue.exposeHeap()).toEqual([27,21,23,19,5,22,4]);
		expect(queue.pop()).toEqual(27);
		expect(queue.exposeHeap()).toEqual([23,21,22,19,5,4]);
		expect(queue.pop()).toEqual(23);
		expect(queue.exposeHeap()).toEqual([22,21,4,19,5]);
		expect(queue.pop()).toEqual(22);
		expect(queue.exposeHeap()).toEqual([21,19,4,5]);
		expect(queue.pop()).toEqual(21);
		expect(queue.exposeHeap()).toEqual([19,5,4]);
		expect(queue.pop()).toEqual(19);
		expect(queue.exposeHeap()).toEqual([5,4]);
		expect(queue.pop()).toEqual(5);
		expect(queue.exposeHeap()).toEqual([4]);
		expect(queue.pop()).toEqual(4);
		expect(queue.exposeHeap()).toEqual([]);

		expect(queue.pop()).toEqual(undefined);
		expect(queue.exposeHeap()).toEqual([]);
		expect(queue.pop()).toEqual(undefined);
		expect(queue.exposeHeap()).toEqual([]);
	})
});