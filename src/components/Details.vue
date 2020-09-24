<template>
    <div class="details">
        <div class="item-icon">
            <Item :itemData="item" v-if="item" />
        </div>
        <div class="item-details">
            <p><strong>Rarity:</strong> {{ item ? item.rarity : 'none' }} </p>
            <p><strong>Cost:</strong> {{ item ? item.cost : 0 }} </p>
        </div>
    </div>
</template>

<script>
import EventBus from '../utils/event-bus'
import Item from './Item'
    export default {
        name: 'Details',
        components: {
            Item,
        },
        data() {
            return {
                item: null
            }
        },
        methods: {
            fillData(item) {
                this.item = item;
            }
        },
        mounted () {
            EventBus.$on('item_hovered', (e) => {
                this.fillData(e)
            });
        },
    }
</script>

<style lang="stylus" scoped>
    .details
        width 200px
        border 1px solid rgba(0, 0, 0, 0.7)
        display flex
        flex-direction column
        align-items center
        padding 20px 10px
        .item-icon
            flex-basis 70%
        
</style>