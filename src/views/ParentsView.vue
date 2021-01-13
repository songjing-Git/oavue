<template>
    <div class="Main">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "ParentsView",
        props: {},
        data() {
            return {
                value1: 0,
                carouselList:[
                    1,2,3,4,5
                ]
            }
        },
        computed: {},
        methods: {},
        watch: {}
    }
</script>

<style scoped>
.Main{
    background: #FFFFFF;
}
</style>
