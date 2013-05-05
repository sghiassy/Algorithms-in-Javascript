describe("Stack", function() {
	var stack; 
	
	beforeEach(function() {
		stack = new SCG.Library.Stack();
	});

	it("should be undefined on instantiation", function() {
		expect(stack.pop()).toEqual(undefined);
		expect(stack.pop()).toEqual(undefined);
		expect(stack.pop()).toEqual(undefined);
		expect(stack.pop()).toEqual(undefined);
	});
	
	it("should be able to take a value on instantiation", function() {
		stack = new SCG.Library.Stack({value:654});
		expect(stack.pop()).toEqual(654);
	});
	
	it("should reject a value on instantiation if it is not an object", function() {
		stack = new SCG.Library.Stack(654);
		expect(stack.pop()).toEqual(undefined);
	});

	it("should be able to hold an array of values", function() {
		stack.push(1);
		stack.push(2);
		stack.push(3);
		stack.push(4);
		stack.push(5);

		expect(stack.print()).toEqual("1 2 3 4 5");
	});
	
	it("should pop back the last inserted value", function() {
		stack.push(1);
		stack.push(2);
		stack.push(3);
		stack.push(4);
		stack.push(5);

		expect(stack.pop()).toEqual(5);
	});

	it("should be able to be popped beyond its length", function() {
		stack.push(1);
		stack.push(2);
		stack.push(3);
		stack.push(4);
		stack.push(5);

		expect(stack.pop()).toEqual(5);
		expect(stack.pop()).toEqual(4);
		expect(stack.pop()).toEqual(3);
		expect(stack.pop()).toEqual(2);
		expect(stack.pop()).toEqual(1);
		expect(stack.pop()).toEqual(undefined);
		expect(stack.pop()).toEqual(undefined);
		expect(stack.pop()).toEqual(undefined);
		
		stack.push(1);
		stack.push(2);
		stack.push(3);
		stack.push(4);
		stack.push(5);

		expect(stack.pop()).toEqual(5);
		expect(stack.pop()).toEqual(4);
		expect(stack.pop()).toEqual(3);
		expect(stack.pop()).toEqual(2);
		expect(stack.pop()).toEqual(1);
		expect(stack.pop()).toEqual(undefined);
		expect(stack.pop()).toEqual(undefined);
		expect(stack.pop()).toEqual(undefined);
	});
	
	it("it can do math expessions: 5 * (((9 + 8) * (4 * 6)) + 7) = 2075", function() {
		stack.push(5);
		stack.push(9);
		stack.push(8);
		stack.push(stack.pop() + stack.pop());
		stack.push(4);
		stack.push(6);
		stack.push(stack.pop() * stack.pop());
		stack.push(stack.pop() * stack.pop());
		stack.push(7);
		stack.push(stack.pop() + stack.pop());
		stack.push(stack.pop() * stack.pop());
		expect(stack.pop()).toEqual(2075);
	});
});