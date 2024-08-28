import { connection as db} from '../config/index.js'

class Movies { 
    fetchMovies(req, res) {
        try {
            const strQry = `
            SELECT movieID, mName, mDescription, mCategory, mDuration, ticketPrice
            FROM Movies;
            `
            db.query(strQry, (err, results) => {
                if(err) throw new Error('Unable to fetch all movies')
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
    recentMovies(req, res) {
        try {
            const strQry = `
            SELECT movieID, mName, mDescription, mCategory, mDuration, ticketPrice
            FROM Movies
            ORDER BY movieID DESC
            LIMIT 5;
            `
            db.query(strQry, (err, results) => {
                if(err) throw new Error('Unable to retrieve recent movies')
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
    fetchMovie(req, res) {
        try {
            const strQry = `
            SELECT movieID, mName, mDescription, mCategory, mDuration, ticketPrice
            FROM Movies
            WHERE movieID = ${req.params.id};
            `
            db.query(strQry, (err, results) => {
                if(err) throw new Error('Unable to fetch movie')
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
    addMovie(req, res) {
        try {
            const strQry = `
            INSERT INTO Movies
            SET ?;
            `
            db.query(strQry, [req.body], (err) => {
                if (err) throw new Error('Unable to add a new movie')
                res.json({
                    status: res.statusCode,
                    msg: 'Movie has been added successfully.'
                })
                
            })
        }catch(e) {
            res.json({
                status:404,
                msg: e.message
            })
        }
    }
    updateMovie(req, res) {
        try {
            let prodData = req.body
            const strQry = `
            UPDATE Movies
            SET ?
            WHERE MovieID = ${req.params.id}
            `
            db.query(strQry, [prodData], (err) => {
                if (err) throw new Error('Unable to update a movie')
                    res.json({
                        status: res.statusCode,
                        msg: 'The movie record was updated'
                    })
            })
        } catch (e) {
            res.json({
                status: 400,
                msg: e.message
            })
        }
    }
    deleteMovie(req, res) {
        try {
            const strQry = `
            DELETE FROM Movies
            WHERE movieID = ${req.params.id};
            `
            db.query(strQry, (err) => {
                if(err) throw new Error('To delete a movie, please review your delete query')
                    res.json({
                        status: res.statusCode,
                        msg: 'A movie was removed'
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
    Movies
}