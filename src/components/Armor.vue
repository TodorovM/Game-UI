<template>
    <div 
    v-if="itemData" 
    :class="['inventory-item', {light: light,  selected: selected}]" 
    :style="style" draggable="true" 
    >
        <h1 class="item-id"> {{ itemData.type[0] }}{{ itemData.id }} </h1>
        <div class="item-name"> {{ itemData.titleid }}  </div>
    </div>
</template>

<script>
import Item from './Item'
    export default {
        name: 'armor',
        extends: Item,
        computed: {
           style() {
                return {
                    background: `linear-gradient(to right, transparent, ${this.itemData.rarity}`,
                    gridColumnStart: `${this.position.x} / span 2`,
                    gridRowStart: `${this.position.y} / span 2`
                }
            },
            light(){
                return this.itemData.rarity === 'white';
            } 
        }
    }
</script>

<style lang="stylus" scoped>

    
</style>