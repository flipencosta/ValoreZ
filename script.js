const products = [
    { name: 'Samsung Galaxy A34', price: 1241, image: 'img/samsung.png' },
    { name: 'Kit 10 Cuecas Box Boxer Estampadas', price: 38, image: 'img/cuecas.png' },
    { name: 'Cafeteira Elétrica Efficient Electrolux', price: 99, image: 'img/cafeteira.png' },
    { name: 'Notebook Lenovo Ideapad 1i', price: 2753, image: 'img/notebook.png' },
    { name: 'Creatina Monohidratada 1Kg 100% Pura Soldiers Nutrition', price: 192, image: 'img/creatina.png' },
    { name: 'Micro-ondas Efficient Electrolux', price: 549, image: 'img/micro.png' },
    { name: 'Nebulizador E Inalador De Rede Vibratória', price: 112, image: 'img/inalador.png' },
    { name: 'Máquina De Cartão Point Smart', price: 266, image: 'img/product2.jpg' },
    { name: 'Smart Tv LG 50', price: 2098, image: 'img/tv.png' },
    { name: 'Notebook Samsung Galaxy Book2', price: 2659, image: 'img/note.png' },
    { name: 'Parafusadeira Furadeira Sem Fio', price: 163, image: 'img/parafusadeira.png' },
    { name: 'Fritadeira Air Fryer New Pratic', price: 329, image: 'img/air.png' },
    { name: 'Impressora Multifuncional 3 Em 1 Ecotank', price: 1058, image: 'img/impressora.png' },
    { name: 'Edredom Sherpa Cobertor E Coberdrom Casal Queen', price: 129, image: 'img/cama.png' },
    { name: 'Electrolux Powerspeed STK15 aspirador de pó vertical', price: 239, image: 'img/aspirador.png' },
];

let currentProductIndex = 0;
let totalScore = 0;

const productImage = document.getElementById('product-image');
const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

function startGame() {
    currentProductIndex = 0;
    totalScore = 0;
    showProduct();
    submitBtn.addEventListener('click', checkGuess);
}

function showProduct() {
    if (currentProductIndex < products.length) {
        const product = products[currentProductIndex];
        productImage.src = product.image;
        guessInput.value = '';
        resultDiv.innerHTML = '';
    } else {
        showFinalScore();
    }
}

function checkGuess() {
    const product = products[currentProductIndex];
    const guess = parseFloat(guessInput.value);
    const score = calculateScore(guess, product.price);
    totalScore += score;
    resultDiv.innerHTML = `Preço: R$ ${product.price}. Sua pontuação: ${score}`;
    scoreDiv.innerHTML = `Pontuação total: ${totalScore}`;
    currentProductIndex++;
    setTimeout(showProduct, 2000);
}

function calculateScore(guess, actualPrice) {
    const difference = Math.abs(guess - actualPrice);
    const percentageDifference = (difference / actualPrice) * 100;

    if (difference === 0) {
        return 20;
    } else if (percentageDifference <= 10) {
        return 10;
    } else if (percentageDifference <= 50) {
        return 1;
    } else {
        return 0;
    }
}

function showFinalScore() {
    // Armazenar a pontuação final no localStorage
    localStorage.setItem('finalScore', totalScore);
    // Redirecionar para a página de pontuação final
    window.location.href = 'final_score.html';
}

window.onload = startGame;
