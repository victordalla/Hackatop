class Trecho:
	def __init__(self, info):		
		self.linha = info['linha']
		self.saida = info['saida']
		self.saida = info['saida']
		self.chegada = info['chegada']
		self.coordenada_saida = info['coordenada_saida']
		self.coordenada_chegada = info['coordenada_chegada']
		self.distancia = info['distancia']
		self.velocidades = info['velocidades']
		# self.tempos = [self.distancia / self.velocidades[i] for i in xrange(self.velocidades)]

class Onibus:
	def __init__(self, ultimo_ponto, proximo_ponto, dist_proximo):
		self.proximo_ponto = proximo_ponto
		self.ultimo_ponto = ultimo_ponto
		self.dist_proximo = dist_proximo

	def anda(self, andado):
		self.dist_proximo -= andado
		if self.dist_proximo <= 0:
			return True
		return False

	def atualiza(self, proximo_ponto, dist_proximo):
		self.ultimo_ponto = self.proximo_ponto
		self.proximo_ponto = proximo_ponto
		self.dist_proximo = dist_proximo

t1 = Trecho({'linha': 'l1', 'saida': 'a', 'chegada': 'b', 'coordenada_chegada': (0,0), 'coordenada_saida': (1,1), 'velocidades': [200,100,150,150], 'distancia': 10})
t2 = Trecho({'linha': 'l1', 'saida': 'b', 'chegada': 'c', 'coordenada_chegada': (1,1), 'coordenada_saida': (2,2), 'velocidades': [100,100,100,150], 'distancia': 10})
t3 = Trecho({'linha': 'l1', 'saida': 'c', 'chegada': 'a', 'coordenada_chegada': (0,0), 'coordenada_saida': (1,1), 'velocidades': [200,200,150,150], 'distancia': 10})
linha = []
linha.append(t1)
linha.append(t2)
linha.append(t3)

tempo = 0
idx = 0
onibus = Onibus(idx, idx+1, linha[idx].distancia)
while tempo < 10:
	print('Vel linha {}'.format(linha[idx].velocidades[0]/60))
	andado = linha[idx].velocidades[0]/60 
	if onibus.anda(andado):
		idx = (idx + 1) % 3
		onibus.atualiza((idx + 1) % 3, linha[idx].distancia)

	print('Ultimo {} | Proximo {} | dist_proximo {}'.format(onibus.ultimo_ponto,onibus.proximo_ponto,onibus.dist_proximo))
	tempo += 1
