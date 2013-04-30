describe("Graph Node", function() {
	beforeEach(function() {
		window.node = new SCG.Library.GraphNode();
	});
	
	it("should be instantiable", function() {
		expect(node).toBeTruthy();
	});
	
	it("should be able to hold a value, when given the value on instantiation", function() {
		window.node = new SCG.Library.GraphNode(5);
		expect(node.getValue()).toEqual(5);
	});
	
	it("should be able to hold a value, when set after instantiation", function() {
		node.setValue(53);
		expect(node.getValue()).toEqual(53);
	});
	
	it("should be able to attach custom attributes", function() {
		node.setValue("shaheen");
		expect(node.getValue()).toEqual("shaheen");
		
		node.setCustomAttr({favoriteMovie:"Amadeus"});
		expect(node.getCustomAttr('favoriteMovie')).toEqual("Amadeus");
	});
});

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
	
	it("should be able to return a breadth-first-search representation of the graph", function() {
		graph.addNode('A');
		graph.addNode('B');
		graph.addNode('C');
		graph.addNode('D');
		graph.addNode('E');
		graph.addNode('F');
		graph.addNode('G');
		graph.addNode('H');
		
		graph.connect('A', 'B');
		graph.connect('A', 'D');
		graph.connect('A', 'G');
		
		graph.connect('B', 'E');
		graph.connect('B', 'F');
		
		graph.connect('C', 'F');
		graph.connect('C', 'H');
		
		graph.connect('D', 'F');
		
		graph.connect('E', 'G');
		
		expect(graph.print()).toEqual("A: B D G\nB: A E F\nC: F H\nD: A F\nE: B G\nF: B C D\nG: A E\nH: C\n");
		
		//Still working on this
		//expect(graph.bfs()).toEqual("A B D G E G C H");
	});
});