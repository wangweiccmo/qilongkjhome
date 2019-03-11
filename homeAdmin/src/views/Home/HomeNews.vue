<template>
  <div class="home fu" style="padding: 30px;position: relative;">
    <div style="padding: 20px 0;text-align: left">
      <el-button @click="black()" size="mini" type="primary">返回</el-button>
    </div>
    <el-form ref="form" :model="news" label-width="50px" size="mini">
      <el-form-item label="标题" prop="title" :rules="rules.required">
        <el-input v-model="news.title"></el-input>
      </el-form-item>
      <el-form-item label="内容"  prop="context" :rules="rules.required">
        <div class="edit_container">
          <quill-editor v-model="news.context"
                        ref="myQuillEditor"
                        class="editer"
                        :options="editorOption" @ready="onEditorReady($event)">
          </quill-editor>
        </div>
      </el-form-item>

      <div style="padding: 0 0px 0 5px">
        <el-button :loading="isLoading" type="primary" size="small" style="width: 300px" @click="onSubmit">提交</el-button>
      </div>
    </el-form>

  </div>
</template>

<script>
// @ is an alias to /src
import rulesMixin from '../../components/mixin/rulesMixin';
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import {setLocal,getLocal,rmLocal} from '_api/local'
import * as news from '_api/api_news';

export default {
  name: "HomeNews",
    mixins: [rulesMixin],
  components: {
      quillEditor
  },
    data() {
        return {
            news: {
                title: '',
                context:''
            },
            editorOption: {},
            isLoading:false

        }
    },
    mounted(){
        if(this.$route.query.id){
          this.init(this.$route.query.id)
        }
    },
    methods: {
        init(id){
            this.$http.post(news.get+id,null,this).then((data)=>{
                this.news = data.ret;
            })
        },
        black(){
            this.$router.push('/home/newsList')
        },
        onEditorReady(editor) {
        },
        onSubmit(){
            this.$refs.form.validate((valid) => {
                if (valid) {
                    if(this.$route.query.id){
                        this.$http.post(news.edit,this.news,this).then((data)=>{
                            this.black();
                        })
                    }else{

                        this.$http.post(news.add,this.news,this).then((data)=>{
                            this.black();
                        })
                    }

                } else {
                    console.log('error submit!!');
                    return false;
                }
            });


        }
    }
};
</script>
