<template>
    <div class="fu jx-l" style="padding: 10px">
        <JxBreadcrumb>

        </JxBreadcrumb>
        <el-table
                border
                size="mini"
                :data="treeList"
                v-loading="isLoading"
                style="width: 100%">

            <el-table-column
                    prop="id"
                    label="id"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="bindId"
                    label="业务绑定id"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="名称"
                    width="160">
            </el-table-column>
            <el-table-column
                    prop="info"
                    label="说明"
                    width="160">
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <el-button @click="show(scope.row)" type="text" size="small">查看</el-button>
                    <el-button @click="edit(scope.row)"  type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import * as TREE_API from '_api/api_tree';

    export default {
        name: "DCTree",
        mixins: [],
        components: {},
        data() {

            return {
                isLoading:false,
                treeList:[]
            }
        },
        mounted(){
            this.getList();
        },
        methods: {
            getList(){
                this.$http.post(TREE_API.selectAll,null,this).then((res)=>{
                    this.treeList = res.data;


                })
            },
            show(row){
                console.log(row);
                this.$router.push({
                    path: '/dataCenter/dCTreeShow',
                    query: {
                        bindId: row.bindId
                    }
                });
            },
            edit(row){
                this.$router.push({
                    path: '/dataCenter/dcTreeEdit',
                    query: {
                        bindId: row.bindId
                    }
                });
            }
        }
    }
</script>

<style >


    .custom-tree-node-text {
        margin-right: 30px;
    }

</style>