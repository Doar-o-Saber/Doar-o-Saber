<template>
  <section class="por-que-tema">
    <div class="secao-background">
      <div class="secao-pattern"></div>
      <div class="secao-shapes">
        <div class="secao-shape secao-shape-1" style="top: 20%; right: 8%;"></div>
        <div class="secao-shape secao-shape-2" style="top: 60%; left: 5%;"></div>
        <div class="secao-shape secao-shape-3" style="bottom: 15%; right: 25%;"></div>
        <div class="secao-shape secao-shape-4" style="top: 5%; left: 30%;"></div>
      </div>
    </div>
    <div class="container">
      <h2 class="titulo-secao">Por que esse tema?</h2>
      <p class="subtitulo-secao">
        Os dados mostram a importância de ações como esta
      </p>
      
      <div class="por-que-tema-dados">
        <div class="por-que-tema-card">
          <div class="por-que-tema-numero">14</div>
          <p class="por-que-tema-descricao">
            Apenas <strong>14 em cada 1.000</strong> brasileiros doam sangue regularmente
          </p>
        </div>
        
        <div class="por-que-tema-card destaque">
          <div class="por-que-tema-numero">4</div>
          <p class="por-que-tema-descricao">
            Uma doação pode salvar até <strong>quatro vidas</strong>
          </p>
        </div>
        
        <div class="por-que-tema-card">
          <div class="por-que-tema-numero">∞</div>
          <p class="por-que-tema-descricao">
            Queremos mudar essa realidade mostrando que <strong>aprender também é salvar vidas</strong>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PorQueTema'
}
</script>

<style scoped>
@import '../styles/por-que-tema.css';
</style>

