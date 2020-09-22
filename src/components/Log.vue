<template>
    <div class="log">
        <p class="log-item" v-for="(log, index) in logs" :key="index" v-html="log"></p>
    </div>
</template>

<script>
    export default {
        name: 'Log',
        data() {
            return {
                logs: [ ],
                item: {
                    cost: 5,
                    id: 5,
                    itemid: 5,
                    positionX: 1,
                    positionY: 1,
                    rarity: "white",
                    titleid: "Bronze knife",
                    type: "weapon"
                },
                count: 0
            }
        },
        mounted () {
            // setInterval(() => {
            //     const message = this.count % 2 === 0 ? :`Item <span style="color:${this.item.rarity}">${this.item.id}</span> selected in the inventory`
            //     this.logs.unshift(message);
            //     this.count++
            // }, 1000);
        },
    }
</script>

<style lang="stylus" scoped>
    .log
        max-width 900px
        width 900px
        height 200px
        padding 10px
        overflow-y scroll
        display flex
        flex-direction column-reverse
        text-align left
        margin 10px auto
        background-color grey
        color white
</style>