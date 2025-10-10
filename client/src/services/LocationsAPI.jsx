// Service object for location
const LocationsApi = {
    // function to make a HTTP request to server to read all the location data from location table
    getAllLocations: async() => {
        try {
            const response = await fetch('http://localhost:3000/locations')
            const data = await response.json()
            return data
        } catch (err) {
            console.log('Error with fetching the locations: ', err)
        }
        
    },

    getLocationById: async (locationId) => {
        try {
            const response = await fetch(`http://localhost:3000/locations/${locationId}`)
            const data = await response.json()
            return data
        } catch (err) {
            console.log('Error with fetching the location by ID: ', err)
        }
    }
}

export default LocationsApi