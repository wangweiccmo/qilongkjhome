import {HOST} from './api';

const table = 'course';
const title = '课程';
const selectById = `${HOST}/${table}/selectById`;
const selectByPage = `${HOST}/${table}/selectByPage`;
const selectByConditionAndPage = `${HOST}/${table}/selectByConditionAndPage`;
const insert = `${HOST}/${table}/insert`;
const upAllById = `${HOST}/${table}/upAllById`;
const delById = `${HOST}/${table}/delById`;
const upPlan = `${HOST}/${table}/upPlan`;
const upTarget = `${HOST}/${table}/upTarget`;
const tableType = {
    id: {type:'Integer',label:'id',width:50},
    code: {type:'String',label:'课程号',width:100,iType:'input',rules:'required'},
    name: {type:'String',label:'课程名称',width:100,iType:'input',rules:'required'},
    type: {type:'Integer',label:'课程分类',width:100,iType:'input',rules:'required'},
    typeMap: {type:'String',label:'课程分类map',width:100,iType:'input',rules:'required'},
    esName: {type:'String',label:'英语名称',width:100,iType:'input',rules:'required'},
    point: {type:'Integer',label:'学分',width:100,iType:'input',rules:'required'},
    theoryClassHour: {type:'Integer',label:'理论学时',width:100,iType:'input',rules:'required'},
    practiceClassHour: {type:'Integer',label:'实践学时',width:100,iType:'input',rules:'required'},
    openUnit: {type:'String',label:'开课单位',width:100,iType:'input',rules:'required'},
    teacherIds: {type:'String',label:'教师',width:100,iType:'input',rules:'required'},
    status: {type:'Integer',label:'状态',width:100,iType:'input',rules:'required'},
    coverUrl: {type:'String',label:'封面',width:100,iType:'input',rules:'required'},
    books: {type:'String',label:'参考书目',width:100,iType:'input',rules:'required'},
    info: {type:'String',label:'介绍',width:100,iType:'input',rules:'required'},
    testType: {type:'Integer',label:'考试形式',width:100,iType:'input',rules:'required',iOptions:[{v:'0',l:'考试'},{v:'1',l:'考查'}]},
    classLv: {type:'String',label:'授课年级',width:100,iType:'input',rules:'required'},
    createUid: {type:'Integer',label:'创建人',width:100,iType:'input',rules:'required'},
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
    tableType,
    upPlan,
    upTarget
}
