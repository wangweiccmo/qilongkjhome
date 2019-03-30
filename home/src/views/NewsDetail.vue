<template>
    <div class="fu jx-bg-color" style="text-align: center">
        <BaseImgHeader src="/img/zxdt_banner.jpg"></BaseImgHeader>
        <div class="news-detail-context ">
            <el-button size="mini" @click.stop="back()" style="float: left" type="text">返回</el-button>
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
        beforeRouteLeave(to, from, next) {
            // 设置下一个路由的 meta
            to.meta.keepAlive = true;  // 让 A 缓存，即不刷新
            next();
        },
        methods: {
            init(){
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                this.$http.post(news.get+this.$route.query.id,null,this).then((data)=>{
                    loading.close();
                    this.newsDetail = data.ret;
                })
            },
            back() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .news-detail-context{
        width: 1100px;display: inline-block;background-color: white;
        padding: 0 20px 20px 20px;
        margin-top: 0px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);

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