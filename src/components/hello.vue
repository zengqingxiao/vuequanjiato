<template>
  <div class='page'>
    <h1>count: {{this.$store.state.a.goods_num}}</h1>
    <button @click="add">+</button>
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
  mounted (){
    window.console.log(this.$store.state)
  },
  methods: {
    add () {
      //提交mutation
      this.$store.commit('increase')
    }
  }
}

</script>
<style>
</style>