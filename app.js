//let titulo = document.querySelector('h1'); //pega o H1 do HTML
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo1 = document.querySelector('p');
//paragrafo1.innerHTML = 'Escolha um número de 1 a 10';
let listaSorteados = []
let numLimit = 10
let numeroSecreto = numeroAleatorio();
let tentativa = 1;
let qtdLista;

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
exibirTextoTela('h1','Jogo do Número Secreto' );
exibirTextoTela('p', 'Escolha um número de 1 a 10');
}
mensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value
    if(chute== numeroSecreto) {
        exibirTextoTela('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Mandou bem! Usou apenas ${tentativa} ${palavraTentativa}`;
        exibirTextoTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTextoTela('p', 'O número é menor que o chute');
        }else{
            exibirTextoTela('p', 'O número do chute é maior');
        }
        tentativa++
        limparCampo()
    }
}

function numeroAleatorio () {
   let numeroEscolhido = parseInt(Math.random()*numLimit + 1);
    qtdLista = qtdLista.length;

   if(qtdLista == numLimit){
    listaSorteados = []
   }
   if(listaSorteados.includes(numeroEscolhido)){
    return numeroAleatorio();
   }else{
    listaSorteados.push(numeroEscolhido);
    return numeroEscolhido
   }
   

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirTextoTela('h1','Jogo do Número Secreto' );
    exibirTextoTela('p', 'Escolha um número de 1 a 10');
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}