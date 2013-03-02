describe("Singularly-Linked Circular LinkedList", function() {
	beforeEach(function() {
		window.linkedList = new SCG.Library.SinglyLinkedCircularLinkedList();
	});
	
	it("it should be instantiable", function () {
		expect(linkedList).toBeTruthy();
	});
	
	it("it should hold values", function() {
		linkedList.push(1);
		linkedList.push(2);
		linkedList.push(3);
		
		expect(linkedList.print()).toEqual("1 2 3");
	});
	
	it("it should be able to pop values", function() {
		linkedList.push(1);
		linkedList.push(2);
		linkedList.push(3);
		linkedList.push(4);
		linkedList.push(5);
		linkedList.pop();

		expect(linkedList.print()).toEqual("1 2 3 4");
	});
	
	it("it should be able to be popped beyond its limit", function() {
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

	it("it should be able to rotate values around the list", function() {
		linkedList.push(1);
		linkedList.push(2);
		linkedList.push(3);
		
		expect(linkedList.print()).toEqual("1 2 3");
		expect(linkedList.getPointer().getValue()).toEqual(1);
		expect(linkedList.next()).toEqual(2);
		expect(linkedList.next()).toEqual(3);
		expect(linkedList.next()).toEqual(1);
		expect(linkedList.next()).toEqual(2);
		expect(linkedList.next()).toEqual(3);
		expect(linkedList.next()).toEqual(1);
	});
	
	it("it should be able to have its POINTER reset to HEAD", function() {
		linkedList.push(1);
		linkedList.push(2);
		linkedList.push(3);
		
		expect(linkedList.print()).toEqual("1 2 3");
		expect(linkedList.getPointer().getValue()).toEqual(1);
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
	
	it("it shouldn't fail when its of size 0", function() {
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
	
	it("it should push a new value right behind HEAD", function() {
		linkedList.push(5);
		linkedList.push(4);
		linkedList.push(8);
		linkedList.push(7);
		linkedList.push(10);
		linkedList.push(1);
		
		expect(linkedList.print()).toEqual("5 4 8 7 10 1");
	});
	
	it("it should pop a node from right behind HEAD", function() {
		linkedList.push(5);
		linkedList.push(4);
		linkedList.push(8);
		linkedList.push(7);
		linkedList.push(10);
		linkedList.push(1);
		linkedList.pop();
		
		expect(linkedList.print()).toEqual("5 4 8 7 10");
	});
});