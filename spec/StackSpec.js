describe("StackNode", function() {
	var stackNode = new SCG.Library.StackNode();

	it("should be instantiable", function() {
		expect(stackNode).toBeTruthy();
	});

	it("should be set to undefined on instantiation", function() {
		expect(stackNode.getValue()).toEqual(undefined);
	});

	it("should be able to hold a value", function() {
		stackNode.setValue(4);
		expect(stackNode.getValue()).toEqual(4);
	});

	it("should be able to be linked to another node", function() {
		var newStackNode = new SCG.Library.StackNode();
		newStackNode.setValue(5);
		stackNode.setNextNode(newStackNode);

		expect(stackNode.getNextNode().getValue()).toEqual(5);
	});
});

describe("Stack", function() {
	beforeEach(function() {
		window.stack = new SCG.Library.Stack();
	});

	it("should be undefined on instantiation", function() {
		expect(stack.pop()).toEqual(undefined);
		expect(stack.pop()).toEqual(undefined);
		expect(stack.pop()).toEqual(undefined);
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
});