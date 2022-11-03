//const { MigrationInterface, QueryRunner } = require("typeorm");

class CreateUserGroupMap1667491927043 {

    async up(queryRunner) {
        await queryRunner.query(
            `CREATE TABLE userGroupMap (
                id INT NOT NULL AUTO_INCREMENT,
                userId INT NOT NULL,
                groupId INT NOT NULL,
                status TINYINT NOT NULL,
                createdOn TIMESTAMP NOT NULL DEFAULT NOW(),
                PRIMARY KEY ( id ),
                FOREIGN KEY (userId) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
                FOREIGN KEY (groupId) REFERENCES groups(id) ON UPDATE CASCADE ON DELETE CASCADE,
                UNIQUE KEY(userId,groupId) 
            );`,
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `DROP TABLE groupRoleMap`,
        )
    }
}

export {CreateUserGroupMap1667491927043}
