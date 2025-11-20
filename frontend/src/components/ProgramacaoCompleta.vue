<template>
  <div class="programacao-completa">
    <Cabecalho />
    
    <div class="programacao-hero">
      <div class="secao-background">
        <div class="secao-pattern"></div>
        <div class="secao-shapes">
          <div class="secao-shape secao-shape-1" style="top: 10%; left: 15%;"></div>
          <div class="secao-shape secao-shape-2" style="top: 50%; right: 10%;"></div>
          <div class="secao-shape secao-shape-3" style="bottom: 20%; left: 8%;"></div>
        </div>
      </div>
      
      <div class="container">
        <h1 class="programacao-titulo animate-on-scroll">
          <span class="programacao-titulo-vermelho">Programação</span> <span class="programacao-titulo-azul">Completa</span>
        </h1>
        <p class="programacao-subtitulo animate-on-scroll animate-on-scroll-delay-1">
          Conheça todas as palestras confirmadas do 1º ciclo Doar o Saber
        </p>
        <router-link to="/" class="botao-voltar animate-on-scroll animate-on-scroll-delay-2">
          ← Voltar para o início
        </router-link>
      </div>
    </div>
    
    <div class="separador-secao"></div>
    
    <div class="programacao-conteudo">
      <div class="secao-background">
        <div class="secao-pattern"></div>
        <div class="secao-shapes">
          <div class="secao-shape secao-shape-1" style="top: 20%; right: 15%;"></div>
          <div class="secao-shape secao-shape-2" style="bottom: 30%; left: 10%;"></div>
        </div>
      </div>
      
      <div class="container">
        <div class="programacao-timeline">
          <div 
            v-for="(palestra, index) in palestras" 
            :key="index"
            class="programacao-timeline-item card-animate"
            :class="`card-animate-delay-${(index % 5) + 1}`"
          >
            <div class="programacao-timeline-ponto">
              <div class="programacao-timeline-ponto-inner"></div>
            </div>
            
            <div class="programacao-card">
              <div class="programacao-card-imagem-container">
                <img 
                  :src="palestra.foto" 
                  :alt="`Foto de ${palestra.nome}`"
                  class="programacao-card-imagem"
                />
                <div class="programacao-card-badge">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z" fill="currentColor"/>
                  </svg>
                  <span>{{ palestra.data }}</span>
                </div>
              </div>
              
              <div class="programacao-card-conteudo">
                <div class="programacao-card-tema">{{ palestra.tema }}</div>
                <h3 class="programacao-card-titulo">{{ palestra.titulo }}</h3>
                <p class="programacao-card-palestrante">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                  </svg>
                  {{ palestra.nome }}
                </p>
                <p class="programacao-card-descricao">{{ palestra.descricao }}</p>
                
                <div class="programacao-card-info">
                  <div class="programacao-card-info-item">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 13H7V11H12V6H13V13Z" fill="currentColor"/>
                    </svg>
                    <span>{{ palestra.horario }}</span>
                  </div>
                  <div class="programacao-card-info-item">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 18C21.1 18 21.99 17.1 21.99 16L22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V16C2 17.1 2.9 18 4 18H0V20H24V18H20ZM4 6H20V16H4V6Z" fill="currentColor"/>
                    </svg>
                    <span>Google Meet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Rodape />
  </div>
</template>

<script>
import Cabecalho from './Cabecalho.vue'
import Rodape from './Rodape.vue'
import agataFoto from '../assets/agata.png'

export default {
  name: 'ProgramacaoCompleta',
  components: {
    Cabecalho,
    Rodape
  },
  data: () => ({
    palestras: [
      {
        foto: agataFoto,
        nome: 'Ágata Yoon',
        titulo: 'Inteligência Artificial e Doação de Sangue',  
        tema: 'IA e Doação',
        descricao: 'Ágata Yoon traz uma perspectiva que desmonta certezas: afinal, o que inteligência artificial tem a ver com doação de sangue?',
        data: '23/11',
        horario: '17h às 18h'
      },
      
    ]
  })
}
</script>

<style scoped>
@import '../styles/programacao-completa.css';
</style>

