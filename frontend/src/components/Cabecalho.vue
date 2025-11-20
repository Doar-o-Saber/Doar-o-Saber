<template>
  <header class="cabecalho">
    <div class="container cabecalho-conteudo">
      <router-link to="/" class="cabecalho-logo" @click="scrollToTop">
        <img :src="logo" alt="Doar o Saber" class="cabecalho-logo-imagem" />
      </router-link>
      
      <nav class="cabecalho-menu">
        <a href="#sobre" class="cabecalho-link" @click.prevent="navigateToSection('sobre')">Sobre</a>
        <a href="#palestras" class="cabecalho-link" @click.prevent="navigateToSection('palestras')">Palestras</a>
        <a href="#participar" class="cabecalho-link" @click.prevent="navigateToSection('participar')">Como Participar</a>
        <a href="#certificados" class="cabecalho-link" @click.prevent="navigateToSection('certificados')">Beneficios</a>
        <a href="#apoio" class="cabecalho-link" @click.prevent="navigateToSection('apoio')">Apoio</a>
      </nav>
      
      <a href="#participar" class="cabecalho-botao botao-primario" @click.prevent="navigateToSection('participar')">
        Quero Participar!
      </a>
    </div>
  </header>
</template>

<script>
import logo from '../assets/logo.png'

export default {
  name: 'Cabecalho',
  data: () => ({ logo }),
  methods: {
    navigateToSection(sectionId) {
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          setTimeout(() => {
            this.scrollToSection(sectionId)
          }, 100)
        })
      } else {
        this.scrollToSection(sectionId)
      }
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
@import '../styles/cabecalho.css';
</style>

