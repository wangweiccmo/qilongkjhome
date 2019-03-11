<template>
    <el-dialog  :visible.sync="show" @closed="closed" title="添加" >
            <CmpReg @onSubmit="onSubmit"></CmpReg>
    </el-dialog>
</template>

<script>
    import CmpReg from '_cmp/CmpReg.vue';
    export default {
        components: {CmpReg},
        name: "AddTeacherDialog",
        props: {
            visible:{
                type:Boolean,
                default:false
            }
        },
        data() {
            return {
                show:this.visible
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
            onSubmit(){
                this.$emit('onSubmit');
                this.closed();
            },
            closed(){
                console.log(11);
                this.$emit('update:visible',false)
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
