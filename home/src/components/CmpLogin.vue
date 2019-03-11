<template>
    <div class="cmp_login_bg jx-box-shadow">
        <el-form ref="form" :model="form" label-width="50px" size="mini">
            <el-form-item label="用户"  prop="name" :rules="rules.user">
                <el-input :disabled="isLoading" v-model="form.name" ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd" :rules="rules.pwd">
                <el-input type="password" :disabled="isLoading" v-model="form.pwd"></el-input>
            </el-form-item>
            <!--<el-form-item-->
                    <!--label="年龄"-->
                    <!--prop="age"-->
                    <!--:rules="rules.age">-->
                <!--<el-input type="age" v-model.number="form.age" autocomplete="off"></el-input>-->
            <!--</el-form-item>-->
            <div style="padding: 0 0px 0 5px">
                <el-button :loading="isLoading" type="primary" size="small" style="width: 100%" @click="onSubmit">登录</el-button>
            </div>
            <div class="jx-box" style="padding: 15px 0 10px 5px">
                <div class="jx-flex1 jx-tl jx-font-12">
                    <el-checkbox  v-model="remember" >记住密码</el-checkbox >
                </div>
                <div class="jx-flex1 jx-tr">
                    <a @click="goReg">
                        用户注册
                    </a>
                </div>
            </div>
        </el-form>
    </div>
</template>

<script>
    import rulesMixin from '../components/mixin/rulesMixin';
    import {USER_LOGIN} from '_api/api_user';
    import {setLocal,getLocal,rmLocal} from '_api/local'

    export default {
        name: "CmpLogin",
        mixins: [rulesMixin],
        data() {
            return {
                isLoading:false,
                form: {
                    name: getLocal('name'),
                    pwd: getLocal('pwd')
                },
                remember: getLocal('name')?true:false
            }
        },
        methods: {
            goReg(){
                this.$router.push({
                    path: '/reg'
                });
            },
            onSubmit() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        // 记住密码
                        if(this.remember){
                            setLocal('name',this.form.name);
                            setLocal('pwd',this.form.pwd);
                        }else{
                            rmLocal('name');
                            rmLocal('pwd');
                        }
                        this.$http.post(USER_LOGIN,this.form,this).then((data)=>{
                            setLocal('user',data);
                            setLocal('token',data.token);
                            this.$router.push({
                                path: '/'
                            });
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
    .cmp_login_bg{
        padding: 50px 40px 20px 30px;
        background-color: white;
        border-radius: 5px;
    }
</style>