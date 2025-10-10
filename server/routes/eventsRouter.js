import express from 'express'
// import controllers for events and locations
import EventsController from '../controllers/eventsController.js'


const router = express.Router()

// define routes to get events and locations
router.get('/', EventsController.getEvents)
router.get('/location/:id', EventsController.getEventsByLocationId)
// router.get('/:id', EventsController.getEventById)

export default router