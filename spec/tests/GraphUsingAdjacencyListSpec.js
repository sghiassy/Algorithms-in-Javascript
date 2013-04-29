describe("Graph using Adjacency List", function() {
	beforeEach(function() {
		window.graph = new SCG.Library.Graph();
	});
	
	it("should be instantiable", function() {
		expect(graph).toBeTruthy();
	});
	
	it("should be able to hold a verticy", function() {
		graph.addNode(1);
		expect(graph.print()).toEqual("1: \n");
	});
	
	it("should be able to to connect two nodes together", function() {
		graph.addNode(1);
		graph.addNode(2);
		graph.connect(1, 2);
		expect(graph.print()).toEqual("1: 2\n2: 1\n");
	});
	
	it("should be able to connect three nodes together", function() {
		graph.addNode(1);
		graph.addNode(2);
		graph.connect(1, 2);
		graph.addNode(5);
		graph.connect(1,5);
		graph.connect(2,5);
		expect(graph.print()).toEqual("1: 2 5\n2: 1 5\n5: 1 2\n");
		console.log(graph.print());
	});
	
	it("should be able to connect four nodes together", function() {
		graph.addNode(1);
		graph.addNode(2);
		graph.connect(1, 2);
		graph.addNode(5);
		graph.connect(1,5);
		graph.connect(2,5);
		graph.addNode(4);
		graph.connect(4, 5);
		graph.connect(2, 4);
		expect(graph.print()).toEqual("1: 2 5\n2: 1 5 4\n5: 1 2 4\n4: 5 2\n");
	});
	
	it("should be able to model Figure 5.4 in DataStructures Book", function() {
		graph.addNode(1);
		graph.addNode(2);
		graph.connect(1, 2);
		graph.addNode(5);
		graph.connect(1,5);
		graph.connect(2,5);
		graph.addNode(4);
		graph.connect(4, 5);
		graph.connect(2, 4);
		graph.addNode(3);
		graph.connect(3, 2);
		graph.connect(3, 4);
		expect(graph.print()).toEqual("1: 2 5\n2: 1 5 4 3\n5: 1 2 4\n4: 5 2 3\n3: 2 4\n");
	});
});