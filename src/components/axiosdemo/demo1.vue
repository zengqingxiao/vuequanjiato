<template>
  <div class="page">
    <h1>axios demo</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  components: {},
  //生命钩子
  created() {
    //写数据请求
    //console.log(axios);
    //get请求
    //   axios({
    //       method: 'get',
    //       url: 'https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/list',
    //       //get数据传参数
    //       params: {
    //           title: 'xxx',
    //           count: 30
    //       }
    //   })
    //     .then((response) => {
    //         window.console.log(response)
    //     })
    //     .catch((err) => {window.console.log(err)})

    //get方式的简写
    // axios
    //   .get(
    //     "https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/list",
    //     {
    //       params: {
    //         id: 10
    //       }
    //     }
    //   )
    //   .then(response => window.console.log(response));

    //post 请求
    axios({
      method: "post",
      url:
        "https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/add",
      //post数据传参数
      data: {
        title: "html最佳入门",
        count: 80
      }
    })
      .then(response => window.console.log(response))
      .catch(err => window.console.log(err));

//一次性处理并发请求
    //方法一
    // function http1() {
    //   return axios.get(
    //     "https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/list"
    //   );
    // }
    
    // function http2() {
    //   return axios.post(
    //     "https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/update"
    //   );
    // }

    // axios.all([http1(), http2()]).then(response => {
    //   // 这里response返回一个数组  里面装了两个请求的返回结果
    //   window.console.log(response);
    // });

    // //上面代码中返回结果被放入到了一个数组中，如果想分别把结果拿出来，可以使用axios.spread方法
    // axios.all([http1(), http2()]).then(
    //   axios.spread((res1, res2) => {
    //     // res1 对应http1的请求结果 res2对应http2的请求结果
    //     console.log(res1, res2);
    //   })
    // );

    
  }
};
</script>
<style>
</style>