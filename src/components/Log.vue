<template>
    <div class="log">
        <p class="log-item" v-for="(log, index) in logs" :key="index" v-html="log"></p>
    </div>
</template>

<script>
    import EventBus from '../utils/event-bus'
    export default {
        name: 'Log',
        data() {
            return {
                logs: [ ],
                count: 0
            }
        },
        mounted () {
            EventBus.$on('item_selected', e => {
                this.logs.unshift(`Item <span style="color: ${e.rarity}" > <strong>${e.id}</strong> </span> selected in the inventory`)
            })
            EventBus.$on('item_added', e => {
                this.logs.unshift(`Item <span style="color: ${e.rarity}" > <strong>${e.id}</strong> </span> added to the inventory`)
            })
        },
    }
</script>

<style lang="stylus" scoped>
    .log
        max-width 900px
        width 100%
        height 200px
        padding 10px
        overflow-y scroll
        display flex
        flex-direction column-reverse
        text-align left
        margin 0 auto
        background-color grey
        color white
</style>