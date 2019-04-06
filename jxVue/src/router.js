import Vue from "vue";
import Router from "vue-router";

import Login from './views/Login/Login.vue';
import Reg from './views/Reg/Reg.vue';
// 异步路由
const Enrollment = () => import(/* webpackChunkName: "group-enrollment" */ './views/Enrollment/Enrollment.vue');

// 首页
import Home from './views/Home/Home.vue';
// 首页-首页
const HomeIndex = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/HomeIndex.vue');
// 首页-校园基础应用
const HomeBase = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/HomeBase.vue');
// 首页-校园基础应用-首页
const HomeBaseHome = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/HomeBase/Home.vue');
// 首页-校园基础应用-学生注册
const HomeBaseStudentReg = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/HomeBase/StudentReg.vue');
// 首页-校园基础应用-学生报道
const HomeBaseStudentReport = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/HomeBase/StudentReport.vue');

// 首页-校园基础应用
const TeacherBase = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/HomeTeacher.vue');
// 首页-校园基础应用-首页
const TeacherBaseHome = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/TeacherBase/Home.vue');
// 首页-校园基础应用-教师注册
const TeacherReg = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/TeacherBase/TeacherReg.vue');


// 首页-资源管理
const HomeResource = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/HomeResource.vue');
// 首页-资源管理-首页
const ResourceHome = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/HomeResource/Home.vue');
// 首页-资源管理-树设置
const ResourceTreeSet = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/HomeResource/ResourceTreeSet.vue');
// 首页-资源管理-权限设置
const ResourceAuth = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/HomeResource/ResourceAuth.vue');

// 首页-资源管理-上传资源
const ResourceUpload = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/HomeResource/ResourceUpload.vue');

// 首页-资源管理-资源审核
const ResourceApproval = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/HomeResource/ResourceApproval.vue');

// 首页-资源管理-停用启用
const ResourceStop = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/HomeResource/ResourceStop.vue');


// 首页-资源管理-添加课程
const ResourceAddCourse = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/HomeResource/ResourceAddCourse.vue');





// 首页-数据中心
const DataCenter = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/DataCenter.vue');
// 首页-数据中心-首页
const DataCenterHome = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/DataCenter/Home.vue');
// 首页-数据中心-分类结构
const DCTree = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/DataCenter/DCTree.vue');
// 首页-数据中心-分类结构-Edit
const DCTreeEdit = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/DataCenter/DCTreeEdit.vue');
// 首页-数据中心-分类结构-Show
const DCTreeShow = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/DataCenter/DCTreeShow.vue');
// 首页-数据中心-数据字典
const DCExam = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/DataCenter/DCExam.vue');


// 首页-在线考试
const Exam = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/HomeExam.vue');
// 首页-在线考试
const ExamHome = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/page/HomeExam/Home.vue');

Vue.use(Router);
export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "首页",
            component: Home,
            children: [
                {path: '', name: '首页', component: HomeIndex},
                {
                    path: 'resource',
                    name: '教学资源',
                    component: HomeResource,
                    children: [
                        {
                            path: '',
                            name: '首页',
                            component: ResourceHome
                        },
                        {
                            path: 'tree-set',
                            name: '分类设置',
                            component: ResourceTreeSet
                        },
                        {
                            path: 'auth',
                            name: '资源权限',
                            component: ResourceAuth
                        },
                        {
                            path: 'upload',
                            name: '上传资源',
                            component: ResourceUpload
                        },
                        {
                            path: 'approval',
                            name: '资源审核',
                            component: ResourceApproval
                        },
                        {
                            path: 'stop',
                            name: '启用停用',
                            component: ResourceStop
                        },
                        {
                            path: 'course',
                            name: '备课管理',
                            component: ResourceAddCourse
                        }
                    ]
                },
                {
                    path: 'exam',
                    name: '在线考试',
                    component: Exam,
                    children: [
                        {
                            path: '',
                            name: '首页',
                            component: ExamHome
                        }
                    ]
                },
                {
                    path: 'base',
                    name: '学生管理',
                    component: HomeBase,
                    children: [
                        {
                            path: '',
                            name: '首页',
                            component: HomeBaseHome
                        },
                        {
                            path: 'student-reg',
                            name: '学生注册',
                            component: HomeBaseStudentReg
                        },
                        {
                            path: 'student-report',
                            name: '学生报道',
                            component: HomeBaseStudentReport
                        }
                    ]
                },
                {
                    path: 'teacher',
                    name: '教职工管理',
                    component: TeacherBase,
                    children: [
                        {
                            path: '',
                            name: '首页',
                            component: TeacherBaseHome
                        },
                        {
                            path: 'teacher-reg',
                            name: '教职工注册',
                            component: TeacherReg
                        }
                    ]
                },
                {
                    path: 'dataCenter',
                    name: '数据中心',
                    component: DataCenter,
                    children: [
                        {
                            path: '',
                            name: '首页',
                            component: DataCenterHome
                        },
                        {
                            path: 'dcTree',
                            name: '分类结构',
                            component: DCTree
                        },
                        {
                            path: 'dCTreeShow',
                            name: '查看',
                            component: DCTreeShow
                        },
                        {
                            path: 'dcTreeEdit',
                            name: '编辑',
                            component: DCTreeEdit
                        }
                    ]
                },
            ]
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/reg",
            name: "reg",
            component: Reg
        },
        {
            path: "/enrollment",
            name: "enrollment",
            component: Enrollment
        }
    ]
});
