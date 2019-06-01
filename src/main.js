import Vue from 'vue'
import App from './App.vue'
//接收router中的index.js中的router对象
import router from './router/index.js'
//接收store中的index.js中的状态
import store from './store/index.js'
Vue.config.productionTip = false

new Vue({
  router, //这里使用ES6的写法,引用
  store, //把store(vuex) 挂载到vue实例中
  render: h => h(App),
 
}).$mount('#app')
