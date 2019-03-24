<template>
    <div style="width: 100%;text-align: center;padding: 10px 0 50px 0">
        <div style="width: 1100px;text-align: left;display: inline-block;font-size: 15px">
        Copyright © 四川齐龙科技有限公司<br/>
        phone:18981993309, 13378102201<br/>
        E-mail：569006732@qq.com<br/>
        总部地址：成都市天府新区湖畔路北段366号1栋3栋1号
        </div>
    </div>
</template>

<script>
    export default {
        name: "JxHeader",
        props: ['info'],
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .header-icon{
        width: 3px;
        height: 23px;
        display: inline-block;
        background-color: #e60012;
        vertical-align: top;
        margin-top: 6px;
        margin-right: 4px;
    }
</style>
