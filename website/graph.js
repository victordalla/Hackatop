class Graph{
	constructor(nVertices){
		this.nVertices = nVertices;
		this.AdjList = new Map();

		for(let i = 0; i < nVertices; i++) {
			this.addVertex(i);
		}
	}

	addVertex(v){
		this.AdjList.set(v, []);
	}

	addEdge(v, w, peso){
		this.AdjList.get(v).push([w, peso]);
	}

	printGraph(){
		var get_keys = this.AdjList.keys()
		for(var i of get_keys){
			var get_values = this.AdjList.get(i);
			var conc = "";
			for(var j of get_values)
				conc += j[0] + "(" + j[1] +")" + " "

			console.log(i + " -> " + conc)
		}
	}

	getmin(vector, color){
		var idx = -1;
		var min = 1e10;
		for(var i=0;i<vector.length;i++){
			if(color[i] == 1 && vector[i] < min){
				idx = i;
				min = vector[idx]
			}
		}

		return idx;
	}

	dijkstra(src, dest){
		var color = [];
		var pred = [];
		var dist = [];

		for(var i=0;i<this.nVertices;i++){
			color[i] = 0;
			pred[i] = -1;
			dist[i] = 1e9;
		}

		color[src] = 1;
		dist[src] = 0;
		
		for(var i=0;i<this.nVertices;i++){
			var u = this.getmin(dist, color);
			if(u == -1) break;

			color[u] = 2;
			var adjs = this.AdjList.get(u);
			for(var adj of adjs){
				var v = adj[0];
				var w_uv = adj[1];

				if(color[v] == 0 || dist[v] > (dist[u] + w_uv)){
					color[v] = 1;
					dist[v] = dist[u] + w_uv;
					pred[v] = u
				}
			}
		}

		var path = [];
		var aux = dest;
		var i = 0;
		while(aux != -1){
			path[i++] = aux;
			aux = pred[aux]
		}
		path.reverse()

		return [path, dist[dest]]		
	}
}