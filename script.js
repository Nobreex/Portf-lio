// Seleciona o menu-toggle e as nav-links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Adiciona o evento de clique ao botão toggle
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
