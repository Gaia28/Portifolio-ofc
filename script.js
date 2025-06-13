const projectPasswordManager = document.getElementById('project-password-manager');
const githubBtn = document.getElementById('github-btn');
const projectAnotacoes = document.getElementById('project-anotacoes');
const projectClassifiedsSite = document.getElementById('project-classifieds-site');
const projectSchoolLibarySystem = document.getElementById('project-school-libary-system');




window.addEventListener('DOMContentLoaded', () => {

  const elements = document.querySelectorAll('.project, .experience, .about-me, h1, .contact, .project-details');

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

});

// Redireciona para o Github ao clicar no botão
  if (githubBtn) {
    githubBtn.addEventListener('click', () => {
      window.open('https://github.com/Gaia28', '_blank');
    });
  }

//Redireciona para o projeto de anotações ao clicar no botão
if(projectAnotacoes){
    projectAnotacoes.addEventListener('click', () =>{
      window.open('projeto-anotacoes.html');
    });
}

// Redireciona para o projeto de gerenciador de senhas ao clicar no botão
if(projectPasswordManager){
    projectPasswordManager.addEventListener('click', () =>{
      window.open('projeto-gerenciador-senhas.html');
    });
}

// Redireciona para o projeto de site de classificados ao clicar no botão
if(projectClassifiedsSite){
    projectClassifiedsSite.addEventListener('click', () =>{
      window.open('projeto-site-anuncios.html');
    });
}

// Redireciona para o projeto de sistema de biblioteca escolar ao clicar no botão
if(projectSchoolLibarySystem){
    projectSchoolLibarySystem.addEventListener('click', () =>{
      window.open('projeto-biblioteca.html');
    });
}