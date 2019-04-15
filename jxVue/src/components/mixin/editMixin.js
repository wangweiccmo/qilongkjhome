import ComListCreateDialog from '_cmp/dialog/ComListCreateDialog';

export default {
    components: {ComListCreateDialog},
    data() {
        return {
            isLoading:false,
            total:0,
            dataList:[],
            editMode:0,
            comListCreateDialogShow:false,
            page: {page:1,pageSize:50}
        }
    },
    methods: {
        getResourcesByPage(){
            let page = this.page;
            this.$http.post(this.httpApi.selectByPage,page,this).then((res)=>{
                this.dataList = res.data;
                this.total = res.extend;
            })
        },
        create(callback){
            this.$refs.form.validate((valid) => {
                if (valid) {
                    if(this.id){
                        this.$http.post(this.httpApi.upAllById,this.form,this).then((data)=>{
                            callback(data);
                        })
                    }else{
                        this.$http.post(this.httpApi.insert,this.form,this).then((data)=>{
                            callback(data);
                        })
                    }
                } else {
                    console.log('error submit!!');
                }
            });
        },
        info(row){
            this.editMode = 1;
            this.id = row.id;
            this.comListCreateDialogShow = true;
        },
        edit(row){
            this.editMode = 2;
            this.id = row.id;
            this.comListCreateDialogShow = true;
        },
        del(row){
            var isDel = window.confirm("是否删除本条数据？")
            if(isDel){
                this.$http.post(this.httpApi.delById,{id:row.id},this).then((res)=>{
                    this.dataList = this.dataList.filter(item => item.id != row.id);
                    this.total = this.total - 1;
                })
            }

        }
    }
}
