<template>
    <div class="fu jx-l" >
        <el-table
                border
                size="mini"
                ref="multipleTable"
                v-loading="isLoading"
                :data="dataList"
                highlight-current-row
                @current-change="tableCurrentChange"
                @selection-change="handleSelectionChange"
                style="width: 100%;height: calc(100% - 70px)">
            <el-table-column
                    v-if="choMode == 2"
                    type="selection"
                    width="55">
            </el-table-column>
            <template  v-for="option,key in httpApi.tableType">

                <el-table-column
                        v-if="option.type != 'Operation'"
                        :prop="key"
                        :label="option.label"
                        :width="option.width">
                </el-table-column>

            </template>
            <el-table-column
                    v-if="operationOption.btns"
                    :width="operationOption.width"
                    label="操作">
                <template slot-scope="scope">
                    <el-button v-if="operationOption.btns.choice" @click="choice(scope.row)" type="text" size="small">选择</el-button>
                </template>
            </el-table-column>
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

    </div>
</template>

<script>
    import formatterMixin from '_cmp/mixin/formatterMixin.js';

    export default {
        name: "ComShowList",
        mixins: [formatterMixin],
        components: {},
        props:{
            operationOption:{
                type: Object,
                default:()=>({

                })
            },
            choMode:{// 1单选，2多选
                type: Number,
                default:1
            },
            httpApi:{
                type: Object,
                default:()=>({})
            }
        },
        data() {
            return {
                comListCreateDialogShow:false,
                total:200,
                currentRow:null,
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
            tableCurrentChange(row) {
                if(this.choMode==1){
                    this.$emit('choice',row);
                }else{
                    this.currentRow = row;
                    this.toggleSelection(row)
                }
            },
            handleSelectionChange(){

            },
            toggleSelection(row) {
                this.$refs.multipleTable.clearSelection();
                this.$refs.multipleTable.toggleRowSelection(row);

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
            choice(rows){
                this.$emit('choice',rows)
            }
        }
    }
</script>

<style scoped>
        .comlist-toolBar{
            padding: 5px;
        }

</style>