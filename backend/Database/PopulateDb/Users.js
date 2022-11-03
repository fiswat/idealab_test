import { appDataSource } from "../DataSource.js";
import { User } from "../entity/User.js";
const { createHmac } = await import('node:crypto');


class Users {
    secret = 'idealab';

    constructor() {
        this.password = this.makePassHash("123456");
        this.values = [{ name: "Zack", email: "zack@email.com", password: this.password, status: 1   }, { name: "Emmanulle", email: "emmanuelle@email.com", password: this.password, status: 1   }, { name: "Young", email: "young@email.com", password: this.password, status: 1   }, { name: "Shaw", email: "shaw@email.com", password: this.password, status: 1   }, { name: "Oliver", email: "oliver@email.com", password: this.password, status: 1   }, { name: "Judy", email: "judy@email.com", password: this.password, status: 1   }]

    }
    async populate() {
        await appDataSource
            .getRepository(User)
            .createQueryBuilder('users')
            .insert()
            .values(this.values)
            .orIgnore()
            .execute();
    }

    makePassHash(password) {
        return createHmac('sha256', this.secret)
            .update(password)
            .digest('hex');

    }
}

export { Users }