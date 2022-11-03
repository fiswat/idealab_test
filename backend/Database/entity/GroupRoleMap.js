//var EntitySchema = require("typeorm").EntitySchema

import {EntitySchema} from 'typeorm'

const GroupRoleMap = new EntitySchema({
    name: "groupRoleMap", // alias
    tableName: "groupRoleMap", // db table name
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        groupId: {
            type: "int",
        },
        roleId: {
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
        roles: {
            target: "roles",
            type: "many-to-many",
            joinTable: true,
            cascade: true,
        },
    },
})

export {GroupRoleMap}