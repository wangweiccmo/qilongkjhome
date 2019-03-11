<template>
    <div class="jx fu jx-card jx-p10 jx-box-column">
        <jx-header info="快速通道"></jx-header>
        <div class="jx-flex1 jx-box jx-box-wrap">
            <icon-text text="快速通道" icon="icon-text-i" color="red"></icon-text>
            <icon-text text="快速通道" icon="icon-text-i"></icon-text>
            <icon-text text="快速通道" icon="icon-text-i"></icon-text>
            <icon-text text="快速通道" icon="icon-text-i"></icon-text>
            <icon-text text="快速通道" icon="icon-text-i"></icon-text>
            <icon-text text="快速通道" icon="icon-text-i"></icon-text>
            <icon-text text="快速通道" icon="icon-text-i"></icon-text>
            <icon-text text="快速通道" icon="icon-text-i"></icon-text>
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
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
