function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  /* mudando a imagem do avatar*/
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "Images/avatar-light.png")
  } else {
    img.setAttribute("src", "Images/avatar.png")
  }
}
