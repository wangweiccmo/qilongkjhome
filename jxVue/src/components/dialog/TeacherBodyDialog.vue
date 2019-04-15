<template>
        <el-dialog  :visible.sync="show"
                    @closed="closed"
                    width="80%"
                    append-to-body
                    title="教师" >
            <ComShowList @choice="choice" :httpApi="httpApi"></ComShowList>

        </el-dialog>

</template>

<script>

    import {httpApi} from '_api/api_teacher';
    import ComShowList from '_cmp/ComShowList.vue';

    export default {
        components: {ComShowList},
        name: "CourseEducationalBodyDialog",
        props: {
            visible:{
                type:Boolean,
                default:false
            }
        },
        data() {
            return {
                show:false,
                httpApi: httpApi,
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
                this.show =false;
            },
            choice(rows){
                this.closed();
                this.$emit('choice',rows)
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
