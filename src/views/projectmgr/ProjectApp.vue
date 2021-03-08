<template>
    <Form :label-width="120" id="fontSize" >
        <Row >
            <Col :xl="{offset:10,span:14}">
                <h1>项目申请书</h1>
            </Col >
            <Divider/>
            <Col :xl="{offset:2,span:5}">
                <FormItem label="项目编号">
                    <Input ></Input>
                </FormItem>
            </Col>
            <Col :xl="{offset:2,span:5}">
                <FormItem label="项目名称">
                    <Input ></Input>
                </FormItem>
            </Col>
            <Col :xl="{offset:2,span:5}">
                <FormItem label="项目类型">
                    <Select>
                        <Option>

                        </Option>
                    </Select>
                </FormItem>
            </Col>
        </Row>
        <Row >
            <Col :xl="{offset:2,span:5}">
                <FormItem label="项目开始时间">
                    <DatePicker></DatePicker>
                </FormItem>
            </Col>
            <Col :xl="{offset:2,span:5}">
                <FormItem label="预计完工时间">
                    <DatePicker></DatePicker>
                </FormItem>
            </Col>
            <Col :xl="{offset:2,span:5}">
                <FormItem label="预计交付日期">
                    <DatePicker></DatePicker>
                </FormItem>
            </Col>
        </Row>
        <Row >
            <Col :xl="{offset:2,span:5}">
                <FormItem label="项目投入人数">
                    <Input ></Input>
                </FormItem>
            </Col>
            <Col :xl="{offset:2,span:5}">
                <FormItem label="项目申请人">
                    <Input ></Input>
                </FormItem>
            </Col>
            <Col :xl="{offset:2,span:5}">
                <FormItem label="项目申请日期">
                    <DatePicker></DatePicker>
                </FormItem>
            </Col>
        </Row>
        <Row >
            <Col :xl="{offset:2,span:5}">
                <FormItem label="甲方定金">
                    <Input type="number" ></Input>
                </FormItem>
            </Col>
            <Col :xl="{offset:2,span:5}">
                <FormItem label="应付尾款">
                    <Input type="number" ></Input>
                </FormItem>
            </Col>
        </Row>
        <Row >
            <Col :xl="{offset:2,span:5}">
                <FormItem label="项目经理">
                    <Input ></Input>
                </FormItem>
            </Col>
            <Col :xl="{offset:2,span:5}">
                <FormItem label="项目负责人">
                    <Input ></Input>
                </FormItem>
            </Col>
            <Col :xl="{offset:2,span:5}">
                <FormItem label="项目申请日期">
                    <DatePicker></DatePicker>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col :xl="{offset:8,span:2}">
                <Button type="success"  long>提交</Button>
            </Col>
            <Col :xl="{offset:2, span:2}">
                <Button type="primary"  long>重置</Button>
            </Col>
        </Row>
    </Form>
</template>

<script>
    export default {
        name: "ProjectApp",
        props: {},
        data () {
            return {
                projectFrom:{
                    projectName:"",
                }
            }
        },
        computed:{

        },
        methods: {

        },
        watch: {}
    }
</script>

<style scoped>

</style>
