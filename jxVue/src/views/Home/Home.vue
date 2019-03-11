<template>
    <div class="jx-body">
        <!-- background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"-->
        <div class="jx-header jx-box" >
            <div style="width: 200px;background-color: yellow;height:60px;display: inline-block;line-height: 40px;padding-top: 5px;box-sizing: border-box">
                <img style="height:52px" src="../../assets/logo.png"/>
            </div>
            <div>
                <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                       >
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">学生管理</el-menu-item>
                    <el-menu-item index="3">教职工管理</el-menu-item>
                    <!--<el-menu-item index="4">机构管理</el-menu-item>-->
                    <el-menu-item index="5">教学资源</el-menu-item>
                    <el-menu-item index="51">在线考试</el-menu-item>
                    <el-menu-item index="6">数据中心</el-menu-item>
                </el-menu>
            </div>
        </div>

        <div class="jx-context">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                activeIndex:'1',
                show2: false,
                tableData: {}
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.show2 = true;
            })

        },
        created() {
        },
        methods: {
            go(path){
                this.$router.push(path)
            },
            onSubmit() {

            },
            handleSelect(index){
                console.log(index)
                switch (index){
                    case '1':
                        this.go('/')
                        break;
                    case '2':
                        this.go('/base')
                        break;
                    case '3':
                        this.go('/teacher')
                        break;
                    case '5':
                        this.go('/resource')
                        break;
                    case '51':
                        this.go('/exam')
                        break;
                    case '6':
                        this.go('/dataCenter')
                        break;
                    default:

                }
            }
        }
    }
</script>

<style scoped>
    .breadcrumb{

    }
    .transition-box {
        display: inline-block;
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #409EFF;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
</style>