<template>
    <div style="text-align:center">
        <div >
            <Row :gutter="20">
                <Col :xl="{span:8}">
                    <a>
                        <Card>
                            <div >
                                <h1>产品需求文档</h1>
                                <p>产品需求编写,将需求提交给开发</p>
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
                            <p>使用架构师指定的技术</p>
                            <p>
                                通过编写前端代码,做出与UI设计师一样的界面
                            </p>
                        </Card>
                    </a>
                </Col>
                <Col :xl="{span:8}">
                    <a>
                        <Card>
                            <h1>前端测试</h1>
                            <p>测试前端漏洞,给用户无缺的体验</p>
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
                                <p>与前端对接,负责编写前端所需的接口,处理好逻辑代码</p>
                                <p>与架构师交流,保证亿级并发的访问量</p>
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
                            <p>测试java工程师的逻辑是否有误,避免bug出现,进行压力测试,编写测试脚本</p>
                        </Card>
                    </a>
                </Col>
                <Col :xl="{span:8}">
                    <a>
                        <Card>
                            <h1>项目部署</h1>
                            <p>查看项目部署主机,服务信息,集群,分布式要求</p>
                        </Card>
                    </a>
                </Col>
            </Row>
            <div style="margin-top: 10px">
                <Row :gutter="20">
                    <Col>
                        <a>
                            <Card>
                                <h1>UI设计</h1>
                                <p>负责将制作好的图片上传给前端工程师</p>
                            </Card>
                        </a>

                    </Col>
                </Row>
            </div>
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
