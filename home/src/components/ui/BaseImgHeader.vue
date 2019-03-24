<template>
    <div style="width: 100%">
        <img src="../../assets/img/gsjj.jpg">
        <div style="width: 1100px;display: inline-block;">
            <el-breadcrumb style="width: 1000px;font-size: 18px" separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a style="font-size: 18px" href="/">最新动态</a></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseImgHeader",
        props: ['src'],
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
