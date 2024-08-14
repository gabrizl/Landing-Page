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

// Função para alternar entre as abas
function showProductsTab() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('products-section').style.display = 'block';
}

// Adiciona um produto ao LocalStorage
function addProduct(name) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(name);
    localStorage.setItem('products', JSON.stringify(products));
    renderProducts();
}

// Renderiza a lista de produtos
function renderProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = product;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = () => deleteProduct(index);
        li.appendChild(deleteButton);
        productList.appendChild(li);
    });
}

// Deleta um produto
function deleteProduct(index) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    renderProducts();
}

// Configura o formulário para adicionar produtos
document.getElementById('product-form').onsubmit = function(e) {
    e.preventDefault();
    const productName = document.getElementById('product-name').value;
    addProduct(productName);
    document.getElementById('product-name').value = '';
}

// Transição assíncrona simulada com fetch
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Dados carregados');
        }, 1000);
    });
}

fetchData().then(data => console.log(data));

// Inicializa a renderização dos produtos ao carregar a página
renderProducts();

// Evento de clique para a aba de produtos
document.getElementById('products-tab').addEventListener('click', function() {
    showProductsTab();
});