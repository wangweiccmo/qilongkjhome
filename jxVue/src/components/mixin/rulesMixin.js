var checkAge = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('年龄不能为空'));
    }
    setTimeout(() => {
        if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
        } else {
            if (value < 18) {
                callback(new Error('必须年满18岁'));
            } else {
                callback();
            }
        }
    }, 1000);
};

export default {
    data() {
        return {
            rules: {
                user: [
                    {required: true, message: '账号不能为空', trigger: 'blur'},
                    {min: 6, max: 200, message: '账号不能少于6位', trigger: 'blur'}
                ],
                pwd: [
                    {required: true, message: '密码不能为空'}
                ],
                age: [
                    {required: true, message: '年龄不能为空'},
                    {type: 'number', message: '年龄必须为数字值'}
                ],
                tel: [
                    {required: true, message: '电话不能为空'},
                    {type: 'number', message: '电话必须为数字值'},
                    {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                ],
                date: [
                    {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
                ],
                required: [
                    {required: true, message: '内容不能为空', trigger: 'blur'}
                ],
                testAge: [
                    {validator: checkAge, trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        checkParams(value,ruleKey) {
            let ruleArr = this.rules[ruleKey];
            let error = false;
            for(let i=0;i<ruleArr.length;i++){
                let rule = ruleArr[i];
                if(rule.required && !value){
                    error = true;
                }
                if(rule.min && !!value && value.length < rule.min){
                    error = true;
                }
            }
            return error;
        }
    }
}
