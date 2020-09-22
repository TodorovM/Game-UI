<template>
    <div class="tabs">
        <Tab v-for="(tab, index) in tabCategories" :key="index" :tab="tab"/>
    </div>
</template>

<script>
    import Tab from "./Tab"

    export default {
        name: 'Tabs',
        components: {
            Tab,
        },
        computed: {
            tabCategories() {
                return ["All", ...this.tabs]
            }
        },
        props: {
            tabs: {
                type: Array,
            },
        },

    }
</script>

<style lang="stylus" scoped>
    .tabs
        display flex
        justify-content flex-start
        margin 0 auto
</style>