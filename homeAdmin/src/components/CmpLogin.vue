<template>
    <div class="cmp_login_bg jx-box-shadow">
        <div>管理员登录</div>
        <el-form ref="form" :model="form" label-width="50px" size="mini">
            <el-form-item label="用户"  prop="uname" :rules="rules.required">
                <el-input :disabled="isLoading" v-model="form.uname" ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="upwd" :rules="rules.pwd">
                <el-input type="password" :disabled="isLoading" v-model="form.upwd"></el-input>
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
            </div>
        </el-form>
    </div>
</template>

<script>
    import rulesMixin from '../components/mixin/rulesMixin';
    import {login} from '_api/api_login';
    import {setLocal,getLocal,rmLocal} from '_api/local'

    export default {
        name: "CmpLogin",
        mixins: [rulesMixin],
        data() {
            return {
                isLoading:false,
                form: {
                    uname: getLocal('uname'),
                    upwd: getLocal('upwd')
                },
                remember: getLocal('uname')?true:false
            }
        },
        methods: {
            onSubmit() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        // 记住密码
                        if(this.remember){
                            setLocal('uname',this.form.uname);
                            setLocal('upwd',this.form.upwd);
                        }else{
                            rmLocal('uname');
                            rmLocal('upwd');
                        }

                        this.$http.post(login,this.form,this).then((data)=>{
                            setLocal('user',data.ret);
                            setLocal('token',data.token);
                            this.$router.push({
                                path: '/home'
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