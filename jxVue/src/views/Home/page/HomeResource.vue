<template>
    <div class="fu jx-box jx-bg  ">
        <div class="hbase-left jx-box-shadow jx-box-column">
            <div style="height: 100px;text-align: center;padding-top: 10px">
                <i class="iconfont icon-ziyuanguanli" style="font-size: 35px;color: #3a8ee6;line-height: 50px"></i><br>
                <span class="jx-font-14">资源管理</span>

            </div>
            <div class="jx-flex1" style="overflow-y: auto">
                <el-menu
                        @select="selectMenu"
                        default-active="1"
                        class="el-menu-vertical-demo">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>基础设置</span>
                        </template>
                        <el-menu-item index="/resource/tree-set">分类树设置</el-menu-item>
                        <el-menu-item index="/resource/auth">权限设置</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>资源上传维护</span>
                        </template>
                        <el-menu-item index="/resource/upload">上传资源</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>资源审核</span>
                        </template>
                        <el-menu-item index="/resource/approval">审批</el-menu-item>
                        <el-menu-item index="/resource/stop">启用停用</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>备课管理</span>
                        </template>
                        <el-menu-item index="/resource/course">创建课程</el-menu-item>
                        <el-menu-item index="1-2">在线备课</el-menu-item>
                        <el-menu-item index="1-2">个人空间</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>在线教学</span>
                        </template>
                        <el-menu-item index="1-1">在线教学</el-menu-item>
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>统计分析</span>
                        </template>
                        <el-menu-item index="1-1">学生报道</el-menu-item>
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
        height: 100%;
        text-align: left;
        overflow-y: auto;
    }

</style>