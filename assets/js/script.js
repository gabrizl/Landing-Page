const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

let idx = 0

function carrossel(){
    idx++

    if(idx > img.length-1){
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

setInterval(carrossel, 1800)

function validateForm() {
    const nome = document.getElementById('nome-box').value.trim();
    const email = document.getElementById('email-box').value.trim();
    const mensagem = document.getElementById('mensagem-box').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    alert('Formulário enviado com sucesso!');
    return true;
}