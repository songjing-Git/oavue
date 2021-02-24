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
            :data="tableDate"
            :columns="columns"
            :stripe="true"
            :border="false"
            :show-header="true"
            :disabled-hover="false"
            :highlight-row="true"
            no-data-text="数据为空时显示的提示内容"
            no-filtered-data-text="筛选数据为空时显示的提示内容"
        >

            <slot name="header" slot="header">
            </slot>
            <slot name="footer" slot="footer">
                <Page :total="pageTitle"

                      show-total
                      show-elevator
                      show-sizer
                      :placement="'top'"
                      :page-size-opts="[10,20,50,100]"
                      />
            </slot>
            <slot name="loading" slot="loading"></slot>
        </Table>
    </div>
</template>

<script>


    export default {
        name: "ProjectInfo",
        components: {},
        props: {},
        data() {
            return {
                search:{
                    projectName:'',
                    projectId:'',
                    projectBoss:''
                },
                pageTitle:40,
                tableDate: [],
                columns:[
                    {title:'项目编号',key:'projectId'},
                    {title:'项目名称',key:'projectName'},
                    {title:'项目类型',key:'projectType'},
                    {title:'立项时间',key:'projectStartDate'},
                    {title:'项目工期',key:'projectTime'},
                    {title:'预计完工时间',key:'projectEndDate'},
                    {title:'参与部门',key:'joinDepart'},
                    {title:'项目负责人',key:'leadingPerson'},
                    {title:'联系电话',key:'phone'},
                    {title:'最终审核人',key:'assessor3'},



                ]

            }
        },
        beforeRouteEnter(to,from,next){
            /*next(vm => {
                // 通过 `vm` 访问组件实例
                api.getStaffInfoList().then(
                    res=>{
                        console.log(res);
                        vm.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            })*/
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
        },
        watch: {}
    }
</script>

<style scoped>

</style>
