<template>
    <Layout style="height: 100%" class="main">
        <Sider hide-trigger collapsible :width="200" :collapsed-width="64" v-model="collapsed" class="left-side" :style="{overflow: 'hidden'}">
            <side-menu accordion ref="sideMenu" :active-name="$route.name" :collapsed="collapsed" @on-select="turnToPage" :menu-list="menuList">
                <div class="logo-con">
                    <Avatar :src="userAvator"  size="50" />
                </div>
            </side-menu>
        </Sider>
        <Layout>
            <Header class="header-con">
                <header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChange">
                    <user :user-avator="userAvator"/>
                    <full-screen v-model="isFullscreen" style="margin-right: 10px;"/>
                </header-bar>
            </Header>
            <Content class="main-content-con">
                <Layout class="main-layout-con">
                    <div class="tag-nav-wrapper">
                        <tags-nav :value="$route" @input="handleClick" :list="tagNavList" @on-close="handleCloseTag"/>
                    </div>
                    <Content class="content-wrapper">
                        <keep-alive :include="cacheList">
                            <router-view/>
                        </keep-alive>
                    </Content>
                </Layout>
            </Content>
            <Footer>
                <Divider orientation="center" :dashed="true">
                    <p></p>
                    <p>songjing@湖南城市学院-信息与计算科学</p>
                </Divider>

            </Footer>
        </Layout>
    </Layout>
</template>

<script>
    import {getNewTagList, getNextRoute, routeEqual} from '../utils/util'
    import SideMenu from "../components/main/side-menu";
    import HeaderBar from "../components/main/header-bar";
    import TagsNav from "../components/main/tags-nav";
    import User from "../components/main/user";
    import FullScreen from "../components/main/full-screen";
    import ParentsView from "./ParentsView";
    import { mapMutations, mapActions, mapGetters } from 'vuex'
    export default {
        name: "Home",
        components: {ParentsView, FullScreen, User, TagsNav, HeaderBar,  SideMenu},
        props: {},
        data() {
            return {
                collapsed: false,
                isFullscreen: false
            }
        },
        computed: {
            menuList () {
                return this.$store.getters.menuList
            },
            userAvator () {
                return this.$store.state.user.avatorImgPath
            },
            tagNavList () {
                console.log("tagNavList:"+this.$store.state.app.tagNavList)
                return this.$store.state.app.tagNavList
            },
            cacheList () {
                return this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)).map(item => item.name) : []
            },
        },
        methods: {
            ...mapMutations([
                'setTagNavList',
                'addTag',
               'setBreadCrumb'
               /* 'setBreadCrumb',
                'setLocal'*/
            ]),
            turnToPage (route) {
                let { name, params, query } = {}
                if (typeof route === 'string') name = route
                else {
                    name = route.name
                    params = route.params
                    query = route.query
                }
                if (name.indexOf('isTurnByHref_') > -1) {
                    window.open(name.split('_')[1])
                    return
                }
                this.$router.push({
                    name,
                    params,
                    query
                })
            },
            handleCollapsedChange (state) {
                this.collapsed = state
            },
            handleClick (item) {
                this.turnToPage(item)
            },
            handleCloseTag (res, type, route) {
                if (type === 'all') {
                    this.turnToPage("main")
                } else if (routeEqual(this.$route, route)) {
                    if (type !== 'others') {
                        const nextRoute = getNextRoute(this.tagNavList, route)
                        this.$router.push(nextRoute)
                    }
                }
                this.setTagNavList(res)
            },
        },
        watch: {
            '$route' (newRoute) {
                const { name, query, params, meta } = newRoute
                this.addTag({
                    route: { name, query, params, meta },
                    type: 'push'
                })
                this.setBreadCrumb(newRoute)
                this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
                this.$refs.sideMenu.updateOpenName(newRoute.name)
            }
        },
        mounted () {
            /**
             * @description 初始化设置面包屑导航和标签导航
             */
            this.setTagNavList()
            this.addTag({
                route: this.$store.state.app.homeRoute
            })
            this.setBreadCrumb(this.$route)
            // 如果当前打开页面不在标签栏中，跳到homeName页
            if (!this.tagNavList.find(item => item.name === this.$route.name)) {
                this.$router.push({
                    name: "main"
                })
            }
        }
    }
</script>

<style scoped>
    .main .logo-con {
        height: 64px;
        padding: 10px;
    }
    .main .logo-con img {
        height: 44px;
        width: auto;
        display: block;
        margin: 0 auto;
    }
    .main .header-con {
        background: #fff;
        padding: 0 20px;
        width: 100%;
    }
    .main .main-layout-con {
        height: 100%;
        overflow: hidden;
    }
    .main .main-content-con {
        height: calc(100% - 60px);
        overflow: hidden;
    }
    .main .tag-nav-wrapper {
        padding: 0;
        height: 40px;
        background: #F0F0F0;
    }
    .main .content-wrapper {
        padding: 18px;
        height: calc(100% - 80px);
        overflow: auto;
    }
    .main .left-sider .ivu-layout-sider-children {
        overflow-y: scroll;
        margin-right: -18px;
    }
    .ivu-menu-item > i {
        margin-right: 12px !important;
    }
    .ivu-menu-submenu > .ivu-menu > .ivu-menu-item > i {
        margin-right: 8px !important;
    }
    .collased-menu-dropdown {
        width: 100%;
        margin: 0;
        line-height: normal;
        padding: 7px 0 6px 16px;
        clear: both;
        font-size: 12px !important;
        white-space: nowrap;
        list-style: none;
        cursor: pointer;
        transition: background 0.2s ease-in-out;
    }
    .collased-menu-dropdown:hover {
        background: rgba(100, 100, 100, 0.1);
    }
    .collased-menu-dropdown * {
        color: #515a6e;
    }
    .collased-menu-dropdown .ivu-menu-item > i {
        margin-right: 12px !important;
    }
    .collased-menu-dropdown .ivu-menu-submenu > .ivu-menu > .ivu-menu-item > i {
        margin-right: 8px !important;
    }
    .ivu-select-dropdown.ivu-dropdown-transfer {
        max-height: 400px;
    }
</style>
