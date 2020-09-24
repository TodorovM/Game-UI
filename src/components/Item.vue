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

    export default {
        name: 'Item',
        data() {
            return {
                selected: false,
                position: {
                    x: this.itemData.positionX,
                    y: this.itemData.positionY
                }
            }
        },
        props: {
            itemData: {
                type: Object
            },
        },
        computed: {
            style() {
                return {
                    background: `linear-gradient(to right, transparent, ${this.itemData.rarity}`,
                    gridColumnStart: this.position.x,
                    gridRowStart: this.position.y
                }
            },
            light(){
                return this.itemData.rarity === 'white';
            }
        }
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
        &:hover
            animation pulse 1s linear infinite
        &.light .item-id
            color black
        &.selected
            border-width 5px
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


    @keyframes pulse 
        0%
            box-shadow inset 0 0 10px black 
        50%
            box-shadow inset 0 0 0 black  
        100%
            box-shadow inset 0 0 10px black
        
    
</style>