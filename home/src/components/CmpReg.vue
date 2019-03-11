<template>
    <el-form ref="form" :model="form" label-width="100px" class="jx-tl" size="mini">
        <el-form-item label="用户"  prop="mode" :rules="rules.required">
            <el-select v-model="form.mode" placeholder="请选择">
                <el-option
                        v-for="item in modes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="任职部门"  prop="sdId" :rules="rules.required">
            <el-select v-model="form.sdId" filterable placeholder="请选择">
                <el-option
                        v-for="item in departments"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="用户"  prop="name" :rules="rules.required">
            <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd" :rules="rules.required">
            <el-input v-model="form.pwd"></el-input>
        </el-form-item>
        <el-form-item label="确认密码"  prop="diffPwd" :rules="rules.required">
            <el-input v-model="form.diffPwd" ></el-input>
        </el-form-item>
        <el-form-item label="身份证"  prop="teaIdNumber" :rules="rules.required">
            <el-input v-model="form.teaIdNumber" ></el-input>
        </el-form-item>
        <el-form-item label="联系电话"  prop="teaTel" :rules="rules.required">
            <el-input v-model="form.teaTel" ></el-input>
        </el-form-item>

        <el-form-item label="手机短号"  prop="teaTelShot" :rules="rules.required">
            <el-input v-model="form.teaTelShot" ></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱"  prop="teaEmail" :rules="rules.required">
            <el-input v-model="form.teaEmail" ></el-input>
        </el-form-item>
        <!--<el-form-item-->
        <!--label="年龄"-->
        <!--prop="age"-->
        <!--:rules="rules.age">-->
        <!--<el-input type="age" v-model.number="form.age" autocomplete="off"></el-input>-->
        <!--</el-form-item>-->
        <div style="padding: 0 0px 10px 100px">
            <el-button type="primary" size="small" style="width: 100%" @click="onSubmit">提交审核</el-button>
        </div>

    </el-form>
</template>

<script>
    import rulesMixin from '../components/mixin/rulesMixin';
    import {GET_ALL} from '../api/api_school_departments';
    import {ADD_BASE} from '../api/api_teacher';
    export default {
        name: "CmpLogin",
        mixins: [rulesMixin],
        data() {
            return {
                modes: [{
                    value: '1',
                    label: '教职工'
                }, {
                    value: '2',
                    label: '企业'
                }],
                departments: [],
                form: {
                    mode:'1',
                    sdId:'',
                    name: '11',
                    pwd: '',
                    diffPwd:'',
                    teaIdNumber:'',
                    teaTel:'',
                    teaTelShot:'',
                    teaEmail:''
                },
                other:{

                },
                radio: 0,
                value:'1'
            }
        },
        mounted(){
            this.init();
        },
        methods: {
            init(){
                this.departments = [];
                this.$http.post(GET_ALL,null,this).then((data)=>{
                    data.data.forEach((item)=>{
                        this.departments.push({
                            value: item.id,
                            label: item.name
                        })
                    })
                })
            },
            goLogin(){
                this.$router.push({
                    path: '/login'
                });
            },
            onSubmit() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.$http.post(ADD_BASE,this.form,this).then((data)=>{
                            this.$message.success('数据提交成功!');
                            this.$emit('onSubmit')
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });

            }
        }
    }
</script>

<style scoped>

</style>