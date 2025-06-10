// Aguarda o DOM estar pronto antes de executar o código
window.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os elementos que devem ter animação
  const elements = document.querySelectorAll('.project, .experience, .about-me, h1, .contact');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
           if (entry.isIntersecting) {
                entry.target.classList.add('visible');
           } else {
                entry.target.classList.remove('visible');
           }
      });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });

  // Redireciona para o Github ao clicar no botão
  const githubBtn = document.getElementById('github-btn');
  if (githubBtn) {
    githubBtn.addEventListener('click', () => {
      window.open('https://github.com/Gaia28', '_blank');
    });
  }
});