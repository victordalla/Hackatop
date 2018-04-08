function setup() {
	// points = [];

	createCanvas(1480,920);
	translate(100,100);
;	background(0);
	noSmooth();


}

function draw() {
	translate(100,100);

	var points = [
		[0,0], [320,0], [640,0], [960,0], [1280,0],
		[0,240], [320,240], [640,240], [960,240], [1280,240],
		[0,480], [320,480], [640,480], [960,480], [1120,480],
		[1120,600], [1280,600],
		[0,720], [320,720], [640,720], [960,720], [1280,720]
	];

	var lines = [
		[1], [2], [3,7], [4], [9],
		[0], [5,1], [12], [7,3], [8,21],
		[5,11], [6,12], [19], [8,14], [9],
		[14], [15,21],
		[10], [11,17], [18], [13,15,19], [20]
	]

	var i;
	stroke(255);
	strokeWeight(20);

	for(i=0; i<points.length; i++) {
		point(points[i][0], points[i][1]);
	}

	strokeWeight(5);

	for(i=0; i<lines.length; i++) {
		for(j=0; j<lines[i].length; j++) {
			line(points[i][0], points[i][1], points[lines[i][j]][0], points[lines[i][j]][1]);
		}
	}
}