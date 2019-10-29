<template>
  <div>
      
      <button @click="showC">组件</button>
      <div id="child"></div>
  </div>
</template>
<script>
export default {
  props:{

  },
  components:{

  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{
    showC(){
      this.$showCom()
    }
  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="">

</style>