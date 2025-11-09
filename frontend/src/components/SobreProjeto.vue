<template>
  <section id="sobre" class="sobre-projeto">
    <div class="secao-background">
      <div class="secao-pattern"></div>
      <div class="secao-shapes">
        <div class="secao-shape secao-shape-1" style="top: 15%; left: 10%;"></div>
        <div class="secao-shape secao-shape-2" style="top: 70%; right: 15%;"></div>
        <div class="secao-shape secao-shape-3" style="bottom: 10%; left: 20%;"></div>
      </div>
    </div>
    <div class="container">
      <h2 class="titulo-secao">O que é o projeto?</h2>
      
      <div class="sobre-projeto-conteudo">
        <div class="sobre-projeto-texto">
          <p class="sobre-projeto-paragrafo">
            O <strong class="destaque">Doar o Saber</strong> é um projeto criado para inspirar 
            jovens a se tornarem doadores de sangue e entenderem a importância do tema 
            através da ciência e da tecnologia.
          </p>
          <p class="sobre-projeto-paragrafo">
            Conectamos conhecimento científico com ação social, mostrando que cada jovem pode 
            fazer a diferença na vida de muitas pessoas através da doação de sangue.
          </p>
        </div>
        
        <div class="sobre-projeto-ilustracao">
          <img :src="fig1" alt="Doar o Saber" class="sobre-projeto-imagem" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import fig1 from '../assets/fig1.png'

export default {
  name: 'SobreProjeto',
  data: () => ({ fig1 })
}
</script>

<style scoped>
@import '../styles/sobre-projeto.css';
</style>

