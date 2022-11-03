//const { MigrationInterface, QueryRunner } = require("typeorm");

class CreateRoles1667473404975 {

    async up(queryRunner) {
        await queryRunner.query(
            `CREATE TABLE roles (
                id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(50)  NOT NULL UNIQUE,
                status TINYINT NOT NULL,
                createdOn TIMESTAMP NOT NULL DEFAULT NOW(),
                PRIMARY KEY ( id )
            );`,
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `DROP TABLE roles`,
        )
    }

}

export default CreateRoles1667473404975;
