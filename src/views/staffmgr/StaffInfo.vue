<template>
    <div>
        <div class="search-con search-con-top">
            <Form inline :label-width="100">
                <FormItem  label="员工编号:">
                    <Input v-model="search.staffId"></Input>
                </FormItem>
                <FormItem  label="员工名称:">
                    <Input v-model="search.staffName"></Input>
                </FormItem>
                <FormItem  label="所属部门:">
                    <Input v-model="search.deptName"></Input>
                </FormItem>
                <FormItem  label="员工职级:">
                    <Input v-model="search.jobName"></Input>
                </FormItem>
                <template v-if="isShow">
                    <FormItem  label="联系电话:">
                        <Input v-model="search.phone"></Input>
                    </FormItem>
                    <FormItem  label="上级:">
                        <Input v-model="search.mgrName"></Input>
                    </FormItem>
                    <FormItem  label="邮箱:">
                        <Input v-model="search.email">
                            <span slot="append">@qq.com</span>
                        </Input>
                    </FormItem>
                </template>
                <Button class="search-btn" type="primary" icon="ios-search" @click="StaffInfoSearch">搜索</Button>
                <Button class="search-btn" type="primary" :icon="isShow?`ios-arrow-up`:`ios-arrow-down`" @click="onIsSearch" ></Button>

            </Form>
        </div>
        <Table
            border="true"
            ref="tablesMain"
            :data="tableDate.records"
            :columns="columns"
            :stripe="true"
            :border="false"
            :show-header="true"
            :disabled-hover="false"
            :highlight-row="true"
            no-data-text="数据为空时显示的提示内容"
            no-filtered-data-text="筛选数据为空时显示的提示内容"
        >
            <template slot-scope="{ row, index }" slot="addInfo">
                <div>
                    <info-drawer :rowData="row"></info-drawer>
                </div>
            </template>

            <slot name="header" slot="header">
                <Button type="error"  @click="isAddStaff = true" style="margin-left: 90%">新增</Button>
                <Modal
                    :width="780"
                    v-model="isAddStaff"
                    title="添加员工"
                    @on-ok="quit"
                    @on-cancel="cancel">
                    <Form :label-width="100" label-position="left" show-message v-model="addStaff">
                        <Row>
                            <Col :xl="{span:12}">
                                <FormItem label="员工编号:" >
                                    <Input > </Input>
                                </FormItem>
                                <FormItem label="员工姓名:" prop="StaffCode" required>
                                    <Input ></Input>
                                </FormItem>
                                <FormItem label="所属部门:" prop="StaffCode">
                                    <Input ></Input>
                                </FormItem>
                                <FormItem label="员工职级:" prop="StaffCode">
                                    <Input ></Input>
                                </FormItem>
                                <FormItem label="担任职位:" prop="StaffCode">
                                    <Input ></Input>
                                </FormItem>
                                <FormItem label="入职日期:" prop="StaffCode">
                                    <DatePicker type="date" ></DatePicker>
                                </FormItem>
                            </Col>
                            <Col :xl="{span:11,offset:1}">
                                <FormItem label="员工编号:" >
                                    <Input > </Input>
                                </FormItem>
                                <FormItem label="员工姓名:" prop="StaffCode" required>
                                    <Input ></Input>
                                </FormItem>
                                <FormItem label="所属部门:" prop="StaffCode">
                                    <Input ></Input>
                                </FormItem>
                                <FormItem label="员工职级:" prop="StaffCode">
                                    <Input ></Input>
                                </FormItem>
                                <FormItem label="担任职位:" prop="StaffCode">
                                    <Input ></Input>
                                </FormItem>
                                <FormItem label="入职日期:" prop="StaffCode">
                                    <DatePicker type="date" ></DatePicker>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>


                </Modal>
                <Button type="error"  @click="isUpdateStaff=true">修改</Button>
                <Modal
                    v-model="isUpdateStaff"
                    title="修改员工"
                    @on-ok="quit"
                    @on-cancel="cancel">

                </Modal>
            </slot>
            <slot name="footer" slot="footer">
                <Page :total="tableDate.total"
                      show-total
                      show-elevator
                      show-sizer
                      :placement="'top'"
                      :current="search.current"
                      :page-size-opts="[10,20,50,100]"
                      @on-change="updateCurrentPage"
                      @on-page-size-change="updatePageSize"
                @/>
            </slot>
            <slot name="loading" slot="loading"></slot>
        </Table>
    </div>
</template>

<script>
    import api from "../../api/api";
    import InfoDrawer from "../../components/menu/InfoDrawer";

    export default {
        name: "StaffInfo",
        components: {InfoDrawer},
        props: {},
        data() {
            return {
                tableDate: {
                    total:0,
                    records:[],
                },
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    { title: '员工编号' ,key:'STAFF_ID', align: 'center'},
                    { title: '员工姓名', key: 'STAFF_NAME' ,sortable: true,align: 'center' },
                    { title: '性别',  key: 'GENDER' ,align: 'center'},
                    { title: '生日',key: 'BIRTHDAY', sortable: true,align: 'center' },
                    { title: '在职状态',key: 'WORK_STATE',align: 'center'},
                    { title: '联系方式' , key: 'PHONE',align: 'center'},
                    { title: '所属部门' , key: 'DEPT_NAME' ,align: 'center'},
                    { title: '职位等级' , key: 'JOB_LEVEL_NAME',align: 'center'},
                    { title: '薪资' ,key: 'PAYBALE_SALARY' ,align: 'center'},
                    { title: '更多信息' ,slot: 'addInfo',align: 'center'},
                ],
                search:{
                    staffId:'',
                    staffName:'',
                    deptName:'',
                    jobName:'',
                    mgrName:'',
                    email:'',
                    phone:'',
                    pageSize:10,
                    current:1,
                },
                viewInfo:false,
                pStyle: {
                    fontSize: '16px',
                    color: 'rgba(20,20,20,0.1)',
                    lineHeight: '24px',
                    display: 'block',
                    marginBottom: '16px'
                },

                addStaff:{

                },
                isShow:false,
                isAddStaff:false,
                isUpdateStaff:false,


            }
        },
        beforeRouteEnter(to,from,next){
            next(vm => {
                // 通过 `vm` 访问组件实例
                api.getStaffInfoList().then(
                    res=>{
                        vm.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            })
        },
        computed: {
        },
        methods: {
            onIsSearch(){
                this.isShow=!this.isShow
            },
            quit () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            },
            updateCurrentPage(currentPage){
                this.search.current=currentPage
                api.getStaffInfoList(this.search).then(
                    res=>{
                        this.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )

            },
            updatePageSize(pageSize){
                this.search.pageSize=pageSize
                api.getStaffInfoList(this.search).then(
                    res=>{
                        this.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            },
            StaffInfoSearch(){
                api.getStaffInfoList(this.search,this.tableDate).then(
                    res=>{
                        this.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            }
        },
        watch: {}
    }
</script>

<style scoped>
    .demo-drawer-profile{
        font-size: 14px;
    }
    .demo-drawer-profile .ivu-col{
        margin-bottom: 12px;
    }
</style>
