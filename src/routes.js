import VueRouter from 'vue-router'
import About from './components/About.vue'
import HelloWorld from './components/HelloWorld.vue'

export default new VueRouter( {
     routes: [
        { path: '/', component: About },
        { path: '/helloword', component: HelloWorld }
    ]
})