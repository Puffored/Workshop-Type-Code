export const configurazione = {
  testo: "s",

  dimensione: 0.8,
  interlinea: 0.1,
  allineamento: "centro",
  percorsoFont: "./assets/InputMonoCondensed-BoldItalic.ttf",

  sensibilitàMicrofonoBase: 1,
  densitàPuntiBase: 3,

  nascondiInterfaccia: true, // per nasconder la schemata iniziale
};

/**
 * Disegna punto
 * Metti qui quello che vuoi disegnare per ogni punto della font!
 *
 * @typedef {Object} Ingredienti
 * @property {number} x - La coordinata x del punto
 * @property {number} y - La coordinata y del punto
 * @property {number} angolo - L'angolo della curva della font in quel punto
 * @property {number} indice - Il numero del punto nella sequenza (0, 1, 2, 3, ...)
 * @property {number} unita - Unita' di misura: corrisponde al 10% della dimensione più piccola della finestra (larghezza o altezza)
 * @property {number} volume - Il volume del microfono - Varia da 0 a 1
 * @property {number} frameCount - Il numero di frame passati dall'avvio del programma
 * @property {number} [alpha] - Device orientation alpha angle (z-axis rotation) - Varia da 0 a 360
 * @property {number} [beta] - Device orientation beta angle (front-to-back tilt) - Varia da -90 a 90
 * @property {number} [gamma] - Device orientation gamma angle (left-to-right tilt) - Varia da -90 a 90
 *
 * @param {Ingredienti} ingredienti
 */
export function disegnaPunto({
  x,
  y,
  angolo,
  indice,
  unita,
  volume,
  frameCount,
  alpha = 10,
  beta = 5,
  gamma = 10,
}) {
  let larghezza = map(volume, 0, 1, 50, 30);

  let indice_carta = (indice + i) % imgs.length;
  let carta = imgs[indice_carta];

  push();
  translate(x, y);

  const dist = map(volume, 0, 1, 0, unita * 4);

  const a = map(noise(x, y), 0, 1, 0, 360);
  // const a = map(random(), 0, 1, 0, 360);
  const tx = dist * sin(a);
  const ty = dist * cos(a);
  translate(tx, ty);

  image(carta, 0, 0, (35.5 * unita) / 30, (48 * unita) / 30);
  pop();
}

let imgs;

/**
 * Carica le risorse necessarie
 * Esempio: carica immagini, suoni, ecc.
 */
export function caricamentoRisorse() {
  imgs = [
    loadImage("./assets/carta.png"),
    loadImage("./assets/carta 1.png"),
    loadImage("./assets/carta 2.png"),
    loadImage("./assets/carta 3.png"),
    loadImage("./assets/carta 4.png"),
    loadImage("./assets/carta 5.png"),
    loadImage("./assets/carta 6.png"),
  ];
}

let i = 0;

/**
 * Imposta le impostazioni iniziali
 * Esempio: impostazioni di frame rate, misura degli angoli, ecc.
 */
export function impostazioni() {
  frameRate(30);
  angleMode(DEGREES);
  rectMode(CENTER);
  imageMode(CENTER);

  setInterval(() => {
    i += 1;
  }, 100);
}

/**
 * Disegna sotto i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sotto(disegnaTesto) {
  background("rgb(16, 69, 16)");

  // [INFO] Rimuovi il commento per disegnare il testo
  //fill("yellow");
  //disegnaTesto();
}

/**
 * Disegna sopra i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sopra(disegnaTesto) {
  // [INFO] Rimuovi il commento per disegnare il testo
  // fill("black");
  // disegnaTesto();
}
