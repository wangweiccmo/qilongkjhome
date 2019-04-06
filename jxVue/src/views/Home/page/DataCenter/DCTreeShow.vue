<template>
    <div class="fu jx-l" style="padding: 10px">
        <JxBreadcrumb>

        </JxBreadcrumb>
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