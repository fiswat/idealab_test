import { appDataSource } from "../DataSource.js";
import { GroupRoleMap } from "../entity/GroupRoleMap.js";

class GroupRoleMaps {
    values = [{ groupId: 3 , roleId : 2 , status: 1 }, { groupId: 3 , roleId : 3 , status: 1 }, { groupId: 4 , roleId : 1 , status: 1 }, { groupId: 4 , roleId : 2 , status: 1 }, { groupId: 2 , roleId : 2 , status: 1 }, { groupId: 2 , roleId : 3 , status: 1 }, { groupId: 1 , roleId : 2 , status: 1 }, { groupId: 1 , roleId : 3 , status: 1 }]
    async populate() {
        await appDataSource
            .getRepository(GroupRoleMap)
            .createQueryBuilder('groupRoleMapss')
            .insert()
            .values(this.values)
            .orIgnore()
            .execute();
    }
}

export {GroupRoleMaps}