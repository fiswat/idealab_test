//const { MigrationInterface, QueryRunner } = require("typeorm");

class CreateGroupRoleMap1667473655253 {

    async up(queryRunner) {
        await queryRunner.query(
            `CREATE TABLE groupRoleMap (
                id INT NOT NULL AUTO_INCREMENT,
                groupId INT NOT NULL,
                roleId INT NOT NULL,
                status TINYINT NOT NULL,
                createdOn TIMESTAMP NOT NULL DEFAULT NOW(),
                PRIMARY KEY ( id ),
                FOREIGN KEY (groupId) REFERENCES groups(id) ON UPDATE CASCADE ON DELETE CASCADE,
                FOREIGN KEY (roleId) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE,
                UNIQUE KEY(groupId,roleId) 
            );`,
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `DROP TABLE groupRoleMap`,
        )
    }

}
export default CreateGroupRoleMap1667473655253;
