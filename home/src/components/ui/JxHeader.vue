<template>
    <div style="line-height: 25px">
       <div class="header-icon"></div>
       <span class="jx-font-14" v-text="info"></span>
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
        height: 15px;
        display: inline-block;
        background-color: #3a8ee6;
        vertical-align: top;
        margin-top: 6px;
        margin-right: 4px;
    }
</style>
