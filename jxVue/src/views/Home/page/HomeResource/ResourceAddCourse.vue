<template>
    <div class="fu jx-l jx-box-column">
        <div class="jx-breadcrumb">
            <div class="">
                当前位置：
            </div>
            <div style="padding-top: 3px">
                <el-breadcrumb v-if="$route.name && $route.name.length" separator="/">
                    <el-breadcrumb-item v-for="item,i in $route.name" :key="i" :to="{ path: item.path }">{{item.name}}
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
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
                            :data="tableData"
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
                        <el-table-snpm
                                prop="point"
                                label="学分"
                                width="100">
                        </el-table-snpm>
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
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                <el-button type="text" size="small">编辑</el-button>
                                <el-button type="text" size="small" style="color: red">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <el-row class="jx-tr">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[50, 100, 200, 500]"
                            :page-size="50"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="total">
                    </el-pagination>
                </el-row>
            </div>
        </div>
        <AddCourseDialog :bindId="bindId" :dict="dict" :subjects="subjects" :checkedNode="checkedNode" :visible.sync="uploadResourceDialogShow">

        </AddCourseDialog>

    </div>
</template>

<script>
    import CmpTree from '_cmp/CmpTree';
    import AddCourseDialog from '_cmp/dialog/AddCourseDialog';
    import * as API_COURSE from '_api/api_course';

    export default {
        name: "HomeBaseHome",
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
                currentPage: 1,
                total:10,
                tableData:[],
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
            getResourcesByPage(){
                let page = {page:1,pageSize:50};
                this.$http.post(API_COURSE.selectByPage,page,this).then((res)=>{
                    this.tableData = res.data;
                    this.total = res.extend.total;
                })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleSelectionChange(){

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