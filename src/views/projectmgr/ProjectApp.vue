<template>
    <div>
        <Form :label-width="100" v-model="projectFrom">
            <Row>
                <Col :xl="{offset:6 ,span:8}">
                    <FormItem label="项目名称">
                        <Input placeholder="项目名称" v-model="projectFrom.projectName"></Input>
                    </FormItem>
                    <FormItem label="项目类型">
                        <Select></Select>
                    </FormItem>
                    <FormItem label="项目负责人">
                        <Input placeholder="项目负责人" v-model="projectFrom.projectName"></Input>
                    </FormItem>
                    <FormItem label="项目申请日期">
                        <DatePicker type="date" placeholder="选择申请日期" :start-date="new Date()"></DatePicker>
                    </FormItem>
                </Col>
            </Row>
        </Form>
    </div>
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
