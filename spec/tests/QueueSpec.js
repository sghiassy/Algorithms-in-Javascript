describe("Queue", function() {
	beforeEach(function() {
		window.queue = new SCG.Library.Queue();
	});
	
	it("should be instantiable", function() {
		expect(queue).toBeTruthy();
	});
	
	it("should be be empty on instantiation", function() {
		expect(queue.isEmpty()).toEqual(true);
	});
	
	it("should be able to take a value on instantiation", function() {
		window.queue = new SCG.Library.Queue({value:456});
		expect(queue.isEmpty()).toEqual(false);
		expect(queue.dequeue()).toEqual(456);
	});
	
	it("should be able to hold a value", function() {
		queue.enqueue(5);
		expect(queue.print()).toEqual("5");
	});
	
	it("should be able to pop the oldest entered value", function() {
		queue.enqueue(5);
		queue.enqueue(3);
		queue.enqueue(2);
		queue.enqueue(1);
		expect(queue.dequeue()).toEqual(5);
	});
	
	it("should dequeue items in first in first out order", function() {
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
		queue.enqueue(4);
		queue.enqueue(5);
		expect(queue.dequeue()).toEqual(1);
		expect(queue.dequeue()).toEqual(2);
		expect(queue.dequeue()).toEqual(3);
		expect(queue.dequeue()).toEqual(4);
		expect(queue.dequeue()).toEqual(5);
	});
	
	it("should be able to pop the oldest entered value, even when the value was given during instantiation", function() {
		window.queue = new SCG.Library.Queue({value:5});
		queue.enqueue(3);
		queue.enqueue(2);
		queue.enqueue(1);
		expect(queue.dequeue()).toEqual(5);
		
		window.queue = new SCG.Library.Queue({value:75});
		expect(queue.dequeue()).toEqual(75);
	});
	
	it("should be able to pop pop past its limit without breaking", function() {
		queue.enqueue(5);
		queue.enqueue(3);
		queue.enqueue(2);
		expect(queue.isEmpty()).toEqual(false);
		queue.enqueue(1);
		expect(queue.dequeue()).toEqual(5);
		expect(queue.dequeue()).toEqual(3);
		expect(queue.dequeue()).toEqual(2);
		expect(queue.dequeue()).toEqual(1);
		expect(queue.dequeue()).toEqual(undefined);
		expect(queue.dequeue()).toEqual(undefined);
		expect(queue.isEmpty()).toEqual(true);
	});
	
	it("should be able to pop pop past its limit without breaking and start over again without a hitch", function() {
		queue.enqueue(5);
		queue.enqueue(3);
		queue.enqueue(2);
		expect(queue.isEmpty()).toEqual(false);
		queue.enqueue(1);
		expect(queue.dequeue()).toEqual(5);
		expect(queue.dequeue()).toEqual(3);
		expect(queue.dequeue()).toEqual(2);
		expect(queue.dequeue()).toEqual(1);
		expect(queue.dequeue()).toEqual(undefined);
		expect(queue.dequeue()).toEqual(undefined);
		expect(queue.isEmpty()).toEqual(true);
		
		queue.enqueue(5);
		queue.enqueue(3);
		queue.enqueue(2);
		queue.enqueue(1);
		expect(queue.isEmpty()).toEqual(false);
		expect(queue.dequeue()).toEqual(5);
		expect(queue.dequeue()).toEqual(3);
		expect(queue.dequeue()).toEqual(2);
		expect(queue.dequeue()).toEqual(1);
		expect(queue.dequeue()).toEqual(undefined);
		expect(queue.dequeue()).toEqual(undefined);
		expect(queue.isEmpty()).toEqual(true);
	});
	
	it("should be able to print itself with no values", function() {
		expect(queue.print()).toEqual("");
	});
	
	it("should be able to print itself with 1 value", function() {
		queue.enqueue(5);
		expect(queue.print()).toEqual("5");
	});
	
	it("should be able to print itself with multiple values", function() {
		queue.enqueue(5);
		queue.enqueue(3);
		queue.enqueue(2);
		queue.enqueue(1);
		
		expect(queue.print()).toEqual("1 2 3 5");
	});
});