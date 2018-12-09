// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import Axios from 'axios'
//请求拦截
Axios.interceptors.response.use(function (response) {
    // Do something with response data
    // console.log(1111)
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
Vue.prototype.$axios=Axios //挂载axios 便于组件使用
//引入app组件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
