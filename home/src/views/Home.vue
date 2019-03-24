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
            <img style="width: 1100px" src="../assets/img/bg2.png">
        </div>
        <div class="home-body-lv1" >
            <div style="width: 1100px;display: inline-block;background-color: white" class="jx fu jx-card jx-p10 jx-box-column">
                <jx-header info="公司简介"></jx-header>
                <div class="jx-box" >
                     <div class="jx-flex1" style="padding: 30px 20px 0px 0px;box-sizing: border-box;line-height: 30px">
                         &emsp;&emsp;四川齐龙科技有限公司（简称“齐龙科技”）于2018年成立于四川省天府新区，齐龙科技以教学信息化、管理智能化、教育现代化为出发，为中高职院校提供各级示范校重点专业建设咨询与服务、信息化课程建设与管理软件产品的研发、现代化实训室的规划与打造等产品，协同校方与校企合作单位为职业教育现代化的发展提供高品质的人才培养规划、打造高效率的人才培养环境，我们将为您提供卓越的产品与服务！
                     </div>
                     <div class="home-body-cmp-img" >
                     </div>
                </div>
            </div>
        </div>
        <div class="home-body-fd">
            <div style="display: flex">
                <div>
                    友情链接
                </div>
                <div style="flex: 1;height: 2px;margin-top: 10px;background-color: red;vertical-align: middle">

                </div>

            </div>
            <div style="width: 100%;display: flex;">
                <div class="jx-flex1">
                    <img class="jx-pointer" @click.stop="link(1)" src="../assets/img/link/fblink1.jpg">
                </div>
                <div class="jx-flex1">
                    <img class="jx-pointer" @click.stop="link(2)" src="../assets/img/link/fblink2.jpg">
                </div>
                <div class="jx-flex1">
                    <img class="jx-pointer" @click.stop="link(3)" src="../assets/img/link/fblink3.png">
                </div>
                <div class="jx-flex1">
                    <img class="jx-pointer" @click.stop="link(4)" src="../assets/img/link/fblink4.png">
                </div>
            </div>

        </div>
        <JxFooder></JxFooder>
    </div>
</template>

<script>
    import MsgCenter from "../components/MsgCenter"
    import CmpDT from "../components/CmpDT"
    import JxHeader from "../components/ui/JxHeader"
    import JxFooder from "../components/ui/JxFooder"

    export default {
        name: "home",
        components: {MsgCenter,CmpDT,JxHeader,JxFooder},
        data() {
            return {
                activeIndex:'0'
            }
        },
        methods: {
            link(mode){
                console.log(mode);
                let url = ''
                switch(mode)
                {
                    case 1:
                        // 教育部
                        url = 'http://www.moe.edu.cn/';
                        break;
                    case 2:
                        // 中职业
                        url ='http://www.tvet.org.cn/';
                        break;
                    case 3:
                        // 中成人
                        url ='http://www.caea.org.cn/';
                        break;
                    case 4:
                        // 中职业
                        url ='http://www.chinazy.org/';
                        break;
                    default:
                }
                console.log(url);
                window.open(url);
            },
            onSubmit() {
                this.$router.push({
                    path: '/'
                });
            }
        }
    }
</script>

<style scoped>
    .home-body-cmp-img{
        background: url('../assets/img/gongsijianj.png') no-repeat center;
        height: 400px;
        width: 600px;
        background-size: contain;
    }
    .home-body{
        text-align: center;
        background-color: beige;
        overflow: auto;
    }
    .home-body-com-imfo{

    }
    .home-body-lv1{
        display: inline-block;
        width: 1100px;
        padding: 20px 0;
    }
    .home-body-lv1 .home-item-dt{
        display: inline-block;
        height: 350px;
        width: 540px;
        margin:0 10px 0 0;
        background-color: white;
    }
    .home-body-lv1 .home-item-center{
        display: inline-block;
        height: 350px;
        width: 540px;
        margin:0 0 0 10px;
        background-color: white;
    }
    .home-body-lv2{
        display: inline-block;
        width: 100%;
        height: 500px;
    }
    .home-body-fd{
        width: 1100px;
        text-align: left;
        display: inline-block;
    }
    .foot_links .links_title {
        height: 30px;
        line-height: 30px;
        color: #d2f9ff;
        font-size: 16px;
        text-indent: 23px;
        margin-bottom: 10px;
    }
</style>