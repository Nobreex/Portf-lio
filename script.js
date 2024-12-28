// Seleciona o menu-toggle e as nav-links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Adiciona o evento de clique ao botão toggle
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

<script>
  // Função para mostrar o carregamento e redirecionar
  function showloading(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    const loadingDiv = document.getElementById("loading");
    
    // Mostra o carregamento
    loadingDiv.style.display = "flex";
    
    // Após 2 segundos, redireciona para a nova página
    setTimeout(function() {
      window.location.href = event.target.href; // Redireciona
    }, 2000); // Espera 2 segundos para a animação de carregamento
  }
</script>
