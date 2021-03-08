<template>
    <div>
        <Tabs value="name1">
            <TabPane label="内推职位" name="name1">
                    <div class="search-con search-con-top">
                        <Form inline :label-width="80">
                            <FormItem  label="职位名称:">
                                <Input v-model="search.job_name"></Input>
                            </FormItem>
                            <FormItem  label="工作地点:">
                                <Input v-model="search.job_addr"></Input>
                            </FormItem>
                            <FormItem  label="薪资:">
                                <Input v-model="search.job_salary"></Input>
                            </FormItem>
                            <Button class="search-btn" type="primary" @click="workSearch"><Icon type="search"/>搜索</Button>
                        </Form>
                    </div>
                    <Table
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
                        <template slot-scope="{ row, index }" slot="workMatch">
                            <Button type="primary" size="small" @click="notView = true">查看</Button>
                            <Modal
                                v-model="notView"
                                title="任职要求"
                                @on-ok="ok"
                                @on-cancel="cancel">
                                个人技能:
                                <p>C / C + +, data structures, software engineering,</p>
                                <p>operating systems, computer networks, databases, compiler theory,</p>
                                <p>computer architecture, Microcomputer Principle and Interface Technology,</p>
                                <p>Computer English, Java, ASP, etc.</p>

                            </Modal>
                        </template>
                        <template slot-scope="{ row, index }" slot="push">
                            <Button type="success" size="small" @click="notPush =true" >上传简历</Button>
                            <Modal
                                v-model="notPush"
                                title="简历投递"
                                @on-ok="ok"
                                @on-cancel="cancel">
                                <Upload
                                    multiple
                                    type="drag"
                                    action="//jsonplaceholder.typicode.com/posts/">
                                    <div style="padding: 20px 0">
                                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                        <p>请上传被推荐人的简历</p>
                                    </div>
                                </Upload>
                            </Modal>
                        </template>
                        <slot name="header" slot="header">
                        </slot>
                        <slot name="footer" slot="footer">
                            <Page :total="tableDate.total"
                                  show-total
                                  show-elevator
                                  show-sizer
                                  :placement="'top'"
                                  :page-size-opts="[10,20,50,100]"
                                  :current="search.current"
                                  @on-change="updatePushCurrentPage"
                                  @on-page-size-change="updatePushPageSize"/>
                        </slot>
                        <slot name="loading" slot="loading"></slot>
                    </Table>
            </TabPane>
            <TabPane label="内推政策" name="name2">

            </TabPane>
        </Tabs>
    </div>
</template>

<script>
    import api from "../../api/api";

    export default {
        name: "InterRmd",
        components: {},
        props: {},
        data () {
            return {
                tableDate: {
                    total:0,
                    records:[],
                },
                columns: [
                    { title: '职位编号' ,key: 'jobId'},
                    { title: '职位名称', key: 'jobName' , sortable: true },
                    { title: '工作地点', key: 'workAddr'   },
                    { title: '薪资'   , key: 'salaryMin' ,sortable: true },
                    { title: '职位要求', key: 'workMatch',slot:'workMatch'},
                    { title: '我要推荐', key: 'push'   , slot:'push'}
                ],
                search:{
                    job_name:'',
                    job_addr:'',
                    job_salary:'',
                    pageSize:10,
                    current:1,
                },


                notView:false,
                notPush:false,
            }
        },
        beforeRouteEnter (to, from, next) {
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当守卫执行前，组件实例还没被创建

            next(vm => {
                // 通过 `vm` 访问组件实例
                api.getWorkInfo().then(
                    resolve=>{
                        vm.tableDate=resolve
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            })
        },
        beforeRouteUpdate (to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
            next()
        },
        computed: {

        },
        methods: {
            workSearch(){
                api.getWorkInfo(this.search).then(
                    res=>{
                        this.tableDate=res
                    },
                    rev=>{
                        console.log(rev);
                    }
                )
            },
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            },
            updatePushCurrentPage(currentPage){
                this.search.current=currentPage
                console.log(this.search)
                api.getWorkInfo(this.search).then(
                    res=>{
                        this.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )

            },
            updatePushPageSize(pageSize){
                this.search.pageSize=pageSize
                console.log(pageSize)
                api.getWorkInfo(this.search).then(
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
    .search-con {
        padding: 10px 0;
    }
    /*.search-con .search-col {*/
    /*    display: inline-block;*/
    /*    width: 200px;*/
    /*}*/
    /*.search-con .search-input {*/
    /*    display: inline-block;*/
    /*    width: 200px;*/
    /*    margin-left: 2px;*/
    /*}*/
    .search-con .search-btn {
        margin-left: 2px;
    }
</style>
