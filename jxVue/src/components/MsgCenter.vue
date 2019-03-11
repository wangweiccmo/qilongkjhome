<template>
    <div class="jx fu jx-card jx-p10 jx-box-column">
        <jx-header info="消息通知"></jx-header>
        <div class="jx-flex1">
            <div style="width: 100%;overflow: hidden">
                <el-tabs  @tab-click="handleClick">
                    <el-tab-pane label="用户管理" name="first">

                    </el-tab-pane>
                    <el-tab-pane label="配置管理" name="second">

                    </el-tab-pane>
                    <el-tab-pane label="角色管理" name="third">

                    </el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="fourth">

                    </el-tab-pane>

                </el-tabs>
            </div>

        </div>
    </div>
</template>

<script>
    import JxHeader from "./ui/JxHeader"

    export default {
        components: {JxHeader},
        name: "HelloWorld",
        data() {
            return {
            }
        },
        methods: {
            handleClick(index){
                console.log(index)
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
