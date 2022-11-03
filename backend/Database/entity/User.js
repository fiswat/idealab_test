//var EntitySchema = require("typeorm").EntitySchema

import {EntitySchema} from 'typeorm'

const User = new EntitySchema({
    name: "users", // alias
    tableName: "users", // db table name
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
        },
        email: {
            type: "varchar",
        },
        password: {
            type: "varchar",
        },
        status: {
            type: "tinyint",
        },
        createdOn: {
            type: "date",
        },
    }
})

export {User}