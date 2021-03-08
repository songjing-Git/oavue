<template>
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
        <slot name="footer" slot="footer">
            <Page :total="tableDate.total"
                  show-total
                  show-elevator
                  show-sizer
                  :placement="'top'"
                  :current="current"
                  :page-size-opts="[10,20,50,100]"
                  @on-change="updateCurrentPage"
                  @on-page-size-change="updatePageSize"
            />
        </slot>
        <slot name="loading" slot="loading"></slot>
    </Table>
</template>

<script>
    import api from "../../api/api";

    export default {
        name: "DepartAddStaff",
        props: {
            tableDate: {
                total:0,
                records:[],
            },
        },
        data() {
            return {

                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    { title: '员工编号' ,key:'STAFF_ID', align: 'center'},
                    { title: '员工姓名', key: 'STAFF_NAME' ,sortable: true,align: 'center' },
                    { title: '性别',  key: 'GENDER' ,align: 'center'},
                    { title: '在职状态',key: 'WORK_STATE',align: 'center'},
                    { title: '联系方式' , key: 'PHONE',align: 'center'},
                    { title: '职位等级' , key: 'JOB_LEVEL_NAME',align: 'center'},

                ],
                current:1,
                pageSize:10,
            }
        },
        computed: {},
        methods: {
            updateCurrentPage(currentPage){
                this.current=currentPage
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
                this.pageSize=pageSize
                api.getStaffInfoList(this.search).then(
                    res=>{
                        this.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            },
        },
        watch: {}
    }
</script>

<style scoped>

</style>
