import Vue from "vue";
import Router from "vue-router";


// 异步路由
const Home = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home.vue');
const CompanyProfile = () => import(/* webpackChunkName: "group-enrollment" */ './views/CompanyProfile.vue');
const BusinessCulture = () => import(/* webpackChunkName: "group-enrollment" */ './views/BusinessCulture.vue');
const Solution = () => import(/* webpackChunkName: "group-enrollment" */ './views/Solution.vue');
const Case = () => import(/* webpackChunkName: "group-enrollment" */ './views/Case.vue');
const Recruit = () => import(/* webpackChunkName: "group-enrollment" */ './views/Recruit.vue');
const NewsDetail = () => import(/* webpackChunkName: "group-enrollment" */ './views/NewsDetail.vue');
Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: { title: '首页',keepAlive:true}
        },
        {
            path: "/newsDetail",
            name: "NewsDetail",
            component: NewsDetail,
            meta: { title: '详情',keepAlive:true}
        },
        {
            path: "/CompanyProfile",
            name: "CompanyProfile",
            component: CompanyProfile,
            meta: { title: '公司简介',keepAlive:true}
        },
        {
            path: "/BusinessCulture",
            name: "BusinessCulture",
            component: BusinessCulture,
            meta: { title: '企业文化',keepAlive:true}
        },
        {
            path: "/Solution",
            name: "Solution",
            component: Solution,
            meta: { title: '解决方案',keepAlive:true}
        },
        {
            path: "/Case",
            name: "Case",
            component: Case,
            meta: { title: '典型案列',keepAlive:true}
        },
        {
            path: "/Recruit",
            name: "Recruit",
            component: Recruit,
            meta: { title: '招纳贤士',keepAlive:true}
        },
    ]
});
