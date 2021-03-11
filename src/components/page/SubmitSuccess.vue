<template>
    <div class="submit-success">
        <Row>
            <Col :xl="{offset:8,span:2}">
                <Icon type="md-checkmark" size="120" style="color:#5cb85c"/>
            </Col>
            <Col :xl="{span:6}">
                <div class="font-style">提交成功</div>
            </Col>
        </Row>
        <Row style="margin-top: 100px">
            <Col :xl="{offset:8,span:4}">
                <Button @click="back"> 返回上一页</Button>
            </Col>
            <Col :xl="{span:4}">
                <Button @click="toHome"> 返回首页</Button>
            </Col>

        </Row>

    </div>
</template>

<script>
    export default {
        name: "SubmitSuccess",
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {
            back(){
                //返回上一层
                this.$router.go(-1)

            },
            toHome() {
                this.$router.replace("main")
            }
        },
        watch: {}
    }
</script>

<style scoped>
    .font-style{
        margin-top: 25px;
        font-size: 50px;
    }
    .submit-success{
        margin-top: 200px;
    }
</style>
