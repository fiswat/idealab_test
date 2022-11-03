import { appDataSource } from "../DataSource.js";
import { Role } from "../entity/Role.js";

class Roles {
    values = [{ name: "Super Admin", status: 1 }, { name: "Admin", status: 1 }, { name: "Staff", status: 1 }]
    async populate() {
        await appDataSource
            .getRepository(Role)
            .createQueryBuilder('roles')
            .insert()
            .values(this.values)
            .orIgnore()
            .execute();
    }
}

export {Roles}