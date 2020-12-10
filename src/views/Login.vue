<template>
    <div class="login" >
        <div class="title">
            <Row type="flex" justify="center">
                <Col>
                    <h1>OA办公自动化管理系统</h1>
                </Col>
            </Row>
        </div>
        <Row type="flex" justify="center">
            <Col :xl="4">
                <Form  label-position="left" :label-width="60">
                    <FormItem label="用户名:">
                        <Input v-model="username" clearable></Input>
                    </FormItem>
                    <FormItem label="密码:">
                        <Input type="password" v-model="password" password></Input>
                    </FormItem>
                </Form>
            </Col>
        </Row>
        <Row type="flex" justify="center">
            <Col :xl="{span:2,offset:4}">
                <Checkbox v-model="single">记住密码</Checkbox>
            </Col>
        </Row>
        <div class="button">
            <Row type="flex" justify="center">
                <Col >
                    <Button type="success" long @click="onSubmit">
                        登录
                    </Button>
                </Col>
                <Col>
                    <Button type="primary" long>
                        以管理员身份登录
                    </Button>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        props: {},
        data() {
            return {
                username:'admin',
                password:'root',
                single:false
            }
        },
        computed: {},
        methods: {
            onSubmit(){
                this.$router.push("/home")
            }
        },
        watch: {}
    }
</script>

<style scoped>
    .login{
        background-image: url("../assets/logo.png");
        width: 100%;
        position: absolute;
        top: 20%;
    }
    .title{
        position: relative;
        top: -40px;
    }
    .button{
        position: relative;
        top: 20px;
    }
</style>
