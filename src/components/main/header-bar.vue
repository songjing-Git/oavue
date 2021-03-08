<template>
    <div class="header-bar">
        <sider-trigger :collapsed="collapsed" icon="md-menu" @on-change="handleCollpasedChange"></sider-trigger>

        <div class="custom-content-con">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import CustomBreadCrumb from "./custom-bread-crumb";
    import SiderTrigger from "./sider-trigger";
    export default {
        name: "header-bar",
        components: {SiderTrigger, CustomBreadCrumb},
        props: {
            collapsed: Boolean
        },
        data() {
            return {

            }
        },
        computed: {

        },
        methods: {
            handleCollpasedChange (state) {
                this.$emit('on-coll-change', state)
            }
        },
        watch: {}
    }
</script>

<style scoped>
    .header-bar {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .header-bar .custom-content-con {
        float: right;
        height: auto;
        padding-right: 20px;
        line-height: 64px;
    }
    .header-bar .custom-content-con > * {
        float: right;
    }
    /*# sourceMappingURL=header-bar.css.map */
</style>
