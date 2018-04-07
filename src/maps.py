import googlemaps

def distance(origin, destination):
	gmaps = googlemaps.Client(key='AIzaSyA6KJ31khHds0Se0q36be_a00U0X4FCaew')
	distance = gmaps.distance_matrix(origin, destination)
	
	if distance['rows'][0]['elements'][0]['status'] == 'ZERO_RESULTS':
		raise Exception('No results found.')
	
	return distance['rows'][0]['elements'][0]['distance']

def minDist(coordinates):
	distances = []

	for i in range(len(coordinates)-1):
		distances.append(distance([coordinates[i]], [coordinates[i+1]]))

	minimun = min(distances, key=lambda x : x['value'])
	minindex = distances.index(minimun)

	return (coordinates[minindex], coordinates[minindex+1], minimun['value'])

coordinates = ['Indaiatuba, Brazil', 'São Paulo, Brazil', 'São Carlos, Brazil']

print(minDist(coordinates))