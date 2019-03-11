<template>
    <div class="fu jx-box jx-bg">
        <div class="hbase-left jx-box-shadow jx-box-column">
            <div style="height: 90px;text-align: center;padding-top: 10px">
                <i class="iconfont icon-xuejiguanli" style="font-size: 50px;color: #3a8ee6"></i><br>
                <span class="jx-font-14">学生管理</span>

            </div>
            <!--<div style="height: 60px;padding-top: 10px;">-->
                <!--<el-dropdown trigger="click" @command="sysClick">-->
                    <!--<el-button style="width:200px;text-align: left;border-radius: 0;border: 0">-->
                        <!--切换系统<i class="el-icon-arrow-down el-icon&#45;&#45;right" style="float: right"></i>-->
                    <!--</el-button>-->
                    <!--<el-dropdown-menu slot="dropdown">-->
                        <!--<el-dropdown-item command="1">学籍管理</el-dropdown-item>-->
                        <!--<el-dropdown-item command="2">成绩系统</el-dropdown-item>-->
                    <!--</el-dropdown-menu>-->
                <!--</el-dropdown>-->
            <!--</div>-->
            <div class="jx-flex1" style="overflow-y: auto">
                <el-menu
                        @select="selectMenu"
                        default-active="2"
                        class="el-menu-vertical-demo">
                    <el-menu-item index="/base">
                        <i class="el-icon-setting"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>学籍管理</span>
                        </template>
                        <el-menu-item index="/base/student-reg">学生注册</el-menu-item>
                        <el-menu-item index="/base/student-report">学生报道</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>就业管理</span>
                        </template>
                        <el-menu-item index="1-1">学籍管理</el-menu-item>
                        <el-menu-item index="1-2">学生注册</el-menu-item>
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