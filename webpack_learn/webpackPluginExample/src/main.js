'use strict'
import Vue from 'vue';

// import App from './vue/app';
import App from './vue/App.vue';

const app = new Vue({
    el: '#app',
    // 定义了template，vue会把模板替换 app下的内容
    template: '<App/>',
    components: {
        App
    }
})