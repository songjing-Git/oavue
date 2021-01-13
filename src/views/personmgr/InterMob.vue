<template>
    <div>
        <Row>
            <Col>
               <Card>
                   <Steps :current="0" status="process">
                       <Step title="职位调动申请" content="这里是该步骤的描述信息"></Step>
                       <Step title="待审批" content="这里是该步骤的描述信息"></Step>
                       <Step title="审批中" content="这里是该步骤的描述信息"></Step>
                       <Step title="审批完成" content="这里是该步骤的描述信息"></Step>
                   </Steps>
               </Card>
            </Col>
        </Row>
        <Row >
            <Col>
                <Card>
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
                        <Row>
                            <Col :xl="{offset:8,span:6}">
                                <FormItem label="变更类型:" prop="ChangeType">
                                    <RadioGroup v-model="formValidate.ChangeType">
                                        <Radio label="DeptType">部门变更</Radio>
                                        <Radio label="PostType">岗位变更</Radio>
                                        <Radio label="DeptAndPost">部门及岗位变更</Radio>
                                    </RadioGroup>
                                </FormItem>
                                <FormItem label="员工编号" prop="StaffCode">
                                    <Input v-model="formValidate.StaffCode" placeholder="Enter your StaffCode"></Input>
                                </FormItem>
                                <FormItem label="员工姓名" prop="StaffName">
                                    <Input v-model="formValidate.StaffName" placeholder="Enter your StaffName"></Input>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col :xl="{offset:3,span:6}">
                                <FormItem label="转出部门:" prop="OutDept">
                                    <Input v-model="formValidate.StaffName"  disabled></Input>
                                </FormItem>
                                <FormItem label="转出岗位:" prop="OutJob">
                                    <Input v-model="formValidate.StaffName"  disabled></Input>
                                </FormItem>
                                <FormItem label="部门负责人:" prop="OutDeptMgr">
                                    <Input v-model="formValidate.StaffName"  disabled></Input>
                                </FormItem>
<!--                                <FormItem label="Date">-->
<!--                                    <Row>-->
<!--                                        <Col span="11">-->
<!--                                            <FormItem prop="date">-->
<!--                                                <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>-->
<!--                                            </FormItem>-->
<!--                                        </Col>-->
<!--                                        <Col span="2" style="text-align: center">-</Col>-->
<!--                                        <Col span="11">-->
<!--                                            <FormItem prop="time">-->
<!--                                                <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>-->
<!--                                            </FormItem>-->
<!--                                        </Col>-->
<!--                                    </Row>-->
<!--                                </FormItem>-->

<!--                                <FormItem label="Hobby" prop="interest">-->
<!--                                    <CheckboxGroup v-model="formValidate.interest">-->
<!--                                        <Checkbox label="Eat"></Checkbox>-->
<!--                                        <Checkbox label="Sleep"></Checkbox>-->
<!--                                        <Checkbox label="Run"></Checkbox>-->
<!--                                        <Checkbox label="Movie"></Checkbox>-->
<!--                                    </CheckboxGroup>-->
<!--                                </FormItem>-->
                                <FormItem label="Desc" prop="desc">
                                    <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                                </FormItem>
                            </Col>
                            <Col :xl="{offset:3,span:6}">
                                <FormItem label="转入部门" prop="ToDept">
                                    <Select v-model="formValidate.city" placeholder="请输入您申请转入的部门">
                                        <Option value="beijing">New York</Option>
                                        <Option value="shanghai">London</Option>
                                        <Option value="shenzhen">Sydney</Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="转入岗位" prop="ToJob">
                                    <Select v-model="formValidate.city" placeholder="请输入您申请转入的岗位">
                                        <Option value="beijing">New York</Option>
                                        <Option value="shanghai">London</Option>
                                        <Option value="shenzhen">Sydney</Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="部门负责人:" prop="ToDeptMgr">
                                    <Input v-model="formValidate.StaffName" placeholder="Enter your DeptMgr"></Input>
                                </FormItem>
                                <FormItem label="薪水:" prop="salary">
                                    <Input v-model="formValidate.StaffName" placeholder="Enter your salary"></Input>
                                </FormItem>
                                <FormItem label="职级:" prop="salary">
                                    <Input v-model="formValidate.StaffName" placeholder="Enter your salary"></Input>
                                </FormItem>
<!--                                <FormItem label="Date">-->
<!--                                    <Row>-->
<!--                                        <Col span="11">-->
<!--                                            <FormItem prop="date">-->
<!--                                                <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>-->
<!--                                            </FormItem>-->
<!--                                        </Col>-->
<!--                                        <Col span="2" style="text-align: center">-</Col>-->
<!--                                        <Col span="11">-->
<!--                                            <FormItem prop="time">-->
<!--                                                <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>-->
<!--                                            </FormItem>-->
<!--                                        </Col>-->
<!--                                    </Row>-->
<!--                                </FormItem>-->

<!--                                <FormItem label="Hobby" prop="interest">-->
<!--                                    <CheckboxGroup v-model="formValidate.interest">-->
<!--                                        <Checkbox label="Eat"></Checkbox>-->
<!--                                        <Checkbox label="Sleep"></Checkbox>-->
<!--                                        <Checkbox label="Run"></Checkbox>-->
<!--                                        <Checkbox label="Movie"></Checkbox>-->
<!--                                    </CheckboxGroup>-->
<!--                                </FormItem>-->
                                <FormItem label="Desc" prop="desc">
                                    <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                                </FormItem>
                            </Col>
                        </Row>

                        <Row>
                            <Col :xl="{span:6,offset:8}">
                                <FormItem>
                                    <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                                    <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>

    export default {
        name: "InterMob",
        props: {},
        data () {
            return {
                formValidate: {
                    StaffName: '',
                    StaffCode: '',
                    city: '',
                    ChangeType: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    StaffName: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    StaffCode: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    // city: [
                    //     { required: true, message: 'Please select the city', trigger: 'change' }
                    // ],
                    // ChangeType: [
                    //     { required: true, message: 'Please select gender', trigger: 'change' }
                    // ],
                    // interest: [
                    //     { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                    //     { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    // ],
                    // date: [
                    //     { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    // ],
                    // time: [
                    //     { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    // ],
                    // desc: [
                    //     { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                    //     { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    // ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        },
        watch: {}
    }
</script>

<style scoped>

</style>
