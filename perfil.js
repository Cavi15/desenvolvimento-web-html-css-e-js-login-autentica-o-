
function verificarLoginExistente() {
    
    const usuarioLogado = localStorage.getItem('usuarioLogado');

    if (usuarioLogado) {
        
        window.location.href = 'perfil.html';
    }
}


function fazerLogin(event) {
  
    event.preventDefault(); 

    
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const mensagemErro = document.getElementById('mensagem-erro');
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    
    const USUARIO_SIMULADO = 'user_demo'; 
    const SENHA_SIMULADA = '12345';

    
    mensagemErro.textContent = '';
    
   
    if (username === USUARIO_SIMULADO && password === SENHA_SIMULADA) {
        
        localStorage.setItem('usuarioLogado', username);

        
        window.location.href = 'perfil.html';
    } else {
        
        mensagemErro.textContent = 'Nome de usuário ou senha inválidos.';
        mensagemErro.style.color = 'red'; 
        mensagemErro.style.fontWeight = 'bold'; 
    }
}


document.addEventListener('DOMContentLoaded', () => {
    
    verificarLoginExistente(); 

    
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', fazerLogin);
    }
});
