<template>
    <div>
        <CmpTreeEdit :bindId="bindId" isEdit width="100%">

        </CmpTreeEdit>
    </div>
</template>

<script>
    import CmpTreeEdit from '_cmp/CmpTreeEdit';

    export default {
        name: "ResourceTreeSet",
        mixins: [],
        components: {
            CmpTreeEdit
        },
        data() {
            return {
                bindId:2
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
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }


</style>