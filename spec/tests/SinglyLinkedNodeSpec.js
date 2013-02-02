describe("Singly Linked Node", function() {
	var linkedNode = new SCG.Library.SinglyLinkedNode();
	
	it("should be instantiable", function() {
		expect(linkedNode).toBeTruthy();
	});
	
	it("should be set to undefined on instantiation", function() {
		expect(linkedNode.getValue()).toEqual(undefined);
	})
	
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