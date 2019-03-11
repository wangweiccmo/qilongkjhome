<template>
    <div class="jx fu jx-card jx-p10 jx-box-column">
        <jx-header info="校园动态"></jx-header>
        <div class="jx-flex1">
            <el-carousel height="300px" >
                <el-carousel-item  >
                    <img class="fu" src="../assets/img/dt/dt1.jpg">
                </el-carousel-item>
                <el-carousel-item  :key="item">
                    <img class="fu" src="../assets/img/dt/dt2.png">
                </el-carousel-item>
                <el-carousel-item  :key="item">
                    <img class="fu" src="../assets/img/dt/dt3.jpg">
                </el-carousel-item>
                <el-carousel-item  :key="item">
                    <img class="fu" src="../assets/img/dt/dt4.jpg">
                </el-carousel-item>
            </el-carousel>

        </div>
    </div>
</template>

<script>
    import JxHeader from "./ui/JxHeader"

    export default {
        components: {JxHeader},
        name: "CmpFast",
        data() {
            return {
                title:'',

            }
        },
        methods: {
            click(i) {
                this.$emit('click',i)
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
