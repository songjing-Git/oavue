<template>
    <div>
        <Row>
            <Col>
                <Form ref="formValidate"  :label-width="100">
                        <Row>
                            <Col>
                                <FormItem label="填报类型:" prop="ChangeType">
                                    <RadioGroup >
                                        <Radio label="MySelf">本人填报</Radio>
                                        <Radio label="Others">代理填报</Radio>
                                    </RadioGroup>
                                </FormItem>
                            </Col>
                            <Divider orientation="left">
                                <p >员工信息</p>
                            </Divider>
                            <Col :xl="{offset:4,span:5}">
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
                            <Col :xl="{offset:4,span:5}">
                                <Col >
                                    <FormItem label="员工姓名:" prop="StaffCode">
                                        <Input ></Input>
                                    </FormItem>
                                    <FormItem label="部门经理:" prop="StaffCode">
                                        <Input ></Input>
                                    </FormItem>
                                    <FormItem label="员工入职日期:" prop="StaffCode">
                                        <Input ></Input>
                                    </FormItem>
                                    <FormItem label="期望离职日期:" prop="StaffCode">
                                        <Input ></Input>
                                    </FormItem>
                                </Col>
                            </Col>
                        </Row>
                        <Divider orientation="left">
                            <p>离职原因及对公司的评价</p>
                        </Divider>
                        <Row>
                            <Col>
                                <FormItem label="Hobby:" prop="interest">
                                    <CheckboxGroup >
                                        <Checkbox label="Eat"></Checkbox>
                                        <Checkbox label="Sleep"></Checkbox>
                                        <Checkbox label="Run"></Checkbox>
                                        <Checkbox label="Movie"></Checkbox>
                                    </CheckboxGroup>
                                </FormItem>

                                <FormItem label="填报类型:" prop="ChangeType">
                                    <RadioGroup >
                                        <Radio label="MySelf">本人填报</Radio>
                                        <Radio label="Others">代理填报</Radio>
                                    </RadioGroup>
                                </FormItem>
                                <FormItem label="Desc" prop="desc">
                                    <Input  type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                                </FormItem>
                            </Col>
                            <Col>
                                <Divider orientation="left">
                                    <p>评分表</p>
                                </Divider>
                                <FormItem label="给公司评分:">
                                    <Rate v-model="value" />
                                </FormItem>
                            </Col>
                            <Col>
                                <Divider orientation="left">
                                    <p>离职信</p>
                                </Divider>
                                <Upload
                                    multiple
                                    type="drag"
                                    action="//jsonplaceholder.typicode.com/posts/">
                                    <div style="padding: 20px 0">
                                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                        <p>Click or drag files here to upload</p>
                                    </div>
                                </Upload>
                            </Col>
                            <Col>
                                <Divider orientation="left">
                                    <p>您的联系方式</p>
                                </Divider>
                            </Col>
                        </Row>
                        <Row>
                            <Col :xl="{span:8,offset:10}">
                                <FormItem>
                                    <Button type="primary" >Submit</Button>
                                    <Button style="margin-left: 8px">Reset</Button>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
            </Col>
        </Row>
    </div>

</template>

<script>
    export default {
        name: "LeaveDeal",
        props: {},
        data() {
            return {
                value:0
            }
        },
        computed: {},
        methods: {},
        watch: {}
    }
</script>

<style scoped>

</style>
