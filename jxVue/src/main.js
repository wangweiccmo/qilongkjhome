import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {$http} from "./api/api";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/css/base.css'
// import {
//     Input,
//     Radio,
//     RadioGroup,
//     Checkbox,
//     CheckboxGroup,
//     Form,
//     FormItem,
//     Button,
//     Dropdown,
//     DropdownMenu,
//     DropdownItem,
//     Dialog,
//     Container,
//     Header,
//     Aside,
//     Main,
//     Footer,
//     Breadcrumb,
//     BreadcrumbItem,
//     Icon,
//     Row,
//     Col,
//     Menu,
//     Submenu,
//     MenuItem,
//     MenuItemGroup,
//     Tabs,
//     TabPane,
//     Carousel,
//     CarouselItem,
//     Collapse,
//     CollapseItem,
//     Tree,
//     Table,
//     TableColumn
// } from 'element-ui';
//
// Vue.use(Table);
// Vue.use(TableColumn);
// Vue.use(Tree);
// Vue.use(CollapseItem);
// Vue.use(Collapse);
// Vue.use(CarouselItem);
// Vue.use(Carousel);
// Vue.use(Tabs);
// Vue.use(TabPane);
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
// Vue.use(Icon);
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(Breadcrumb);
// Vue.use(BreadcrumbItem);
// Vue.use(Input);
// Vue.use(Radio);
// Vue.use(RadioGroup);
// Vue.use(Checkbox);
// Vue.use(CheckboxGroup);
// Vue.use(Form);
// Vue.use(FormItem);
// Vue.use(Button);
// Vue.use(Dialog);
// Vue.use(Dropdown);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
// Vue.use(Container);
// Vue.use(Header);
// Vue.use(Aside);
// Vue.use(Main);
// Vue.use(Footer);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http = $http;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
