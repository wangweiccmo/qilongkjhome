<template>
    <div class=" cmp-tree" :style="{width:width}">

        <el-input
                size="mini"
                placeholder="输入关键字进行过滤"
                suffix-icon="el-icon-search"
                v-model="filterText">
        </el-input>
        <el-tree style="margin-top: 10px"
                 :data="data"
                 node-key="id"
                 highlight-current
                 :expand-on-click-node="false"
                 default-expand-all
                 :filter-node-method="filterNode"
                 ref="tree2"
                 @node-click="handleNodeClick"></el-tree>
    </div>
</template>

<script>
    import * as TREE_API from '_api/api_tree';

    export default {
        name: "CmpTree",
        props:{
            width:{
                type: String,
                default: '200px'
            },
            bindId:{
                type: Number,
                default: 1
            },
            isEdit:{
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                filterText: '',
                data: []
            };

        },
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val);
            }
        },
        mounted(){
            this.getTreeByBindId();
        },
        methods: {
            getTreeByBindId(){
                this.$http.post(TREE_API.bindId + this.bindId,null,this).then((res)=>{
                    if(res.data){
                        this.data = res.data;
                    }

                })
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            handleNodeClick(data) {
                // 获取map文字
                let ids = data.pmap?data.pmap.split(','):null;
                let map = '';
                if(ids && ids.length){
                    let index = 0;
                    let maxIndex = ids.length;
                    let getMap=(list)=>{
                        if(index < maxIndex){
                            let id =ids[index];
                            let pitems = list.filter((item)=>item.id == id);
                            if(pitems && pitems.length){
                                let selectNode = pitems[0];
                                index = index+1;
                                if(selectNode){
                                    if(!map){
                                        map = selectNode.label;
                                    }else{
                                        map = map + " > " + selectNode.label;
                                    }
                                    if(selectNode.children && selectNode.children.length){
                                        getMap(selectNode.children);
                                    }
                                }
                            }

                        }
                    }
                    getMap(this.data);
                }
                if(!map){
                    map = data.label;
                }else{
                    map = map + " > " + data.label;
                }
                data.mapStr = map;
                this.$emit('handleNodeClick',data,this.bindId,map);
            }
        }
    }
</script>

<style scoped>
    .cmp-tree {
        padding-top: 20px;
        width: 200px;
        height: 100%;
        text-align: left;
        overflow-y: auto;
        background-color: white;
    }
</style>