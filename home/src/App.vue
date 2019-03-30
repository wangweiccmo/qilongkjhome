<template>
    <div class="fu jx-box-column" style="text-align: center">
        <div style="display: inline-block;" class="header-border">
            <div class="jx-box " style="width: 1100px;margin: 0 auto">
                <div>
                    <img style="height: 60px" src="./assets/img/logo.png">
                </div>
                <div class="jx-flex1">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

                        <el-menu-item index="/">首页</el-menu-item>
                        <el-menu-item index="/CompanyProfile">公司简介</el-menu-item>
                        <el-menu-item index="/Solution">解决方案</el-menu-item>
                        <el-menu-item index="/Case">典型案列</el-menu-item>
                        <el-menu-item index="/Recruit">招纳贤士</el-menu-item>
                    </el-menu>
                </div>
                <div style="text-align: right;margin-top: 20px;">
                    <a href="/admin/index.html">管理员登录</a>
                </div>
            </div>
        </div>

        <div class="jx-flex1">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive">
                    <!-- 这里是会被缓存的视图组件，比如 Home！ -->
                </router-view>
            </keep-alive>

            <router-view v-if="!$route.meta.keepAlive">
                <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
            </router-view>
        </div>
    </div>
</template>

<script>

    export default {
        name: "home",
        components: {},
        data() {
            return {
                activeIndex: '0'
            }
        },
        methods: {
            handleSelect(i) {
                this.$router.push(i)
            }
        }
    }
</script>

<style scoped>
    .el-menu-demo {
        padding-left: 10px;
    }

    .header-border {
        height: 61px;
        border-bottom: solid 1px #e6e6e6;
    }
</style>

