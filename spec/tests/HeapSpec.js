describe("Heap", function() {
	beforeEach(function() {
		heap = new SCG.Library.Heap();
	});
	
	it("Should be able to be instantiated", function() {
		expect(heap).toBeTruthy();
	});
	
	it("Should be able to hold a value", function() {
		heap.addElement(3);
		expect(heap.printHeap()).toEqual("3");
	});
	
	it("Should be able to print itself", function() {
		heap.addElement(9);
		heap.addElement(3);
		heap.addElement(2);
		
		expect(heap.printHeap()).toEqual("9, 3, 2");
	});
	
	it("It should always have parent nodes be greater than child nodes", function() {
		heap.addElement(81);
		heap.addElement(62);
		heap.addElement(78);
		heap.addElement(67);

		expect(heap.printHeap()).toEqual("81, 67, 78, 62");
	});
	
	it("Should be able to pop off its top most element", function() {
		heap.addElement(81);
		heap.addElement(62);
		heap.addElement(78);
		heap.addElement(67);

		expect(heap.printHeap()).toEqual("81, 67, 78, 62");
		
		expect(heap.pop()).toEqual(81);
		expect(heap.printHeap()).toEqual("78, 67, 62");
	});
});