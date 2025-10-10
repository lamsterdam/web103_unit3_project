// Service object for event
const EventsApi = {
    // function to send an HTTP request to the server to get all events from event table
    getAllEvents: async() => {
        try {
            const response = await fetch('http://localhost:3000/events')
            const data = await response.json()
            return data
        } catch (err) {
            console.log('Error fetching events: ', err)
        }
    },

    // function to send an HTTP request to the server to get events at this location id
    getEventsById: async(locationId) => {
        try {
            const response = await fetch(`http://localhost:3000/events/location/${locationId}`)
            const data = await response.json()
            return data
        } catch (err) {
            console.log('Error fetching events by location: ', err)
        }
    },

    // function to call get all events and filter for the event we are looking for
     getEventByEventId: async(eventId) => {
        try {
            const allEvents = await EventsApi.getAllEvents()
            return allEvents.find(event => event.event_id === eventId) || null
        } catch (err) {
            console.log('Error filtering event by ID: ', err)
            return null
        }
    }
}

export default EventsApi