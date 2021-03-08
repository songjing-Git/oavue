<template>
    <div>
        <div class="search-con search-con-top">
            <Form inline :label-width="100">
                <FormItem  label="项目名称:">
                    <Input v-model="search.projectName"></Input>
                </FormItem>
                <FormItem  label="项目编号:">
                    <Input v-model="search.projectId"></Input>
                </FormItem>
                <FormItem  label="项目负责人:">
                    <Input v-model="search.projectBoss"></Input>
                </FormItem>
                <Button class="search-btn" type="primary" ><Icon type="ios-search"/></Button>
            </Form>
        </div>
        <Table
            ref="tablesMain"
            :data="tableDate.records"
            :columns="columns"
            :stripe="true"
            :border="true"
            :show-header="true"
            :disabled-hover="false"
            :highlight-row="true"
            no-data-text="数据为空时显示的提示内容"
            no-filtered-data-text="筛选数据为空时显示的提示内容"
        >

            <template slot-scope="{row ,index}" slot="projectState">
                <div v-if="1">
                    <Tag color="success">已交付</Tag>
                </div>
                <div v-else-if="2">
                    <Tag color="primary">执行中</Tag>
                </div>
                <div v-else-if="3">
                    <Tag color="success">已交付</Tag>
                </div>
                <div v-else-if="4">
                    <Tag color="success">撤销</Tag>
                </div>
                <div v-else-if="5">
                    <Tag color="warning">紧急</Tag>
                </div>
                <div v-else>
                    <Tag color="error">延期</Tag>
                </div>
            </template>
            <template slot-scope="{row,index}" slot="action">
                <Button>修改</Button>
            </template>
            <slot name="header" slot="header">
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
    export default {
        name: "ProjectInfo",
        components: {},
        props: {},
        data() {
            return {
                search:{
                    projectName:'',
                    projectId:'',
                    projectBoss:'',
                    pageSize:10,
                    current:1,
                },
                pageTitle:40,
                tableDate: {
                    total:0,
                    records:[],
                },
                columns:[
                    {title:'项目编号',key:'projectId',align:'center'},
                    {title:'项目名称',key:'projectName',align:'center'},
                    {title:'项目类型',key:'projectType',align:'center'},
                    {title:'项目状态',key:'projectState',slot:'projectState',align:'center'},
                    {title:'立项时间',key:'projectStartDate',align:'center'},
                    {title:'项目工期',key:'projectTime',align:'center'},
                    {title:'预计完工时间',key:'projectEndDate',align:'center'},
                    {title:'参与部门',key:'joinDepart',align:'center'},
                    {title:'项目负责人',key:'leadingPerson',align:'center'},
                    {title:'联系电话',key:'phone',align:'center'},
                    {title:'最终审核人',key:'assessor3',align:'center'},
                    {title:'操作',slot:'action',align: 'center' ,key:'action'}
                ]

            }
        },
        beforeRouteEnter(to,from,next){
            next(vm => {
                // 通过 `vm` 访问组件实例
                api.selectProInfo().then(
                    res=>{
                        vm.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            })
            next()
        },
        computed: {

        },
        methods: {
            onIsSearch(){
                this.isShow=!this.isShow
            },
            addStaff(){

            },
            updateStaff(){

            },
            updateCurrentPage (current) {
                this.search.current=current
                api.selectProInfo(this.search).then(
                    res=>{
                        this.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            },
            updatePageSize () {
                this.search.pageSize=pageSize
                api.selectProInfo(this.search).then(
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

</style>
