<template>
    <div>
        <Card>
            <div class="search-con search-con-top">
                <Form inline :label-width="80">
                    <template v-for="item in columns">
                        <FormItem  :label="`${ item.title}`">
                            <Select v-model="searchKey" class="search-col">
                                <Option v-for="item in columns" v-if="item.key !== 'handle'" :value="item.key" :key="`search-col-${item.key}`">{{ item.title }}</Option>
                            </Select>
                        </FormItem>
                    </template>
                    <Button class="search-btn" type="primary"><Icon type="search"/>&nbsp;&nbsp;搜索</Button>
                </Form>
            </div>
            <Table
                ref="tablesMain"
                :data="insideTableData"
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
                    <Page :total="pageTitle"  show-total show-elevator show-sizer  />
                </slot>
                <slot name="loading" slot="loading"></slot>
            </Table>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "InterRmd",
        components: {},
        props: {},
        data () {
            return {
                pageTitle:40,
                columns: [
                    { title: '职位名称', key: 'name', sortable: true },
                    { title: '工作地点', key: 'city', editable: true },
                    { title: '职位要求', key: 'createTime' },
                    { title: '我要推荐', key: 'push' },

                ],
                insideTableData: [],
                searchKey:"",
                searchValue: '',
            }
        },
        computed: {

        },
        methods: {},
        watch: {}
    }

</script>

<style scoped>
    .search-con {
        padding: 10px 0;
    }
    .search-con .search-col {
        display: inline-block;
        width: 200px;
    }
    .search-con .search-input {
        display: inline-block;
        width: 200px;
        margin-left: 2px;
    }
    .search-con .search-btn {
        margin-left: 2px;
    }
</style>
