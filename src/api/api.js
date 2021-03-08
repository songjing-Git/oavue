import {Get,Post} from "../api/index"
export default {
     login (username,password) {
        return  Post(
             "user/login",
         {username,password}
         )
    },

    getStaffInfoList(param){
         return Post(
             'user/staffList',
             param
         )
    },
    getStaffInfoByName(username){
        return Get(
            'user/'+`${username}`,
            username,
        )
    },



    getWorkInfo(param){
        return Get(
            'work/getWorkInfo',
            param
        )
    },

    getDepartName(){
         return Get(
             "depart/getDepartName"
         )
    },


    getDepartInfo(param){
         return Get(
             "depart/getDepartInfo",
             param
         )
    },

    insertDepart(param){
         return Post(
            "depart/insertDepart",
                param
         )
    },

    selectProInfo(param){
         return Post(
             "project/selectProInfo",
             param
         )
    }
}


