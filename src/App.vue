<template>
  <div id="app">
    <div class="container">
      <Inventory :items='items' :size="size" />
      <Details/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Inventory from './components/Inventory'
import Details from './components/Details'

export default {

  name: 'App',
  components: {
    Inventory,
    Details
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
  display flex
  justify-content center
  align-items center
  flex-direction column
  .container
    display flex
</style>
