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
		expect(graph.print()).toEqual("1: 2 5\n2: 1 4 5\n5: 1 2 4\n4: 2 5\n");
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
		expect(graph.print()).toEqual("1: 2 5\n2: 1 3 4 5\n5: 1 2 4\n4: 2 3 5\n3: 2 4\n");
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

		expect(graph.bfs()).toEqual("A B D G E F C H");
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
		graph.addNode('S');
		
		graph.connect('A', 'B');
		graph.connect('A', 'S');
		
		graph.connect('S', 'C');
		graph.connect('S', 'G');
		
		graph.connect('G', 'H');
		graph.connect('G', 'F');
		
		graph.connect('H', 'E');
		
		graph.connect('E', 'C');
		
		graph.connect('C', 'F');
		graph.connect('C', 'D');

		expect(graph.print()).toEqual("A: B S\nB: A\nC: D E F S\nD: C\nE: C H\nF: C G\nG: F H S\nH: E G\nS: A C G\n");

		expect(graph.bfs()).toEqual("A B S C G D E F H");
	});
	
	
	it("should be able to return a breadth-first-search representation of the graph when an initial node is supplied", function() {
		graph.addNode('A');
		graph.addNode('B');
		graph.addNode('C');
		graph.addNode('D');
		graph.addNode('E');
		graph.addNode('F');
		graph.addNode('G');
		graph.addNode('H');

		graph.connect('E', 'B');
		graph.connect('E', 'C');
		graph.connect('E', 'G');
		
		graph.connect('B', 'A');
		
		graph.connect('C', 'A');
		graph.connect('C', 'D');
		
		graph.connect('G', 'D');
		
		graph.connect('A', 'F');
		
		graph.connect('F', 'H');

		expect(graph.print()).toEqual("A: B C F\nB: A E\nC: A D E\nD: C G\nE: B C G\nF: A H\nG: D E\nH: F\n");

		expect(graph.bfs('E')).toEqual("E B C G A D F H");
	});
	
	it("should be able to find the shortest path through a maze", function() {
		//http://lnk.ghiassy.com/13VbO7w

		graph.addNode('A');
		graph.addNode('B');
		graph.addNode('C');
		graph.addNode('D');
		graph.addNode('E');
		graph.addNode('F');
		graph.addNode('G');
		graph.addNode('H');
		graph.addNode('I');
		graph.addNode('J');
		graph.addNode('K');
		graph.addNode('L');
		graph.addNode('M');
		graph.addNode('N');
		graph.addNode('O');
		graph.addNode('P');
		graph.addNode('Q');
		graph.addNode('R');
		graph.addNode('S');
		graph.addNode('T');
		graph.addNode('U');
		graph.addNode('V');
		graph.addNode('W');
		graph.addNode('X');
		graph.addNode('Y');
		
		graph.connect('A', 'B');
		graph.connect('B', 'G');
		graph.connect('B', 'C');
		graph.connect('C', 'H');
		graph.connect('C', 'D');
		graph.connect('D', 'E');
		graph.connect('E', 'J');
		graph.connect('F', 'K');
		graph.connect('F', 'G');
		graph.connect('H', 'M');
		graph.connect('H', 'I');
		graph.connect('I', 'N');
		graph.connect('J', 'O');
		graph.connect('K', 'P');
		graph.connect('L', 'M');
		graph.connect('N', 'S');
		graph.connect('O', 'T');
		graph.connect('P', 'U');
		graph.connect('P', 'Q');
		graph.connect('Q', 'R');
		graph.connect('R', 'S');
		graph.connect('U', 'V');
		graph.connect('V', 'W');
		graph.connect('X', 'S');
		graph.connect('X', 'Y');
		
		expect(graph.print()).toEqual("A: B\nB: A C G\nC: B D H\nD: C E\nE: D J\nF: G K\nG: B F\nH: C I M\nI: H N\nJ: E O\nK: F P\nL: M\nM: H L\nN: I S\nO: J T\nP: K Q U\nQ: P R\nR: Q S\nS: N R X\nT: O\nU: P V\nV: U W\nW: V\nX: S Y\nY: X\n");
	});
	
	it("should be able to return a depth-first-search representation of the graph", function() {
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

		expect(graph.dfs()).toEqual("A B E G F C H D");
	});
	
	it("should be able to return a depth-first-search representation of the graph", function() {
		graph.addNode('A');
		graph.addNode('B');
		graph.addNode('C');
		graph.addNode('D');
		graph.addNode('E');
		graph.addNode('F');
		graph.addNode('G');
		graph.addNode('H');
		graph.addNode('S');
		
		graph.connect('A', 'B');
		graph.connect('A', 'S');
		
		graph.connect('S', 'C');
		graph.connect('S', 'G');
		
		graph.connect('G', 'H');
		graph.connect('G', 'F');
		
		graph.connect('H', 'E');
		
		graph.connect('E', 'C');
		
		graph.connect('C', 'F');
		graph.connect('C', 'D');

		expect(graph.print()).toEqual("A: B S\nB: A\nC: D E F S\nD: C\nE: C H\nF: C G\nG: F H S\nH: E G\nS: A C G\n");

		expect(graph.dfs()).toEqual("A B S C D E H G F");
	});
});