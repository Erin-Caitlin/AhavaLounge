import { createPool } from "mysql2";
import 'dotenv/config'
let connection = createPool({
    host: process.env.hostDb,
    user: process.env.userDb,
    password: process.env.pswdDb,
    database: process.env.dbName,
    multipleStatements: true,
    connectionLimit: 40
})
connection.on('connection', (pool) => {
    if(!pool) throw new Error('Unable to connect to database, please try again later')
})
export {
    connection
}