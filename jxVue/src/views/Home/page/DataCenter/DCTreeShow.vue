<template>
    <div class="fu jx-l" style="padding: 10px">
        <div class="jx-breadcrumb">
            <div style="padding-top: 3px">
                <el-breadcrumb v-if="$route.name && $route.name.length" separator="/">
                    <el-breadcrumb-item  v-for="item,i in $route.name" :key="i" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <CmpTree :bindId="bindId" width="100%">

        </CmpTree>
    </div>
</template>

<script>
    import CmpTree from '_cmp/CmpTree';

    export default {
        name: "DCTreeEdit",
        mixins: [],
        components: {
            CmpTree
        },
        data() {

            return {
                bindId:this.$route.query.bindId,
                treeList:[]
            }
        },
        mounted(){
        },
        methods: {

            show(row){
                console.log(row);
            }
        }
    }
</script>

<style >


    .custom-tree-node-text {
        margin-right: 30px;
    }

</style>