import { pool } from '../config/database.js'

// controller function to perform CRUD operations on events table
// get the events table
const getEvents = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM events ORDER BY event_id ASC')
        res.status(200).json(results.rows)
    } catch (err) {
        res.status(409).json( { error: err.message } )
    }
}

// get the events by location id foreign key
// use the /:locationId endpoint to display the location details which are the events at that location
const getEventsByLocationId = async (req, res) => {
    try {
        const selectQuery = `
            SELECT name, date, image, location_id FROM events WHERE location_id=$1
        `
        // extract the location
        const locationId = req.params.id

        // query the database to obtain the events with the matching locationId which would be one or more rows
        // send status 200 and all rows of results as json
        const results = await pool.query(selectQuery, [locationId])
        res.status(200).json(results.rows)

    } catch (err) {
        res.status(409).json( { error: error.message} )
    }
}

// get the event by id
// const getEventById = async (req, res) => {
//     try {
//         const selectQuery = `
//             SELECT * FROM events WHERE event_id=$1
//         `
//         // extract the event
//         const eventId = req.params.id

//         // query the database to obtain the event with the matching eventId 
//         const results = await pool.query(selectQuery, [eventId])
//         res.status(200).json(results.rows[0])

//     } catch (err) {
//         res.status(409).json( { error: error.message} )
//     }
// }

export default {
    getEvents,
    getEventsByLocationId,
    // getEventById
}