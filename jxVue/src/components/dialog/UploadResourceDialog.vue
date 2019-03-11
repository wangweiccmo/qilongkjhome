<template>
        <el-dialog  :visible.sync="show" @closed="closed" title="上传资源" >
           <!--<div v-if="checkedNode"> {{checkedNode.id}}:{{checkedNode.label}}</div>-->
            <div style="padding-left: 12px">所属资源库：<span v-if="checkedNode"> {{checkedNode.mapStr}}</span></div>
            <div style="padding-left: 12px">创建人：</div>

            <el-form :inline="true" style="margin-top: 5px" size="mini" :model="upFileOption" class="demo-form-inline">
                <el-form-item label-width="80px" style="margin-bottom: 5px" label="资源标题">
                    <el-input style="width: 193px" v-model="upFileOption.title" placeholder="资源标题"></el-input>
                </el-form-item>
                <el-form-item label-width="80px"  style="margin-bottom: 5px" label="资源类型">
                    <el-select v-model="upFileOption.resourceType" placeholder="资源类型">
                        <el-option v-for="n in dict.resourceType" :key="n.id" :label="n.dictValue" :value="n.dictKey">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label-width="80px" style="margin-bottom: 5px" label="资源标准">
                    <el-select v-model="upFileOption.resourceStandard" placeholder="资源标准">
                        <el-option v-for="n in dict.resourceStandard" :key="n.id" :label="n.dictValue" :value="n.dictKey">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label-width="80px" style="margin-bottom: 5px" label="学科">
                    <el-cascader
                            :options="subjects"
                            :props="{label:'name',value:'code'}"
                            v-model="upFileOption.subject">
                    </el-cascader>
                </el-form-item>
                <el-form-item label-width="80px"  style="margin-bottom: 5px" label="允许下载">
                    <el-radio v-model="upFileOption.allowDownload" label="1" value="1">允许</el-radio>
                    <el-radio v-model="upFileOption.allowDownload" label="0" value="0">不允许</el-radio>
                </el-form-item>
            </el-form>

            <el-upload
                    class="upload-demo"
                    ref="upload"
                    action="/jx/resource/addfile"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    multiple
                    drag
                    :data="uploadParams"
                    :file-list="fileList"
                    :on-success="upSuccess"
                    :auto-upload="false">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
            <el-button style="margin-left: 10px;" size="mini" type="success" @click="submitUpload">上传到服务器</el-button>

        </el-dialog>

</template>

<script>

    import * as RESOURCE_API from '_api/api_resource';

    export default {
        components: {},
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
                upFileOption:{
                    allowDownload:"1"
                },
                uploadParams:{

                },
                show:false,
                fileList:[]
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
            closed(){
                this.$emit('update:visible',false)
            },
            upSuccess(){
                this.$refs.upload.clearFiles();
            },
            handleRemove(){

            },
            handlePreview(){

            },
            click(i) {
                this.$emit('click',i)
            },
            submitUpload(){
                console.log(this.upFileOption);
                this.uploadParams = {};
                this.uploadParams.title=this.upFileOption.title;
                this.uploadParams.map = this.checkedNode.mapStr;
                this.uploadParams.mapId = this.checkedNode.id;
                this.uploadParams.resourceType = parseInt(this.upFileOption.resourceType);
                this.uploadParams.resourceStandard = parseInt(this.upFileOption.resourceStandard);
                this.uploadParams.subjectCode = this.upFileOption.subject[1];
                this.uploadParams.subjectMap = this.upFileOption.subject.join('>');
                this.uploadParams.bindId = parseInt(this.bindId);
                this.uploadParams.allowDownload = parseInt(this.upFileOption.allowDownload);

                console.log(this.uploadParams);
                this.$nextTick(()=>{
                    this.$refs.upload.submit();
                })
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
