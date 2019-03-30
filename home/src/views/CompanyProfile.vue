<template>
    <div class="fu jx-bg-color">
        <BaseImgHeader src="/img/gsjj.jpg"></BaseImgHeader>
        <div style="margin: 0 auto;width: 1100px;min-height:calc(100% - 338px) ">
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
                <div class="jx-flex1 " style="text-align: left;padding: 0 30px 30px 30px;">
                    <div class="jx-card" style="background-color: white;padding: 30px;line-height: 30px;">
                        <div>公司介绍</div>
                        四川齐龙科技有限公司（简称“齐龙科技”）于2018年成立于四川省天府新区，齐龙科技以教学信息化、管理智能化、教育现代化为出发，为中高职院校提供各级示范校重点专业建设咨询与服务、信息化课程建设与管理软件产品的研发、现代化实训室的规划与打造等产品，协同校方与校企合作单位为职业教育现代化的发展提供高品质的人才培养规划、打造高效率的人才培养环境，我们将为您提供卓越的产品与服务！

                    </div>

                </div>
            </div>
        </div>
        <JxFooder></JxFooder>
    </div>
</template>

<script>

    export default {
        name: "CompanyProfile",
        components: {},
        data() {
            return {
                menuActive: '/CompanyProfile'
            }
        },
        methods: {
            handleSelect(i) {
                this.menuActive = i;
                this.$router.push(i)
            }
        }
    }
</script>

<style scoped>


</style>