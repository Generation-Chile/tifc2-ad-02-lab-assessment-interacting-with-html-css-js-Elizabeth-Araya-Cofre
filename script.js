//cambiar hola mundo por adios
document.getElementById("holamundo").innerHTML = "Adiós"
document.getElementById("holamundo").style.setProperty("color","orange")


const h1agregado = document.createElement("h1")
h1agregado.innerText = "H1 agregado con JS"
h1agregado.addEventListener("click", function() {
    h1agregado.style.color = "brown"
  });
document.body.appendChild(h1agregado)
