function adicionarFilme(){
    var campoFavorito = document.querySelector('input[name=pergunta]')
    var filmeFavorito = campoFavorito.value

    
    if(filmeFavorito.endsWith('.jpg')){
    listarFilmesNaTela(filmeFavorito)
    }else{
        alert('invalido')
    }
    
    campoFavorito.value = ''

}

function listarFilmesNaTela(filme){
    var listaFilmesNaTela = document.querySelector('.filmes')
    var elementoFilme = '<img src='+ filme +'>'
    listaFilmesNaTela.innerHTML = listaFilmesNaTela.innerHTML + elementoFilme
}