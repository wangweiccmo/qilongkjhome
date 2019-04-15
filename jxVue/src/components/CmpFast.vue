<template>
    <div class="jx fu jx-card jx-p10 jx-box-column">
        <jx-header info="快速通道"></jx-header>
        <div class="jx-flex1 jx-box jx-box-wrap" style="padding-top: 10px">
            <icon-text class="fast-item" text="学生数据" @click="go('/base')" icon="icon-xuejiguanli" color="rgb(58, 142, 230)"></icon-text>
            <icon-text class="fast-item" text="教学资源" @click="go('/resource')" icon="icon-ziyuanguanli" style="padding-top: 5px" fontSize="30px" color="red"></icon-text>

        </div>
    </div>
</template>

<script>
    import JxHeader from "./ui/JxHeader"
    import IconText from "./ui/IconText"
    export default {
        components: {JxHeader,IconText},
        name: "CmpFast",
        data() {
            return {
                title:'',
            }
        },
        methods: {
            go(path) {
                this.$router.push(path)
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fast-item{
    margin-right:  20px;
}
</style>
