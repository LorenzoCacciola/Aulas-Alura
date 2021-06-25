function converterLink(link) {   
    return link.replace( 'watch?v=','embed/') 
    
}

function clicou(){

    var pegaLink = document.querySelector('main input[type=text]').value

    document.write(`<iframe width="1280" height="720" src="${converterLink(pegaLink)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)

}

