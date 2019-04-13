<template>
    <el-dialog
            :visible.sync="show"
            :before-close="beforeClose"
            @close="close"
            width="80%"
            :title="title" >
        <el-form size="mini" ref="form" :inline="true" :model="form" label-width="100px">
            <el-row>
                <el-col :key="i" v-for="option,key,i in httpApi.tableType" :span="12">
                        <el-form-item  v-if="option.iType" :prop="key" :label="option.label" :rules="getRuls(option.rules)">
                            <el-select  :disabled="mode==1"  v-if="option.iType == 'select'" v-model="form[key]" placeholder="请输入类容">
                                <el-option :key="value" v-for="option in option.iOptions" :label="option.l" :value="option.v">
                                </el-option>
                            </el-select>
                            <el-input :disabled="mode==1" v-if="option.iType == 'input'" v-model="form[key]" placeholder="请输入类容">
                            </el-input>
                        </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" v-if="mode != 1" :loading="isLoading"  @click="onSubmit()">提交</el-button>
        </div>
    </el-dialog>
</template>

<script>
    import rulesMixin from '_cmp/mixin/rulesMixin';

    export default {
        components: {},
        mixins: [rulesMixin],
        name: "ComListCreateDialog",
        props: {
            id:{
                type:Number,
                default:null
            },
            mode:{
                type:Number,
                default:0
            },
            visible:{
                type:Boolean,
                default:false
            },
            httpApi:{
                type: Object,
                default:()=>({})
            }
        },
        data() {
            return {
                show:this.visible,
                hasCheck:true,
                isLoading:false,
                form:{

                }
            }
        },
        computed: {
            title () {
                let title = this.httpApi.title;
                if(this.mode == 0){
                    title = title+'新建';
                }
                if(this.mode == 1){
                    title = title+'查看';
                }
                if(this.mode == 2){
                    title = title+'编辑';
                }
                return  title
            }
        },
        mounted(){
            if(this.id){
                this.getInfo();
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
            getInfo(){
                this.$http.post(this.httpApi.selectById,{id:this.id},this).then((data)=>{
                    this.form = data.data;
                    Object.keys(this.form).forEach((key)=>{
                        this.form[key] = this.form[key] + '';
                    });
                })
            },
            init(){
              this.form = {};
            },
            onSubmit(){
                console.log(this.form);

                this.$refs.form.validate((valid) => {
                    if (valid) {
                        if(this.id){
                            this.$http.post(this.httpApi.upAllById,this.form,this).then((data)=>{
                                this.init();
                                this.close(data);
                            })
                        }else{
                            this.$http.post(this.httpApi.insert,this.form,this).then((data)=>{
                                this.init();
                                this.close(data);
                            })
                        }

                    } else {
                        console.log('error submit!!');
                    }
                });
            },
            close(data){
                if(data){
                    this.$emit('inster-over',data)
                }
                this.$emit('update:visible',false)
            },
            beforeClose(done){
                if(this.hasCheck){
                    var isClost = window.confirm("是否关闭窗口？")
                    if(isClost){
                        done();
                    }
                }else {
                    done();
                }

            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
