<template>
    <a @click="handleChange" type="text" :class="['sider-trigger-a', collapsed ? 'collapsed' : '']"><Icon :type="icon" :size="size" /></a>
</template>

<script>
    export default {
        name: "sider-trigger",
        props: {
            collapsed: Boolean,
            icon: {
                type: String,
                default: 'navicon-round'
            },
            size: {
                type: Number,
                default: 26
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            handleChange () {
                this.$emit('on-change', !this.collapsed)
            }
        },
        watch: {}
    }
</script>

<style scoped>
    .trans {
        transition: transform 0.2s ease;
    }
    .sider-trigger-a {
        padding: 6px;
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        color: #5c6b77;
        margin-top: 12px;
    }
    .sider-trigger-a i {
        transition: transform 0.2s ease;
        vertical-align: top;
    }
    .sider-trigger-a.collapsed i {
        transform: rotateZ(90deg);
        transition: transform 0.2s ease;
    }
    /*# sourceMappingURL=sider-trigger.css.map */
</style>
