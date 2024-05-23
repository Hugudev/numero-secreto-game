let listaDosNumerosSorteados = [];
let NumeroMaximo = 100;
let ValorDoNumeroSecreto = criandoNumeroAleatorio();
let tentativas = 1;


function mostrarTextoNaTela(tag, texto) {
    let instrucoes = document.querySelector(tag);
    instrucoes.innerHTML = texto;
}

function exibirMensagemInicial() {
    mostrarTextoNaTela('h1', 'Jogo do número secreto');
    mostrarTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == ValorDoNumeroSecreto) {
        mostrarTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        mostrarTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > ValorDoNumeroSecreto) {
            mostrarTextoNaTela('p', 'o número  secreto é menor');
        } else {
            mostrarTextoNaTela('p', 'o número secreto é maior');
        }
    }
    tentativas++
    limmparCampo();

}

function limmparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    }

    function novoJogo() {
        ValorDoNumeroSecreto = criandoNumeroAleatorio();
        limmparCampo();
        exibirMensagemInicial();
        tentativas = 1;
        document.getElementById('reiniciar').setAttribute('disabled', true);
    }


function criandoNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * NumeroMaximo + 1);
    let quantidadeDeElementosPresentesNaLista = listaDosNumerosSorteados.length;
    if(quantidadeDeElementosPresentesNaLista == NumeroMaximo) {
        listaDosNumerosSorteados = [];
    }

    if (listaDosNumerosSorteados.includes(numeroEscolhido)) {
        return criandoNumeroAleatorio();
    } else {
        listaDosNumerosSorteados.push(numeroEscolhido);
        console.log(listaDosNumerosSorteados);
        return numeroEscolhido;
    }
}

