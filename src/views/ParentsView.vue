<template>
    <transition :name="transitionName">
        <router-view></router-view>
    </transition>
</template>

<script>
    export default {
        name: "ParentsView",
        props: {},
        data() {
            return {
                transitionName:'slide-left'
            }
        },
        computed: {},
        methods: {},
        watch: {}
    }
</script>

<style scoped>

</style>
