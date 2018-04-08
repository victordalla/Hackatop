class Linha {
	constructor(nEsquinas, ligacoes, coords, path) {
		this.nEsquinas = nEsquinas;
		this.coords = coords;
		this.path = path;
		this.now = 0;

		this.graph = new Graph(nEsquinas);
		
		for(let ligacao of ligacoes) {
			this.graph.addEdge(ligacao[0], ligacao[1], ligacao[2]);
		}
	}

	addPath(newVertex) {
		let distancesp = [];
		let distancesc = [];

		for(let i = 0; i < this.path.length; i++) {
			distancesp.push(this.graph.dijkstra(this.path[i], newVertex));
			distancesc.push(this.graph.dijkstra(newVertex, this.path[(i+1) % this.path.length]));
		}

		let min = Number.MAX_SAFE_INTEGER;
		let mini = -1;
		for(let i = 0; i < distancesp.length; i++) {
			if(distancesp[i][1] + distancesc[i][1] <= min) {
				min = distancesp[i][1] + distancesc[i][1]
				mini = i
			}
		}

		if(Math.abs(this.graph.dijkstra(this.path[mini], this.path[(mini+1) % this.path.length])[1] - min) <= 100) {
			this.path.splice(mini+1, 0, newVertex);
		}
	}

	findPath(x, y) {
		return this.graph.dijkstra(x, y)[0];
	}

	clickPath(x, y) {
		for(let i = 0; i < this.coords.length; i++) {
			if(Math.sqrt(Math.pow(this.coords[i][0] - x, 2) + Math.pow(this.coords[i][1] - y, 2)) <= 20 && !this.path.includes(i)) {
				this.addPath(i);
			} else {
				console.log('falhouo')
			}
		}
	}
}