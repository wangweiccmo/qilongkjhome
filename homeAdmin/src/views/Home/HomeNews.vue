<template>
    <div class="home fu" style="padding: 30px;position: relative;">
        <div style="margin-top: 20px;text-align: left">
            <el-button @click="black()" size="mini" type="primary">返回</el-button>
        </div>
        <div style="line-height: 50px" class="jx-font-15">
         {{modeName}}
        </div>
        <el-form ref="form" :model="news" label-width="100px" size="mini">
            <el-form-item label="标题" prop="title" :rules="rules.required">
                <el-input v-model="news.title"></el-input>
            </el-form-item>
            <el-form-item label="来源" prop="laiyuan">
                <el-input v-model="news.laiyuan"></el-input>
            </el-form-item>
            <el-form-item label="简介" prop="info">
                <el-input v-model="news.info"></el-input>
            </el-form-item>
            <el-form-item label="封面图" prop="info">
                <el-input v-model="news.img"></el-input>
            </el-form-item>
            <el-form-item label="内容" prop="context" :rules="rules.required">
                <div class="edit_container">
                    <quill-editor v-model="news.context"
                                  ref="myQuillEditor"
                                  class="editer"
                                  :options="editorOption"
                                  @change="onEditorChange($event)"
                                  @ready="onEditorReady($event)">
                    </quill-editor>
                </div>
            </el-form-item>

            <div style="padding: 0 0px 0 5px">
                <el-button :loading="isLoading" type="primary" size="small" style="width: 300px" @click="onSubmit">提交
                </el-button>
            </div>
        </el-form>
        <el-upload
                class="avatar-uploader"
                :action="serverUrl"
                name="img"
                :headers="header"
                :show-file-list="false"
                :on-success="uploadSuccess"
                :on-error="uploadError"
                :before-upload="beforeUpload">
        </el-upload>
    </div>
</template>

<script>
    // @ is an alias to /src
    import rulesMixin from '../../components/mixin/rulesMixin';
    import {quillEditor} from "vue-quill-editor"; //调用编辑器
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import {setLocal, getLocal, rmLocal} from '_api/local'
    import * as news from '_api/api_news';
    import {newsModes} from '_api/constant';
    import {upload} from '_api/api_upload';

    // 工具栏配置
    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{'header': 1}, {'header': 2}],               // custom button values
        [{'list': 'ordered'}, {'list': 'bullet'}],
        [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
        [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
        [{'direction': 'rtl'}],                         // text direction

        [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
        [{'header': [1, 2, 3, 4, 5, 6, false]}],

        [{'color': []}, {'background': []}],          // dropdown with defaults from theme
        [{'font': []}],
        [{'align': []}],
        ['link', 'image', 'video'],
        ['clean']                                         // remove formatting button
    ]

    export default {
        name: "HomeNews",
        mixins: [rulesMixin],
        components: {
            quillEditor
        },
        data() {
            return {
                serverUrl: upload,  // 这里写你要上传的图片服务器地址
                header: {token: getLocal('token')},  // 有的图片服务器要求请求头需要有token
                news: {
                    title: '',
                    context: ''
                },
                beforeRouteLeave(to, from, next) {
                    // 设置下一个路由的 meta
                    to.meta.keepAlive = true;  // 让 A 缓存，即不刷新
                    next();
                },
                editorOption: {
                    placeholder: '',
                    theme: 'snow',  // or 'bubble'
                    modules: {
                        toolbar: {
                            container: toolbarOptions,  // 工具栏
                            handlers: {
                                'image': function (value) {
                                    if (value) {
                                        document.querySelector('.avatar-uploader input').click()
                                    } else {
                                        this.quill.format('image', false);
                                    }
                                }
                            }
                        }
                    }
                },
                quillUpdateImg:false,
                isLoading: false,
                mode: '1',
                modeName: ''
            }
        },
        mounted() {
            if (this.$route.query.id) {
                this.init(this.$route.query.id)
            }
            if (this.$route.query.mode) {
                this.mode = this.$route.query.mode;
                this.modeName = newsModes.filter((item)=>item.value == this.mode)[0].label
            }
        },
        methods: {
            init(id) {
                const loading = this.$loading({
                    lock: true,
                    text: '加载中...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                this.$http.post(news.get + id, null, this).then((data) => {
                    this.news = data.ret;
                    loading.close();
                })
            },
            black() {
                this.$router.back(-1);
            },
            onEditorReady(editor) {
            },
            onEditorChange(editor) {
            },
            // 上传图片前
            beforeUpload(res, file) {
                // 显示loading动画
                this.quillUpdateImg = true
            },
            // 上传图片成功
            uploadSuccess(res, file) {
                // res为图片服务器返回的数据
                // 获取富文本组件实例
                let quill = this.$refs.myQuillEditor.quill;
                // 如果上传成功
                if ( res.filename !== null) {
                    // 获取光标所在位置
                    let length = quill.getSelection().index;
                    // 插入图片  res.info为服务器返回的图片地址
                    quill.insertEmbed(length, 'image', res.filename)
                    // 调整光标到最后
                    quill.setSelection(length + 1)
                } else {
                    this.$message.error('图片插入失败')
                }
                // loading动画消失
                this.quillUpdateImg = false
            },
            // 上传图片失败
            uploadError(res, file) {
                // loading动画消失
                this.quillUpdateImg = false
                this.$message.error('图片插入失败')
            },
            onSubmit() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.news.mode = this.mode;
                        if (this.$route.query.id) {
                            this.$http.post(news.edit, this.news, this).then((data) => {
                                this.black();
                            })
                        } else {

                            this.$http.post(news.add, this.news, this).then((data) => {
                                this.black();
                            })
                        }

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });


            }
        }
    };
</script>
