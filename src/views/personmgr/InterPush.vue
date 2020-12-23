<template>
    <div class="job-search">
        <Row class="job-text-title">
            <Col :xl="{span:2}">
                <span>
                    职位搜索:
                </span>
            </Col>
        </Row>
        <Row class="job-text-body">
            <Col :xl="{span:5}">
                <Form :label-width="100" label-colon>
                    <FormItem   label="工作城市"  >
                        <Select v-model="city"  >
                            <Option v-for="city in cityList" :value="city.cityName" :key="city.cityCode">{{city.cityName}}</Option>
                        </Select>
                    </FormItem >
                </Form>
            </Col>
        </Row>

    </div>
</template>

<script>
    export default {
        name: "InterRmd",
        components: {},
        props: {},
        data () {
            return {
                city:"",
                cityList:[
                    {
                        cityCode: 'New York',
                        cityName: 'New York'
                    },
                    {
                        cityCode: 'London',
                        cityName: 'London'
                    },
                    {
                        cityCode: 'Sydney',
                        cityName: 'Sydney'
                    },
                    {
                        cityCode: 'Ottawa',
                        cityName: 'Ottawa'
                    },
                    {
                        cityCode: 'Paris',
                        cityName: 'Paris'
                    },
                    {
                        cityCode: 'Canberra',
                        cityName: 'Canberra'
                    }
                ]
            }
        },
        computed: {

        },
        methods: {},
        watch: {}
    }

</script>

<style scoped>
    .job-search{
        background-color:#eeeeee;


    }
    .job-text-title{
        font-size: 25px;
    }
    .job-text-body{
        padding-top: 10px;
    }
</style>
