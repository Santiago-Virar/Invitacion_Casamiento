// script.js

const fechaBoda = new Date("Feb 12, 2027 18:00:00").getTime();

const intervalo = setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaBoda - ahora;

  if (diferencia <= 0) {
    clearInterval(intervalo);

    document.getElementById("dias").innerText = "00";
    document.getElementById("horas").innerText = "00";
    document.getElementById("minutos").innerText = "00";
    document.getElementById("segundos").innerText = "00";

    return;
  }

  const dias = Math.floor(
    diferencia / (1000 * 60 * 60 * 24)
  );

  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutos = Math.floor(
    (diferencia % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const segundos = Math.floor(
    (diferencia % (1000 * 60)) /
    1000
  );

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;

}, 1000);
