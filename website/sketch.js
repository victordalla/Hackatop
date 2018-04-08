function setup() {
	createCanvas(1920, 1080);
	var g = new Graph(6);

	for(var i=0; i < 6; i++){
		g.addVertex(i);
	}
	g.addEdge(1, 2);
	g.addEdge(1, 3);
	g.addEdge(2, 3);
	g.addEdge(3, 4);
	g.addEdge(3, 5);
	g.addEdge(5, 4);

	g.printGraph()

	g.bfs(1)
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}