import express from 'express';
import { addMovie, getMovies, getMoviesId } from '../controllers/movieController.js';

const movieRouter = express.Router();

movieRouter.get("/",getMovies);
movieRouter.get("/:id",getMoviesId);
movieRouter.post("/",addMovie);

export default movieRouter;