<template>
    <div :class="['tab',{selected: selected} ]">
        {{ tab.toUpperCase() }}
    </div>
</template>

<script>
    export default {
        name: "Tab",
        data() {
            return {
                selected: false
            }
        },
        props: {
            tab: {
                type: String
            },
        },
    }
</script>

<style lang="stylus" scoped>
    .tab
        background-color: lightgray
        padding: 5px 20px
        font-weight 700
        cursor pointer
        &:first-child
            border-top-left-radius 10px
        &:last-child
            border-top-right-radius 10px
        &.selected
            background-color gray
</style>