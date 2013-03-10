describe("Binary Search Tree", function() {
	beforeEach(function() {
		window.tree = new SCG.Library.BinarySearchTree();
	});
	
	it("should be instantiable", function() {
		expect(tree).toBeTruthy();
	});
	
	it("should hold a value", function() {
		tree.insert(5);
		expect(tree.print()).toEqual(5);
	});
});