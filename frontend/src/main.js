import { createApp } from 'vue'
import App from './App.vue'
import './styles/global.css'
import { initScrollAnimations } from './utils/scrollAnimations.js'

const app = createApp(App)
app.mount('#app')

if (typeof window !== 'undefined') {

  const initAnimations = () => {
    requestAnimationFrame(() => {
      initScrollAnimations()
    })
  }
  
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initAnimations)
  } else {
    initAnimations()
  }
}

