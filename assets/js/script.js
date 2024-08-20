// Script para o carrossel de imagens
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);

// Script para validar o formulário de contato
function validateForm() {
    const nome = document.getElementById('nome-box').value.trim();
    const email = document.getElementById('email-box').value.trim();
    const mensagem = document.getElementById('mensagem-box').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    if (!emailPattern.test(email)) {
        alert('Por favor, insira um email válido.');
        return false;
    }

    alert('Formulário enviado com sucesso!');
    return true;
}


// Função para adicionar ideias ao LocalStorage
function addIdeia(name) {
    const ideias = JSON.parse(localStorage.getItem('ideias')) || [];
    ideias.push(name);
    localStorage.setItem('ideias', JSON.stringify(ideias));
    renderIdeias();
}

// Função para renderizar a lista de ideias
function renderIdeias() {
    const ideias = JSON.parse(localStorage.getItem('ideias')) || [];
    const ideiaList = document.getElementById('ideia-list');
    ideiaList.innerHTML = '';
    ideias.forEach((ideia, index) => {
        const li = document.createElement('li');
        li.textContent = ideia;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = () => deleteIdeia(index);
        li.appendChild(deleteButton);
        ideiaList.appendChild(li);
    });
}

// Função para deletar uma ideia
function deleteIdeia(index) {
    const ideias = JSON.parse(localStorage.getItem('ideias')) || [];
    ideias.splice(index, 1);
    localStorage.setItem('ideias', JSON.stringify(ideias));
    renderIdeias();
}

// Configura o formulário para adicionar ideias
document.getElementById('ideia-form').onsubmit = function(e) {
    e.preventDefault();
    const ideiaName = document.getElementById('ideia-name').value;
    addIdeia(ideiaName);
    document.getElementById('ideia-name').value = '';
};

// Inicializa a renderização das ideias ao carregar a página
renderIdeias();
