<template>
  <div>
      <h2>child子组件部分</h2>
      <h4>{{message}}</h4>
      <el-row><el-button type="primary" @click="sendMsgToParent">主要按钮</el-button></el-row>
  </div>
</template>
<script>
    export default{
        props:['message'],
        methods:{
            sendMsgToParent:function(){
                this.$emit('listenToChildEvent',"这是子组件穿给父组件的文本");
            }
        }
    }
</script>
