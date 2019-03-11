<template>
    <div class="login_bg fu">
        <div class="login_input">
            <CmpLogin>
            </CmpLogin>
        </div>

    </div>
</template>

<script>
    import CmpLogin from '../../components/CmpLogin';

    export default {
        name: "login",
        components: {CmpLogin},
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
            onSubmit() {
                this.$router.push({
                    path: '/'
                });
            }
        }
    }
</script>

<style scoped>
    .login_bg{
        background: url("../../assets/img/login_bg.jpg") no-repeat center;
        background-size: cover;
    }
    .login_input{

        position: absolute;
        top: 100px;
        right: 200px;
    }
</style>