import { Users } from "./Users.js";
import { Movies } from "./Movies.js";
import { Meals} from  "./Meals.js";

const users = new Users()
const movies = new Movies()
const  meals = new Meals()

export {
    users,
    movies,
    meals
}