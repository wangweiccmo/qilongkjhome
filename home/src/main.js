import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {$http} from "./api/api";
import {
    Button,
    Select,
    Menu,
    Submenu,
    MenuItem,
    Carousel,
    CarouselItem,
    Tabs,
    TabPane,
    Breadcrumb,
    BreadcrumbItem,
} from 'element-ui';
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Button)
Vue.use(Select)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Tabs);
Vue.use(TabPane);

import './assets/css/base.css'


Vue.config.productionTip = false;
Vue.prototype.$http = $http;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
