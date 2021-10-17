import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入UI组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 配置的loading,请求拦截和响应拦截
import './http'

Vue.use(ElementUI)


// 配置axios
// import axios from 'axios'
// axios.defaults.withCredentials=true;//携带cookie
// Vue.prototype.$axios = axios;


Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
