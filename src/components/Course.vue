<template>
  <div class='page'>
      <h1>我是课程页面</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      aa: '10'
    }
  },
  components: {

  },
  //组件中的钩子函数
  // beforeRouteEnter(to,from,next){
  //   //进入之前调用
  //   window.console.log(to)
  // },
  // beforeRouteLeave (to,from,next){
  //   //离开后执行
  //   window.console.log(this.aa)
  //   //alert("aaa")
  // }
}

</script>
<style>
</style>