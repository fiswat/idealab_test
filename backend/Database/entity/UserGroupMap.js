//var EntitySchema = require("typeorm").EntitySchema

import {EntitySchema} from 'typeorm'

const UserGroupMap = new EntitySchema({
    name: "userGroupMap", // alias
    tableName: "userGroupMap", // db table name
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        userId: {
            type: "int",
        },
        groupId: {
            type: "int",
        },
        status: {
            type: "tinyint",
        },
        createdOn: {
            type: "date",
        },
    },
    relations: {
        groups: {
            target: "groups",
            type: "many-to-many",
            joinTable: true,
            cascade: true,
        },
        users: {
            target: "users",
            type: "one-to-one",
            joinTable: true,
            cascade: true,
        },
    },
})

export {UserGroupMap}