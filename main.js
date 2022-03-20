document.querySelector('#calculaResposta').addEventListener('click', calculaDeclividade);


function calculaDeclividade() {
    const comprimento = parseInt(document.querySelector('#comprimento').value);
    const altura = parseInt(document.querySelector('#altura').value);
    const declividade = ((altura/comprimento) * 100).toFixed(2);
    document.querySelector('#resposta').innerHTML = declividade + '%';
}