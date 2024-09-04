import express from 'express';
import bodyParser from 'body-parser';
import { Movies } from '../model/Movies.js'; 

const moviesRouter = express.Router();
moviesRouter.use(bodyParser.json());

const movies = new Movies();

moviesRouter.get('/', (req, res) => {
    movies.fetchMovies(req, res);
});

moviesRouter.get('/recent', (req, res) => {
    movies.recentMovies(req, res);
});

moviesRouter.get('/:id', (req, res) => {
    movies.fetchMovie(req, res);
});

moviesRouter.post('/add', (req, res) => {
    movies.addMovie(req, res);
});

moviesRouter.patch('/:id', (req, res) => {
    movies.updateMovie(req, res);
});

moviesRouter.delete('/:id', (req, res) => {
    movies.deleteMovie(req, res);
});
export {
    moviesRouter
};
