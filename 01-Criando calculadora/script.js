var valorEscolha = prompt('Qual operaçao quer fazer?')

var primeiroNumero = parseInt(prompt('Digite um numero:'))

var segundoNumero = parseInt(prompt('Digite o segundo numero:'))

var res = primeiroNumero / segundoNumero

if(valorEscolha == 'divisao'){
    var res = primeiroNumero / segundoNumero;
    var h2 = document.querySelector('h2')
    h2.innerHTML = res 
}else if(valorEscolha == 'multiplicaçao'){
    var res = primeiroNumero * segundoNumero
    var h2 = document.querySelector('h2')

    h2.innerHTML = res 
}else if(valorEscolha == 'soma'){
    var res = primeiroNumero + segundoNumero
    var h2 = document.querySelector('h2')

    h2.innerHTML = res 
}else if(valorEscolha == 'subtraçao'){
    var res = primeiroNumero - segundoNumero
    var h2 = document.querySelector('h2')

    h2.innerHTML = res 
}




