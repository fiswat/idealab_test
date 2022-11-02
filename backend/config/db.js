import mysql from 'mysql2';
import dotenv from 'dotenv'
import fallback from 'mysql2/promise'
dotenv.config();

class Database {
    constructor(config) {
        this.connection = mysql.createPool(config)
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.getConnection(async (err, connection) => {
                if (err) {
                    let errResp = await this.handleConnectionError(err);
                    this.query(sql, args)
                }

                this.connection.query(sql, args, (err, rows) => {
                    if (err) {
                        return reject(err)
                    }
                    return resolve(rows)
                })
            })
        })
    }

    handleConnectionError(err){
        return new Promise((resolve, reject)=>{
            // NOTE: Creates DB or rejects 
            if(err?.sqlMessage == `Unknown database '${dbConfig.database}'`){
                fallback.createConnection({
                    host: dbConfig.host,
                    user     : dbConfig.user,
                    password : dbConfig.password
                }).then( fallback => {
                    fallback.query(`CREATE DATABASE IF NOT EXISTS ${dbConfig.database};`).then((res) => {
                        console.info(`Database ${dbConfig.database} created successfully`);
                        fallback.destroy();
                        return resolve(`${dbConfig.database} created`);
                    })
                })
            }else{
                return reject(err);
            }
        });
        
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