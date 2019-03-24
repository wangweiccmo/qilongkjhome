<template>
    <div class="jx fu jx-card jx-p10 jx-box-column">
        <jx-header info="消息通知"></jx-header>
        <div class="jx-flex1">
            <div style="width: 100%;overflow: hidden">
                <el-tabs  v-model="activeName" >
                    <el-tab-pane label="最新动态" name="news">

                        <div @click="handleClick(item)" class="news-list-row" v-for="item in newsList">
                            <div class="news-list-context">{{item.title}}</div>
                            <div class="news-list-time">{{dateTimeFormat(item.createdAt)}}</div>
                        </div>

                    </el-tab-pane>
                    <el-tab-pane label="教育资讯" name="info">
                        <div @click="handleClick(item)" class="news-list-row" v-for="item in infoList">
                            <div class="news-list-context">{{item.title}}</div>
                            <div class="news-list-time">{{dateTimeFormat(item.createdAt)}}</div>
                        </div>
                    </el-tab-pane>


                </el-tabs>
            </div>

        </div>
    </div>
</template>

<script>
    import JxHeader from "./ui/JxHeader"
    import * as news from '_api/api_news';
    import formatterMixin from '_mixin/formatterMixin';

    export default {
        mixins:[formatterMixin],
        components: {JxHeader},
        name: "HelloWorld",
        data() {
            return {
                activeName:'news',
                newsList:[],
                infoList:[]
            }
        },
        mounted(){
            this.init();
        },
        methods: {
            init(){
                this.$http.post(news.allByMode+'1',null,this).then((data)=>{
                    this.newsList = data.ret;

                })
                this.$http.post(news.allByMode+'2',null,this).then((data)=>{
                    this.infoList = data.ret;

                })
            },
            handleClick(item){
                console.log(item)
                this.$router.push({
                    path: '/newsDetail',
                    query: {
                        id: item.id
                    }
                });
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="css">
    .el-tabs__header{
        margin-bottom: 5px !important;
    }
    .news-list-row{
        display: flex;
        font-size: 14px;
        color: #555;
        line-height: 30px;
        cursor:pointer;
    }
    .news-list-row:hover{
        background-color: beige;

    }
    .news-list-context{
        flex: 1;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .news-list-time{
        width: 150px;
    }
</style>
