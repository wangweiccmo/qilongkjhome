import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// 首页-数据中心-数据字典
const HomeNewsList = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/HomeNewsList.vue');
const HomeNews = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/HomeNews.vue');
const HomeIndex = () => import(/* webpackChunkName: "group-enrollment" */ './views/Home/HomeIndex.vue');
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "login",
            component: Login,
            meta: { keepAlive: true }
        },
        {
            path: "/home",
            name: "home",
            component: Home,
            meta: { keepAlive: true },
            children: [
                {
                    path: '',
                    component: HomeIndex,
                    meta: { keepAlive: true }
                },
                {
                    path: 'news',
                    component: HomeNews
                },
                {
                    path: 'newsList',
                    component: HomeNewsList,
                    meta: { keepAlive: true }
                }
            ]
        }
    ]
});
