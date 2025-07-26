function carregar() {
  let msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  let data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas<br><br>`


  if (hora >= 0 && hora < 6) {
    img.src = "imagens/madrugada.jpg"
    document.body.style.background ='#0d0e31ff'
    msg.innerHTML += 'Boa madrugada'
  } else if (hora >= 6 && hora < 12) {
    img.src = "imagens/manha.jpg"
    document.body.style.background ='#f79c00c2'
    msg.innerHTML += 'Bom dia'
  } else if (hora >= 12 && hora < 18) {
    img.src = "imagens/tarde.jpg"
    document.body.style.background ='#ceebf8ff'
    msg.innerHTML += 'Boa tarde'
  } else {
    img.src = 'imagens/noite.jpg'
    document.body.style.background = '#634845'
    msg.innerHTML += 'Boa noite'
  }

}

