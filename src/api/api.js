import {Get,Post} from "../api/index"
export default {
     login (username,password) {
        return  Post(
             "user/login",
         {username,password}
         )
    },

    getStaffInfoList(param,page){
         return Post(
             'user/staffList',
             param,page
         )
    },
    getStaffInfoByName(username){
        return Get(
            'user/'+`${username}`,
            username,
        )
    },

    getWorkList(){
        return Get(
            'work/getWorkList',
        )
    },

    getWorkInfo(param){
        return Post(
            'work/getWorkInfo',
            param
        )
    }
}


