<template>
    <div class="custom-bread-crumb">
        <Breadcrumb :style="{fontSize: `${fontSize}px`}">
            <BreadcrumbItem v-for="item in list" :to="item.to" :key="`bread-crumb-${item.name}`">
                <Icon style="margin-right: 4px;" :type="item.icon || ''"/>
                {{ showTitle(item) }}
            </BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>

<script>
    import {showTitle} from "../../utils/util";

    export default {
        name: "custom-bread-crumb",
        props: {
            list: {
                type: Array,
                default: () => []
            },
            fontSize: {
                type: Number,
                default: 14
            },
            showIcon: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            showTitle (item) {
                return showTitle(item, this)
            },
            isCustomIcon (iconName) {
                return iconName.indexOf('_') === 0
            },
            getCustomIconName (iconName) {
                return iconName.slice(1)
            }
        },
        watch: {}
    }
</script>

<style scoped>
    .custom-bread-crumb{
        display: inline-block;
        vertical-align: top;
    }
</style>
