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
                        <FormItem label="报销中心:" prop="StaffCode">
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
                        <Table
                            :border="true"
                            :columns="columns"
                            :data="mealDate"
                        >
                            <slot name="header" slot="header" >
                                <Col :xl="{offset:20}">
                                    <Button type="success"  @click="remove(index)">导入excel</Button>
                                    <Button type="error"  @click="remove(index)">删除</Button>
                                    <Button type="error"  @click="addLine(index)">添加</Button>
                                </Col>
                            </slot>
                            <template slot-scope="{row,index}" slot="type">
                                <Select>
                                    <Option value="a">

                                    </Option>
                                </Select>
                            </template>
                            <template slot="money">
                                <Input type="number"></Input>
                            </template>
                            <template slot="date">
                                <DatePicker/>
                            </template>
                            <template slot="code">
                                <Input></Input>
                            </template>
                            <template slot-scope="{ row, index }" slot="action">
                                <Button>费用明细</Button>
                            </template>

                        </Table>
                    </Col>
                </Row>

                <Row>
                    <Col :xl="{span:8,offset:10}" class="submit">
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
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    { title: '费用报销类型',key: 'type', slot: 'type',align: 'center'},
                    { title: '报销金额', key: 'money',slot: 'money',align: 'center'},
                    { title: '报销日期', key: 'date',slot: 'date' ,align: 'center'},
                    { title: '发票编码' ,key:'code' , slot: 'code',align: 'center'},
                    { title: '操作',  slot: 'action',  align: 'center'}
                ],
                mealDate:[
                    {
                        type:'',
                        money:'',
                        date:'',
                        code:'',
                    }
                ],
            }
        },
        computed: {},
        methods: {
            addLine (index) {
                this.mealDate.push({
                    type:'',
                    money:'',
                    date:'',
                    code:'',
                })
                console.log()
            },
            remove (index) {
                this.mealDate.splice(index ,1)
            }
        },
        watch: {}
    }
</script>

<style scoped>
</style>
