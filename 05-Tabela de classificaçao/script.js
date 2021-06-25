

function enviarTudo(){

var nome = document.querySelector('.nome').value
var vitorias = Math.floor(document.querySelector('.vitorias').value)
var empates = Math.floor(document.querySelector('.empates').value)
var derrotas = Math.floor(document.querySelector('.derrotas').value)
var pontos = vitorias + empates - derrotas 
var h1 = document.querySelector('h1')

console.log(pontos)

h1.innerHTML = pontos

if(derrotas < vitorias){
    console.log('Voce é um bosta!')
}else{
    console.log('Olá '+nome+' meus parabens, voce tem '+ vitorias+' vitorias ' +empates+' empates '+ ' e '+derrotas +' derrotas')
}

}

function adicionarVitoria() {

    var vitorias = document.querySelector('.vitorias').value
    var vitoriasNum = Math.floor(vitorias) 
    var res = vitoriasNum + 1

   

    console.log(res)
    console.log(vitorias +' '+ typeof(vitoriasNum))
    
}

