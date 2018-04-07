import googlemaps

def distance(origin, destination):
	gmaps = googlemaps.Client(key='AIzaSyA6KJ31khHds0Se0q36be_a00U0X4FCaew')
	distance = gmaps.distance_matrix(origin, destination)
	return distance['rows'][0]['elements'][0]['distance']