describe("Binary Search Tree", function() {
	beforeEach(function() {
		window.tree = new SCG.Library.BinarySearchTree();
	});
	
	it("should be instantiable", function() {
		expect(tree).toBeTruthy();
	});
	
	it("should hold a value", function() {
		tree.insert(15);
		expect(tree.printBreadthFirst()).toEqual("15");
	});
	
	it("should always stay true", function() {
		tree.insert(15);
		tree.insert(11);
		tree.insert(20);
		tree.insert(5);
		expect(tree.printBreadthFirst()).toEqual("15 11 20 5");
		debugger;
		console.log(tree.print());
	});
});