<template>
    <div class="icon-text-body " @click.stop="click" >
       <i :class="icon" class="iconfont  icon-drxx29" :style="{color: color}"></i>
       <div class="icon-text-t jx-test-over-hid" :title="text" v-text="text">
       </div>
    </div>
</template>

<script>
    export default {
        props: {
            icon : {
                default:''
            },
            text : {
                default:''
            },
            color : {
                default:'#555'
            }
        },
        methods: {
            click(i) {
                this.$emit('click',i)
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .icon-text-body{
        width: 66px;
        display: flex;
        flex-direction: column;
        text-align: center;
        cursor:pointer;
    }
    .icon-text-i{
        font-size: 35px;
    }
    .icon-text-t{
        font-size: 14px;
    }
</style>
