import pg from 'pg'

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: {
        rejectUnauthorized: false
    }
}

// access the Pool class from the pg module to create a new Pool object so queries can reuse existing connections
// instead of using new.pgClient() which would open and close a connection to PostgreSQL for every query
export const pool = new pg.Pool(config)