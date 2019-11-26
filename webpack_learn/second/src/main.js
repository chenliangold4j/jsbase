'use strict'
import Vue from 'vue';

const app = new Vue({
    el:'#app',
    // 定义了template，vue会把模板替换 app下的内容
    template:`<div><h2>{{message}}</h2></div>`,
    data:{
        message:"hello webpack"
    }
})