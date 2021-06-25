
var escolha = document.querySelector('input[type=text]')

function clicou(){
 
    if(escolha.value == 'Avengers'){
        alert('você esta vendo Avenger')
    }else if(escolha.value == 'Golpe Duplo'){
        alert('você esta assistindo Golpe Dulpo')
    }else if(escolha.value == 'Iron Man'){
        alert('você esta assistindo Iron Man')
    }else if(escolha.value == 'Spider Man'){
        alert('você esta vendo Spider Man')
    }

}

    var filmes = document.querySelectorAll('.filmes')

    
    filmes.forEach(function(filme) {
        filme.addEventListener('click', function(event){
            var filmeClicado = event.target.parentNode.classList

            console.log('Voce clicou no  ' +filmeClicado)
/*      
var ultimoNumero = filmeClicado.lenght 
var numero = filmeClicado.charAt(ultimoNumero)
*/

        })
    })
    