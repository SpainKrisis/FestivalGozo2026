const concierto = new Date("2026-07-11T00:00:00"); // cambia a túa data/hora

function actualizarContaAtras() {
  const agora = new Date();
  const comezaConcerto = concierto - agora; // milisegundos que faltan
  if (comezaConcerto <= 0) {
    console.log("¡El concierto ha comenzado!");
    clearInterval(id);
    return;
  }

  // Dividir entre 1000, 60, 60, 24 converte milisegundos → segundos → minutos → horas → días

  const segundos = Math.floor(comezaConcerto / 1000) % 60;
  const minutos = Math.floor(comezaConcerto / 1000 / 60) % 60;
  const horas = Math.floor(comezaConcerto / 1000 / 60 / 60) % 24;
  const dias = Math.floor(comezaConcerto / 1000 / 60 / 60 / 24);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;

  console.log(
    `Faltan ${dias}d ${horas}h ${minutos}m ${segundos}s para o concerto`
  );
}

actualizarContaAtras(); // unha vez ao inicio
const id = setInterval(actualizarContaAtras, 1000); // logo cada segundo


var modal = document.getElementById("Modal");
var btn = document.getElementById("button");

btn.onclick = function() {
  modal.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}