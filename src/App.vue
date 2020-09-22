<template>
  <div id="app">
    <Inventory :items='items' :size="size" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Inventory from './components/Inventory'

export default {

  name: 'App',
  components: {
    Inventory,
  },
  data() {
    return {
      items: [],
      size: {}
    }
  },
  computed: {
    ...mapState({ 
      data: state => state.displayedItems
    })
  },
  methods: {
    ...mapActions([ 'setData' ])
  },
  mounted () {
    this.size = {
      width: this.data.inventoryview.width,
      height: this.data.inventoryview.height
    }
    this.items = this.data.inventoryitems.reduce((acc, el) => {
      const item = this.data.inventoryview.layout.find(r => r.itemid === el.id)
      acc.push({ ...item, ...el });
      return acc;
    }, [])
  },
}
</script>

<style lang="stylus">
*
  padding 0
  margin 0
  box-sizing border-box
#app
  font-family 'Segoe UI', sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100vh
  width 100vh
  display flex
  justify-content center
  align-items center
</style>
