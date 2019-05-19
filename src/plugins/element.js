import Vue from 'vue'
import {
    Button,
    Menu,
    MenuItem,
    MenuItemGroup,
    Submenu,
    Aside,
    Container,
    Select,
    Option
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/pl'
import locale from 'element-ui/lib/locale'

locale.use(lang);

Vue.use(Button);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
Vue.use(Aside);
Vue.use(Container);
Vue.use(Select);
Vue.use(Option);
