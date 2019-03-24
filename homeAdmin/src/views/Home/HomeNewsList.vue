<template>
  <div class="home fu" style="padding: 30px;position: relative;text-align: left">

    <div style="padding: 20px 0">
        <el-select style="margin-right: 20px" @change="modeChange" size="mini" v-model="value" placeholder="请选择">
          <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
          </el-option>
        </el-select>
       <el-button @click="addNews()" size="mini" type="primary">添加</el-button>
    </div>
    <el-table
            border
            size="mini"
            :data="treeList"
            style="width: 100%">

      <el-table-column
              prop="id"
              label="id"
              width="100">
      </el-table-column>
      <el-table-column
              prop="title"
              label="标题"
              >
      </el-table-column>
      <el-table-column
              prop="createdAt"
              label="创建时间"
      >
      </el-table-column>
      <el-table-column
              prop="updatedAt"
              label="更新时间"
      >
      </el-table-column>
      <el-table-column
              label="操作">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)"  type="text" size="small">编辑</el-button>
          <el-button  @click="del(scope.row)" type="text" size="small" style="color: red">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src

import * as news from '_api/api_news';
import {newsModes} from '_api/constant';
export default {
  name: "HomeNews",
    mixins: [],
  components: {

  },
    data() {
        return {
            options: newsModes,
            value: '1',
            treeList:[]

        }
    },
    mounted(){
        console.log('this.$route.query.id',this.$route.query.id)

        this.init();
    },
    methods: {
        modeChange(mode){
            console.log(mode);
            this.init();
        },
        onEditorReady(editor) {
        },
        addNews(){
            this.$router.push({
                path: '/home/news',
                query: {
                    mode: this.value
                }
            })
        },
        edit(row){
            this.$router.push({
                path: '/home/news',
                query: {
                    id: row.id,
                    mode: this.value
                }
            })
        },
        del(row){
            this.$http.post(news.del+row.id,null,this).then((data)=>{
                this.init();
            })
        },
        init(){

            this.$http.post(news.allByMode + this.value,null,this).then((data)=>{
              this.treeList = data.ret;
            })


        }
    }
};
</script>
