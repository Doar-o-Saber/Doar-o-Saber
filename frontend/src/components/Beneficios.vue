<template>
  <section id="certificados" class="beneficios">
    <div class="secao-background">
      <div class="secao-pattern"></div>
      <div class="secao-shapes">
        <div class="secao-shape secao-shape-1" style="top: 25%; right: 12%;"></div>
        <div class="secao-shape secao-shape-2" style="top: 65%; left: 8%;"></div>
        <div class="secao-shape secao-shape-3" style="bottom: 10%; right: 20%;"></div>
        <div class="secao-shape secao-shape-4" style="top: 5%; left: 40%;"></div>
      </div>
    </div>
    <div class="container">
      <h2 class="titulo-secao">Benefícios</h2>
      <p class="subtitulo-secao">
        O que você ganha ao participar do projeto
      </p>
      
      <div class="beneficios-grid">
        <div class="beneficio-card card-animate card-animate-delay-1">
          
          <h3 class="beneficio-titulo">Certificados de participação</h3>
          <p class="beneficio-descricao">
            Receba certificados reconhecidos por sua participação nas palestras
          </p>
        </div>
        
        <div class="beneficio-card card-animate card-animate-delay-2">
          
          <h3 class="beneficio-titulo">Bonificações para doadores</h3>
          <p class="beneficio-descricao">
            Doadores de sangue recebem brindes e benefícios exclusivos
          </p>
        </div>
        
        <div class="beneficio-card card-animate card-animate-delay-3">
         
          <h3 class="beneficio-titulo">Networking entre jovens cientistas</h3>
          <p class="beneficio-descricao">
            Conecte-se com outros jovens apaixonados por ciência e tecnologia
          </p>
        </div>
        
        <div class="beneficio-card card-animate card-animate-delay-4">
         
          <h3 class="beneficio-titulo">Experiência real de impacto social</h3>
          <p class="beneficio-descricao">
            Viva a experiência de fazer a diferença na vida de muitas pessoas
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Beneficios'
}
</script>

<style scoped>
@import '../styles/beneficios.css';
</style>

