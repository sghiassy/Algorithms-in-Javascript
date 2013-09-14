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
	});
	
	describe("Depth First Preorder Search", function() {
		it("should iterate over a tree correctly", function() {
			var bst = tree; //alias

			bst.insert(100);
			bst.insert(150);
			bst.insert(125);
			bst.insert(175);
			bst.insert(110);
			bst.insert(50);
			bst.insert(75);
			bst.insert(25);

			expect(bst.printDepthFirstPreorder()).toEqual("100,50,25,75,150,125,110,175");
		});
	});
});