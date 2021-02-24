<template>
    <div>
        <!--<Row>
            <Col :xl="11">
                <Carousel v-model="value" loop>
                    <CarouselItem>
                        <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg" >
                    </CarouselItem>
                    <CarouselItem>
                        <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg" >
                    </CarouselItem>
                    <CarouselItem>
                        <img src="https://static.runoob.com/images/mix/img_mountains_wide.jpg" >
                    </CarouselItem>
                    <CarouselItem>
                        <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg" >
                    </CarouselItem>
                </Carousel>
            </Col>
            <Col :xl="{offset:1,span:8}">
                <carder></carder>
            </Col>
        </Row>
        <Row>
            <Col>
                <Col :xl="{offset:3,span:10}">
                    <i-circle :percent="80" :size="280" :stroke-width="10" :trail-width="10"  stroke-linecap="square">
                        <span class="demo-Circle-inner" style="font-size:24px">80%</span>
                    </i-circle>
                </Col>
                <Col :xl="{offset:3}">
                    <i-circle :percent="100" :size="280" :stroke-width="10" :trail-width="10"  stroke-linecap="square">
                        <Icon type="ios-checkmark" size="100" style="color:#5cb85c"></Icon>
                        <Icon type="ios-close" size="100" style="color:#ff5500"></Icon>
                    </i-circle>
                </Col>
            </Col>
        </Row>-->
        <Row>
            <Col>
                <List item-layout="vertical">
                    <ListItem v-for="item in data" :key="item.title">
                        <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
                        {{ item.content }}
                        <template slot="action">
                            <li>
                                <Icon type="ios-star-outline" /> 123
                            </li>
                            <li>
                                <Icon type="ios-thumbs-up-outline" /> 234
                            </li>
                            <li>
                                <Icon type="ios-chatbubbles-outline" /> 345
                            </li>
                        </template>
                        <template slot="extra">
                            <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px">
                        </template>
                    </ListItem>
                </List>
            </Col>
        </Row>
        <Row>
            <Col>

            </Col>
        </Row>
         <Divider orientation="center" :dashed="true">
            <br>
            <p>songjing@湖南城市学院-信息与计算科学</p>
            <a href="http://beian.miit.gov.cn">湘ICP备2021000328号</a>
        </Divider>
    </div>

</template>

<script>

    export default {
        name: "MainView",
        components: {},
        props: {},
        data() {
            return {
                value:0,
                data: [
                    {
                        title: 'This is title 1',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 2',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 3',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 4',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 5',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 6',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    }
                ]
            }
        },
        computed: {},
        methods: {},
        watch: {}
    }
</script>

<style scoped>

</style>
