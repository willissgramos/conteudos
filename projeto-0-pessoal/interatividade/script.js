function alternarTema() {
  const body = document.body;
  const botao = document.getElementById('botaoTema');
  
  body.classList.toggle('tema-escuro');
  
  if (body.classList.contains('tema-escuro')) {
    botao.textContent = 'Tema Claro';
  } else {
    botao.textContent = 'Tema Escuro';
  }
}
