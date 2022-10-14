
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
// 导入网络请求包
import { $http } from '@escook/request-miniprogram'

uni.$http = $http

// 导入背景音乐
import music from './utils/backgroundMusic.js'
Vue.prototype.$music = music

// 请求拦截器
$http.beforeRequest = function(options) {
	uni.showLoading({
		title: '数据加载中...'
	})
}

// 响应拦截器
$http.afterRequest = function() {
	uni.hideLoading()
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif