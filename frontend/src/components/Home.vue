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
import Cabecalho from './Cabecalho.vue'
import Hero from './Hero.vue'
import SobreProjeto from './SobreProjeto.vue'
import PorQueTema from './PorQueTema.vue'
import ComoFunciona from './ComoFunciona.vue'
import SejaPalestrante from './SejaPalestrante.vue'
import Beneficios from './Beneficios.vue'
import Apoio from './Apoio.vue'
import Rodape from './Rodape.vue'

export default {
  name: 'Home',
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

