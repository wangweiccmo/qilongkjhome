import {HOST} from './api';

// 获取部门
export const ADD_BASE = `${HOST}/teacher/addBase`;

// 获取部门
export const GET_STU_BY_PAGE = `${HOST}/teacher/getListByPage`;

// 获取部门
export const DEL_BY_ID = `${HOST}/teacher/delById`;

export const httpApi ={
    selectByPage:GET_STU_BY_PAGE,
    tableType:{
        id: {type:'Integer',label:'id',width:50},
        teaStaffNumber: {type:'String',label:'职工号',width:200},
        teaName: {type:'Integer',label:'姓名',width:100},
        teaTel: {type:'String',label:'电话'},
        teaSex: {type:'String',label:'性别'},
        teaEmail:{type: 'String',label:'email',width:100},
        teaIsTemporaryEmployee:{type: 'String',label:'是否外聘',width:100,formatter:'isOrNot'},
        teaIsPartTimer:{type: 'String',label:'是否是兼职人员',width:100,formatter:'isOrNot'}
    }
}