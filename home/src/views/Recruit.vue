<template>
    <div class="fu jx-bg-color">
        <BaseImgHeader src="/img/zxns_banner.jpg"></BaseImgHeader>
        <div style="margin: 0 auto;width: 1100px;min-height:calc(100% - 338px) ">
            <div style="width: 100%" class="jx-box">
                <div style="width: 200px;height: 100%;text-align: left">
                    <el-menu
                            :default-active="menuActive"
                            class="el-menu-vertical-demo"
                            @select="handleSelect">

                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span slot="title">首页</span>
                        </el-menu-item>

                        <el-menu-item index="2">
                            <i class="el-icon-setting"></i>
                            <span slot="title">销售代表</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-setting"></i>
                            <span slot="title">JAVA开发</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">产品经理</span>
                        </el-menu-item>
                        <el-menu-item index="5">
                            <i class="el-icon-setting"></i>
                            <span slot="title">售前文案</span>
                        </el-menu-item>
                        <el-menu-item index="6">
                            <i class="el-icon-setting"></i>
                            <span slot="title">平面设计师</span>
                        </el-menu-item>
                        <el-menu-item index="7">
                            <i class="el-icon-setting"></i>
                            <span slot="title">网站美工</span>
                        </el-menu-item>
                    </el-menu>

                </div>
                <div class="jx-flex1 " style="text-align: left;padding: 0 30px 30px 30px">
                    <div class="jx-card" style="background-color: white;line-height: 30px;padding: 20px ">
                        <div v-if="menuActive == 1" class="jx-font-14">
                            我们正向全国各地扩展队伍，我们致力于打造顾问式销售团队，以培养全能人才为目的，为每位成员提供系统而专业的销售培训机会；我们是一个技术和服务并重的团队，每位技术人员都能得到研发、设计专业技术、客户服务、客户培训、项目管理等多方面的培训和锻炼，每位成员最终都成为了技术和服务的多面手。
                            只要您加入这个团队，您一切回报与您的努力成正比；
                            只要您加入这个团队，您将获得与更高层人员沟通和对话的机会；
                            只要您加入这个团队，您将获得多方面的实战和锻炼。
                        </div>
                        <div v-if="menuActive == 2" class="jx-font-14">
                            薪资构成：无责底薪+提成+带薪年假+生日津贴+双休+五险<br>
                            岗位职责：<br>
                            1.负责公司产品的销售及推广；<br>
                            2.根据市场营销计划，完成部门销售指标；<br>
                            3.开拓新市场,发展新客户,增加产品销售范围；<br>
                            4.负责辖区市场信息的收集及竞争对手的分析；<br>
                            5.负责销售区域内销售活动的策划和执行，完成销售任务；<br>
                            6.管理维护客户关系以及客户间的长期战略合作计划。<br>
                            任职资格：<br>
                            1.大专及以上学历，市场营销、计算机等相关专业；<br>
                            2.1-2年以上销售行业工作经验，业绩突出者优先；<br>
                            3.反应敏捷、表达能力强，具有较强的沟通能力及交际技巧；<br>
                            4.具备一定的市场分析及判断能力，良好的客户服务意识及商务意识；<br>
                            5.有责任心，能承受较大的工作压力；<br>
                            6.应届毕业生也可考虑。<br>
                        </div>
                        <div v-if="menuActive == 3" class="jx-font-14">
                            薪资构成：基本工资+绩效工资+带薪年假+生日津贴+双休+五险<br>
                            岗位职责：<br>
                            1.按需求进行系统设计和编写文档，完成功能模块的编码；<br>
                            2.负责对开发模块的单元测试和集成测试；<br>
                            3.能按计划有效且高质量的完成分配的任务；<br>
                            4.协助并快速定位及解决开发及运行过程中的技术问题。<br>
                            任职资格：<br>
                            1.大专以上学历，2年以上开发工作经验者优先；<br>
                            2.熟悉Web前端技术，HTML5.CSS3，熟练使用JavaScript/Jquery、Ajax；<br>
                            3.熟练使用J2EE开源 框架，如Struts2.Spring、Mybatis、Hibernate、SpringMVC等；<br>
                            4.熟练掌握至少一种常用数据库（Oracle、MySql、SqlServer）；<br>
                            5.熟练使用Tomcat等服务器；<br>
                            6.熟练使用SVN、GIT等代码管理工具。<br>

                        </div>
                        <div v-if="menuActive == 4" class="jx-font-14">
                            薪资构成：基本工资+绩效工资+带薪年假+生日津贴+双休+五险<br>
                            岗位职责：<br>
                            协助上级领导完成公司相关教育项目方案攥写、教育产品开发。<br>
                            任职资格:<br>
                            1.本科及以上学历，现代教育技术等相关专业优先考虑；<br>
                            2.具有较强的逻辑思维能力和语言表达能力、优秀的文笔功底；<br>
                            3.1年以上产品开发工作经验；<br>
                            4.熟练使用PowerPoint、Word、Excel等Office办公软件；<br>
                            5.对解决具有挑战性问题充满激情，有较强的创新意识；<br>
                            6.热爱教育事业及现代教育技术的发展；<br>
                            7.了解互联网产品用户体验的相关工作方法；<br>
                            8.性格开朗，主动学习能力强，工作认真负责，富有团队合作精神。<br>
                            9.愿意跟随公司共同成长，具有良好敬业精神。<br>

                        </div>
                        <div v-if="menuActive == 5" class="jx-font-14">
                            薪资构成：基本工资+绩效工资+带薪年假+生日津贴+双休+五险<br>
                            岗位职责：<br>
                            协助销售人员完成项目售前技术服务工作，包括技术交流、方案制作、投标和产品演示、客户培训等。<br>
                            任职资格:<br>
                            1.本科及以上学历，汉语言文学、文秘等相关专业；<br>
                            2.具有较强的逻辑思维能力和语言表达能力、优秀的文笔功底；<br>
                            3.熟练使用PowerPoint、Word、Excel等Office办公软件；<br>
                            4.对解决具有挑战性问题充满激情，有较强的创新意识；<br>
                            5.了解互联网产品用户体验的相关工作方法；<br>
                            6.性格开朗，主动学习能力强，工作认真负责，富有团队合作精神；<br>
                            7.愿意跟随公司共同成长，具有良好敬业精神。<br>

                        </div>
                        <div v-if="menuActive == 6" class="jx-font-14">
                            薪资构成：基本工资+绩效工资+带薪年假+生日津贴+双休+五险<br>
                            岗位职责:<br>
                            1.公司日常工作美术设计和宣传资料的制作；<br>
                            2.参与重点项目组策划沟通会议，从设计层面提出合理化建设和意见；<br>
                            3.严格执行设计制作流程，熟练操作各项设计制作软件，保证工作质量；<br>
                            4.与项目参与部门沟通做好项目实施前后的各项工作，保障完成质量；<br>
                            5.负责所有项目设计的保密工作；<br>
                            6.完成公司安排的其它工作。<br>
                            任职资格:<br>
                            1.大专及以上学历，美术设计、室内设计等相关专业优先；<br>
                            2.熟练使用Dreamweaver、Photoshop、Fireworks等美工设计软件；<br>
                            3.有独立完成整个设计的工作能力；<br>
                            4.对色彩把握敏锐，具有把握不同风格页面的能力；<br>
                            5.具有一年同行业相关工作经验者优先考虑；<br>
                            6.逻辑思维清晰，做事认真、细致、表达能力强；<br>
                            7.性格开朗，主动学习能力强，有创新意识，富有团队合作精神；<br>
                            8.有良好的处事心态对企业有一定的忠诚度。<br>

                        </div>
                        <div v-if="menuActive == 7" class="jx-font-14">
                            薪资构成：基本工资+绩效工资+带薪年假+生日津贴+双休+五险<br>
                            岗位职责：<br>
                            协助上级领导完成公司相关教育项目方案攥写、教育产品开发。<br>
                            任职资格:<br>
                            1.本科及以上学历，现代教育技术等相关专业优先考虑；<br>
                            2.具有较强的逻辑思维能力和语言表达能力、优秀的文笔功底；<br>
                            3.1年以上产品开发工作经验；<br>
                            4.熟练使用PowerPoint、Word、Excel等Office办公软件；<br>
                            5.对解决具有挑战性问题充满激情，有较强的创新意识；<br>
                            6.热爱教育事业及现代教育技术的发展；<br>
                            7.了解互联网产品用户体验的相关工作方法；<br>
                            8.性格开朗，主动学习能力强，工作认真负责，富有团队合作精神。<br>
                            9.愿意跟随公司共同成长，具有良好敬业精神。

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <JxFooder></JxFooder>
    </div>
</template>

<script>

    export default {
        name: "Recruit",
        mixins:[],
        components: {
        },
        data() {
            return {
                menuActive:'1'
            }
        },
        mounted(){

        },
        methods: {

            handleSelect(mode){
                this.menuActive = mode;
            }
        }
    }
</script>

<style scoped>
    .newsItem{
        height: 110px;
        border-bottom: 1px dashed #d7d7d8;
        padding: 10px 10px 10px 10px;
        color:#555;

    }
    .newsItem:last-child{
        border-bottom: 0;
    }
</style>