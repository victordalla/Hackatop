function setup() {
	createCanvas(1920, 1080);
	var g = new Graph(7);

	for(var i=0; i < 7; i++){
		g.addVertex(i);
	}
	g.addEdge(5, 2, 105);
	g.addEdge(5, 6, 86);
	g.addEdge(2, 0, 713);
	g.addEdge(3, 0, 603);
	g.addEdge(0, 5, 362);
	g.addEdge(0, 1, 479);
	g.addEdge(1, 0, 671);
	g.addEdge(4, 2, 10);
	g.addEdge(0, 4, 976);
	g.addEdge(6, 2, 536);
	g.addEdge(2, 5, 217);

	g.printGraph()

	g.dijkstra(2)
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}