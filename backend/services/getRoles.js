import { appDataSource } from "../Database/DataSource.js"
import { Role } from "../Database/entity/Role.js"
import { UserGroupMap } from "../Database/entity/UserGroupMap.js";


let getRoles = async () => {
    //let x = //await appDataSource.getRepository(UserGroupMap).find({relations : {groups : true}});
    /* createQueryBuilder('userGroupMap')
        .where("userGroupMap.id = :id", { id: 9 })
        .getOne(); */

        let x =   await appDataSource
    .getRepository(UserGroupMap)
    .createQueryBuilder("userGroupMap")
    .innerJoinAndSelect('users', 'u', 'userGroupMap.userId = u.id')
    //.innerJoinAndSelect("users", 'users')
    .where("userGroupMap.userId = :id", {id : 2 })
    .getMany();

    console.log("data---->", x);

};

export {getRoles}
