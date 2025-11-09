<template>
  <footer id="participar" class="rodape">
    <div class="container">
      <div class="rodape-grid">
        <div class="rodape-coluna rodape-coluna-principal">
          <div class="rodape-logo">
            <img :src="logo" alt="Doar o Saber" class="rodape-logo-imagem" />
          </div>
          <p class="rodape-descricao">
            Transformando conhecimento em solidariedade através da ciência e tecnologia.
          </p>
          <div class="rodape-redes-sociais">
            <a href="https://instagram.com/doarosaber" target="_blank" class="rodape-rede-link" aria-label="Instagram">
              <svg class="rodape-rede-icone" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2" fill="none"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" stroke-width="2" fill="none"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </a>
            <a href="mailto:contato@doarosaber.com" class="rodape-rede-link" aria-label="E-mail">
              <svg class="rodape-rede-icone" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="rodape-coluna">
          <h4 class="rodape-coluna-titulo">Navegação</h4>
          <ul class="rodape-links">
            <li><a href="#sobre" class="rodape-link">Sobre</a></li>
            <li><a href="#palestras" class="rodape-link">Palestras</a></li>
            <li><a href="#participar" class="rodape-link">Como Participar</a></li>
            <li><a href="#certificados" class="rodape-link">Certificados</a></li>
            <li><a href="#apoio" class="rodape-link">Apoio</a></li>
          </ul>
        </div>
        
        <div class="rodape-coluna">
          <h4 class="rodape-coluna-titulo">Ações</h4>
          <ul class="rodape-links">
            <li><a href="#participar" class="rodape-link">Participar das Palestras</a></li>
            <li><a href="#doar-sangue" class="rodape-link">Doar Sangue</a></li>
            <li><a href="#participar" class="rodape-link">Ser Palestrante</a></li>
          </ul>
        </div>
        
        <div class="rodape-coluna rodape-coluna-cta">
          <h4 class="rodape-coluna-titulo">Participe</h4>
          <p class="rodape-cta-texto">
            Junte-se a quem transforma conhecimento em solidariedade.
          </p>
          <div class="rodape-botoes">
            <a href="#participar" class="botao-primario rodape-botao">
              Quero participar
            </a>
          </div>
        </div>
      </div>
      
      <div class="rodape-copyright">
        <p>&copy; 2025 Doar o Saber. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import logo from '../assets/logo.png'

export default {
  name: 'Rodape',
  data() {
    return { logo }
  }
}
</script>

<style scoped>
@import '../styles/rodape.css';
</style>

