document.addEventListener('DOMContentLoaded', () => {
    const finalScoreDiv = document.getElementById('final-score');
    const restartBtn = document.getElementById('restart-btn');

    // Obter a pontuação final do localStorage
    const finalScore = localStorage.getItem('finalScore');
    finalScoreDiv.innerHTML = `Pontuação final: ${finalScore}`;

    // Adicionar evento de clique ao botão para recarregar a página inicial
    restartBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});
