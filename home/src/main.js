import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {$http} from "./api/api";
import JxHeader from "./components/ui/JxHeader.vue";
import JxFooder from "./components/ui/JxFooder.vue";
import BaseImgHeader from "_cmp/ui/BaseImgHeader"

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
Vue.component(JxHeader.name, JxHeader);
Vue.component(JxFooder.name, JxFooder);
Vue.component(BaseImgHeader.name, BaseImgHeader);


import './assets/css/base.css'


Vue.config.productionTip = false;
Vue.prototype.$http = $http;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
