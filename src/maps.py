import googlemaps

def distance(origin, destination):
	gmaps = googlemaps.Client(key='AIzaSyA6KJ31khHds0Se0q36be_a00U0X4FCaew')
	distance = gmaps.distance_matrix(origin, destination)
	
	if distance['rows'][0]['elements'][0]['status'] == 'ZERO_RESULTS':
		raise Exception('No results found.')
	
	return distance['rows'][0]['elements'][0]['distance']

def minDist(coordinates, newVertex):
	distances = []

	for i in range(len(coordinates)):
		distances.append(distance([coordinates[i]], [newVertex])['value'] + distance([newVertex], [coordinates[(i+1) % len(coordinates)]])['value'])

	minimun = min(distances)
	minindex = distances.index(minimun)

	return (coordinates[minindex], coordinates[(minindex+1) % len(coordinates)])

coordinates = ['Indaiatuba, Brazil', 'São Paulo, Brazil', 'São Carlos, Brazil']

print(minDist(coordinates, 'Curitiba, Brazil'))