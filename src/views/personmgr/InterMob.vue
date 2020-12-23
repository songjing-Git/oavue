<template>
    <div>
        <div>
            <Button @click="onLogin(username,password)"></Button>
        </div>
    </div>
</template>

<script>

    import {login} from "../../api/api";

    export default {
        name: "InterMob",
        props: {},
        data() {
            return {
                username:"123456",
                password:"123"
            }
        },
        computed: {},
        methods: {
            onLogin(username,password){
                login(username, password).then(res=>{
                    console.log(res)
                })

            }
        },
        watch: {}
    }
</script>

<style scoped>

</style>
