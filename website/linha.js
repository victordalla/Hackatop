class Linha{
	constructor(nEsquinas, ligacaoes, coords){
		this.nEsquinas = nEsquinas;
		// this.coords = Map();
		// for(var i=0;i<nEsquinas;i++){
			// this.coords.set(i,coords[i])
		// }
		this.graph = new Graph(nEsquinas);
		for(var i=0;i<nEsquinas;i++) this.graph.addVertex(i);
		for(var ligacao of ligacoes){
			this.graph.addEdge(ligacao[0],ligacao[1],ligacao[2])
		}

		this.graph.printGraph()
	}

	// addSolicitacao(x,y){
	// 	//processar x e y para descobrir qual eh o vertice
	// 	// vertex = getVertexByCoords()
	
	// 	//agr ja tem o vertice, temos que usar o algoritmo para encotrar o menor par de insercao
	// 	pair, diff = getMinPair()
	
	// 	if(diff < X)//posso adicionar no meu percurso

	// 	else //nao posso adicionar no percurso

	// }

	// atualizaPosicaoOnibus()


}