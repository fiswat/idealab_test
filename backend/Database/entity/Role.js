//var EntitySchema = require("typeorm").EntitySchema

import {EntitySchema} from 'typeorm'

const Role = new EntitySchema({
    name: "roles", // Will use table name `roles` as default behaviour.
    //tableName: "posts", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
        },
        status: {
            type: "tinyint",
        },
        createdOn: {
            type: "date",
        },
    },
    /* relations: {
        categories: {
            target: "Category",
            type: "many-to-many",
            joinTable: true,
            cascade: true,
        },
    }, */
})

export {Role}