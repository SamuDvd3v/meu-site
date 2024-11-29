document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if (!username) {
        window.location.href = 'login.html';
    } else {
        document.getElementById('welcome-message').textContent = 'Bem-vindo, ' + username + '!';
    }
});

document.getElementById('send-btn').addEventListener('click', function() {
    let chatBox = document.getElementById('chat-box');
    let chatInput = document.getElementById('chat-input');
    
    if(chatInput.value.trim() !== "") {
        let message = document.createElement('div');
        message.classList.add('chat-message');
        message.textContent = chatInput.value;
        chatBox.appendChild(message);
        
        chatInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight; // Rolagem automática para a última mensagem
    }
});
