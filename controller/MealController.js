import express from 'express'
import bodyParser from 'body-parser'
import { meals } from '../model/index.js'
import { verifyAToken } from '../middleware/AuthenticateUser.js'

const mealRouter = express.Router()

mealRouter.use(bodyParser.json())

mealRouter.get('/', (req, res) => {
    meals.fetchMeals(req, res)
})
mealRouter.get('/:id',  (req, res) => {
    meals.fetchMeal(req, res)
})
mealRouter.post('/add', (req, res) => {
    meals.addMeal(req, res)
})
mealRouter.patch('/:id', (req, res) => {
    meals.updateMeal(req, res)
})
mealRouter.delete('/:id', (req, res) => {
    meals.deleteMeal(req, res)
})
export {
    mealRouter
}