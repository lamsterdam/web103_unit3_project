import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import LocationsAPI from '../services/LocationsAPI'
import '../css/LocationEvents.css'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState([])
    const [events, setEvents] = useState([])

     useEffect(() => {
        const fetchEvents = async () => {
            const eventsData = await EventsAPI.getEventsById(index)
            // setEvents(eventsData)
            setEvents(eventsData || [])
        }
        fetchEvents()
    }, [index])

    // fetch the location info
    useEffect(() => {
        const fetchLocation = async () => {
            const locationData = await LocationsAPI.getLocationById(index)
            setLocation(locationData)
        }
        fetchLocation()
    }, [index])

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.image} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}</p>
                        {/* {location.city}, {location.state} {location.zip}</p> */}
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.event_id}
                            id={event.event_id}
                            title={event.name}
                            // title={event.title}
                            date={event.date}
                            // time={event.time}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents