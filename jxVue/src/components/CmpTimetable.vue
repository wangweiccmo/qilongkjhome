<template>
    <div class="jx fu jx-card jx-p10 jx-box-column">
        <jx-header info="个人课表"></jx-header>
        <div class="jx-flex1">
            <el-table
                    :data="tableData"
                    :span-method="objectSpanMethod"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="day"
                        label=""
                        width="50">
                </el-table-column>
                <el-table-column
                        prop="no"
                        label=""
                        width="50">
                </el-table-column>
                <el-table-column
                        prop="xq1"
                        label="星期一">
                </el-table-column>
                <el-table-column
                        prop="xq2"
                        sortable
                        label="星期二">
                </el-table-column>
                <el-table-column
                        prop="xq3"
                        sortable
                        label="星期三">
                </el-table-column>
                <el-table-column
                        prop="xq4"
                        sortable
                        label="星期四">
                </el-table-column>
                <el-table-column
                        prop="xq5"
                        sortable
                        label="星期五">
                </el-table-column>
            </el-table>

        </div>
    </div>
</template>

<script>
    import JxHeader from "./ui/JxHeader"

    export default {
        components: {JxHeader},
        name: "CmpFast",
        data() {
            return {
                tableData:[
                    {
                        day:'上午',
                        no:'1',
                        xq1:'',
                        xq2:'',
                        xq3:'',
                        xq4:'',
                        xq5:'酒店财务管理  / 1-1_102  / 17酒店1班'
                    },
                    {
                        day:'上午',
                        no:'2',
                        xq1:'',
                        xq2:'',
                        xq3:'',
                        xq4:'',
                        xq5:'电子  / 1-1_102  / 17电子1班'
                    },
                    {
                        day:'上午',
                        no:'3',
                        xq1:'',
                        xq2:'',
                        xq3:'',
                        xq4:'',
                        xq5:''
                    },
                    {
                        day:'上午',
                        no:'4',
                        xq1:'',
                        xq2:'',
                        xq3:'',
                        xq4:'',
                        xq5:''
                    },
                    {
                        day:'下午',
                        no:'1',
                        xq1:'',
                        xq2:'数学  / 1-1_104  / 17会计1班\t',
                        xq3:'',
                        xq4:'',
                        xq5:''
                    },
                    {
                        day:'下午',
                        no:'2',
                        xq1:'',
                        xq2:'',
                        xq3:'',
                        xq4:'',
                        xq5:'酒店财务管理  / 1-1_102  / 17酒店1班'
                    }
                ]
            }
        },
        methods: {
            objectSpanMethod({ row, column, rowIndex, columnIndex }) {
                if (columnIndex === 0) {
                    if (row.day == '上午' && rowIndex == 0) {
                        return {
                            rowspan: 4,
                            colspan: 1
                        };
                    }else if(row.day == '下午' && rowIndex == 4){
                        return {
                            rowspan: 2,
                            colspan: 1
                        };
                    }else{
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
