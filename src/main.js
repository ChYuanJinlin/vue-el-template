/*
 * @Author: your name
 * @Date: 2020-02-29 17:20:47
 * @LastEditTime: 2020-03-04 12:31:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \democ:\Users\Administrator\Desktop\vue-blog\src\main.js
 */

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element  from 'element-ui'
import '../theme/index.css'
import i18n from './i18n'
import api from './request'
// 挂载到vue 原型上，方便操作
Vue.prototype.$api = api;
Vue.use(Element)






/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  components: { App },
  template: '<App/>'
})
