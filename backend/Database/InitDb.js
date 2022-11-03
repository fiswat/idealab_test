import initConnection from 'mysql2/promise'
import { exec } from 'child_process'

class InitDb {
    //Creates database 
    static createDb(ormConfig) {
        return new Promise((resolve, reject) => {
            initConnection.createConnection({
                host: ormConfig.host,
                user: ormConfig.username,
                password: ormConfig.password
            }).then(connection => {
                connection.query(`CREATE DATABASE IF NOT EXISTS ${ormConfig.database};`).then((res) => {
                    console.info(`Database ${ormConfig.database} created successfully`);
                    connection.destroy();
                    return resolve(`${ormConfig.database} created`);
                }).catch(err => {
                    return reject(err);
                });
            })
        });

    }
    //Creates tables 
    static runMigrations() {
        return new Promise((resolve, reject) => {
            console.log("Running Migrations...");
            exec('typeorm migration:run -d ./Database/DataSource.js', (err, stdout, stderr) => {
                if(err || stderr){
                    return reject(err? err : (stderr? stderr : 'undetermined error'));
                }
                return resolve(stdout);
            });

        });


    }
}

export {
    InitDb
}