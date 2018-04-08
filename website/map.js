let linha;

let points = [
	[0,0], 	 [320,0],   [640,0],   [960,0], 			  [1280,0],
	[0,240], [320,240], [640,240], [960,240], 			  [1280,240],
	[0,480], [320,480], [640,480], [960,480], [1120,480],
											  [1120,600], [1280,600],
	[0,720], [320,720], [640,720], [960,720], 			  [1280,720]
];

let lines = [
	[1], [2], [3,7], [4], [9],
	[0], [5,1], [12], [7,3], [8,16],
	[5,11], [6,12], [19], [8,14], [9],
	[14], [15,21],
	[10], [11,17], [18], [13,15,19], [20]
]

let originalpath = [0, 9, 19]
let bus = 0;
let nextp = 0;
let next = 0;
let prev = 0;
let step = 10000;

const dist = (x, y) => Math.sqrt(Math.pow(points[x][0] - points[y][0], 2) + Math.pow(points[x][1] - points[y][1], 2));

function setup() {
	createCanvas(1480,920);
	background(0);
	noSmooth();
	translate(100,100);
	stroke(255);

	let ligacoes = [];
	for(let x = 0; x < lines.length; x++) {
		for(let y of lines[x]) {
			ligacoes.push([x, y, dist(x, y)]);
		}
	}

	linha = new Linha(22, ligacoes, points, originalpath.slice())
}

function draw() {
	clear();
	background(0);
	translate(100,100);

	let path = [];
	for(let i = 0; i < linha.path.length; i++) {
		path.push(linha.findPath(linha.path[i], linha.path[(i+1) % linha.path.length]));
	}

	let opath = [];
	for(let i = 0; i < originalpath.length; i++) {
		opath.push(linha.findPath(originalpath[i], originalpath[(i+1) % originalpath.length]));
	}

	strokeWeight(5);

	stroke(255);
	fill(255);
	for(let i=0; i < lines.length; i++) {
		for(let j=0; j < lines[i].length; j++) {
			drawArrow(i, lines[i][j]);
		}
	}

	stroke(255, 0, 0);
	fill(255, 0, 0);
	for(let p of path) {
		for(let i = 0; i < p.length-1; i++){
			drawArrow(p[i], p[i+1]);
		}
	}

	stroke(0, 255, 0);
	fill(0, 255, 0);
	for(let p of opath) {
		for(let i = 0; i < p.length-1; i++){
			drawArrow(p[i], p[i+1]);
		}
	}

	strokeWeight(20);

	for(let i=0; i<points.length; i++) {
		if(linha.path.includes(i)) {
			stroke(0, 0, 255);
			fill(0, 0, 255);
		} else {
			stroke(255);
			fill(255);
		}
		if(originalpath.includes(i)) {
			stroke(255, 255, 0);
			fill(255, 255, 0)
		}
		point(points[i][0], points[i][1]);
	}


	/*------------------ Bus --------------------*/

	if(linha.path.includes(bus) && !originalpath.includes(prev) && linha.path.includes(prev)) {
		linha.path.splice(linha.path.indexOf(prev));
	}

	if(step >= 100) {
		step = 0;
		if(linha.path.includes(bus)) {
			prev = bus;
		}
		bus = next;
		if(bus == nextp) {
			nextp = linha.path[(linha.path.indexOf(bus)+1) % linha.path.length];
		}
		next = linha.findPath(bus, nextp)[1];
	} else {
		step++;
	}

	strokeWeight(20);
	stroke(0, 0, 255);
	point(map(step, 0, 100, points[bus][0], points[next][0]), map(step, 0, 100, points[bus][1], points[next][1]));
}

function mousePressed() {
	linha.clickPath(mouseX-100, mouseY-100);
}

drawArrow = (p1, p2) => {
	line(points[p1][0], points[p1][1], points[p2][0], points[p2][1]);

	push();
	let angle = atan2(points[p1][1] - points[p2][1], points[p1][0] - points[p2][0]);
	let offset = [0, 0];
	if(angle == HALF_PI) {
		offset = [0, 24];
	} else if(angle == PI) {
		offset = [-24, 0];
	} else if (angle == 0) {
		offset = [24, 0];
	} else {
		offset = [0, 0];
	}
	translate(points[p2][0] + offset[0], points[p2][1] + offset[1]);
	rotate(angle-HALF_PI);
	triangle(-16*0.5, 16, 16*0.5, 16, 0, -16/2);
	pop();
}