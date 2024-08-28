import { connection as db} from '../config/index.js'
class Meals {
    fetchMeals(req, res) {
        try {
            const strQry = `
            SELECT mealID, mealPackage, mealDescription, mealImage, mealPrice
            FROM Meals;
            `
            db.query(strQry, (err, results) => {
                if(err) throw new Error('Unable to fetch all meals')
                    res.json({
                        status: res.statusCode,
                        results
                    })
            })
        } catch(e) {
            res.json({
                status:404,
                msg: e.message
            })
        }
    }
    recentMeals(req, res) {
        try {
            const strQry = `
            SELECT mealID, mealPackage, mealDescription, mealImage, mealPrice
            FROM Meals
            ORDER BY mealID DESC
            LIMIT 5;
            `
            db.query(strQry, (err, results) => {
                if(err) throw new Error('Unable to retrieve recent Meals')
                    res.json({
                        status: res.statusCode,
                        results
                    })
            })
        } catch(e) {
            res.json({
                status:404,
                msg: e.message
            })
        }
    }
    fetchMeal(req, res) {
        try {
            const strQry = `
            SELECT mealID, mealPackage, mealDescription, mealImage, mealPrice
            FROM Meals
            WHERE mealID = ${req.params.id};
            `
            db.query(strQry, (err, results) => {
                if(err) throw new Error('Unable to fetch Meal')
                    res.json({
                        status: res.statusCode,
                        results: results[0]
                    })
            })
        } catch(e) {
            res.json({
                status:404,
                msg: e.message
            })
        }
    }
    addMeal(req, res) {
        try {
            const strQry = `
            INSERT INTO Meals
            SET ?;
            `
            db.query(strQry, [req.body], (err) => {
                if (err) throw new Error('Unable to add a new Meal')
                res.json({
                    status: res.statusCode,
                    msg: 'Meal has been added successfully.'
                })
                
            })
        }catch(e) {
            res.json({
                status:404,
                msg: e.message
            })
        }
    }
    updateMeal(req, res) {
        try {
            let prodData = req.body
            const strQry = `
            UPDATE Meals
            SET ?
            WHERE mealID = ${req.params.id}
            `
            db.query(strQry, [prodData], (err) => {
                if (err) throw new Error('Unable to update a Meal')
                    res.json({
                        status: res.statusCode,
                        msg: 'The Meal record was updated'
                    })
            })
        } catch (e) {
            res.json({
                status: 400,
                msg: e.message
            })
        }
    }
    deleteMeal(req, res) {
        try {
            const strQry = `
            DELETE FROM Meals
            WHERE mealID = ${req.params.id};
            `
            db.query(strQry, (err) => {
                if(err) throw new Error('To delete a Meal, please review your delete query')
                    res.json({
                        status: res.statusCode,
                        msg: 'A Meal was removed'
                    })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
}
export {
    Meals
}