import Vue from "vue";
import Router from "vue-router";


// 异步路由
const Home = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home.vue');
const CompanyProfile = () => import(/* webpackChunkName: "group-enrollment" */ './views/CompanyProfile.vue');
const BusinessCulture = () => import(/* webpackChunkName: "group-enrollment" */ './views/BusinessCulture.vue');
const Solution = () => import(/* webpackChunkName: "group-enrollment" */ './views/Solution.vue');
const Case = () => import(/* webpackChunkName: "group-enrollment" */ './views/Case.vue');
const Recruit = () => import(/* webpackChunkName: "group-enrollment" */ './views/Recruit.vue');
Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/CompanyProfile",
            name: "CompanyProfile",
            component: CompanyProfile
        },
        {
            path: "/BusinessCulture",
            name: "BusinessCulture",
            component: BusinessCulture
        },
        {
            path: "/Solution",
            name: "Solution",
            component: Solution
        },
        {
            path: "/Case",
            name: "Case",
            component: Solution
        },
        {
            path: "/Recruit",
            name: "Recruit",
            component: Recruit
        },
    ]
});
