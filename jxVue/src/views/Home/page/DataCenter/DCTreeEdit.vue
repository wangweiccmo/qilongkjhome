<template>
    <div class="fu jx-l" style="padding: 10px">
        <div class="jx-breadcrumb">
            <div style="padding-top: 3px">
                <el-breadcrumb v-if="$route.name && $route.name.length" separator="/">
                    <el-breadcrumb-item  v-for="item,i in $route.name" :key="i" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <CmpTreeEdit :bindId="bindId" isEdit width="100%">

        </CmpTreeEdit>
    </div>
</template>

<script>
    import CmpTreeEdit from '_cmp/CmpTreeEdit';

    export default {
        name: "CmpTreeSet",
        mixins: [],
        components: {
            CmpTreeEdit
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