<template>
    <div class="fu jx-l jx-box-column">
        <JxBreadcrumb></JxBreadcrumb>
        <div class="jx-flex1 jx-box">
            <CmpTree :bindId="bindId" @handleNodeClick="handleNodeClick">

            </CmpTree>
            <div class="jx-flex1 jx-box-column">

                <div>
                    <el-form :inline="true" size="mini" :model="searchObj" class="demo-form-inline"
                             style="margin-top: 30px">
                        <el-form-item label-width="80px" label="课程号">
                            <el-input style="width: 193px" v-model="searchObj.title" placeholder="课程号"></el-input>
                        </el-form-item>
                        <el-form-item label-width="80px" label="课程名称">
                            <el-input style="width: 193px" v-model="searchObj.title" placeholder="课程名称"></el-input>
                            <el-button type="primary" style="margin: 0 50px" @click="search">查询</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <el-row style="padding: 10px">
                    <el-button size="mini" type="primary" @click="add">增加</el-button>
                    <el-button size="mini" type="danger">修改</el-button>
                    <el-button size="mini" type="primary" >启用</el-button>
                    <el-button size="mini" type="primary">停用</el-button>
                </el-row>
                <div class="jx-flex1">
                    <el-table
                            border
                            size="mini"
                            :data="dataList"
                            @selection-change="handleSelectionChange"
                            style="width: 100%">
                        <el-table-column
                                fixed="left"
                                type="selection"
                                width="38">
                        </el-table-column>
                        <el-table-column
                                prop="id"
                                label="id"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="code"
                                label="课程号"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="课程名称"
                                width="160">
                        </el-table-column>
                        <el-table-column
                                prop="esName"
                                label="英语名称"
                                width="50">
                        </el-table-column>
                        <el-table-column
                                prop="point"
                                label="学分"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="time"
                                label="学时"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="openUnit"
                                label="开课单位"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="teachers"
                                label="教师"
                                width="50">
                        </el-table-column>

                        <el-table-column
                                prop="status"
                                label="状态"
                        >
                        </el-table-column>
                        <el-table-column
                                fixed="right"
                                label="操作"
                                width="160">
                            <template slot-scope="scope">
                                <el-button @click="info(scope.row)" type="text" size="small">查看</el-button>
                                <el-button @click="del(scope.row)" type="text" size="small" style="color: red">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <el-row class="jx-tr">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="page.page"
                            :page-sizes="[50, 100, 200, 500]"
                            :page-size="page.pageSize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="total">
                    </el-pagination>
                </el-row>
            </div>
        </div>
        <AddCourseDialog  @closed="uploadResourceDialogClose" :bindId="bindId" :dict="dict" :subjects="subjects" :checkedNode="checkedNode" :visible.sync="uploadResourceDialogShow">

        </AddCourseDialog>
        <ComListCreateDialog
                v-if="comListCreateDialogShow"
                :httpApi="httpApi"
                :id="id"
                :mode="editMode"
                :visible.sync="comListCreateDialogShow">

        </ComListCreateDialog>
    </div>
</template>

<script>
    import CmpTree from '_cmp/CmpTree';
    import AddCourseDialog from '_cmp/dialog/AddCourseDialog';
    import editMixin from '_cmp/mixin/editMixin';
    import API_COURSE from '_api/api_course';

    export default {
        name: "HomeBaseHome",
        mixins:[editMixin],
        components: {CmpTree,AddCourseDialog},
        data() {
            return {
                checkedNode:null,
                uploadResourceDialogShow:false,
                subjects: [],
                searchObj: {
                    subject:[]
                },
                bindId: 3,
                httpApi:API_COURSE,
                currentPage: 1,
                total:10,
                dict:{
                    resourceType:[],
                    resourceStandard:[],
                    auditState:[]
                }
            }
        },
        mounted(){
            this.init();
        },
        methods: {
            init(){
                let params = {
                    types:[
                        'resourceType',
                        'resourceStandard',
                        'auditState'
                    ]
                };
                this.getResourcesByPage();
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleSelectionChange(){

            },
            uploadResourceDialogClose(data){
                console.log(data)
            },
            handleNodeClick(data, bindId,map) {
                this.checkedNode = data;
                console.log(data, bindId);
            },
            search(){
                console.log(this.searchObj);
            },
            add(){
                this.uploadResourceDialogShow = true;
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