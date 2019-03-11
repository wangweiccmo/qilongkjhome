<template>
    <div class="fu " style="padding:0 10px">
        <div class="jx-breadcrumb">
            <div style="padding-top: 3px">
                <el-breadcrumb v-if="$route.name && $route.name.length" separator="/">
                    <el-breadcrumb-item  v-for="item,i in $route.name" :key="i" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div style="text-align: left;padding: 10px 10px 0 10px">
            <!--on-error-->
            <div>excel文件上传教职工信息</div>
            <el-upload
                    class="upload-demo"
                    ref="upload"
                    action="/jx/excel/addStudents"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    accept=".xlsx"
                    :file-list="fileList"
                    :on-success="upSuccess"
                    :multiple="false"
                    :auto-upload="false">
                <el-button slot="trigger" size="mini" type="primary">选取excel</el-button>
                <el-button style="margin-left: 10px;" size="mini" type="success" @click="submitUpload">上传到服务器</el-button>
            </el-upload>
        </div>
        <div style="text-align: left">
            <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                <span>这是一段信息</span>
                <span slot="footer" class="dialog-footer">
                    <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
                    <el-button size="mini" type="primary" @click="dialogVisible = false">确 定</el-button>
                  </span>
            </el-dialog>


        </div>
        <el-row style="padding: 10px">
            <el-button size="mini" @click.stop="addTea" type="primary">添加教职工</el-button>
            <el-button size="mini" type="primary">excel批量添加</el-button>
            <el-button size="mini" type="primary">模板下载</el-button>
            <el-button size="mini" type="danger">批量删除</el-button>
        </el-row>
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
                    prop="uid"
                    label="关联id"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="sdId"
                    label="任职部门"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="teaStaffNumber"
                    label="职工号"
                    width="160">
            </el-table-column>
            <el-table-column
                    prop="teaName"
                    label="姓名"
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="teaTel"
                    label="电话"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="teaTelShot"
                    label="短号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="teaSex"
                    label="性别"
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="teaIdNumber"
                    label="身份证"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="teaEmail"
                    label="邮箱"
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="teaIsTemporaryEmployee"
                    label="是否外聘"
                    >
            </el-table-column>
            <el-table-column
                    prop="teaIsPartTimer"
                    label="是否是兼职人员"
            >
            </el-table-column>
            <el-table-column
                    prop="teaStatus"
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
                    <el-button @click="del(scope.row)" type="text" size="small" style="color: red">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
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
        <AddTeacherDialog v-if="AddTeacherDialogVisible" @onSubmit="regSubmit" :visible.sync="AddTeacherDialogVisible"></AddTeacherDialog>
    </div>
</template>

<script>
    import formatterMixin from '../../../../components/mixin/formatterMixin';
    import {GET_STU_BY_PAGE,DEL_BY_ID} from '_api/api_teacher';
    import AddTeacherDialog from '_dialog/AddTeacherDialog.vue';

    export default {
        name: "HomeBaseStudentReg",
        mixins: [formatterMixin],
        components: {
            AddTeacherDialog
        },
        data() {
            return {
                AddTeacherDialogVisible:false,
                multipleSelection:[],
                dialogVisible: false,
                fileList:[],
                currentPage: 1,
                total:0,
                tableData:[]
            }
        },
        mounted(){
            this.getList();
        },
        methods: {
            addTea(){
                this.AddTeacherDialogVisible = true;
            },
            regSubmit(){
                console.log('regSubmit');
                this.getList();
            },
            getList(){
                let page = {page:1,pageSize:50};
                this.$http.post(GET_STU_BY_PAGE,page,this).then((res)=>{
                    console.log(res);
                    this.tableData = res.data;
                    this.total = res.extend.total;
                })
            },
            del(row){
                this.$http.post(DEL_BY_ID,{id:row.id},this).then((res)=>{
                    this.getList();
                })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            upSuccess(){
                this.$refs.upload.clearFiles();
                this.getStus();
            },
            addStu(){
                this.dialogVisible = true
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
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