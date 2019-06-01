<template>
  <div class="page">
    <ul>
      <router-link v-for="item in userList" :key="item.id" :to="'/user/'+item.id" tag="li">
        <a href="#">{{item.username}}</a>
      </router-link>
      <!-- 这里要去计算判断userInfo的值 -->
      <div v-if="userInfo">  
        用户名：{{userInfo.username}}
        <br>
        等级： {{userInfo.level}}
      </div>
    </ul>
  </div>
</template>

<script>
let userData = [
  {
    id: "1",
    username: "nodeing1",
    level: "vip1"
  },
  {
    id: "2",
    username: "nodeing2",
    level: "vip1"
  },
  {
    id: "3",
    username: "nodeing3",
    level: "vip2"
  },
  {
    id: "4",
    username: "nodeing4",
    level: "vip3"
  }
];
export default {
//路由组件的传参
  props:['id'],//是router/index.js中动态参数传过来的值
  data() {
    return {
      userList: userData,
      //userInfo: null
    };
  },
  //这个是计算属性
  computed:{
    //会在v-if的时候调用
    userInfo() {
       // return null;
       //这里返回的值就是userInfo的值
       return this.userList.filter((item) => {return (item.id === this.id) })[0] 
       //其实这里就是只有一项但是他就是数组就是要[]
    } 
  },
  // 这里也说明了如果path: '/user/:id?',但是用$route这样写了那么这个组件只可以在在一个URL(user)上使用 
  // 但是我们如果用了上面的这种写法那么这个组件就可以多次用因为他关联的只有ID的值，而不是一定要/user/外
  // 加后面的ID的值


  components: {},

    //动态监听一

//   //就是相/user/1 -> 向/user/2切换的是触发的全局钩子事件
//   beforeRouteUpdate(to, from, next) {
//     //to: Route: 即将要进入的目标 路由对象
//     //from: Route: 当前导航正要离开的路由
//     //next：进行管道中的下一个钩子(也就是我们点击的)
//     this.userInfo = this.userList.filter(item => {
//       return item.id === to.params.id;
//     })[0];
//     // console.log(this.userInfo);不知道为什么会警告
//     next();
//   }
  //改变后触发事件
  //   watch: {
  //       $route () {
  //           //console.log(this.$route) 这个就是上面的 to 参数的值一样都是路由信息对象
  //       }
  //   }
  //路由组件传参
  //在组件中使用$route to会使其去对应的路由形成高度耦合，从而使组件只能在特定的URL上使用，限制
  //了其灵活性,我们需要做的是通过将其组件与路由解藕，使得更加灵活
  //为什么这样说呢？其实就是说必须要在这个特定路由使用,所以导致了高度耦合

};

</script>
<style scoped>
.page{
    height: 800px;
    border: 2px solid saddlebrown;
}
ul,
li {
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  padding: 10px 30px;
  list-style: none;
}
a {
  text-decoration: none;
}
</style>