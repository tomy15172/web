// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Adornadita con canas", time: 18.5 },
  { text: "Por esos caminos vas", time: 23 },
  { text: "Disimulando sus penas", time: 28 },
  { text: "Es mi madre, mi mamá", time: 32 },
  { text: "Es mi madre, mi mamá", time: 36 },
  { text: "Le dio de todo la vida", time: 41 },
  { text: "Dolor y felicidad", time: 45 },
  { text: "Nueve partos en el campo", time: 49 },
  { text: "Viven siete en la ciudad", time: 53 },
  { text: "De mi madre, mi mama", time: 57 },
  { text: "Acompáñame guitarra", time: 62 },
  { text: "Está brotando un cantar", time: 66 },
  { text: "A la mujer que más quiero", time: 71 },
  { text: "A mi madre, mi mama", time: 74 },
  { text: "A mi madre, mi mama", time: 78 },
  { text: "Cuando yo la conocí", time: 86 },
  { text: "Peinaba negros cabellos", time: 88 },
  { text: "Andaba ligeros pasos", time: 90 },
  { text: "Tus ojos tenían destellos", time: 93 },
  { text: "Como soles sin ocaso", time: 96 },
  { text: "Como soles sin ocaso", time: 99 },
  { text: "Y adornadita con canas", time: 105 },
  { text: "Por esos caminos vas", time: 110 },
  { text: "Mientras su fruto le canta", time: 114 },
  { text: "Que Dios te guarde mamá", time: 118 },
  { text: "Que Dios te guarde mamá", time: 122 },
  { text: "Acompáñame guitarra", time: 125 },
];

// Animar las letras
function updateLyrics() {
  var currentTime = audio.currentTime;

  var currentLine = lyricsData.find(
    (line) => currentTime >= line.time && currentTime < line.time + 3
  );

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Actualizar cada 100 ms para precisión
setInterval(updateLyrics, 100);

// Ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);
