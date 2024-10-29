import express from 'express';
import { getAllBooking, newBooking , getBookingById, deleteBooking } from '../controllers/bookingController.js';

const bookingsRouter = express.Router();

bookingsRouter.post('/',newBooking)
bookingsRouter.get('/all',getAllBooking)
bookingsRouter.get('/:id',getBookingById)
bookingsRouter.delete('/:id',deleteBooking)

export default bookingsRouter;