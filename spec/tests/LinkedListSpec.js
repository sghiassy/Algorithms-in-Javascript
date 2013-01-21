describe("LinkedNode", function() {
	var linkedNode = new SCG.Library.LinkedNode();
	
	it("should be instantiable", function() {
		expect(linkedNode).toBeTruthy();
	});
	
	it("should be set to undefined on instantiation", function() {
		expect(linkedNode.getValue()).toEqual(undefined);
	})
});

describe("LinkedList", function() {
	beforeEach(function() {
		window.linkedList = new SCG.Library.LinkedList();
	});
	
	it("should be instantiable", function() {
		expect(linkedList).toBeTruthy();
	});
	
	it("should return undefined on instantiation", function() {
		expect(linkedList.getHead().getValue()).toEqual(undefined);
	});
	
	it("shouldn't allow me to pop negativly", function() {
		expect(linkedList.pop()).toEqual(undefined);
		expect(linkedList.pop()).toEqual(undefined);
		expect(linkedList.pop()).toEqual(undefined);
		expect(linkedList.pop()).toEqual(undefined);
	});
	
	it("should let me push a lot, then pop even more and not be a problem", function() {
		expect(linkedList.pop()).toEqual(undefined);
		expect(linkedList.print()).toEqual('undefined');

		linkedList.push(1);
		expect(linkedList.print()).toEqual('1');
		linkedList.push(2);
		expect(linkedList.print()).toEqual('1 2');
		linkedList.push(3);
		expect(linkedList.print()).toEqual('1 2 3');
		linkedList.push(4);
		expect(linkedList.print()).toEqual('1 2 3 4');

		linkedList.pop();
		linkedList.pop();
		linkedList.pop();
		linkedList.pop();
		linkedList.pop();
		linkedList.pop();
		linkedList.pop();
		linkedList.pop();

		expect(linkedList.pop()).toEqual(undefined);
		expect(linkedList.print()).toEqual('undefined');
	});
	
	it("should let me push in an array of 1, 2, 3, 4, 5", function() {
		expect(linkedList.print()).toEqual('undefined');
		linkedList.push(1);
		expect(linkedList.print()).toEqual('1');
		linkedList.push(2);
		expect(linkedList.print()).toEqual('1 2');
		linkedList.push(3);
		expect(linkedList.print()).toEqual('1 2 3');
		linkedList.push(4);
		expect(linkedList.print()).toEqual('1 2 3 4');
		linkedList.push(5);
		expect(linkedList.print()).toEqual('1 2 3 4 5');
	});

	it("should let me remove the ith element. So that 1, 2, 3, 4, 5, remove(3) = 1, 2, 3, 5", function() {
		linkedList.push(1);
		linkedList.push(2);
		linkedList.push(3);
		linkedList.push(4);
		linkedList.push(5);
		expect(linkedList.print()).toEqual('1 2 3 4 5');

		linkedList.remove(3);
		expect(linkedList.print()).toEqual('1 2 3 5');
	});

	it("should let me remove the ith element. So that 1, 2, 3, 4, 5, remove(0) = 2, 3, 4, 5", function() {
		linkedList.push(1);
		linkedList.push(2);
		linkedList.push(3);
		linkedList.push(4);
		linkedList.push(5);

		expect(linkedList.print()).toEqual('1 2 3 4 5');
		linkedList.remove(0);
		expect(linkedList.print()).toEqual('2 3 4 5');
	});
	
	it("should let me remove the 0th element of an uninstantiated linkedList, remove(0) = undefined", function() {
		expect(linkedList.remove(0)).toEqual(true);
		expect(linkedList.print()).toEqual('undefined');
	});
	
	if("should fail gracefully when removing element outside of range. remove(60) on 1 2 3 4 5 does nothing", function() {
		linkedList.push(1);
		linkedList.push(2);
		linkedList.push(3);
		linkedList.push(4);
		linkedList.push(5);
		
		linkedList.remove(60);
		expect(linkedList.print()).toEqual('1 2 3 4 5');
	});
	
	it("should return the last element on pop. So that 1, 2, 3, 4, 5, pop() returns 5 and list is now 1 2 3 4", function() {
		linkedList.push(1);
		linkedList.push(2);
		linkedList.push(3);
		linkedList.push(4);
		linkedList.push(5);

		expect(linkedList.pop()).toEqual(5);
		expect(linkedList.print()).toEqual('1 2 3 4');
	});
	
	it("should properly traverse a Linked List", function() {
		linkedList.push(1);
		linkedList.push(2);
		linkedList.push(3);
		linkedList.push(4);
		linkedList.push(5);
		
		var node = linkedList.getHead();
		expect(node.getValue()).toEqual(1);
		node = node.getNextNode();
		expect(node.getValue()).toEqual(2);
		node = node.getNextNode();
		expect(node.getValue()).toEqual(3);
		node = node.getNextNode();
		expect(node.getValue()).toEqual(4);
		node = node.getNextNode();
		expect(node.getValue()).toEqual(5);
		expect(node.getValue()).toEqual(linkedList.getTail().getValue());
		node = node.getNextNode();
		expect(node).toEqual(undefined);
	});
});