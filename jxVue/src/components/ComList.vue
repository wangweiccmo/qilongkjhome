<template>
    <div class="fu jx-l" >
        <div class="comlist-toolBar">
            <el-button size="mini" @click.stop="createItem" type="primary">新建</el-button>
            <el-button size="mini" @click.stop="getList" type="primary">刷新</el-button>
            <!--<el-button size="mini" @click.stop="batDelete" type="danger">批量删除</el-button>-->

        </div>
        <el-table
                border
                size="mini"
                v-loading="isLoading"
                :data="dataList"
                style="width: 100%;height: calc(100% - 70px)">
            <template  v-for="option,key in httpApi.tableType">
                <el-table-column
                        v-if="option.type == 'Operation'"
                        :width="option.width"
                        :label="option.label">
                    <template slot-scope="scope">
                        <el-button v-if="option.show" @click="show(scope.row)" type="text" size="small">查看</el-button>
                        <el-button v-if="option.edit" @click="edit(scope.row)"  type="text" size="small">编辑</el-button>
                        <el-button v-if="option.delete" @click="del(scope.row)" style="color:red" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                         v-else
                        :prop="key"
                        :label="option.label"
                        :width="option.width">
                </el-table-column>
            </template>
        </el-table>
        <div style="width: 100%;text-align: right;background-color: white">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="page.page"
                    :page-sizes="[50, 100, 200, 500]"
                    :page-size="page.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </div>
        <ComListCreateDialog
                v-if="comListCreateDialogShow"
                :httpApi="httpApi"
                :id="id"
                :mode="mode"
                @inster-over="createOver"
                :visible.sync="comListCreateDialogShow">

        </ComListCreateDialog>
    </div>
</template>

<script>
    import ComListCreateDialog from '_cmp/dialog/ComListCreateDialog';

    export default {
        name: "ComList",
        mixins: [],
        components: {ComListCreateDialog},
        props:{
            httpApi:{
                type: Object,
                default:()=>({})
            }
        },
        data() {
            return {
                comListCreateDialogShow:false,
                total:200,
                isLoading:false,
                mode:0, //0新建 1 查看 2 编辑
                page:{page:1,pageSize:50},
                dataList:[]
            }
        },
        created(){
        },
        mounted(){
            this.getList();
        },
        methods: {
            createItem(){
                this.mode = 0;
                this.id = null;
                this.comListCreateDialogShow = true;
            },
            batDelete(){

            },
            handleSizeChange(size){
                this.page.pageSize = size;
                this.getList();
            },
            handleCurrentChange(page){
                this.page.page = page;
                this.getList();
            },
            getList(){
                this.isLoading = true;
                let {page} = this;
                let params = page;
                this.$http.post(this.httpApi.selectByPage,params,this).then((res)=>{
                    this.dataList = res.data;
                    this.total = res.extend;
                })
            },
            createOver(data){
                this.getList();
            },
            show(row){
                this.mode = 1;
                this.id = row.id;
                this.comListCreateDialogShow = true;
            },
            edit(row){
                this.mode = 2;
                this.id = row.id;
                this.comListCreateDialogShow = true;
            },
            del(row){
                var isDel = window.confirm("是否删除本条数据？")
                if(isDel){
                    this.$http.post(this.httpApi.delById,{id:row.id},this).then((res)=>{
                        this.dataList = this.dataList.filter(item => item.id != row.id);
                        this.total = this.total - 1;
                    })
                }

            }
        }
    }
</script>

<style scoped>
        .comlist-toolBar{
            padding: 5px;
        }

</style>