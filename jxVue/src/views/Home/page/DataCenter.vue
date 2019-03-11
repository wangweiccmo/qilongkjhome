<template>
    <div class="fu jx-box jx-bg  ">
        <div class="hbase-left jx-box-shadow jx-box-column">
            <div style="height: 100px;text-align: center;padding-top: 10px">
                <i class="iconfont icon-ziyuanguanli" style="font-size: 35px;color: #3a8ee6;line-height: 50px"></i><br>
                <span class="jx-font-14">数据中心</span>

            </div>
            <div class="jx-flex1" style="overflow-y: auto">
                <el-menu
                        @select="selectMenu"
                        default-active="1"
                        class="el-menu-vertical-demo">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>基础数据</span>
                        </template>
                        <el-menu-item index="/dataCenter/dcTree">分类结构</el-menu-item>
                        <!--<el-menu-item index="1-2">资源分类</el-menu-item>-->
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
        name: "DataCenter",
        data() {
            return {
                activeNames: ['1']
            }
        },
        methods: {
            selectMenu(val) {
                this.$router.push(val)
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