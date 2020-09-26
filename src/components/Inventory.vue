<template>
    <div 
        :class="['inventory', {dark: dark}]" 
        :style="style" 
        @mouseover="hover" 
        @mousedown="select" 
        @keydown="keyDown"
        @dragover="dragOver"
        @dragend="dragEnd"
        tabindex="0"
        ref="inventory"
    >
        <Item v-for="item in items" :key="item.id" :itemData="item" :itemPosition="itemPosition(item.id)" ref="item"/>
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
        data() {
            return {
                dragPosition: {
                    x: 0,
                    y: 0
                },
                draggedOver: null,
                dark: false
            }
        },
        props: {
            items: {
                type: Array
            },
            size: {
                type: Object
            },
            positions: {
                type: Array,
                default: () => {}
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
                let item;
                if (this.$refs.item) item = this.$refs.item.find(i => i.$el === e.target.closest('.inventory-item'));
                if (item) EventBus.$emit('item_hovered', item.itemData)
            },
            select(e){
                this.selectItem(e.target.closest('.inventory-item'));
            },
            selectItem(inventoryItem) {
                let item;
                if (this.$refs.item) {
                    this.$refs.item.forEach(i => i.selected = false);
                    item = this.$refs.item.find(i => i.$el === inventoryItem);
                }
                if (item) {
                    item.selected = true;
                    EventBus.$emit('item_selected', { id: item.itemData.id, rarity: item.itemData.rarity })
                }
            },
            closest(arr, orig) {
                const closestRow = arr
                                    .map(r => r.position.y)
                                    .reduce((acc, el) => {
                                        return Math.abs(el - orig.position.y) < Math.abs(acc - orig.position.y) ? el : acc;
                                    });
                const closestCol = arr
                                    .filter(r => r.position.y === closestRow)
                                    .map(r => r.position.x)
                                    .reduce((acc, el) => {
                                        return Math.abs(el - orig.position.x) < Math.abs(acc - orig.position.x) ? el : acc;
                                    });
                return arr.find(i => i.position.y === closestRow && i.position.x === closestCol)
            },
            keyDown(e){
                const item = this.$refs.item.find(i => i.selected);
                if (item) {
                    let closest;
                    switch (e.code) {
                        case "ArrowUp":{
                                const itemsAbove = this.$refs.item.filter(i => i.position.y < item.position.y);
                                if (itemsAbove.length > 0) {
                                    closest = this.closest(itemsAbove, item);
                                } else {
                                    const lastRow = Math.max(...this.$refs.item.map(i => i.position.y))
                                    closest = this.$refs.item.find(i => i.position.y === lastRow);
                                }
                            
                            break;
                        }
                        case "ArrowDown":{
                                const itemsBellow = this.$refs.item.filter(i => i.position.y > item.position.y);
                                if (itemsBellow.length > 0) {
                                    closest = this.closest(itemsBellow, item);
                                } else {
                                    const firstRow = Math.min(...this.$refs.item.map(i => i.position.y))
                                    closest = this.$refs.item.find(i => i.position.y === firstRow);
                                }
                            
                            break;
                        }
                        case "ArrowLeft":{
                                const itemsLeft = this.$refs.item.filter(i => i.position.x < item.position.x);
                                if (itemsLeft.length > 0) {
                                    closest = this.closest(itemsLeft, item);
                                } else {
                                    const lastCol = Math.max(...this.$refs.item.map(i => i.position.x))
                                    closest = this.$refs.item.find(i => i.position.x === lastCol);
                                }
                            
                            break;
                        }
                        case "ArrowRight":{
                                const itemsRight = this.$refs.item.filter(i => i.position.x > item.position.x);
                                
                                if (itemsRight.length > 0) {
                                    closest = this.closest(itemsRight, item);
                                } else {
                                    const firstCol = Math.min(...this.$refs.item.map(i => i.position.x))
                                    closest = this.$refs.item.find(i => i.position.x === firstCol);
                                }
                                
                            
                            break;
                        }
                    }
                    if (closest) this.selectItem(closest.$el);
                }
            },
            dragOver(e) {
                this.draggedOver = this.$refs.item.find(i => i.$el === e.target.closest('.inventory-item'))
                if (this.draggedOver) {
                    this.dragPosition = {x: this.draggedOver.position.x, y: this.draggedOver.position.y}
                } else {
                    this.dragPosition = {x: Math.ceil(e.offsetX / 150), y: Math.ceil(e.offsetY / 150)}
                }
            },
            dragEnd(e) {
                const dragging = this.$refs.item.find(i => i.$el === e.target)
                if (this.draggedOver) {
                    this.draggedOver.position = dragging.position;
                }
                dragging.position = this.dragPosition;
            },
            itemPosition(id) {
                return this.positions.find(r => r.itemid === id)
            }
        },
        mounted () {
            EventBus.$on('theme_switched', e => {
                this.dark = e;
            })
        },
    }
</script>

<style lang="stylus" scoped>
    .inventory
        display grid
        width 80%
        border 1px solid rgba(0, 0, 0, 0.7)
        overflow auto
        outline none
        height 450px
        scroll-snap-type both mandatory;
        &.dark
           border-color rgba(255, 255, 255, 0.6)
        @media screen and (max-height 450px)
            height 300px
</style>