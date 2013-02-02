describe("LinkedNode", function() {
	var linkedNode = new SCG.Library.SingularyLinkedNode();
	
	it("should be instantiable", function() {
		expect(linkedNode).toBeTruthy();
	});
	
	it("should be set to undefined on instantiation", function() {
		expect(linkedNode.getValue()).toEqual(undefined);
	})
});

describe("Singularly-Linked Circular LinkedList", function() {
	beforeEach(function() {
		window.linkedList = new SCG.Library.SingularyLinkedCircularLinkedList();
	});
	
	it("A Singularly-Linked, Circular Linked List should be instantiable", function () {
		expect(linkedList).toBeTruthy();
	});
	
	it("A Singularly-Linked, Circular Linked List should hold values", function() {
		linkedList.push(1);
		linkedList.push(2);
		linkedList.push(3);
		
		expect(linkedList.print()).toEqual("1 2 3");
	});
	
	it("A Singularly-Linked, Circular Linked List should be able to pop values", function() {
		linkedList.push(1);
		linkedList.push(2);
		linkedList.push(3);
		linkedList.push(4);
		linkedList.push(5);
		linkedList.pop();

		expect(linkedList.print()).toEqual("1 2 3 4");
	});
	
	it("A Singularly-Linked, Circular LinkedList should be able to be popped beyond its limit", function() {
		linkedList.push(1);
		linkedList.push(2);
		linkedList.push(3);
		
		expect(linkedList.print()).toEqual("1 2 3");
		expect(linkedList.pop()).toEqual(3);
		expect(linkedList.print()).toEqual("1 2");
		expect(linkedList.pop()).toEqual(2);
		expect(linkedList.print()).toEqual("1");
		expect(linkedList.pop()).toEqual(1);
		expect(linkedList.print()).toEqual(undefined);
		expect(linkedList.pop()).toEqual(undefined);
		expect(linkedList.print()).toEqual(undefined);
		expect(linkedList.pop()).toEqual(undefined);
		expect(linkedList.print()).toEqual(undefined);
		
		linkedList.push(1);
		linkedList.push(2);
		linkedList.push(3);
		
		expect(linkedList.print()).toEqual("1 2 3");
		expect(linkedList.pop()).toEqual(3);
		expect(linkedList.print()).toEqual("1 2");
		expect(linkedList.pop()).toEqual(2);
		expect(linkedList.print()).toEqual("1");
		expect(linkedList.pop()).toEqual(1);
		expect(linkedList.print()).toEqual(undefined);
		expect(linkedList.pop()).toEqual(undefined);
		expect(linkedList.print()).toEqual(undefined);
		expect(linkedList.pop()).toEqual(undefined);
		expect(linkedList.print()).toEqual(undefined);
	});

	it("A Singularly-Linked, Circual LinkedList should be able to rotate values around the list", function() {
		linkedList.push(1);
		linkedList.push(2);
		linkedList.push(3);
		
		expect(linkedList.print()).toEqual("1 2 3");
		expect(linkedList.getPointer()).toEqual(1);
		expect(linkedList.next()).toEqual(2);
		expect(linkedList.next()).toEqual(3);
		expect(linkedList.next()).toEqual(1);
		expect(linkedList.next()).toEqual(2);
		expect(linkedList.next()).toEqual(3);
		expect(linkedList.next()).toEqual(1);
	});
	
	it("A Singularly-Linked, Circual LinkedList should be able to have its POINTER reset to HEAD", function() {
		linkedList.push(1);
		linkedList.push(2);
		linkedList.push(3);
		
		expect(linkedList.print()).toEqual("1 2 3");
		expect(linkedList.getPointer()).toEqual(1);
		expect(linkedList.next()).toEqual(2);
		expect(linkedList.next()).toEqual(3);
		expect(linkedList.next()).toEqual(1);
		expect(linkedList.next()).toEqual(2);
		linkedList.resetPointer();
		expect(linkedList.next()).toEqual(2);
		expect(linkedList.next()).toEqual(3);
		linkedList.resetPointer();
		expect(linkedList.next()).toEqual(2);
		expect(linkedList.next()).toEqual(3);
		linkedList.resetPointer();
		expect(linkedList.next()).toEqual(2);
		expect(linkedList.next()).toEqual(3);
	});
	
	it("A Singularly-Linked, Circual LinkedList shouldn't fail when its of size 0", function() {
		expect(linkedList.next()).toEqual(undefined);
		expect(linkedList.next()).toEqual(undefined);
		expect(linkedList.next()).toEqual(undefined);

		linkedList.push(1);

		expect(linkedList.next()).toEqual(1);
		expect(linkedList.next()).toEqual(1);
		expect(linkedList.next()).toEqual(1);

		linkedList.push(2);

		linkedList.resetPointer();
		expect(linkedList.next()).toEqual(2);
		expect(linkedList.next()).toEqual(1);
		expect(linkedList.next()).toEqual(2);

		expect(linkedList.pop()).toEqual(2);

		expect(linkedList.next()).toEqual(1);
		expect(linkedList.next()).toEqual(1);
		expect(linkedList.next()).toEqual(1);
		
		expect(linkedList.pop()).toEqual(1);
		
		expect(linkedList.next()).toEqual(undefined);
		expect(linkedList.next()).toEqual(undefined);
		expect(linkedList.next()).toEqual(undefined);
		
		expect(linkedList.pop()).toEqual(undefined);
		
		expect(linkedList.next()).toEqual(undefined);
		expect(linkedList.next()).toEqual(undefined);
		expect(linkedList.next()).toEqual(undefined);
	});
});