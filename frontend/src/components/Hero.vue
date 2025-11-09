<template>
  <section id="inicio" class="hero">
    <div class="hero-background">
      <div class="hero-pattern"></div>
      <div class="hero-shapes">
        <div class="hero-shape hero-shape-1"></div>
        <div class="hero-shape hero-shape-2"></div>
        <div class="hero-shape hero-shape-3"></div>
        <div class="hero-shape hero-shape-4"></div>
      </div>
    </div>
    <div class="container hero-conteudo">
      <div class="hero-lado-esquerdo">
        <img :src="logo" alt="Doar o Saber" class="hero-logo-imagem" />
        <div class="hero-countdown">
          <p class="hero-countdown-label">Início do ciclo de palestras:</p>
          <div class="hero-countdown-container">
            <div class="hero-countdown-item">
              <div class="hero-countdown-numero cor-vermelho">{{ countdown.dias }}</div>
              <div class="hero-countdown-label-item">dias</div>
            </div>
            <div class="hero-countdown-separador">:</div>
            <div class="hero-countdown-item">
              <div class="hero-countdown-numero cor-azul">{{ formatarNumero(countdown.horas) }}</div>
              <div class="hero-countdown-label-item">horas</div>
            </div>
            <div class="hero-countdown-separador">:</div>
            <div class="hero-countdown-item">
              <div class="hero-countdown-numero cor-vermelho">{{ formatarNumero(countdown.minutos) }}</div>
              <div class="hero-countdown-label-item">min</div>
            </div>
            <div class="hero-countdown-separador">:</div>
            <div class="hero-countdown-item">
              <div class="hero-countdown-numero cor-azul">{{ formatarNumero(countdown.segundos) }}</div>
              <div class="hero-countdown-label-item">seg</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="hero-lado-direito">
        <h1 class="hero-titulo">
          Conectando <span class="hero-titulo-destaque-vermelho">ciência</span> e 
          <span class="hero-titulo-destaque-azul">solidariedade</span>
        </h1>
        
        <p class="hero-descricao">
          Um projeto feito para jovens entre 16 e 24 anos que conecta ciência, 
          tecnologia e solidariedade para incentivar a doação de sangue.
        </p>
        
        <div class="hero-botoes">
          <a href="#participar" class="hero-botao-principal botao-primario">
            Quero participar das palestras
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScq66eMsv9SvotJXYyuGS1PVR5Wopn1BzLwm59BMVsNC-A2sQ/viewform" class="hero-botao-secundario botao-secundario">
            Quero ser palestrante
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import logo from '../assets/logo.png'

const MS_POR_DIA = 86400000
const MS_POR_HORA = 3600000
const MS_POR_MINUTO = 60000
const MS_POR_SEGUNDO = 1000

export default {
  name: 'Hero',
  data() {
    return {
      logo,
      countdown: { dias: 0, horas: 0, minutos: 0, segundos: 0 },
      intervalo: null
    }
  },
  mounted() {
    this.atualizarCountdown()
    this.intervalo = setInterval(this.atualizarCountdown, 1000)
  },
  beforeUnmount() {
    if (this.intervalo) clearInterval(this.intervalo)
  },
  methods: {
    atualizarCountdown() {
      const diferenca = Math.max(0, new Date('2025-11-23T00:00:00') - new Date())
      this.countdown.dias = Math.floor(diferenca / MS_POR_DIA)
      this.countdown.horas = Math.floor((diferenca % MS_POR_DIA) / MS_POR_HORA)
      this.countdown.minutos = Math.floor((diferenca % MS_POR_HORA) / MS_POR_MINUTO)
      this.countdown.segundos = Math.floor((diferenca % MS_POR_MINUTO) / MS_POR_SEGUNDO)
    },
    formatarNumero(num) {
      return String(num).padStart(2, '0')
    }
  }
}
</script>

<style scoped>
@import '../styles/hero.css';
</style>

