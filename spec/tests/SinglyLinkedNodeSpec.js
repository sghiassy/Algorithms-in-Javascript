describe("Singly Linked Node", function() {
	beforeEach(function() {
		window.linkedNode = new SCG.Library.SinglyLinkedNode();
	});
	
	it("should be instantiable", function() {
		expect(linkedNode).toBeTruthy();
	});
	
	it("should be set to undefined on instantiation", function() {
		expect(linkedNode.getValue()).toEqual(undefined);
	})
	
	it("should be able to take in a value on instantion", function() {
		linkedNode = new SCG.Library.SinglyLinkedNode({value:5});
		expect(linkedNode.getValue()).toEqual(5);
		expect(linkedNode.getNextNode()).toEqual(undefined);
	});
	
	it("should reject taking a value on instantiation if it is not an object", function() {
		linkedNode = new SCG.Library.SinglyLinkedNode(5);
		expect(linkedNode.getValue()).toEqual(undefined);
	});
	
	it("should be able to link to another node on instantion", function() {
		nextLinkedNode = new SCG.Library.SinglyLinkedNode({value:10});
		linkedNode = new SCG.Library.SinglyLinkedNode({nextNode: nextLinkedNode});
		expect(linkedNode.getNextNode().getValue()).toEqual(10);
		expect(linkedNode.getValue()).toEqual(undefined);
	});
	
	it("should be able to hold a value", function() {
		linkedNode.setValue(123);
		expect(linkedNode.getValue()).toEqual(123);
	});
	
	it("should be able to link to another node", function() {
		var newNode = new SCG.Library.SinglyLinkedNode();
		newNode.setValue(123456);
		linkedNode.setNextNode(newNode);
		
		expect(linkedNode.getNextNode().getValue()).toEqual(123456);
	});
});