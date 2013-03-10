describe("Queue", function() {
	beforeEach(function() {
		window.queue = new SCG.Library.Queue();
	});
	
	it("should be instantiable", function() {
		expect(queue).toBeTruthy();
	});
	
	it("should be able to hold a value", function() {
		queue.push(5);
		expect(queue.print()).toEqual("5");
	});
	
	it("should be able to pop the oldest entered value", function() {
		queue.push(5);
		queue.push(3);
		queue.push(2);
		queue.push(1);
		expect(queue.pop()).toEqual(5);
	});
	
	it("should be able to pop pop past its limit without breaking", function() {
		queue.push(5);
		queue.push(3);
		queue.push(2);
		queue.push(1);
		expect(queue.pop()).toEqual(5);
		expect(queue.pop()).toEqual(3);
		expect(queue.pop()).toEqual(2);
		expect(queue.pop()).toEqual(1);
		expect(queue.pop()).toEqual(undefined);
		expect(queue.pop()).toEqual(undefined);
	});
	
	it("should be able to pop pop past its limit without breaking and start over again without a hitch", function() {
		queue.push(5);
		queue.push(3);
		queue.push(2);
		queue.push(1);
		expect(queue.pop()).toEqual(5);
		expect(queue.pop()).toEqual(3);
		expect(queue.pop()).toEqual(2);
		expect(queue.pop()).toEqual(1);
		expect(queue.pop()).toEqual(undefined);
		expect(queue.pop()).toEqual(undefined);
		
		queue.push(5);
		queue.push(3);
		queue.push(2);
		queue.push(1);
		expect(queue.pop()).toEqual(5);
		expect(queue.pop()).toEqual(3);
		expect(queue.pop()).toEqual(2);
		expect(queue.pop()).toEqual(1);
		expect(queue.pop()).toEqual(undefined);
		expect(queue.pop()).toEqual(undefined);
	});
	
	it("should be able to print itself with no values", function() {
		expect(queue.print()).toEqual("");
	});
	
	it("should be able to print itself with 1 value", function() {
		queue.push(5);
		expect(queue.print()).toEqual("5");
	});
	
	it("should be able to print itself with multiple values", function() {
		queue.push(5);
		queue.push(3);
		queue.push(2);
		queue.push(1);
		
		expect(queue.print()).toEqual("1 2 3 5");
	});
});