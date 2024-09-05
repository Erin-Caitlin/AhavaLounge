import { userRouter, express } from './controller/UserController.js'
import { moviesRouter } from './controller/MovieController.js'
import { mealRouter } from './controller/MealController.js'
import path from 'path'
import cors from 'cors'

const app = express()
const port = +process.env.PORT || 4000

// Middleware
// Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next()
})

app.use(cors())

app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({ 
    extended: true 
}))
app.use('/user', userRouter)
app.use('/movie', moviesRouter)
app.use('/meal', mealRouter)

app.get('^/$|/AhavaLounge', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})

app.get('*', (req, res) => {
    res.json({
        status: 404,
        msg: 'Resource not found'
    })
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})