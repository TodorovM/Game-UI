<template>
    <div class="switch" @click="toggle">
        <div :class="['ball', {clicked: clicked}]" ></div>
    </div>
</template>

<script>
    import EventBus from '../utils/event-bus'
    export default {
        name: 'ThemeSwitch',
        data() {
            return {
                clicked: false
            }
        },
        methods: {
            toggle() {
                this.clicked = !this.clicked;
                EventBus.$emit('theme_switched', this.clicked)
                
            }
        },
        mounted () {
            if (window.localStorage.getItem('theme') === 'dark') this.clicked = true;
        },
    }
</script>

<style lang="stylus" scoped>
    .switch
        position absolute
        right 0
        margin 10px
        width 40px
        height 20px
        background-color #e3e3e3
        border-radius 20px
        .ball
            height 20px
            width 20px
            background-color darkcyan
            border-radius 20px
            transform-origin center
            animation toggle-reverse 0.2s linear forwards
            &.clicked
                animation toggle 0.2s linear forwards

    @keyframes toggle
        from 
            transform translateX(0)
        to
            transform translateX(20px)

    @keyframes toggle-reverse
        from 
            transform translateX(20px)
        to
            transform translateX(0)
</style>