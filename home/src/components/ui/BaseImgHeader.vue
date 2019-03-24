<template>
    <div style="width: 100%">
        <div style="height: 210px;width: 100%;background-repeat: no-repeat;background-size:cover" :style="{'background-image':'url('+src+')'}">

        </div>
        <div style="width: 1100px;display: inline-block;">
            <el-breadcrumb style="width: 1000px;font-size: 15px;padding: 8px 0 5px 0" separator="/">
                <el-breadcrumb-item v-for="item in levelList" :to="item">{{item.meta.title}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseImgHeader",
        props: ['src'],
        created() {
            this.getBreadcrumb()
        },
        data() {
            return {
                levelList: []
            }
        },
        methods: {
            getBreadcrumb() {
                let matched = this.$route.matched.filter(item => item.name)
                const first = matched[0];
                this.levelList.push({ path: '/', meta: { title: '首页' }});
                this.levelList.push({path: first.path, meta: { title: first.meta.title}});
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
