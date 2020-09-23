<template>
    <div class="inventory" :style="style" @mouseover="hover" @mousedown="select">
        <Item v-for="item in items" :key="item.id" :itemData="item" ref="item"/>
    </div>
</template>

<script>
import Item from "./Item";
import EventBus from '../utils/event-bus'

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
        methods: {
            hover(e) {
                const item = this.$refs.item.find(item => item.$el === e.target.closest('.inventory-item'));
                if (item) EventBus.$emit('item_hovered', item.itemData)
            },
            select(e){
                this.$refs.item.forEach(item => item.selected = false);
                const item = this.$refs.item.find(item => item.$el === e.target.closest('.inventory-item'));
                if (item) {
                    item.selected = true;
                    EventBus.$emit('item_selected', { id: item.itemData.id, rarity: item.itemData.rarity })
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .inventory
        display grid
        height 450px
        border 1px solid rgba(0, 0, 0, 0.7)
        overflow-y scroll
</style>