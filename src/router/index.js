//第二步引入
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Question from '../components/Question.vue'
import Vip from '../components/Vip.vue'
import Course from '../components/Course.vue'
import VipNoe from '../components/vip-one.vue'
import VipTwo from '../components/vip-two.vue'
import VipThree from '../components/vip-three.vue'
import HomeLeft from '../components/Home-left.vue'
import HomeRight from '../components/Home-right.vue'
import user from '../components/user.vue'
import AxiosDmo from '../components/axiosdemo/demo1.vue'
import Hello from '../components/hello.vue'
import GoodsDemo from '../components/vuexdemo/GoodsDemo.vue'
//第三步:作为vue的插件
Vue.use(VueRouter)

//创建实例 加入配置
const router = new VueRouter({
  // #/couter hash模式 ：无刷新
  // /couter history模式 ：会去请求后端接口在用back,forword,go的方法的时候,当是如果使用pushState
  //和reolaceState方法的时候,这两的方法就可以实现前端路由的目的
  // 所以vue-router是通过hash和history这两种模式来控制路由
  //mode: 'hash',
  mode: 'history',
  //设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 来全局配置。
  linkActiveClass: 'activeClass',
  //滚动行为
  //在高版本下是默认的行为
  //savedPosition:是鼠标滚动的位置信息，如果没滚动为null
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  // scrollBehavior (to) {
  //     if (to.hash) {
  //       return {
  //         selector: to.hash
  //       }
  //     }
  //   },
  routes: [
    {
      path: '/home',
      // component: Hmoe,
      //命名视图editorconfig
      components: {
        default: Home,
        left: HomeLeft,
        right: HomeRight
      }

    },
    {
      path: '/vip',
      component: Vip,
      //路由元信息meta字段
      meta: {
        require: true //这里只是为了判断他是否要登录
      },
      children: [
        {
          path: 'one',    //这里不可以加/他会主动的生成,加了会报错,只有子路由可以这样
          component: VipNoe
        },
        {
          path: 'two',
          component: VipTwo
        },
        {
          path: 'three',
          component: VipThree
        },
      ]
    },
    {
      path: '/coures',
      component: Course,
      // 写在路由里面的钩子函数
      // beforeEnter(to,from,next){
      //     //进入之前执行,和全局的写法不一样
      //     next();
      // }
    },
    {
      path: '/question',
      //命名路由
      name: 'wd',
      component: Question
    },
    //重定向：从A到B 这里是从/hello到/course
    {
      path: '/hello',
      redirect: '/vip', //跳转到的页面，字符串写法
      // redirect: '{name:"wd"}', //对象写法
      // redirect: (to) => {     //函数的写法
      //     //to 路由信息对象
      //     if(to.hash) {
      //         return '/course'
      //     }else{
      //         return '/vip'
      //     }
      // }
      //别名：他的另一个名字
      alias: '/hi'   //意思就是不管是/hello 还是 /hi 都指向redirect的值或component的值
    },
    {
      // 动态路径参数 以冒号开头，这里的id类型与一个变量,
      path: '/user/:id?', //?:代表0或1
      component: user,
      props: true, //当这个的props的值为true的时候,这个ID属性就可以传给组件
    },
    {
      path: '/axios',
      component: AxiosDmo
    },
    {
      path: '/hellol',
      component: Hello
    },
    {
      //vuex的路由配置
      path: '/vuex',
      component: GoodsDemo
    }

  ]
});


//挂载进入路由之前,是在进入路由之前执行 全局钩子会影响所有的路由
// router.beforeEach((to, from, next) => {
//     //console.log('进入路由之前执行',to.meta);
//      //导航守卫
//     if (to.meta.require) {
//         //需要登入
//         //判断是否已经登录
//         //跳转next(参数为需要跳转的路由)
//         next(); //没有这个无法进入我们点击的路由,所以我们通过控制他来实行导航守卫
//     }else{
//         next()
//     }
// })
//挂载进入路由之后,是在进入路由之后执行
// router.afterEach((to , from) => {
//     if(to.meta.title){
//         document.title = to.meta.title;
//     }else{
//         document.title = '曾皙的第二个router';
//     }
// })



//吧router导出,这样外面的main才可以用
//其实就是在router文件中的index中定义了router,在传给了main.js作用看上去就不会混乱
export default router 