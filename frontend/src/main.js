import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/global.css'
import { initScrollAnimations } from './utils/scrollAnimations.js'

const app = createApp(App).use(router)

router.afterEach(() => {
  setTimeout(() => {
    initScrollAnimations()
  }, 100)
})

app.mount('#app')

if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      initScrollAnimations()
    }, 300)
  })
  
  setTimeout(() => {
    initScrollAnimations()
  }, 1000)
}

