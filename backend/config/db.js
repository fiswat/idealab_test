import mysql from 'mysql2';
import dotenv from 'dotenv'
dotenv.config();

class Database {
    constructor(config) {
        this.connection = mysql.createPool(config)
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.getConnection((err, connection) => {
                if (err) {
                    return reject(err)
                }

                connection.query(sql, args, (err, rows) => {
                    if (err) {
                        return reject(err)
                    }
                    return resolve(rows)
                })
            })
        })
    }
}

console.log(process.env.MYSQL_HOST)

const dbConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}

//instaantiate the database
const db = new Database(dbConfig)

export {
    db
}