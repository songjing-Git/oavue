export default {
    state: {
        user:{
            STAFF_ID:'',//编号
            STAFF_NAME:'',//姓名
            GENDER:'',
            USER_NAME:'',//用户名
            DEPT_NAME:'',
            PHONE:'',
            EMAIL:'',
            JOB_LEVEL_NAME:'',
            NATION:'',
            PAYBALE_SALARY:'',
            NATIVE_PLACE:'',
            ADDRESS:'',
            WORK_AGE:'',
            BIRTHDAY:'',
            BASE_SALARY:'',
            access: '',//权限等级
            HEAD_PHOTO:'',//头像
        }

    },
    getters:{
        getUserInfo: state =>{
            return state.user
        }
    },
    mutations:{
        setUserInfo (state,userInfo) {
            state.user = userInfo
        }
    },
    actions:{
        // 登录
        handleLogin ({ commit }, {userName, password}) {
            userName = userName.trim()
            return new Promise((resolve, reject) => {
                login({
                    userName,
                    password
                }).then(res => {
                    const data = res.data
                    commit('setToken', data.token)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // 退出登录
        handleLogOut ({ state, commit }) {
           /* return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('setToken', '')
                    commit('setAccess', [])
                    resolve()
                }).catch(err => {
                    reject(err)
                })
                // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
                // commit('setToken', '')
                // commit('setAccess', [])
                // resolve()
            })*/
        },
        setUserInfo({commit},userInfo) {
            commit('setUserInfo',userInfo)
        }
    },

}
