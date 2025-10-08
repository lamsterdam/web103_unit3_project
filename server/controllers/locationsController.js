import { pool } from '../config/database.js'

// controller function to perform CRUD operations on locations table
// get the locations table
const getLocations = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM locations ORDER BY location_id ASC')
        res.status(200).json(results.rows)
    } catch (err) {
        res.status(409).json( { error: err.message } )
    }
}

export default {
    getLocations
}