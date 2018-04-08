class Graph {
	constructor(nVertices){
		this.nVertices = nVertices;
		this.AdjList = new Map();
	}

	addVertex(v){
		this.AdjList.set(v, []);
	}

	addEdge(v, w){
		this.AdjList.get(v).push(w);
	}

	printGraph(){
		var get_keys = this.AdjList.keys()
		for(var i of get_keys){
			var get_values = this.AdjList.get(i);
			var conc = "";
			for(var j of get_values)
				conc += j + " "

			console.log(i + " -> " + conc)
		}
	}

	dijkstra(src){
		var dist[];
		var visited[];

		for(var i=0;i<this.nVertices;i++){
			dist[i] = 1e10;
			visited[i] = false;
		}

		var q = new Queue();

		visited[src] = true;
		q.enqueue(src);

		while(!q.isEmpty()){
			var u = q.dequeue();
			var adjs = this.AdjList.get(u)
			for(var v in adjs){
				if(dist[v] > dist[u] + this.AdjList.get(i))
			}

		}
	}


}