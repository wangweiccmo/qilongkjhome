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
                        <el-form-item label-width="80px" label="资源标题">
                            <el-input style="width: 193px" v-model="searchObj.title" placeholder="资源标题"></el-input>
                        </el-form-item>
                        <el-form-item label-width="80px" label="资源类型">
                            <el-select v-model="searchObj.resourceType" placeholder="资源类型">
                                <el-option v-for="n in dict.resourceType" :key="n.id" :label="n.dictValue" :value="n.dictKey">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label-width="80px" label="资源标准">
                            <el-select v-model="searchObj.resourceStandard" placeholder="资源类型">
                                <el-option v-for="n in dict.resourceStandard" :key="n.id" :label="n.dictValue" :value="n.dictKey">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label-width="80px" label="学科">
                            <el-cascader
                                    :options="subjects"
                                    :props="{label:'name',value:'code'}"
                                    v-model="searchObj.subject">
                            </el-cascader>
                        </el-form-item>
                        <el-form-item label-width="80px" label="审核状态">
                            <el-select v-model="searchObj.auditState" placeholder="审核状态">
                                <el-option v-for="n in dict.auditState" :key="n.id" :label="n.dictValue" :value="n.dictKey">
                                </el-option>
                            </el-select>
                            <el-button type="primary" style="margin: 0 50px" @click="search">查询</el-button>
                        </el-form-item>

                    </el-form>
                </div>
                <el-row style="padding: 10px">
                    <el-button size="mini" type="primary">批量审批通过</el-button>
                    <el-button size="mini" type="primary">批量审批不通过</el-button>
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
                                prop="title"
                                label="标题"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="resourceType"
                                label="资源类型"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="resourceStandard"
                                label="资源标准"
                                width="160">
                        </el-table-column>
                        <el-table-column
                                prop="auditState"
                                label="审核状态"
                                width="50">
                        </el-table-column>
                        <el-table-snpm
                                prop="subjectMap"
                                label="学科"
                                width="100">
                        </el-table-snpm>
                        <el-table-column
                                prop="map"
                                label="资源路径"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="stick"
                                label="置顶"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="allowDownload"
                                label="允许下载"
                                width="50">
                        </el-table-column>
                        <el-table-column
                                prop="createUid"
                                label="创建时间"
                        >
                        </el-table-column>
                        <el-table-column
                                fixed="right"
                                label="操作"
                                width="160">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">通过</el-button>
                                <el-button type="text" size="small" style="color: red">不通过</el-button>
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


    </div>
</template>

<script>
    import CmpTree from '_cmp/CmpTree';
    import * as DICT_API from '_api/api_dict';
    import * as SUBJECT_API from '_api/api_subject';
    import * as RESOURCE_API from '_api/api_resource';

    export default {
        name: "HomeBaseHome",
        components: {CmpTree},
        data() {
            return {
                checkedNode:null,
                subjects: [],
                searchObj: {
                    subject:[]
                },
                bindId: 2,
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
                this.$http.post(DICT_API.selectByTypes,params,this).then((res)=>{
                   this.dict = res.data;
                })
                // 获取学科数组
                this.$http.post(SUBJECT_API.selectAll,null,this).then((res)=>{
                    this.subjects = res.data;
                })
                this.getResourcesByPage();
            },
            getResourcesByPage(){
                let page = {page:1,pageSize:50};
                this.$http.post(RESOURCE_API.getListByPage,page,this).then((res)=>{
                    console.log(res);
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