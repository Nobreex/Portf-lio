// Seleciona o menu-toggle e as nav-links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Adiciona o evento de clique ao botão toggle
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function showloading(event) {
  event.preventDefault(); // Impede o redirecionamento imediato do link

  // Captura a URL do link
  const targetUrl = event.currentTarget.getAttribute('href');

  // Mostra uma mensagem de carregamento
  alert("Carregando...");

  // Aguarda 1 segundo antes de redirecionar
  setTimeout(() => {
      window.location.href = targetUrl; // Redireciona para a URL do link
  }, 1000); // Tempo de espera em milissegundos (1 segundo)
}

