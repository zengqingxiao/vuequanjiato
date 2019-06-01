<template>
  <div class="page">
    <li>
      <img src="http://edu.nodeing.com/files/course/2018/12-18/151439fad2be715092.jpg" alt="">
      <p class="title">html+css快速入门</p>
      <p><button @click="decrease">-</button><input type="text" v-model="num"><button @click="increase">+</button></p>
      <button class="btn" @click="addCar({a:1})">加入购物车</button>
    </li>
  </div>
</template>

<script type="text/ecmascript-6">
/**
 * mapMutations, mapActions 的使用是在点击事件的时候使用
 */
// import { mapMutations, mapActions} from 'vuex'
export default {
  data () {
    return {
      num: 1
    }
  },
  components: {

  },
  methods: {
    // GoodsAdd (num) {
    //   window.console.log(num)
    // },
    increase () {
      this.num++
    },
    decrease () {
      this.num--
    },
    addCar () {
      //this.$store.commit('事件类型名')
      /**
       * 这里的事件类型名会直接在store文件中的index.js中的mutations对象中触发
       * 这里的this.num会是mutations对象中addShopping事件的第二个参数
       */
      this.$store.commit('addShopping', this.num)
      
      //this.$store.state.goods_num += 2000  
      //这样是有表现的 但是在严格模式下会报错，同时这样改变不会被监听，因为状态数据改变尽可能的要在状态中去改变
      
      //当需要传多个参数的时候，第二个参数为一个对象
      // this.$store.commit('addShopping',{
      //   n: '10',
      //   b: '10'
      // })

      //当所有的参数为一个对象的时候
      // this.$store.commit({
      //   type: 'addShopping',
      //   n : this.num,
      //   m : 20
      // })

      //action 异步的处理情况
      // this.$store.dispatch('addAction', this.num)

    },

    // ...mapMutations({
    //   //当点击按钮的时候会触发addShopping事件,这样书写当addCar()中是没有传参数的,默认的参数为点击事件的event,当addCar()中有值的时候代表参数
    //     addCar: 'addShopping'
    // }),

    // ...mapActions({
    //   addCar: 'addAction'
    // })
  }
}
</script>

<style scoped>
li{
  list-style: none;
}
li img{
  width: 280px;
}
li p{
  text-align: center;
}
.btn{
    background-color: red;
    width: 150px;
    color: white;
    padding: 8px;
    border-radius: 8px;
    display: block;
    margin: 8px auto;
}
li input{
  color: black;
}
</style>