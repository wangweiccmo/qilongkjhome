<template>
    <div class="fu jx-l" style="text-align: right;padding: 0 10px">
        <JxBreadcrumb></JxBreadcrumb>
        <div class="jx-box" style="height: 100%">
            <CmpTree :bindId="bindId" @handleNodeClick="handleNodeClick">

            </CmpTree>
            <div class="jx-flex1" style="background-color: white;text-align: left">
               选中节点： {{choNode.mapStr}}
               
            </div>
        </div>
    </div>
</template>

<script>
    import CmpTree from '_cmp/CmpTree';
    export default {
        name: "HomeBaseHome",
        components: {
            CmpTree
        },
        data() {
            return {
                bindId:2,
                choNode:{}
            }
        },
        methods: {
            handleNodeClick(data){
                this.choNode = data;
            }

        }
    }
</script>

<style scoped>

    .hbase-left {
        width: 200px;
        text-align: left;
    }

    .hbase-left2 {
        width: 200px;
        height: 100%;
        text-align: left;
        overflow-y: auto;
        background-color: yellow;
    }
</style>