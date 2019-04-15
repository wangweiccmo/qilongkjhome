import {HOST} from './api';

const table = 'courseEducational';
const title = '教务课程';
const selectById = `${HOST}/${table}/selectById`;
const selectByPage = `${HOST}/${table}/selectByPage`;
const selectByConditionAndPage = `${HOST}/${table}/selectByConditionAndPage`;
const insert = `${HOST}/${table}/insert`;
const upAllById = `${HOST}/${table}/upAllById`;
const delById = `${HOST}/${table}/delById`;
const tableType = {
    id: {type:'Integer',label:'id',width:50},
    code: {type:'String',label:'课程号',width:100,iType:'input',rules:'required,max-11'},
    name: {type:'String',label:'课程名称',width:200,iType:'input',rules:'required,max-255',br:true},
    point: {type:'Integer',label:'学分',width:100,iType:'input',rules:'required,max-11,isInteger'},
    openUnit: {type:'String',label:'开课单位',iType:'input',rules:'required,max-255'},
    teachingMethods: {type:'String',label:'授课方式',iType:'select',rules:'required,max-255',iOptions:[{v:'0',l:'面授讲课'},{v:'1',l:'实习'}]},
    testType:{type: 'String',label:'考试形式',width:100,iType:'select',rules:'required,max-255',iOptions:[{v:'0',l:'考试'},{v:'1',l:'考查'}],br:true},
    status: {type:'Integer',label:'状态',width:80,iType:'select',rules:'required',iOptions:[{v:'0',l:'禁用'},{v:'1',l:'启用'}]},
    operation:{
        type:'Operation',
        label:'操作',
        width:200,
        edit:true,
        delete:true,
        show:true
    }
}

export default {
    title,
    table,
    selectById,
    selectByPage,
    selectByConditionAndPage,
    insert,
    upAllById,
    delById,
    tableType
}
