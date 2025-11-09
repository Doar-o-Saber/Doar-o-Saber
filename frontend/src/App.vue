<template>
  <div class="app">
    <Cabecalho />
    <Hero />
    <div class="separador-secao"></div>
    <SobreProjeto />
    <div class="separador-secao"></div>
    <PorQueTema />
    <div class="separador-secao"></div>
    <ComoFunciona />
    <div class="separador-secao"></div>
    <SejaPalestrante />
    <div class="separador-secao"></div>
    <Beneficios />
    <div class="separador-secao"></div>
    <Apoio />
    <Rodape />
  </div>
</template>

<script>
import Cabecalho from './components/Cabecalho.vue'
import Hero from './components/Hero.vue'
import SobreProjeto from './components/SobreProjeto.vue'
import PorQueTema from './components/PorQueTema.vue'
import ComoFunciona from './components/ComoFunciona.vue'
import SejaPalestrante from './components/SejaPalestrante.vue'
import Beneficios from './components/Beneficios.vue'
import Apoio from './components/Apoio.vue'
import Rodape from './components/Rodape.vue'

export default {
  name: 'App',
  components: {
    Cabecalho, Hero, SobreProjeto, PorQueTema, ComoFunciona,
    SejaPalestrante, Beneficios, Apoio, Rodape
  }
}
</script>

<style scoped>
.app {
  width: 100%;
  min-height: 100vh;
}
</style>

