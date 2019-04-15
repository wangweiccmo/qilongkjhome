<template>
    <div class="jx fu jx-card jx-p10 jx-box-column">
        <jx-header info="消息通知"></jx-header>
        <div class="jx-flex1">
            <div style="width: 100%;overflow: hidden">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="未读" name="1">
                        <div @click="handleClick(item)" class="news-list-row" v-for="item in newsList">
                            <div class="news-list-context">{{item.title}}</div>
                            <div class="news-list-time">{{dateTimeFormat(item.createdAt)}}</div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="课程" name="2">

                    </el-tab-pane>
                    <el-tab-pane label="教务" name="3">

                    </el-tab-pane>
                    <el-tab-pane label="学工" name="4">

                    </el-tab-pane>

                </el-tabs>
            </div>

        </div>
    </div>
</template>

<script>
    import JxHeader from "./ui/JxHeader"
    import formatterMixin from '_mixin/formatterMixin';

    export default {
        mixins:[formatterMixin],
        components: {JxHeader},
        name: "HelloWorld",
        data() {
            return {
                activeName:'1',
                newsList:[
                    {
                        "id": 4,
                        "title": "四川省示范中等职业学校建设计划",
                        "laiyuan": null,
                        "info": null,
                        "img": null,
                        "createdAt": "2019-03-24T06:44:03.000Z",
                        "updatedAt": "2019-03-24T06:44:03.000Z"
                    },
                    {
                        "id": 5,
                        "title": "重庆市高水平中职学校拟立项建设项目公示",
                        "laiyuan": null,
                        "info": null,
                        "img": null,
                        "createdAt": "2019-03-24T06:44:45.000Z",
                        "updatedAt": "2019-03-24T06:44:45.000Z"
                    },
                    {
                        "id": 8,
                        "title": "国家教育事业发展“十三五”规划",
                        "laiyuan": null,
                        "info": null,
                        "img": null,
                        "createdAt": "2019-03-24T06:50:11.000Z",
                        "updatedAt": "2019-03-24T06:50:11.000Z"
                    }
                ]
            }
        },
        methods: {
            handleClick(index){
                console.log(index)
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .news-list-row{
        display: flex;
        font-size: 14px;
        color: #555;
        line-height: 30px;
        cursor:pointer;
    }
    .news-list-row:hover{
        background-color: beige;

    }
    .news-list-context{
        flex: 1;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .news-list-time{
        width: 150px;
    }
</style>
