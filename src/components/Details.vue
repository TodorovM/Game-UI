<template>
    <div :class="['details', {dark: dark}]">
        <div class="item-icon">
            <Item :itemData="item" :itemPosition="position" v-if="item" />
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
                item: null,
                position: {
                    positionX: 'auto',
                    positionY: 'auto'
                },
                dark: false
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
            EventBus.$on('theme_switched', e => {
                this.dark = e;
            })
        },
    }
</script>

<style lang="stylus" scoped>
    .details
        min-width 150px
        width 200px
        border 1px solid rgba(0, 0, 0, 0.7)
        display flex
        flex-direction column
        align-items center
        padding 20px 10px
        &.dark
            border-color rgba(255, 255, 255, 0.6)
        .item-icon
            flex-basis 70%
            
        
</style>