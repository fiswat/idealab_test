import { appDataSource } from "../DataSource.js";
import { Group } from "../entity/Group.js";

class Groups {
    values = [{ name: "Sales", status: 1 }, { name: "Operation", status: 1 }, { name: "HR", status: 1 }, { name: "IT", status: 1 }]
    async populate() {
        await appDataSource
            .getRepository(Group)
            .createQueryBuilder('groups')
            .insert()
            .values(this.values)
            .orIgnore()
            .execute();
    }
}

export {Groups}