//const { MigrationInterface, QueryRunner } = require("typeorm");

class CreateGroups1667473654568 {

    async up(queryRunner) {
        await queryRunner.query(
            `CREATE TABLE groups (
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
            `DROP TABLE groups`,
        )
    }

}

export default CreateGroups1667473654568;
