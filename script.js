function carregar() {
    var msg  = window.document.getElementById('msg')
    var img  = window.document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 7
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'imagens/dia.png'
        document.body.style.backgroundImage = 'url("imagens/dia2.png")'
    }
    else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundImage = 'url("imagens/tarde2.png")'
    }
    else {
        //Boa noite!
        img.src = 'imagens/noite.png'
        document.body.style.backgroundImage = 'url("imagens/noite2.png")'
    }

}

