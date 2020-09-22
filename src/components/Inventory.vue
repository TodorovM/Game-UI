<template>
    <div class="inventory" :style="style">
        <Item v-for="item in items" :key="item.id" :itemData="item" />
    </div>
</template>

<script>
import Item from "./Item";

    export default {
        name: 'Inventory',
        components: {
            Item,
        },
        props: {
            items: {
                type: Array
            },
            size: {
                type: Object
            }
        },
        computed: {
            style() {
                return {
                    gridTemplateColumns: `repeat(${this.size.width}, 150px)`,
                    gridTemplateRows: `repeat(${this.size.height}, 150px)`,
                    maxWidth: `${this.size.width * 150}px`
                }
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .inventory
        display grid
        height 500px
        grid-gap 25px
        border 1px solid rgba(0, 0, 0, 0.7)
        overflow-y scroll
</style>