<template>
    <div class="tabs" @click="tabClick">
        <Tab v-for="(tab, index) in tabCategories" :key="index" :tab="tab" ref="tab" />
    </div>
</template>

<script>
    import Tab from "./Tab"
    import { mapActions } from "vuex";

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
        methods: {
            tabClick(e) {
                this.$refs.tab.forEach(t => t.selected = false)
                this.$refs.tab.find(t => t.$el === e.target).selected = true;
                this.change(e.target.innerText.toLowerCase())
            },
            ...mapActions([ 'change' ]),
        }

    }
</script>

<style lang="stylus" scoped>
    .tabs
        display flex
        justify-content flex-start
        margin 0 auto
</style>