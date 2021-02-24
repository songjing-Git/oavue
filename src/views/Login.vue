<template>
    <div class="login">
        <Card class="form">
            <Form  label-position="left" :label-width="60">
            <Row>
                <Col :xl="{offset:3,span:20}">
                    <FormItem>
                        <h1>OA管理系统</h1>
                    </FormItem>

                </Col>
            </Row>
            <Row >
                <Col :xl="{offset:2,span:20}">
                    <FormItem label="用户名:">
                        <Input v-model="username" clearable></Input>
                    </FormItem>
                    <FormItem label="密码:">
                        <Input type="password" v-model="password" password></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormItem>
                        <Button size="small" type="info">忘记密码?</Button>
                        <Checkbox v-model="single" style="margin-left: 30%">记住密码</Checkbox>
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col :xl="20">
                    <FormItem>
                        <Button type="success" long @click="onSubmit">
                            <div>登录</div>
                        </Button>
                    </FormItem>
                </Col>

            </Row>
            <Row>
                <Col :xl="20">
                    <FormItem>
                        <Button type="primary" long>
                            <div >以管理员身份登录</div>
                        </Button>
                    </FormItem>

                </Col>
            </Row>
            </Form>
        </Card>
    </div>
</template>

<script>
    import api from "../api/api";
    import store from "../store";

    export default {
        name: "Login",
        props: {},
        data() {
            return {
                username:'songjing3',
                password:'songjing3!',
                single:false,
                result:""
            }
        },
        computed: {},
        methods: {
            onSubmit(){

                // //查询登录账户密码
                // console.log(api.login(this.username, this.password));
                // api.login(this.username,this.password).then(res=>{
                //     if (res){
                //         this.$router.push("/home")
                //     }
                // })
                //查询登录员工的信息

                api.getStaffInfoByName(this.username).then(res=>{
                    if (res){
                        this.$store.user=res
                        this.$store.dispatch('setUserInfo',res)
                    }
                })
                this.$router.push("/home")

            }
        },
        watch: {},
        actions:{

        },

    }
</script>

<style scoped>
    .login{
        padding-top: 5%;
        height: 100%;
        background-image: url('../assets/backgroup.png');
    }
    .form{
        width: 20%;
        height: 50%;
        margin-left: 40%;

    }
</style>
