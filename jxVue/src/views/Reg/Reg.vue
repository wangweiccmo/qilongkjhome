<template>
    <div class="reg_bg fu jx-tc">
        <div class="reg_input">
            <div class="cmp_reg_bg jx-box-shadow jx">
                <el-button @click="goLogin" type="text" style="margin-left: 2px" class="cmp_reg_back_btn" icon="el-icon-arrow-left" size="mini">返回</el-button>
                <div class="cmp_reg_header">
                    注册
                </div>
               <CmpReg @onSubmit="regOnSubmit"></CmpReg>
            </div>
        </div>
    </div>
</template>

<script>
    import CmpReg from '../../components/CmpReg';

    export default {
        name: "login",
        components: {CmpReg},
        data() {
            return {
                form: {
                    name: '11',
                    pwd: '',
                    age:0
                }
            }
        },
        methods: {
            regOnSubmit(){
                this.$router.push({
                    path: '/login'
                });
            },
            onSubmit() {
                this.$router.push({
                    path: '/'
                });
            }
        }
    }
</script>

<style scoped>
    .reg_bg{
        background: url("../../assets/img/login_bg.jpg") no-repeat center;
        background-size: cover;
    }
    .reg_input{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%,0);
        width: 500px;
        height: 80%;
        display: inline-block;
    }
    .cmp_reg_back_btn{
        position: absolute;
        left: 0;
        top: 0;
    }
    .cmp_reg_bg{
        padding: 50px 40px 20px 30px;
        position: relative;
        background-color: white;
        border-radius: 5px;
        max-height: 100%;
        overflow-y: auto;
    }
    .cmp_reg_header{
        padding: 10px;
    }
</style>