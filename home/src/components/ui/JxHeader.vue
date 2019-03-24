<template>
    <div style="line-height: 35px">
       <div class="header-icon"></div>
       <span class="jx-font-16" v-text="info"></span>
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
        height: 16px;
        display: inline-block;
        background-color: #e60012;
        vertical-align: top;
        margin-top: 10px;
        margin-right: 4px;
    }
</style>
