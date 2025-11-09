<template>
  <section id="apoio" class="apoio">
    <div class="secao-background">
      <div class="secao-pattern"></div>
      <div class="secao-shapes">
        <div class="secao-shape secao-shape-1" style="top: 20%; left: 12%;"></div>
        <div class="secao-shape secao-shape-2" style="top: 60%; right: 18%;"></div>
        <div class="secao-shape secao-shape-3" style="bottom: 15%; left: 25%;"></div>
      </div>
    </div>
    <div class="container">
      <h2 class="titulo-secao">Apoio</h2>
      <p class="subtitulo-secao">
        Acreditamos no poder da educação e da tecnologia para gerar impacto social 
        e inspirar jovens a fazerem a diferença.
      </p>
      
      <div class="apoio-logos">
        <div class="apoio-logo-item">
          <img :src="techgirlsLogo" alt="TechGirls" class="apoio-logo-imagem" />
        </div>
        
        <div class="apoio-logo-item">
          <img :src="girlsupLogo" alt="Girls Up" class="apoio-logo-imagem" />
        </div>
      </div>
      
      <p class="apoio-texto">
        Se sua instituição ou organização quer apoiar este projeto, 
        entre em contato conosco!
      </p>
    </div>
  </section>
</template>

<script>
import techgirlsLogo from '../assets/techgirls.png'
import girlsupLogo from '../assets/girlsup.png'

export default {
  name: 'Apoio',
  data() {
    return { techgirlsLogo, girlsupLogo }
  }
}
</script>

<style scoped>
@import '../styles/apoio.css';
</style>

