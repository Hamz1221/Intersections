import Vue from 'vue'
import ImpVis from '@impvis/components'
import '@impvis/components/dist/impvis-components.css'
import intersections from './Intersections.vue'
import ImpVisKatex from "@impvis/components-katex"
import "./util/objects.js"

Vue.config.productionTip = false
Vue.use(ImpVis);
Vue.use(ImpVisKatex)





new Vue({
    render: h => h(intersections),
  }).$mount('#app')
  