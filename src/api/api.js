import {Get,Post} from "../api/index"
export default {
     login (username,password) {
        return  Post(
             "user/login",
         {username,password}
         )

    }
}


