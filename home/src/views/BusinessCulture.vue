<template>
    <div class="fu home-body">
        <BaseImgHeader src="/puimg/gsjj.png"></BaseImgHeader>
        <div style="display: inline-block;width: 1100px">
            <div style="width: 100%" class="jx-box">
                <div style="width: 200px;height: 100%">
                    <el-menu
                            :default-active="menuActive"
                            class="el-menu-vertical-demo"
                            @select="handleSelect">

                        <el-menu-item index="/CompanyProfile">
                            <i class="el-icon-menu"></i>
                            <span slot="title">公司概况</span>
                        </el-menu-item>

                        <el-menu-item index="/BusinessCulture">
                            <i class="el-icon-setting"></i>
                            <span slot="title">企业文化</span>
                        </el-menu-item>
                    </el-menu>

                </div>
                <div class="jx-flex1 " style="text-align: left;padding: 0 30px 30px 30px">
                    <div class="jx-card" style="background-color: white;padding: 30px;line-height: 30px">
                        <div>企业文化</div>
                        企业愿景：在个人学习、校园教学、职业能力提升三个方面，成为最受欢迎的教育行业企业<br>
                        企业使命：<br>
                                为个人提供最有价值的学习资源<br>
                                为校园打造最有品质的教学环境<br>
                        为社会创造最有意义的学习平台<br>
                        企业宗旨：让学习变得更加精彩

                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import BaseImgHeader from "_cmp/ui/BaseImgHeader"

    export default {
        name: "BusinessCulture",
        components: {BaseImgHeader},
        data() {
            return {
                menuActive:'/CompanyProfile'
            }
        },
        methods: {
            handleSelect(i){
                this.$router.push(i)
            }
        }
    }
</script>

<style scoped>
    .home-body{
        text-align: center;
        background-color: beige;
    }

</style>