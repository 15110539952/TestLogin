<template>
  <div class="parent">
    <child :message="message" @listenToChildEvent="showMsgFormChild"></child>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
    // import Vue from 'vue'
    import child from './Child'
    // var vm = new Vue({
    //     // el:'.parent',
    export default{
        name:'parent',
        data(){
            return {
                message:'这是父组件传递给子组件的文字喽',
                dialogVisible:false
            }
        },
        methods:{
            showMsgFormChild:function (childText) {
                this.dialogVisible = true;
                console.log(childText);
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
            }
        },
        components:{
            child
        }
    // })
    }
</script>
