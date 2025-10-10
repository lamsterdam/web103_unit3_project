import {pool} from "./database.js"
import './dotenv.js'
import { eventData, locationData } from "../data/events.js";

// table containing the foreign key is the child table and the table to which it refers is the parent table
// so the event table is the child table and the location table is the parent table in this case

// function to drop tables in correct order instead of using cascade
const dropTables = async () => {
    try {
        await pool.query(`DROP TABLE IF EXISTS events`)
        await pool.query(`DROP TABLE IF EXISTS locations`)
        console.log('🎉 tables dropped successfully')
    } catch (err) {
         console.error('⚠️ error dropping tables', err)
    }
}

// function to create the locations table
const createLocationsTable = async() => {
    const createLocationsTableQuery = `
        CREATE TABLE IF NOT EXISTS locations (
            location_id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            image TEXT NOT NULL
        )
    `

    // use the pool connection to query the database with the query
    try {
        const res = await pool.query(createLocationsTableQuery)
        console.log('🎉 locations table created successfully')
    } catch (err) {
        console.error('⚠️ error creating locations table', err)
    }
}

// load the data from our data arrays into the database table
const seedLocationsTable = async() => {
    locationData.forEach((location) => {
        const insertQuery = {
            text: 'INSERT INTO locations (name, address, image) VALUES ($1, $2, $3)'
        }

        const values = [
            location.name,
            location.address,
            location.image
        ]

        // use the pool connection to make a query to the database to insert each location 
        // into the database
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting location', err)
                return
            }
            console.log(`✅ ${location.name} added successfully`)
        })
    })
}


// function to create the events table
const createEventsTable = async() => {
    const createEventsTableQuery =  `
        CREATE TABLE IF NOT EXISTS events (
            event_id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            date TIMESTAMP NOT NULL,
            image TEXT NOT NULL,
            location_id INT,
            CONSTRAINT fk_location FOREIGN KEY (location_id)
            REFERENCES locations(location_id)
        )
    `

    try {
        const res = await pool.query(createEventsTableQuery)
        console.log('🎉 events table created successfully')
    } catch (err) {
        console.error('⚠️ error creating events table', err)
    }
}

// load the data from our data arrays into the database table
const seedEventsTable = async() => {
    eventData.forEach((event) => {
        const insertQuery = {
            text: 'INSERT INTO events (name, date, image, location_id) VALUES ($1, $2, $3, $4)'
        }

        const values = [
            event.name,
            event.date,
            event.image,
            event.location_id
        ]

        // use the pool connection to make a query to the database to insert each event
        // into the database
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting event', err)
                return
            }
            console.log(`✅ ${event.name} added successfully`)
        })
    })
}

const resetDatabase = async () => {
    await dropTables()
    // call the create function and wait for the response
    await createLocationsTable()
    await seedLocationsTable()
    // call the create function and wait for the response
    await createEventsTable()
    await seedEventsTable()
}
resetDatabase()
