<template>
    <div class="fu home-body">
        <div class="home-body-lv1">
            <div class="home-item-dt">
                <cmp-d-t>

                </cmp-d-t>
            </div>
            <div class="home-item-center">
                <MsgCenter>

                </MsgCenter>
            </div>
        </div>
        <div class="home-body-lv2">

        </div>
    </div>
</template>

<script>
    import MsgCenter from "../components/MsgCenter"
    import CmpDT from "../components/CmpDT"

    export default {
        name: "home",
        components: {MsgCenter,CmpDT},
        data() {
            return {
                activeIndex:'0'
            }
        },
        methods: {
            onSubmit() {
                this.$router.push({
                    path: '/'
                });
            }
        }
    }
</script>

<style scoped>
    .home-body{
        text-align: center;
        background-color: beige;
    }
    .home-body-lv1{
        display: inline-block;
        width: 1600px;
        padding: 30px 0;
    }
    .home-body-lv1 .home-item-dt{
        display: inline-block;
        height: 350px;
        width: 600px;
        margin:0 10px;
        background-color: white;
    }
    .home-body-lv1 .home-item-center{
        display: inline-block;
        height: 350px;
        width: 800px;
        margin:0 10px;
        background-color: white;
    }
    .home-body-lv2{
        display: inline-block;
        width: 100%;
        height: 500px;
        background-color: yellow;
    }
</style>