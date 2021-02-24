<template>
    <Row>
        <Col>
            <Form ref="formValidate"  :label-width="100" inline>
                <Row>
                    <Divider orientation="left">
                        <p >员工信息</p>
                    </Divider>
                    <Col >
                        <FormItem label="员工编号:" prop="StaffCode" >
                            <Input> </Input>
                        </FormItem>
                        <FormItem label="所在部门:" prop="StaffCode">
                            <Input ></Input>
                        </FormItem>
                        <FormItem label="所属公司:" prop="StaffCode">
                            <Input ></Input>
                        </FormItem>
                    </Col>
                    <Col >
                        <Col >
                            <FormItem label="员工姓名:" prop="StaffCode">
                                <Input ></Input>
                            </FormItem>
                            <FormItem label="部门经理:" prop="StaffCode">
                                <Input ></Input>
                            </FormItem>
                        </Col>
                    </Col>
                </Row>
                <Divider orientation="left">
                    <p>填报申请</p>
                </Divider>
                <Row>
                    <Col>
                        <Table border :columns="columns12" :data="data6">
                            <template slot-scope="{ row }" slot="name">
                                <strong>{{ row.name }}</strong>
                            </template>
                            <template slot-scope="{ row, index }" slot="action">
                                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">费用明细</Button>
                                <Button type="error" size="small" @click="remove(index)">删除</Button>
                            </template>
                        </Table>
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
        </Col>
    </Row>
</template>

<script>
    export default {
        name: "MealExpenses",
        props: {},
        data() {
            return {
                columns12: [
                    { title: '费用报销类型', slot: 'name'},
                    {title: '报销总金额', key: 'age'},
                    {title: '报销日期', key: 'address'},
                    {title: '发票编码' ,key:'aaa'},
                    {title: '操作', slot: 'action', width: 180, align: 'center'}
                ],
                data6: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ]
            }
        },
        computed: {},
        methods: {},
        watch: {}
    }
</script>

<style scoped>

</style>
