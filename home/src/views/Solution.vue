<template>
    <div class="fu home-body">
        <BaseImgHeader src="/puimg/gsjj.png"></BaseImgHeader>
        <div style="display: inline-block;width: 1100px">
            <div style="width: 100%" class="jx-box">
                <div style="width: 200px;height: 100%;text-align: left">
                    <el-menu
                            :default-active="menuActive"
                            class="el-menu-vertical-demo"
                            @select="handleSelect">

                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span slot="title">数字校园平台</span>
                        </el-menu-item>

                        <el-menu-item index="2">
                            <i class="el-icon-setting"></i>
                            <span slot="title">网络教学平台</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-setting"></i>
                            <span slot="title">课程资源</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">专业建设</span>
                        </el-menu-item>
                        <el-menu-item index="5">
                            <i class="el-icon-setting"></i>
                            <span slot="title">现代实训基地</span>
                        </el-menu-item>
                    </el-menu>

                </div>
                <div class="jx-flex1 " style="text-align: left;padding: 0 30px 30px 30px">
                    <div class="jx-card" style="background-color: white;padding: 30px;line-height: 30px">
                    asdasd
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import BaseImgHeader from "_cmp/ui/BaseImgHeader"
    export default {
        name: "Solution",
        components: {
            BaseImgHeader
        },
        data() {
            return {
                menuActive:'1'
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .home-body{
        text-align: center;
        background-color: beige;
    }

</style>