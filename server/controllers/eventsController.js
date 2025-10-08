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

export default {
    getEvents
}