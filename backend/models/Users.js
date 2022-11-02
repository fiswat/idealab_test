const Users = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER(45) NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (email), 
    UNIQUE (username)
    )`

export default Users