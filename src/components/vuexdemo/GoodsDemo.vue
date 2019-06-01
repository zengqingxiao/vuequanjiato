<template>
  <div class="page">
    <shopping-car ></shopping-car>
    <ul>
      <goods-item ></goods-item>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
// 引入子组件
import GoodsItem from './GoodsItem'
import ShoppingCar from './ShoppingCar'
export default {
  data () {
    return {
    
    }
  },
  //挂载子组件
  components: {
    GoodsItem,
    ShoppingCar
  },
  methods: {
   
  }
}
</script>

<style scoped>
ul{
  margin: 0;
  padding: 0;
  width: 280px;
  border: 1px solid black;
}
</style>