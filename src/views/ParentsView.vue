<template>
    <div>
        <Row :gutter="20">
            <Col :xl="{span:16}">
                <Carousel v-model="value1" :height="300" loop>
                    <CarouselItem v-for="(item,index) in carouselList" :key="`carousel-${index}`">
                        <div class="demo-carousel"></div>
                    </CarouselItem>
                </Carousel>
            </Col>
            <Col :xl="{span:8}">
                <div>

                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "ParentsView",
        props: {},
        data() {
            return {
                value1: 0,
                carouselList:[
                    1,2,3,4,5
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
