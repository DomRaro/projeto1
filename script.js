function toggleMode() {
  const html = document.documentElement
  /*
  if(html.classList.contains('light'))
  {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }
  */

  html.classList.toggle("light")

  const img = document.querySelector("#profile img") //pegar a tag img

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto com emogin na cara")
  } else {
    //se tiver sem light mode, adicionar a imagem normal
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute(
      "alt",
      "Foto de Pierry Reis, de copao na mao naquele pique todo."
    )
  }
}
