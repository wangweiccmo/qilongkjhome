<template>
    <div class="fu jx-box jx-bg">
        <div class="hbase-left jx-box-shadow jx-box-column">
            <div style="height: 90px;text-align: center;padding-top: 10px">
                <i class="iconfont icon-xuejiguanli" style="font-size: 50px;color: #3a8ee6"></i><br>
                <span class="jx-font-14">在线考试</span>

            </div>

            <div class="jx-flex1" style="overflow-y: auto">
                <el-menu
                        @select="selectMenu"
                        default-active="2"
                        class="el-menu-vertical-demo">
                    <el-menu-item index="/teacher">
                        <i class="el-icon-setting"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>在线考试</span>
                        </template>
                        <el-menu-item index="1-1">试题管理</el-menu-item>
                        <el-menu-item index="1-2">组卷管理</el-menu-item>
                        <el-menu-item index="1-2">试卷管理</el-menu-item>
                        <el-menu-item index="1-2">教师阅卷</el-menu-item>
                        <el-menu-item index="1-2">成绩管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>分析</span>
                        </template>
                        <el-menu-item index="1-1">成绩分析</el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
        </div>
        <div class="jx-flex1">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

    export default {
        name: "HomeIndex",
        components: {
        },
        data() {
            return {
                activeNames: ['1']
            }
        },
        methods: {
            selectMenu(val) {
                this.$router.push(val)
            },
            sysClick(val) {
                console.log(val);
            }

        }
    }
</script>

<style scoped>

    .hbase-left {
        width: 200px;
        text-align: left;
    }

</style>