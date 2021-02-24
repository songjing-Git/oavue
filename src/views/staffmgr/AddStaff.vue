<template>
    <Form ref="formValidate"  :label-width="100" inline>
        <Row>
            <Divider orientation="left">
                <p >员工信息</p>
            </Divider>
            <Col :xl="{offset: 2}">
                <FormItem label="员工编号:" prop="StaffCode" >
                    <Input> </Input>
                </FormItem>
                <FormItem label="所在部门:" prop="StaffCode">
                    <Input ></Input>
                </FormItem>
                <FormItem label="员工职级:" prop="StaffCode">
                    <Input ></Input>
                </FormItem>
                <FormItem label="所属公司:" prop="StaffCode">
                    <Input ></Input>
                </FormItem>
            </Col>
            <Col :xl="{offset: 2}">
                <Col >
                    <FormItem label="员工姓名:" prop="StaffCode">
                        <Input ></Input>
                    </FormItem>
                    <FormItem label="部门经理:" prop="StaffCode">
                        <Input ></Input>
                    </FormItem>
                    <FormItem label="员工入职日期:" prop="StaffCode">
                        <DatePicker type="date" ></DatePicker>
                    </FormItem>
                </Col>
            </Col>
        </Row>

        <Row>
            <Col :xl="{span:8,offset:10}">
                <FormItem>
                    <Button type="primary" >提交审批</Button>
                    <Button style="margin-left: 8px">返回</Button>
                </FormItem>
            </Col>
        </Row>
    </Form>
</template>

<script>
    export default {
        name: "AddStaff",
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
