<template>
  <div id="app" :class="{dark: dark}">
    <ThemeSwitch />
    <div class="container column">
      <Tabs :tabs="categories" />
      <div class="container">
        <Inventory :items='items' :positions="itemPositions" :size="size" />
        <Details/>
      </div>
    </div>
    <Log/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Inventory from './components/Inventory'
import Details from './components/Details'
import Log from './components/Log';
import Tabs from './components/Tabs'
import ThemeSwitch from './components/ThemeSwitch'
import EventBus from './utils/event-bus'

export default {

  name: 'App',
  components: {
    Inventory,
    Details,
    Log,
    Tabs,
    ThemeSwitch
  },
  data() {
    return {
      dark: false
    }
  },
  computed: {
    ...mapState({ 
      items: state => state.displayedItems,
      allItems: state => state.items,
      size: state => state.size,
      itemPositions: state => state.itemPositions,
      fetchedAll: state => state.fetchedAll,
      categories: state => state.categories
    }),
  },
  methods: {
    ...mapActions([ 'getData', 'fillCategories' ]),
  },
  mounted () {
    EventBus.$on('theme_switched', e => {
      this.dark = e;
    })

    this.fillCategories();
    
    const interval = setInterval(() => {
      this.getData();
      if (!this.fetchedAll) {
        EventBus.$emit('item_added', this.allItems[this.allItems.length - 1])
      } else clearInterval(interval)
    }, 1000)
  },
}
</script>

<style lang="stylus">
*
  padding 0
  margin 0
  box-sizing border-box
::-webkit-scrollbar
  width 0
  height 0
#app
  font-family 'Segoe UI', sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100vh
  display flex
  justify-content space-between
  flex-direction column
  &.dark
    background-color #222
    color white
  .container
    display flex
    margin 0 auto 
    width 100%
    justify-content center
    &.column
      flex-direction column
</style>
