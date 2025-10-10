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

// get the location by id
const getLocationById = async (req, res) => {
    try {
        const selectQuery = `
            SELECT * FROM locations WHERE location_id=$1
        `
        // extract the location
        const locationId = req.params.id

        // query the database to obtain the location with the matching locationId 
        const results = await pool.query(selectQuery, [locationId])
        res.status(200).json(results.rows[0])

    } catch (err) {
        res.status(409).json( { error: error.message} )
    }
}

export default {
    getLocations,
    getLocationById
}