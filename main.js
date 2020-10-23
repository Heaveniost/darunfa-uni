import Vue from 'vue'
import App from './App'

import { myRequest } from './util/api.js'

Vue.prototype.$myRequest = myRequest
Vue.filter('formatDate', (date) => {
		if(date) return date.slice(0,10)
	})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
