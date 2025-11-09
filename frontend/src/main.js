import { createApp } from 'vue'
import App from './App.vue'
import './styles/global.css'
import { initScrollAnimations } from './utils/scrollAnimations.js'

createApp(App).mount('#app')

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

