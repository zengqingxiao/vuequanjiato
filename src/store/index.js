import Vue from 'vue'
import Vuex from 'vuex'

//把vuex作为vue的插件使用
Vue.use(Vuex)

//模块化
//1.定义一个hello 模块,先定义一个对象
let moduleHello = {
  state: {
    goods_num: 5
  },
  mutations: {
    increase (state) {
      state.goods_num +=5;
    }
  }
}

//创建一个容器 store:状态，也就是唯一数据源
//数据一变化,视图包含的数据就会变化,是响应式的
let store = new Vuex.Store({
  state:{
    goods_num: 0,
    num2: 30,
    num3: 40,
    num4: 50
  },
  //唯一去修改state中数据的方法,就是提交(commit属性中)一个mutations方法,这里commit和mutations可以说是一对的是使用一个是申明,一个是引用
  mutations: {
    /** 
     * 第一个参数为state对象
     * 第二个参数是addShopping,传过来的参数
     * 注意：这个函数里面不可以放异步代码,这里是放同步代码
    */
    addShopping(state, payload){
      state.goods_num += payload;
      window.console.log(payload);
      window.console.log(state);
      window.console.log(event); //这里也可以输出点击事件对象
    }
  },
  /**
   * 异步的传值用actions对象
   * 这里需要说明的是context,是完全包含了state的看console.log
   */
  actions: {
    addAction (context, payload) {
      window.console.log(context);
      window.console.log(payload);
      /**
       * 这里通过异步去提交一个mutation也就是上面的同步代码
       */
      setTimeout( () => {
        //这里需要注意的是这里必须用commit的方法去执行mutations方法中的函数,因为只有这样才会触发状态的改变，而不是单单的数据视图发生改变
        context.commit('addShopping', payload)
        // context.state.goods_num += payload;  //这样的写法不会触发vue中的状态行为的改变,而只的简单的状态数据发生改变
       
        //分发下一个函数
        context.dispatch('addAction2');
      })
    },
    addAction2 () {
      window.console.log('第二个action执行了')
    }
  },
  //全局计算属性
  getters: {
    //这个计算属性属性值可以是全局的
    get_num (state) {
      return state.goods_num > 25 ? 25 : state.goods_num
    }
  },
  //模块化
  // 2.模块的挂载
  modules: {
    //挂载state的值,这里的a是一个对象
    a : moduleHello
  },

})

//导出
export default store
