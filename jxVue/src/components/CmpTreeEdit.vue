<template>
    <div class=" cmp-tree" :style="{width:width}">
        <el-button style="margin-left: 10px" size="mini" type="primary" @click.stop="append()">添加主节点</el-button>
        <el-tree style="margin-top: 10px"
                 :data="data"
                 node-key="id"
                 default-expand-all
                 :filter-node-method="filterNode"
                 :expand-on-click-node="false"
                 ref="tree2"
                 :render-content="renderContent"
               ></el-tree>
        <el-dialog
                title="添加节点"
                :visible.sync="dialogVisible"
                width="400px">
            <el-form :model="form"  ref="form">
                <el-form-item label="节点名称" prop="name" :rules="rules.required">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="openDiaLogOk">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import * as TREE_API from '_api/api_tree';
    import rulesMixin from '_cmp/mixin/rulesMixin';

    export default {
        name: "CmpTree",
        mixins: [rulesMixin],
        props:{
            width:{
                type: String,
                default: '200px'
            },
            bindId:{
                type: Number,
                default: 3
            },
            isEdit:{
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                form:{
                    name:''
                },
                choNode:null,
                dialogVisible:false,
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
                        let firstNode = this.data[0];
                    }

                })
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            append(data) {
                this.dialogVisible = true;
                this.choNode = data;
            },
            openDiaLogOk(){
                console.log(this.form,this.choNode);
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        console.log(this.form);
                        let params = null;
                        if(!!this.choNode){
                            params = {
                                bindId:this.bindId,
                                pmap:this.choNode.pmap?this.choNode.pmap+','+this.choNode.id:this.choNode.id,
                                deep:this.choNode.deep + 1,
                                hasCld:0,
                                label:this.form.name,
                                pid:this.choNode.id
                            };
                        }else{
                            params = {
                                bindId:this.bindId,
                                pmap:'',
                                deep:0,
                                hasCld:0,
                                label:this.form.name,
                                pid:0
                            };
                        }
                        this.$http.post(TREE_API.addNode,params,this).then((res)=>{
                            if(res.data){
                                // node入队
                                if(!!this.choNode){
                                    if(!this.choNode.children)this.choNode.children = [];
                                    this.choNode.children.push(res.data);
                                }else{
                                    this.data.push(res.data);
                                }

                            }

                        })
                        this.dialogVisible = false;
                    }
                });
            },

            remove(node, data) {

                if(data.children && data.children.length){
                    alert('请先删除子节点！');
                }else{

                    this.$http.post(TREE_API.delNode+data.id,null,this).then((res)=>{
                        const parent = node.parent;
                        const children = parent.data.children || parent.data;
                        const index = children.findIndex(d => d.id === data.id);
                        children.splice(index, 1);

                    })
                }

            },

            renderContent(h, { node, data, store }) {
                return (
                    <span class="custom-tree-node">
                    <span>{node.label}</span>
                <span>
                <el-button class="cmp-tree-edit-node-add" size="mini" type="text" on-click={ () => this.append(data) }>添加</el-button>
                <el-button class="cmp-tree-edit-node-del" size="mini" type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
                </span>
                </span>);
            }
        }
    }
</script>

<style >
    .cmp-tree {
        padding-top: 20px;
        width: 200px;
        height: 100%;
        text-align: left;
        overflow-y: auto;
        background-color: white;
    }
    .cmp-tree-edit-node-add {
        margin-left: 50px;
    }
</style>