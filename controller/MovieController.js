import express from 'express'
import bodyParser from 'body-parser'
import { movies } from '../model/index.js'
import { verifyAToken } from '../middleware/AuthenticateUser.js'

const movieRouter = express.Router()

movieRouter.use(bodyParser.json())

movieRouter.get('/', (req, res) => {
    movies.fetchMovies(req, res)
})
movieRouter.get('/recent', (req, res) => {
    movies.recentMovies(req, res)
})
movieRouter.get('/:id',  (req, res) => {
    movies.fetchMovie(req, res)
})
movieRouter.post('/add', (req, res) => {
    movies.addMovie(req, res)
})
movieRouter.patch('/:id', (req, res) => {
    movies.updateMovie(req, res)
})
movieRouter.delete('/:id', (req, res) => {
    movies.deleteMovie(req, res)
})
export {
    movieRouter
}