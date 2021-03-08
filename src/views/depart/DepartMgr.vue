<template>
    <div>
        <div class="search-con search-con-top">
            <Form inline :label-width="100">
                <FormItem  label="部门编号:">
                    <Input v-model="search.departId"></Input>
                </FormItem>
                <FormItem  label="部门名称:">
                    <Input v-model="search.departName"></Input>
                </FormItem>
                <FormItem  label="部门经理:">
                    <Input v-model="search.departMgr"></Input>
                </FormItem>
                <Button class="search-btn" type="primary" icon="md-search" @click="DepartInfoSearch"></Button>
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

            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small"  @click="departAdd()">添加部门员工</Button>
                <Modal
                    v-model="departAddStaff"
                    title="加入员工"
                    :width="780"
                    @on-ok="departAddStaffOK"
                    @on-cancel="cancel">
                    <depart-add-staff :table-date="staffInfo"/>

                </Modal>


                <Button type="error" size="small" @click="removeDepart=true">删除</Button>
                <Modal
                    v-model="removeDepart"
                    title="加入员工"
                    @on-ok="departAddStaffOK"
                    @on-cancel="cancel">

                </Modal>
                <Button type="error" size="small" @click="isUpdateDepart=true">修改</Button>
            </template>


            <slot name="header" slot="header">
                <Col :xl="{offset:22}">
                    <Button  type="success"  @click="isAddDepart = true" >新增部门</Button>
                </Col>
                <Modal
                    :width="520"
                    v-model="isAddDepart"
                    title="添加部门"
                    @on-ok="isAddDepartOK"
                    @on-cancel="cancel">
                    <Form :label-width="100" label-position="left" show-message v-model="isAddDepart">
                        <Row>
                            <Col>
                                <FormItem label="部门编号:" >
                                    <Input v-model="addDepart.deptId"> </Input>
                                </FormItem>
                                <FormItem label="部门名称:" >
                                    <Input v-model="addDepart.deptName"> </Input>
                                </FormItem>
                                <FormItem label="部门人数:" >
                                    <Input v-model="addDepart.deptStaffCount"> </Input>
                                </FormItem>
                                <FormItem label="部门最大人数:" >
                                    <Input v-model="addDepart.deptStaffMax"> </Input>
                                </FormItem>
                                <FormItem label="部门经理:" >
                                    <Input v-model="addDepart.deptMgr"> </Input>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </Modal>
                <Modal
                    v-model="isUpdateDepart"
                    title="修改部门"
                    @on-ok="isUpdateDepartOK"
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
                />
            </slot>
            <slot name="loading" slot="loading"></slot>
        </Table>
    </div>
</template>

<script>
    import api from "../../api/api";
    import AddDepart from "../../components/menu/AddDepart";
    import DepartAddStaff from "../../components/menu/DepartAddStaff";

    export default {
        name: "DepartMgr",
        components: {DepartAddStaff, AddDepart},
        props: {},
        data() {
            return {
                tableDate: {
                    total:0,
                    records:[],
                },
                staffInfo:{},
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    { title: '部门编号' ,key:'deptId', align: 'center'},
                    { title: '部门名称', key: 'deptName' ,sortable: true,align: 'center' },
                    { title: '部门经理',  key: 'deptMgr' ,align: 'center'},
                    { title: '部门人数',key: 'deptStaffCount', sortable: true,align: 'center' },
                    { title: '最大人数',key: 'deptStaffMax',align: 'center'},
                    { title: '操作' ,key: 'addStaff', slot: 'action',align: 'center'}
                ],
                search:{
                    departId:'',
                    departName:'',
                    departMgr:'',
                    pageSize:10,
                    current:1,
                },
                viewInfo:false,
                depart:[],
                isAddDepart:false,
                isUpdateDepart:false,
                removeDepart:false,
                departAddStaff:false,
                addDepart:{
                    deptId:'',
                    deptName:'',
                    deptStaffCount:'',
                    deptStaffMax:'',
                    deptMgr:'',
                },
            }
        },
        beforeRouteEnter(to,from,next){
            next(vm => {
                // 通过 `vm` 访问组件实例
                api.getDepartInfo().then(
                    res=>{
                        vm.tableDate=res
                        console.log(res)
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
                api.getDepartName().then(
                    res=>{
                        vm.depart=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            })
        },
        methods: {
            isUpdateDepartOK () {
                this.$Message.success('提交成功');
            },
            isAddDepartOK(){
                api.insertDepart(this.addDepart).then(
                    res=>{
                        this.$Message.success('提交成功')
                    },
                    rej=>{
                        this.$Message.error("提交失败")
                        console.log(rej)
                    }
                )


            },
            /**
             * 点击添加员工按钮触发的方法
             */
            departAdd(){
                this.departAddStaff=true
                api.getStaffInfoList().then(
                    res=>{
                        this.staffInfo=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            },
            /**
             * 添加员工提交的方法
             */
            departAddStaffOK(){

            },
            cancel () {
                this.$Message.info('取消成功');
            },

            updateCurrentPage(currentPage){
                this.search.current=currentPage
                api.getDepartInfo(this.search).then(
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
                console.log(this.search)
                api.getDepartInfo(this.search).then(
                    res=>{
                        this.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            },
            DepartInfoSearch(){
                api.getDepartInfo(this.search).then(
                    res=>{
                        this.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            },
        },
        computed: {
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
