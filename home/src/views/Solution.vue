<template>
    <div class="fu jx-bg-color">
        <BaseImgHeader src="/img/jjfa_banner.jpg"></BaseImgHeader>
        <div style="margin: 0 auto;width: 1100px;min-height:calc(100% - 338px) ">
            <div style="width: 100%" class="jx-box">
                <div style="width: 200px;height: 100%;text-align: left">
                    <el-menu
                            :default-active="menuActive"
                            class="el-menu-vertical-demo"
                            @select="handleSelect">

                        <el-menu-item index="3">
                            <i class="el-icon-menu"></i>
                            <span slot="title">数字校园平台</span>
                        </el-menu-item>

                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">网络教学平台</span>
                        </el-menu-item>
                        <el-menu-item index="5">
                            <i class="el-icon-setting"></i>
                            <span slot="title">课程资源</span>
                        </el-menu-item>
                        <el-menu-item index="6">
                            <i class="el-icon-setting"></i>
                            <span slot="title">专业建设</span>
                        </el-menu-item>
                        <el-menu-item index="7">
                            <i class="el-icon-setting"></i>
                            <span slot="title">现代实训基地</span>
                        </el-menu-item>
                    </el-menu>

                </div>
                <div class="jx-flex1 " style="text-align: left;padding: 0 30px 30px 30px">
                    <div class="jx-card" style="background-color: white;line-height: 30px">
                        <div :key="i" v-for="item,i in newsList" class="jx-box newsItem">
                            <div v-if="item.img" style="height:90px;width: 160px;">
                                <img style="height:90px;width: 154px;" :src="item.img">
                            </div>
                            <div class="jx-flex1 " style="padding: 0 10px">
                                <div class="jx-box">
                                    <div class="jx-flex1 jx-font-16 jx-pointer" @click.stop="itemClick(item)">{{item.title}}</div>
                                    <div class="jx-font-12" style="width: 120px">{{dateTimeFormat(item.createdAt)}}</div>
                                </div>
                                <div class="jx-font-14">
                                    {{item.info}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <JxFooder></JxFooder>
    </div>
</template>

<script>
    import * as news from '_api/api_news';
    import formatterMixin from '_mixin/formatterMixin';

    export default {
        name: "Solution",
        mixins:[formatterMixin],
        components: {
        },
        data() {
            return {
                menuActive:'3',
                newsList:[]
            }
        },
        mounted(){
            this.init(this.menuActive);
        },
        methods: {
            init(mode){
                this.$http.post(news.allByMode+mode,null,this).then((data)=>{
                    this.newsList = data.ret;
                })
            },
            handleSelect(mode){
                this.init(mode);
            },
            itemClick(item){
                console.log()
                this.$router.push({
                    path: '/newsDetail',
                    query: {
                        id: item.id
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .newsItem{
        height: 110px;
        border-bottom: 1px dashed #d7d7d8;
        padding: 10px 10px 10px 10px;
        color:#555;

    }
    .newsItem:last-child{
        border-bottom: 0;
    }
</style>