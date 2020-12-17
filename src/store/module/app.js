import routers from "../../router/routers";
import {getMenuByRouter} from "../../utils/util";

export default {
    state: {
        tagNavList: [],
    },
    getters: {
        menuList: (state, getters, rootState) => getMenuByRouter(routers, rootState.user.access),
    }
}
