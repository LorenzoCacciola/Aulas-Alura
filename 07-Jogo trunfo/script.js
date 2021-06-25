var botaoSortear = document.querySelector('#sortear')//chamei o botao sortear
var botaoJogar = document.querySelector('#jogar')//chamei o botao jogar


var batman = {
    nome:'Batman',
    imagem:"https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/12/batman-ben-affleck.jpg",
    atributos:{
        ataque: 85,
        poder: 60,
        defesa: 80
    }
    
}

var arqueiro = {
    nome:'Arqueiro',
    imagem: "https://upload.wikimedia.org/wikipedia/pt/1/1c/Arqueiro_Verde.jpg",
    atributos:{
        ataque: 80,
        poder: 70,
        defesa: 78
    }
    
}

var homem_aranha = {
    nome:'Homem-aranha',
    imagem: "https://radiogeekbr.com.br/wp-content/uploads/2019/08/spider_man_as_iron_spider_4k-3840x2160.jpg",
    atributos:{
        ataque: 85,
        poder: 80,
        defesa: 75
    }
    
}

var homem_de_ferro = {
    nome:'Homem de ferro',
    imagem: "https://i.pinimg.com/originals/52/08/ac/5208ac301eb3fb378dc6b69a5e94c6ec.jpg",
    atributos:{
        ataque: 85,
        poder: 80,
        defesa: 60
    }
}

var hulk = {
    nome: "Hulk",
    imagem: "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/05/legiao_cNi8LYbFXfJO.jpg.jpeg",
    atributos:{
        ataque: 87,
        poder: 85,
        defesa: 90
    }
}

var capitao_america = {
    nome:"Capitao America",
    imagem:"https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/08/cropped-2019-captain-america-mjolnir-avengers-endgame-4k-gv-1.jpg",
    atributos: {
        ataque: 75,
        poder: 80,
        defesa: 70

    }
}

var pantera = {
    nome: "Pantera Negra",
    imagem: "https://blogmedia.waufen.com.br/wp-content/uploads/2018/06/pantera-negra-colar-filme.jpg",
    atributos:{
        ataque: 95,
        poder: 75,
        defesa: 90
    } 
}

var thor = {
    nome: "Thor",
    imagem: "https://rollingstone.uol.com.br/media/_versions/thor_-_reproducao_marvel_comics_widelg.jpg",
    atributos:{
        ataque: 80,
        poder: 90,
        defesa: 30
    }
}

var cartas = [thor,pantera,capitao_america,hulk,homem_de_ferro,homem_aranha,arqueiro,batman]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizarQuantidadeDeCartas()

function atualizarQuantidadeDeCartas(){
    var divQuantidadeDeCartas = document.querySelector('#quantidade-cartas')

    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeDeCartas.innerHTML = html

}

function atualizaPlacar(){
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Maquina"

    divPlacar.innerHTML = html

}


botaoSortear.addEventListener('click', function(){
  
    var cartaMaquinaNum =  parseInt(Math.random() * cartas.length);//Numero aleatorio entre a quantidade de cartas
               
    cartaMaquina = cartas[cartaMaquinaNum]//a cartaMaquina passa a ter um valor dentro das opçoes de cartas o numero cartaMaquinaNum detrminado pelo metodo Math.random

    cartas.splice(cartaMaquinaNum, 1)// depois de selecionada ela vai ser removida ( para que nao se repita e tenha um numero maximo de tentativas)

    var cartaJogadorNum = parseInt(Math.random() * cartas.length);

   cartaJogador = cartas[cartaJogadorNum]

   cartas.splice(cartaJogadorNum, 1)


    
    botaoJogar.disabled = false;//Serve para habilitar o botao
    botaoJogar.style.backgroundColor ='rgba(255, 145, 0)';//alterar o estilo do background
    botaoSortear.style.cursor = 'unset';//alterar o tipo do cursor
    botaoSortear.style.backgroundColor = 'rgba(255, 145, 0, 0.432)'
    botaoSortear.disabled = true;//Serve para desabilitar o botao sortear

    var cartasDesign = document.querySelector('#cartas')
    cartasDesign.style.display = 'flex';

    exibeCartaJogador()
})

function exibeCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador")//Lugar onde vai entrar tudo sobre a carta do jogador
    var moldura =  `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
    style=" width: inherit; height: inherit; position: absolute;">`


    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`//adiciona a imagem com base na carta do jogador sorteada

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`//adiciona o 'nom' com base na carta sorteada


    var opçoesTexto = ''

    for(var atributo in cartaJogador.atributos){//toda vez que for pulando o looping ela vai mudar de valor dentro de cada atributo
        
        opçoesTexto += "<input type='radio' name='atributo' id='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
        

    var html = "<div id='opçoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura+nome+html+opçoesTexto+ "</div>"
    

}

  
function obterBotaoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')

    for(i = 0; i < radioAtributo.length; i++){//checa todos os radio do input
        if(radioAtributo[i].checked) {//Se tiver algum radio marcado na posiçao i ele vai retornar
 
        return radioAtributo[i].value

        }
    }
}

botaoJogar.addEventListener('click',function(){
    
    var divResultado = document.getElementById('resultado')
    var atributoSelecionado = obterBotaoSelecionado()


    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado] ){

        htmlResultado = `<p class='resultado-final'>Você venceu!</p>`
        pontosJogador++

    }else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){

        htmlResultado = `<p class='resultado-final'>Você perdeu!</p>`
        pontosMaquina++

    }else{

        htmlResultado = `<p class=Resultado-final> Você empatou!</p>`

    }

    divResultado.innerHTML = htmlResultado//colocar o htmlResultado dentro da divResultado

    document.getElementById('jogar').disabled = true;
    document.getElementById('jogar').style.backgroundColor = 'rgba(255, 145, 0, 0.43)';
    document.getElementById('jogar').style.cursor = 'unset';
    document.getElementById('btnProximaRodada').disabled = false;

    atualizaPlacar()
    exibirCartaMaquina()
    atualizarQuantidadeDeCartas()
})

function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById('carta-maquina')

    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

    var moldura =  `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
    style=" width: inherit; height: inherit; position: absolute;">`
    
    var nome = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`

    var opçoesTexto = ''

    for(var atributo in cartaMaquina.atributos){
        opçoesTexto += "<p type='text' name='atributo' id='atributo' value'"+atributo+"'>"+ atributo + " " + cartaMaquina.atributos[atributo] + "<br>"       
    }

    var html = "<div id='opçoes' class='carta-status'>"

    divCartaMaquina.innerHTML = moldura+nome+html+opçoesTexto+"</div>"

    var resultadoFinal = document.querySelector('#resultado')

    resultadoFinal.style.display = 'inline';
}

function proximaRodada(){
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id='carta-jogador' class='carta'></div>
    <div id='carta-maquina' class='carta' ></div>`

    divCartas.style.display = 'none';
    document.getElementById('sortear').disabled = false;

    document.getElementById('sortear').style.backgroundColor = 'rgb(255, 145, 0)';

    document.getElementById('sortear').style.cursor = 'pointer';

    document.getElementById('sortear').disabled = false;

    document.getElementById('btnProximaRodada').disabled = true;

    document.getElementById('resultado').style.display = 'none';

    var divResultado = document.getElementById('resultado')  

    divResultado.innerHTML = ''


    if(cartas == 0){
        if(pontosMaquina < pontosJogador){
            alert('Meus parabéns você venceu a maquina!! ')
        }else if(pontosMaquina = pontosJogador){
            alert('Você empatou com a maquina!!')
        }else{
            alert('Você perdeu :(')
        }
     botaoSortear.style.backgroundColor = 'rgba(255, 145, 0, 0.432)'
    botaoSortear.style.cursor = 'unset'
}

    
    
}





