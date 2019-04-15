<template>
    <div class="fu jx-l" style="padding: 10px">
        <JxBreadcrumb></JxBreadcrumb>
        <div>
            <CmpHomeEcharts>

            </CmpHomeEcharts>
        </div>
    </div>
</template>

<script>

    export default {
        name: "HomeBaseHome",
        components: {
        },
        data() {
            return {

            }
        },
        methods: {


        }
    }
</script>

<style scoped>

    .hbase-left {
        width: 200px;
        text-align: left;
    }

    .hbase-left2 {
        width: 200px;
        height: 100%;
        text-align: left;
        overflow-y: auto;
        background-color: yellow;
    }
</style>