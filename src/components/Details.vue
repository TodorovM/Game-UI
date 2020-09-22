<template>
    <div class="details">
        <div class="item-icon">
            <Item :itemData="item" />
        </div>
        <div class="item-details">
            <p><strong>Rarity:</strong> {{ item.rarity }} </p>
            <p><strong>Cost:</strong> {{ item.cost }} </p>
        </div>
    </div>
</template>

<script>
import Item from './Item'
    export default {
        name: 'Details',
        components: {
            Item,
        },
        data() {
            return {
                item: {
                    cost: 5,
                    id: 5,
                    itemid: 5,
                    positionX: 1,
                    positionY: 1,
                    rarity: "white",
                    titleid: "Bronze knife",
                    type: "weapon"
                }
            }
        },
        methods: {
            fillData(item) {
                this.item = item;
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .details
        width 300px
        border 1px solid rgba(0, 0, 0, 0.7)
        display flex
        flex-direction column
        align-items center
        padding 20px 10px
        .item-icon
            flex-basis 70%
        
</style>