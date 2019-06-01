<template>
  <div class='page'>
      <h1>我是Vip</h1>
      <div class="nav">
        <ul>
          <router-link to='/vip/one' tag='li'><a href="#">一级会员</a></router-link>
          <router-link to="/vip/two" tag='li'><a href="#">二级会员</a></router-link>
          <router-link to='/vip/three' tag='li'><a href="#">三级会员</a></router-link>
        </ul>  
      </div>
      <div class="view">
        <router-view></router-view>
      </div>
      
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  },
}
</script>
<style scoped>
  ul{
    overflow: hidden;
  }
  ul,li{
    margin: 0;
    padding: 0;
  }
  li{
    float: left;
    margin-left: 30px;
    width: 200px;
    height: 200px;
    list-style: none;
  }
  a{
    display: block;
    height: 100%;
    background-color: brown;
    color: aliceblue;
    text-align: center;
    text-decoration: none;
    line-height: 200px;
  }
  .view{
    margin: 40px;
  }
</style>