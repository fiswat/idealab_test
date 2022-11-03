import { GroupRoleMaps } from './GroupRoleMaps.js';
import { Groups } from './Groups.js';
import {Roles} from './Roles.js'
import { UserGroupMaps } from './UserGroupMaps.js';
import { Users } from './Users.js';

class Populate{
    tableMap = {
        roles : new Roles(),
        groups : new Groups(),
        groupRoleMaps : new GroupRoleMaps(),
        users : new Users,
        userGroupMaps : new UserGroupMaps()
    }
    
    populate(){
        for(let key in this.tableMap){
            this.tableMap[key].populate();
        }
    }
}

export { Populate }