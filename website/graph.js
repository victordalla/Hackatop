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

	bfs(src){
		var visited = [];
		for(var i=0;i<this.nVertices;i++){
			visited[i] = false;
		}
		var q = new Queue();

		visited[src] = true;
		q.enqueue(src);

		while(!q.isEmpty()){
			var u = q.dequeue();

			console.log(u)

			var adjs = this.AdjList.get(u);
			for(var i in adjs){
				var neigh = adjs[i];

				if(!visited[neigh]){
					visited[neigh] = true;
					q.enqueue(neigh)
				}
			}
		}
	}


}