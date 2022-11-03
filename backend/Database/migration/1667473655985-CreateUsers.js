//const { MigrationInterface, QueryRunner } = require("typeorm");

class CreateUsers1667473655985 {

    async up(queryRunner) {
        
        await queryRunner.query(
            `CREATE TABLE users (
                id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(200) NOT NULL,
                email VARCHAR(200) NOT NULL UNIQUE,
                password VARCHAR(500) NOT NULL,
                status TINYINT NOT NULL,
                createdOn TIMESTAMP NOT NULL DEFAULT NOW(),
                PRIMARY KEY ( id )
            );`,
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `DROP TABLE users`,
        )
    }

}
export default CreateUsers1667473655985;
