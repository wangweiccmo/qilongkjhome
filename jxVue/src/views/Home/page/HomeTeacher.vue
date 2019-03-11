<template>
    <div class="fu jx-box jx-bg">
        <div class="hbase-left jx-box-shadow jx-box-column">
            <div style="height: 90px;text-align: center;padding-top: 10px">
                <i class="iconfont icon-xuejiguanli" style="font-size: 50px;color: #3a8ee6"></i><br>
                <span class="jx-font-14">学生管理</span>

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
                    <el-menu-item index="/teacher/teacher-reg">
                        <i class="el-icon-setting"></i>
                        <span slot="title">教职工注册</span>
                    </el-menu-item>
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