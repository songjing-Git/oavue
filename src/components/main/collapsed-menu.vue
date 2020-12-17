<template>
    <Dropdown ref="dropdown" @on-click="handleClick" :class="hideTitle ? '' : 'collased-menu-dropdown'"
              :transfer="hideTitle" :placement="placement">
        <a class="drop-menu-a" type="text" @mouseover="handleMousemove($event, children)"
           :style="{textAlign: !hideTitle ? 'left' : ''}">
            <Icon :size="rootIconSize" :color="textColor" :type="parentItem.icon"/>
            <span class="menu-title" v-if="!hideTitle">{{ showTitle(parentItem) }}</span>
            <Icon style="float: right;" v-if="!hideTitle" type="ios-arrow-forward" :size="16"/>
        </a>
        <DropdownMenu ref="dropdown" slot="list">
            <template v-for="child in children">
                <collapsed-menu v-if="showChildren(child)" :icon-size="iconSize" :parent-item="child"
                                :key="`drop-${child.name}`"></collapsed-menu>
                <DropdownItem v-else :key="`drop-${child.name}`" :name="child.name">
                    <Icon :size="iconSize" :type="child.icon"/>
                    <span class="menu-title">{{ showTitle(child) }}</span>
                </DropdownItem>
            </template>
        </DropdownMenu>
    </Dropdown>
</template>

<script>
    import mixin from "../../utils/mixin";
    import itemMixin from "../../utils/itemMixin";
    import {findNodeUpperByClasses} from "../../utils/util";
    export default {
        name: "collapsed-menu",
        mixins:[mixin,itemMixin],
        props: {
            hideTitle: {
                type: Boolean,
                default: false
            },
            rootIconSize: {
                type: Number,
                default: 20
            }
        },
        data() {
            return {
                placement: 'right-end'
            }
        },
        computed: {},
        methods: {
            handleClick(name) {
                this.$emit('on-click', name)
            },
            handleMousemove(event, children) {
                const {pageY} = event
                const height = children.length * 38
                const isOverflow = pageY + height < window.innerHeight
                this.placement = isOverflow ? 'right-start' : 'right-end'
            }
        },
        watch: {
            mounted() {
                let dropdown = findNodeUpperByClasses(this.$refs.dropdown.$el, ['ivu-select-dropdown', 'ivu-dropdown-transfer'])
                if (dropdown) dropdown.style.overflow = 'visible'
            }
        }
    }
</script>

<style scoped>
     .ivu-dropdown-rel a {
        width: 100%;
    }
    a.drop-menu-a {
        display: inline-block;
        padding: 9px 17px;
        width: 100%;
        text-align: center;
        color: #495060;
    }
    .menu-title {
        padding-left: 6px;
    }
</style>
