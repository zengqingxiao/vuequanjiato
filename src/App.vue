<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class = 'header'>
      <!-- <a href="#/home">首页</a>
      <a href="#/coures">课程</a>
      <a href="#/vip">会员</a>
      <a href="#/question">问答</a> -->
      <!-- 
        1.默认router-link也是生成a标签
        2.tag属性可以自定义我们需要生成的标签
        3.自动加上了#
        4.也可以使用：to(要去是地方)
        5.默认情况笑是支持点击事件 设置的样式在router-link上加 active-class
        6.更换切换的事件 events='事件名' 属性
        7.在路由的router对象中填加lineActiveClass:''属性
        8.模糊匹配：意思就是 /vip 其实他包含了["/","/vip"]两项所以就是不写/,或者在to=/的项上添加 exact(精准匹配) 就可以了
        -->
      <!-- <router-link to='/home' event='mouseover'>首页</router-link> -->
      <router-link to='/home'>首页</router-link>
      <router-link to='/coures'>课程</router-link>
      <router-link to='/vip'>会员</router-link>
      <!-- <router-link to='/question'>问答</router-link> -->
      <router-link to="{name: 'wd'}">问答</router-link>
      <router-link to='/user'>用户</router-link>
      <!-- 命名路由 -->
      <!-- <router-link :to="{name:'wd'}">问答</router-link> -->
      <!-- 这里写错的原因是没写括号想也想的到这个to的值和name的值应该是字符串的啊,在遇到这样的问题的时候应该多想想，而不是直接运行 -->
    </div>
    <div>
      <transition>
        <router-view></router-view>
      </transition>
      <div class="main">
        <h1>编程式导航:</h1>
        <p>
          <button @click="pushHandel">push</button>
          <button @click="replaceHandel">replace</button>
          <!-- 回退 -->
          <button @click="backHandle">back</button>  
          <!-- 前进 -->
          <button @click="forwardHandle">forward</button>
          <!-- 在go方法中的参数,正数代表前进,负数代表后退   -->
          <button @click="goHandle">go</button>
        </p>
        <!-- 命名视图，其实目前我个人认为他和子路由是完成一样的作用 -->
        <router-view name="left"></router-view>
        <router-view name="right"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//export default 为模块指定默认输出
export default {
  name: 'app',
  components: {
    // HelloWorld
    //作用是引入的组件,但是我们用一个router中的index已经放到了main.js中了
  },
  methods: {
    pushHandel () {
      //console.log(this.$router)
      //$router写在了main.js中所以可以使用了就跟使用this.$data是同一个道理
      //这里的this.$router中有很多方法
      //方法一
      //push是给浏览器记录栈(history)添加一项，表意为跳转了一下，但是是有新纪录的
      this.$router.push('/question');
    },
    replaceHandel(){
      //replace是给浏览器记录栈(history)添加一项，表意为跳转了一下，但是不会有新纪录的，他只是替换了记录
      this.$router.replace('/question')
    },
    backHandle(){
      //后退
      this.$router.back();
    },
    forwardHandle(){
      //前进
      this.$router.forward();
    },
    goHandle(){
      //在go方法中的参数,正数代表前进,负数代表后
      this.$router.go(2);
    }
  }
}
</script>

<style scoped>
body{
  margin: 0;
}
#app .header{
  background-color: black;
}
#app .header a{
  display: inline-block;
  padding: 8px 20px; 
  text-decoration: none;
  color: white;
}
.activeClass{
  background-color: blue;
}
.main{
  overflow: hidden;
  background-color: antiquewhite;
}
.main button{ 
  padding: 10px 40px;
  margin: 20px 10px;
  border-radius: 5px;
}
/* 动画 */
.v-enter{
  transform: translateX(-100%);
}
.v-enter-to{
  transform: translateX(0);
}
.v-enter-active{
  transition: .5s
}
/* 动画end */
</style>
