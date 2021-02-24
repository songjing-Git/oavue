import routers from "../../router/routers";
import {getMenuByRouter,getTagNavListFromLocalstorage,
    setTagNavListInLocalstorage,getRouteTitleHandled,
    routeHasExist,getHomeRoute,getBreadCrumbList} from "../../utils/util";

export default {
    state: {
        breadCrumbList: [],
        tagNavList: [],
        homeRoute: getHomeRoute(routers, "main"),
    },
    getters: {
        menuList: (state, getters, rootState) => getMenuByRouter(routers, rootState.user.access),
    },
    mutations:{
        setTagNavList (state, list) {
            let tagList = []
            if (list) {
                tagList = [...list]
            } else tagList = getTagNavListFromLocalstorage() || []
            if (tagList[0] && tagList[0].name !== "main") tagList.shift()
            let homeTagIndex = tagList.findIndex(item => item.name === "main")
            if (homeTagIndex > 0) {
                let homeTag = tagList.splice(homeTagIndex, 1)[0]
                tagList.unshift(homeTag)
            }
            state.tagNavList = tagList
            setTagNavListInLocalstorage([...tagList])
        },
        addTag (state, { route, type = 'unshift' }) {
            let router = getRouteTitleHandled(route)
            if (!routeHasExist(state.tagNavList, router)) {
                if (type === 'push') state.tagNavList.push(router)
                else {
                    if (router.name === "main") state.tagNavList.unshift(router)
                    else state.tagNavList.splice(1, 0, router)
                }
                setTagNavListInLocalstorage([...state.tagNavList])
            }
        },
        setBreadCrumb (state, route) {
            state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
        },
    }
}
