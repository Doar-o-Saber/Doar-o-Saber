<template>
  <header class="cabecalho">
    <div class="container cabecalho-conteudo">
      <a href="#inicio" class="cabecalho-logo">
        <img :src="logo" alt="Doar o Saber" class="cabecalho-logo-imagem" />
      </a>
      
      <nav class="cabecalho-menu">
        <a href="#sobre" class="cabecalho-link">Sobre</a>
        <a href="#palestras" class="cabecalho-link">Palestras</a>
        <a href="#participar" class="cabecalho-link">Como Participar</a>
        <a href="#certificados" class="cabecalho-link">Beneficios</a>
        <a href="#apoio" class="cabecalho-link">Apoio</a>
      </nav>
      
      <a href="#participar" class="cabecalho-botao botao-primario">
        Quero Participar!
      </a>
    </div>
  </header>
</template>

<script>
import logo from '../assets/logo.png'

export default {
  name: 'Cabecalho',
  data() {
    return { logo }
  }
}
</script>

<style scoped>
@import '../styles/cabecalho.css';
</style>

