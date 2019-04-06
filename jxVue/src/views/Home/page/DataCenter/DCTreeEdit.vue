<template>
    <div class="fu jx-l" style="padding: 10px">
        <JxBreadcrumb>

        </JxBreadcrumb>
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