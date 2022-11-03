import typeorm from "typeorm"
import { InitDb } from "./InitDb.js"
import config from "config"

const dbConfig = {...config.get("ormConfig.mysql")};

let initializeConnection = () => {
    appDataSource.initialize()
        .then(async () => {
            console.log("Data Source has been initialized!")
            /* console.log("------------------------------------")
            console.log(appDataSource.options)
            console.log(appDataSource.entityMetadatas)
            console.log("------------------------------------") */

            let migrationResponse = await InitDb.runMigrations();
            console.warn(migrationResponse);
            console.log("db is prepared");

        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err.toString())
            return handleConnectionError(err);
        });

}

let handleConnectionError = (err)=>{
    return new Promise(async (resolve, reject) => {
        // NOTE: Creates DB or rejects 
        if (err?.sqlMessage == `Unknown database '${dbConfig.database}'`) {
            let createDbResponse = await InitDb.createDb(dbConfig);
            return initializeConnection();
        } else {
            return reject(err);
        }
    });

}

let appDataSource = new typeorm.DataSource(dbConfig);

initializeConnection();


export { appDataSource };

