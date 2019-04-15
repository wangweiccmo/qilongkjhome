<template>
        <el-dialog  :visible.sync="show"  width="80%" @closed="closed" title="添加课程" >

            <CourseEducationalBodyDialog @choice="courseEducationalBodyDialogChoice"  :visible.sync="courseEducationalBodyDialogShow">

            </CourseEducationalBodyDialog>
            <TeacherBodyDialog @choice="teacherBodyDialogChoice"  :visible.sync="teacherBodyDialogShow">

            </TeacherBodyDialog>

           <!--<div v-if="checkedNode"> {{checkedNode.id}}:{{checkedNode.label}}</div>-->
            <!--<div style="padding-left: 12px">创建人：<span v-if="checkedNode"> {{checkedNode.mapStr}}</span></div>-->
            <el-steps :active="active" align-center finish-status="success">
                <el-step title="基本信息">
                </el-step>
                <el-step title="教学计划">
                </el-step>
                <el-step title="课程建设目标"></el-step>
                <el-step title="完成"></el-step>
            </el-steps>
            <div v-show="active == 0">
                <div style="padding-left: 12px">课程分类：<span v-if="checkedNode"> {{checkedNode.mapStr}}</span></div>

                <el-form :inline="true"  ref="form" style="margin-top: 5px" size="mini" :model="form" class="demo-form-inline">
                    <el-form-item label-width="80px"  label="课程号" prop="code"  >
                        <el-input @focus ='addName' :disabled="educationalClose" style="width: 193px" v-model="form.code" placeholder="课程号"></el-input>
                    </el-form-item>
                    <el-form-item label-width="80px"  label="课程名称" prop="name" >
                        <el-input  style="width: 193px" :disabled="educationalClose" v-model="form.name" placeholder="课程名称"></el-input>
                    </el-form-item>
                    <el-form-item label-width="80px"  label="英语名称" prop="esName" >
                        <el-input  style="width: 193px" v-model="form.esName" placeholder="英语名称"></el-input>
                    </el-form-item>
                    <el-form-item label-width="80px"  label="学分" prop="point">
                        <el-input  style="width: 193px" :disabled="educationalClose" v-model="form.point" placeholder="学分"></el-input>
                    </el-form-item>
                    <br>
                    <el-form-item label-width="80px"  label="理论学时" prop="theoryClassHour">
                        <el-input  style="width: 193px" v-model="form.theoryClassHour" placeholder="理论学时"></el-input>
                    </el-form-item>
                    <el-form-item label-width="80px"  label="实践学时" prop="practiceClassHour">
                        <el-input  style="width: 193px" v-model="form.practiceClassHour" placeholder="实践学时"></el-input>
                    </el-form-item>
                    <el-form-item label-width="80px"  label="总学时">
                       {{getAllHours()}}
                    </el-form-item>
                    <br>
                    <el-form-item label-width="80px"  label="开课单位" prop="openUnit">
                        <el-input  style="width: 193px" :disabled="educationalClose" v-model="form.openUnit" placeholder="开课单位"></el-input>
                    </el-form-item>
                    <el-form-item label-width="80px"  label="教师" prop="teacherIds">
                        <!--<el-input @focus ='addTeacher'  style="width: 193px" :value="form.teacherIds" :libel="courseLabel.teacherIds"  placeholder="教师"></el-input>-->
                        <el-input @focus ='addTeacher'  style="width: 193px" :value="courseLabel.teacherIds"  placeholder="教师"></el-input>
                    </el-form-item>
                    <el-form-item label-width="80px"  label="状态" prop="status">
                        <el-select   v-model="form.status" placeholder="状态">
                            <el-option  label="关闭" :value="0">
                            </el-option>
                            <el-option  label="启用" :value="1">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label-width="0"   >
                        <div class="jx-box jx-box-align-center">
                            <div style="width: 80px;padding-right: 12px;text-align: right">封面</div>
                            <el-upload
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    list-type="picture-card"
                                    :on-remove="handleRemove"
                                    :on-preview="handlePictureCardPreview">
                                <i class="el-icon-plus"></i>
                            </el-upload>

                            <div style="margin-left: 50px">备注：上传课程封面图片大小230x185</div>
                        </div>

                    </el-form-item>

                    <br>


                    <el-form-item label-width="80px"  label="考试类型" prop="testType">
                        <el-select   v-model="form.testType" placeholder="考试类型">
                            <el-option  label="考试" :value="0">
                            </el-option>
                            <el-option  label="考察" :value="1">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label-width="80px"  label="授课年级" prop="classLv">
                        <el-input  style="width: 193px" v-model="form.classLv" placeholder="授课年级"></el-input>
                    </el-form-item>
                    <br>
                    <el-form-item label-width="80px" class="jx-form-item-fu" label="参考书目" prop="books">
                        <el-input type="textarea"  style="width: 100%" v-model="form.books" placeholder="参考书目"></el-input>
                    </el-form-item>
                    <el-form-item label-width="80px" class="jx-form-item-fu" label="课程介绍" prop="info">
                        <el-input  type="textarea" style="width: 100%" v-model="form.info" placeholder="课程介绍"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <!--教学计划-->
            <div class="jx-fn"  v-show="active == 1">
                <quill-editor v-model="form.plan"
                              ref="myQuillEditor1"
                              class="editer"
                              :options="editorOption"
                           >
                </quill-editor>
            </div>
            <!--教学计划-->
            <div class="jx-fn"  v-show="active == 2">
                <quill-editor v-model="form.target"
                              ref="myQuillEditor2"
                              class="editer"
                              :options="editorOption"
                >
                </quill-editor>
            </div>
            <div class="jx-fn" style="text-align: center" v-show="active == 3">
                <div style="line-height: 200px" class="jx-font-26">提交成功!</div>
                <el-button type="primary" size="mini"  v-if="active==3"  @click="closed()">关闭</el-button>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" size="mini" v-if="active>0 && active<3"  @click="pre()">上一步</el-button>
                <el-button type="primary" size="mini"  v-if="active<3" :loading="isLoading"  @click="next()">下一步</el-button>

            </div>
        </el-dialog>

