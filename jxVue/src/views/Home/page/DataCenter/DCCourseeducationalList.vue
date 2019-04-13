<template>
    <div class="fu jx-l jx-box-column" style="padding: 10px">
        <JxBreadcrumb>

        </JxBreadcrumb>
        <ComList class="jx-flex1" :httpApi="httpApi">

        </ComList>
    </div>
</template>

<script>
    import CmpTree from '_cmp/CmpTree';
    import ComList from '_cmp/ComList';
    import httpApi from '_api/api_courseEducational';

    export default {
        name: "DCCourseeducationalList",
        components: {
            CmpTree,
            ComList
        },
        data() {
            return {
                httpApi:httpApi
            }
        },
        mounted(){
        },
        methods: {
        }
    }
</script>

<style >


    .custom-tree-node-text {
        margin-right: 30px;
    }

</style>