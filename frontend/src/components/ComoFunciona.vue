<template>
  <section id="palestras" class="como-funciona">
    <div class="secao-background">
      <div class="secao-pattern"></div>
      <div class="secao-shapes">
        <div class="secao-shape secao-shape-1" style="top: 10%; left: 15%;"></div>
        <div class="secao-shape secao-shape-2" style="top: 50%; right: 10%;"></div>
        <div class="secao-shape secao-shape-3" style="bottom: 20%; left: 8%;"></div>
      </div>
    </div>
    <div class="container">
      <h2 class="titulo-secao">Como vai funcionar</h2>
      <p class="subtitulo-secao">
        Um ciclo completo de palestras online para você aprender e fazer a diferença
      </p>
      
      <div class="como-funciona-timeline">
        <div class="como-funciona-item">
          <svg class="como-funciona-icone" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H9V12H7V10ZM11 10H13V12H11V10ZM15 10H17V12H15V10Z" fill="currentColor"/>
          </svg>
          <div class="como-funciona-conteudo">
            <h3 class="como-funciona-titulo">Período</h3>
            <p class="como-funciona-descricao">23/11 a 06/12</p>
          </div>
        </div>
        
        <div class="como-funciona-item">
          <svg class="como-funciona-icone" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 13H7V11H12V6H13V13Z" fill="currentColor"/>
          </svg>
          <div class="como-funciona-conteudo">
            <h3 class="como-funciona-titulo">Horários</h3>
            <p class="como-funciona-descricao">Segundas, Quartas e Sextas<br>Das 17h às 18h</p>
          </div>
        </div>
        
        <div class="como-funciona-item">
          <svg class="como-funciona-icone" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 18C21.1 18 21.99 17.1 21.99 16L22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V16C2 17.1 2.9 18 4 18H0V20H24V18H20ZM4 6H20V16H4V6Z" fill="currentColor"/>
          </svg>
          <div class="como-funciona-conteudo">
            <h3 class="como-funciona-titulo">Plataforma</h3>
            <p class="como-funciona-descricao">Online via Google Meet</p>
          </div>
        </div>
        
        <div class="como-funciona-item">
          <svg class="como-funciona-icone" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
          </svg>
          <div class="como-funciona-conteudo">
            <h3 class="como-funciona-titulo">Temas</h3>
            <p class="como-funciona-descricao">Doação, Ciência e tecnologia</p>
          </div>
        </div>
      </div>
      
      <div class="como-funciona-botao-container">
        <a href="#participar" class="botao-secundario">
          Ver programação completa (Em breve)
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComoFunciona'
}
</script>

<style scoped>
@import '../styles/como-funciona.css';
</style>

