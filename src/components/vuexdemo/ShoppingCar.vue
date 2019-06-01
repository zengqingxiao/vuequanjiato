<template>
  <div class="page">
    <!-- 产品库存25件 -->
    <div class="goods">购物车一共有：<span>{{ num }} | {{ this.$store.getters.get_num }}</span>件商品</div>
     <p>{{ num2 }} | {{ num3 }} | {{ num4 }}</p>
  </div>
 
</template>

<script type="text/ecmascript-6">
//引入辅助函数
/**
 * 在处理处理数据的时候使用
 */
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      // goods_num : 0  这里会发生冲突
      num99:1000,
    }
  },
  mounted() {
   
  },
  //辅助函数mapState,这个函数是和computed映射,可以把传入mapState的对象或数组,转化成为计算属性
  computed: {
    //计算属性
    num () {
      window.console.log(mapState(['num2', 'num3', 'num4']))
      //这样的处理方式不好的地方 如果很多页面都需要这样的逻辑，需要写很多重复代码
      //局部
      return this.$store.state.goods_num > 25 ? 25 : this.$store.state.goods_num;
    },
    //mapState辅助函数的用法
    //通过传的参数对象或者数组,返回的是一个一个的对象，对象的返回的值为与store中的state对象中向对应key的值
    
    //当参数为数组的情况下
    ...mapState(['num2', 'num3', 'num4']),

    //当参数为对象的时候
    ...mapState({
      num4: 'num4',
      //这里的参数state为状态对象
      num3: (state) => (
        window.console.log(this),  //这里的this为undefined
        state.num3 > 20 ? 5 : 15
        ),
      // 注意 如果使用到this 不可以使用箭头函数
      //这里是ES6值对象中的方法的写发
      num2 (state) {
        window.console.log(this)  //这里的this为vue组件
        return this.num99 + state.num2
      }
    }),

    //mapGetters的使用方法
    ...mapGetters(['get_num']),
    ...mapGetters({
      net_num: 'get_num'
    })
  },
  components: {
    //定义使用的组件
  },
  //对传进来的代码进行校验
  props: {
   
  }
}
</script>

<style scoped>
.goods{
  background-color: green;
  width: 250px;
  padding: 16px;
  color: white;
}
.goods span{
  color: red
}
</style>