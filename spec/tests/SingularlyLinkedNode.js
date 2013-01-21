describe("SingularlyLinkedNode", function() {
	var linkedNode = new SCG.Library.SingularlyLinkedNode();
	
	it("should be instantiable", function() {
		expect(linkedNode).toBeTruthy();
	});
	
	it("should be set to undefined on instantiation", function() {
		expect(linkedNode.getValue()).toEqual(undefined);
	})
});