<template>
    <div class="fu" style="text-align: center;background-color: #cccccc;overflow-y: auto;">
        <div class="news-detail-context">
            <div v-html="newsDetail.title" class="news-detail-context-title">

            </div>
            <div class="news-detail-context-body" v-html="newsDetail.context">

            </div>
        </div>
    </div>
</template>

<script>
    import * as news from '_api/api_news';

    export default {
        name: "NewsDetail",
        components: {},
        data() {
            return {
               newsDetail:{}
            }
        },
        mounted(){
            this.init();
        },
        methods: {
            init(){
                this.$http.post(news.get+this.$route.query.id,null,this).then((data)=>{
                    this.newsDetail = data.ret;
                })
            },
            back() {
                this.$router.push({
                    path: '/'
                });
            }
        }
    }
</script>

<style scoped>
    .news-detail-context{
        width: 1000px;display: inline-block;background-color: white;
        padding: 20px;
        margin-top: 40px;
    }
    .news-detail-context-title{
        font-weight: bold;
        line-height: 60px;
        font-size: 22px;
    }
    .news-detail-context-body{
        width: 100%;
        text-align: left;
    }
</style>