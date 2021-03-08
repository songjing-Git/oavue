<template>
    <div style="text-align:center">
        <div >
            <Row :gutter="20">
                <Col :xl="{span:8}">
                    <a>
                        <Card>
                            <div >
                                <h1>产品需求文档</h1>
                            </div>

                        </Card>
                    </a>
                </Col>
                <Col :xl="{span:8}">
                    <a>
                        <Card>
                            <h1>
                                前端开发
                            </h1>
                        </Card>
                    </a>
                </Col>
                <Col :xl="{span:8}">
                    <a>
                        <Card>
                            <h1>前端测试</h1>
                        </Card>
                    </a>
                </Col>
            </Row>
        </div>
        <div style="margin-top: 10px">
            <Row :gutter="20">
                <Col :xl="{span:8}">
                    <a>
                        <router-link to="/home">
                            <Card>
                                <h1>后端开发</h1>

                            </Card>
                        </router-link>
                    </a>
                </Col>
                <Col :xl="{span:8}">
                    <a>
                        <Card>
                            <h1>
                                后端测试
                            </h1>
                        </Card>
                    </a>
                </Col>
                <Col :xl="{span:8}">
                    <a>
                        <Card>
                            <h1>项目部署</h1>
                        </Card>
                    </a>
                </Col>
            </Row>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ProjectTask",
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
        watch: {}
    }
</script>

<style scoped>

</style>