</template>

<script>

    import ApiCourse from '_api/api_course';
    import * as RESOURCE_API from '_api/api_resource';
    import CourseEducationalBodyDialog from '_cmp/dialog/CourseEducationalBodyDialog.vue';
    import TeacherBodyDialog from '_cmp/dialog/TeacherBodyDialog.vue';
    import rulesMixin from '_cmp/mixin/rulesMixin';
    import editMixin from '_cmp/mixin/editMixin';
    import {quillEditor} from "vue-quill-editor"; //调用编辑器
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';

    export default {
        mixins: [rulesMixin,editMixin],
        components: {CourseEducationalBodyDialog,quillEditor,TeacherBodyDialog},
        name: "UploadResourceDialog",
        props: {
            bindId:{

            },
            subjects:{

            },
            dict:{

            },
            checkedNode:{

            },
            visible:{
                type:Boolean,
                default:false
            }
        },
        data() {
            return {
                editorOption: {},
                active:0,
                plan:{},
                form:{
                    theoryClassHour:0,
                    practiceClassHour:0
                },
                httpApi:ApiCourse,
                courseLabel:{},
                id:null,
                educationalClose:false,
                courseEducationalBodyDialogShow:false,
                teacherBodyDialogShow:false,
                show:false,
            }
        },
        watch: {
            visible(newVal) {
                this.show = newVal
            },
            show(newVal) {
                this.$emit('update:visible',newVal)
            }
        },
        methods: {
            init(){
                this.form = {
                    theoryClassHour:0,
                    practiceClassHour:0
                }
                this.active = 0;
            },
            getAllHours(){

              return parseInt(this.form.practiceClassHour) + parseInt(this.form.theoryClassHour);
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                console.log("file.url:",file) ;
            },
            teacherBodyDialogChoice(row){
                //教师选择回填
                this.form.teacherIds = row.uid;
                this.courseLabel.teacherIds = row.teaName;
            },
            courseEducationalBodyDialogChoice(row){
                //教务课程回填
                this.educationalClose = true;
                this.form = Object.assign(this.form,row)
            },
            addTeacher(){
                this.teacherBodyDialogShow = true;
            },
            addName(){
              this.courseEducationalBodyDialogShow = true;
            },
            closed(){
                this.$emit('closed',this.form)
                this.show =false;
                this.$nextTick(()=>{
                    this.init();
                })
            },
            click(i) {
                this.$emit('click',i)
            },
            pre() {
                //上一步
                this.active = this.active - 1;
            },
            next() {
                //下一步 课程分类
                console.log(this.form)
                if(this.active == 0){
                    this.form.type = this.checkedNode.id;
                    this.form.typeMap = this.checkedNode.mapStr;
                    this.create((data)=>{
                        this.id = data.id;
                        this.form.id = data.id;
                        this.active = this.active + 1;
                    })
                }
                if(this.active == 1){
                    this.$http.post(this.httpApi.upPlan,this.form,this).then((res)=>{
                        this.active = this.active + 1;
                    })
                }
                if(this.active == 2){
                    this.$http.post(this.httpApi.upTarget,this.form,this).then((res)=>{
                        this.active = this.active + 1;
                    })
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  >
    .quill-editor editer{

    }
    .ql-container{
        min-height: 300px;
    }
</style>
