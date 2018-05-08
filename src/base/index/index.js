import CusHeader from 'base/header/header';
import CusNav from 'base/nav/nav';


export default {
    install: function (Vue) {
        Vue.component('cus-nav',CusNav);
        Vue.component('cus-header',CusHeader);
    }
}
