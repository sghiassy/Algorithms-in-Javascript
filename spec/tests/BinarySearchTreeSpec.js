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
		// Tree Illustration: http://lnk.ghiassy.com/1827RkS
		tree.insert(8);
		tree.insert(3);
		tree.insert(10);
		tree.insert(1);
		tree.insert(6);
		tree.insert(14);
		tree.insert(4);
		tree.insert(7);
		tree.insert(13);

		expect(tree.printBreadthFirst()).toEqual("8 3 10 1 6 14 4 7 13");
	});
	
	it("should be able to do a depth first traversal preorder", function() {
		// Tree Illustration: http://lnk.ghiassy.com/1827RkS
		tree.insert(8);
		tree.insert(3);
		tree.insert(10);
		tree.insert(1);
		tree.insert(6);
		tree.insert(14);
		tree.insert(4);
		tree.insert(7);
		tree.insert(13);

		expect(tree.printDepthFirstPreorder()).toEqual("8 3 1 6 4 7 10 14 13");
	});
	
	it("should be able to do a depth first traversal inorder", function() {
		// Tree Illustration: http://lnk.ghiassy.com/1827RkS
		tree.insert(8);
		tree.insert(3);
		tree.insert(10);
		tree.insert(1);
		tree.insert(6);
		tree.insert(14);
		tree.insert(4);
		tree.insert(7);
		tree.insert(13);

		expect(tree.printDepthFirstInorder()).toEqual("1 3 4 6 7 8 10 13 14");
	});
	
	it("should be able to do a depth first traversal postorder", function() {
		// Tree Illustration: http://lnk.ghiassy.com/1827RkS
		tree.insert(8);
		tree.insert(3);
		tree.insert(10);
		tree.insert(1);
		tree.insert(6);
		tree.insert(14);
		tree.insert(4);
		tree.insert(7);
		tree.insert(13);

		//expect(tree.printDepthFirstPostorder()).toEqual("1 4 7 6 3 13 14 10 8");
	});

	it("should be able to find the lowest common denominator", function() {
		// Tree Illustration: http://lnk.ghiassy.com/1827RkS
		tree.insert(8);
		tree.insert(3);
		tree.insert(10);
		tree.insert(1);
		tree.insert(6);
		tree.insert(14);
		tree.insert(4);
		tree.insert(7);
		tree.insert(13);

		expect(tree.lowestCommonDenominator(1, 7)).toEqual(3);
	});
});