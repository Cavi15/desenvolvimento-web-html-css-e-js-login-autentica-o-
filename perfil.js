
function carregarPerfil() {
    
    const usuarioLogado = localStorage.getItem('usuarioLogado');

    if (!usuarioLogado) {
       
        window.location.href = 'index.html';
        return;
    }

    
    const nomeUsuarioElement = document.getElementById('nome-usuario');
    const mensagemBemVindo = document.getElementById('mensagem-bem-vindo');

    if (nomeUsuarioElement) {
       
        nomeUsuarioElement.textContent = usuarioLogado;
    }
    
    if (mensagemBemVindo) {
        mensagemBemVindo.innerHTML = `Olá, <strong>${usuarioLogado}</strong>! Bem-vindo(a) ao seu perfil.`;
        mensagemBemVindo.style.fontSize = '1.4em'; // Exemplo de CSS Dinâmico
        mensagemBemVindo.style.color = '#333';
    }
}


function fazerLogout() {
    
    localStorage.removeItem('usuarioLogado');

   
    window.location.href = 'index.html';
}


document.addEventListener('DOMContentLoaded', () => {
    carregarPerfil();

   
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', fazerLogout);
        
        
        logoutButton.style.backgroundColor = 'darkred'; 
        logoutButton.style.color = 'white';
        logoutButton.style.borderRadius = '5px';
    }
});
