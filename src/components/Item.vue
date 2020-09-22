<template>
    <div :class="['inventory-item', itemData.rarity === 'white' ? 'light' : '']" :style="style" draggable="true">
        <h1 class="item-id"> {{ itemData.type[0] }}{{ itemData.id }} </h1>
        <div class="item-name"> {{ itemData.titleid }}  </div>
    </div>
</template>

<script>
    export default {
        name: 'Item',
        props: {
            itemData: {
                type: Object
            },
        },
        computed: {
            style() {
                return {
                    background: `linear-gradient(to right, transparent, ${this.itemData.rarity}`,
                    gridColumnStart: this.itemData.positionX,
                    gridRowStart: this.itemData.positionY
                }
            }
        },
    }
</script>

<style lang="stylus">
    .inventory-item
        width 150px
        height 150px
        border 1px solid black
        box-shadow inset 0 0 10px black
        display flex
        flex-direction column
        &.light .item-id
            color black
        .item-id
            text-transform uppercase
            color white
            flex-basis 70%
            display flex
            justify-content center
            align-items center
            font-size 60px
        .item-name
            font-size 14px
            color darkcyan
            display flex
            justify-content center
            align-items center
</style>