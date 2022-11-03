import { appDataSource } from "../DataSource.js";
import { UserGroupMap } from "../entity/UserGroupMap.js";

class UserGroupMaps {
    values = [{ groupId: 1 , userId : 1 , status: 1 }, { groupId: 2 , userId : 1 , status: 1 }, { groupId: 3 , userId : 1 , status: 1 }, { groupId: 2 , userId : 2 , status: 1 }, { groupId: 3 , userId : 2 , status: 1 }, { groupId: 4 , userId : 3 , status: 1 }, { groupId: 1 , userId : 5 , status: 1 }, { groupId: 4 , userId : 6 , status: 1 }]
    async populate() {
        await appDataSource
            .getRepository(UserGroupMap)
            .createQueryBuilder('userGroupMap')
            .insert()
            .values(this.values)
            .orIgnore()
            .execute();
    }
}

export {UserGroupMaps}