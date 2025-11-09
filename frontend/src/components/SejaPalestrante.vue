<template>
  <section id="palestrante" class="seja-palestrante">
    <div class="secao-background">
      <div class="secao-pattern"></div>
      <div class="secao-shapes">
        <div class="secao-shape secao-shape-1" style="top: 15%; right: 20%;"></div>
        <div class="secao-shape secao-shape-2" style="top: 55%; left: 10%;"></div>
        <div class="secao-shape secao-shape-3" style="bottom: 25%; right: 15%;"></div>
      </div>
    </div>
    <div class="container">
      <div class="seja-palestrante-conteudo">
        <div class="seja-palestrante-texto">
          <h2 class="seja-palestrante-titulo">
            Participe como palestrante
          </h2>
          <p class="seja-palestrante-descricao">
            Quer lecionar uma palestra?
          </p>
          <p class="seja-palestrante-subdescricao">
            Jovens engajados podem se inscrever para 
            compartilhar seus conhecimentos e conectar seus temas à doação de sangue.
          </p>
          <a href="#https://docs.google.com/forms/d/e/1FAIpQLScq66eMsv9SvotJXYyuGS1PVR5Wopn1BzLwm59BMVsNC-A2sQ/viewform" class="seja-palestrante-botao botao-primario">
            Quero ser palestrante
          </a>
        </div>
        
        <div class="seja-palestrante-ilustracao">
          <img :src="fig2" alt="Seja Palestrante" class="seja-palestrante-imagem" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import fig2 from '../assets/fig2.png'

export default {
  name: 'SejaPalestrante',
  data() {
    return { fig2 }
  }
}
</script>

<style scoped>
@import '../styles/seja-palestrante.css';
</style>

