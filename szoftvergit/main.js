import kavezoUrlap from './Content.js';
import kaveKinalat from './felsorolas.js';
import kaveKinalatSorszam from './szamozott_felsorolas.js';
import kaveKinalatTablazat from './tablazat.js';
import kaveKepHozzaadas from './kep.js';

const init = () => {
  let htmlBody = document.getElementById("app");
  htmlBody.innerHTML = kavezoUrlap();

  let felsorol = document.getElementById("felsorolas");
  felsorol.appendChild(kaveKinalat());

  let sorszam = document.getElementById("sorszam");
  sorszam.appendChild(kaveKinalatSorszam());

  let tablazat = document.getElementById("tablazat");
  tablazat.appendChild(kaveKinalatTablazat());

  let kep = document.getElementById("kep");
  kep.appendChild(kaveKepHozzaadas("./cskave.jpg"));
  kep.appendChild(kaveKepHozzaadas("./cskave2.jpg"));
  kep.appendChild(kaveKepHozzaadas("./cskave3.jpg"));
  kep.appendChild(kaveKepHozzaadas("./cskave4.jpg"));
  kep.appendChild(kaveKepHozzaadas("./cskave5.jpg"));
};

document.addEventListener("DOMContentLoaded", init);
