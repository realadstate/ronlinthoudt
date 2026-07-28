/* ==========================================================================
   Ron Linthoudt — lijsten.js
   De lijstentester: kies een schilderij, een lijst, de lijstbreedte en de
   wandkleur en zie het resultaat direct aan de wand. De schilderijgegevens
   komen uit data/schilderijen.js; wil je andere werken in de tester, pas
   dan alleen de lijst SLUGS hieronder aan.
   ========================================================================== */
(function () {
  'use strict';

  var wand = document.getElementById('tester-wand');
  if (!wand || typeof SCHILDERIJEN === 'undefined') return;

  /* De werken in de tester, op slug uit data/schilderijen.js */
  var SLUGS = ['2023-citroenen', '2023-de-prins', '2022-octo',
               '2021-kreeft', '2020-aardbeien', '2020-kraan'];
  var werken = SLUGS.map(function (slug) {
    return SCHILDERIJEN.filter(function (w) { return w.slug === slug; })[0];
  }).filter(Boolean);

  var LIJSTEN = [
    { naam: 'zonder lijst',  uitleg: 'doek op spieraam',        kleur: null,      sponning: null,                   glans: false },
    { naam: 'zwart slank',   uitleg: 'vlak profiel, mat',       kleur: '#1E1C19', sponning: 'rgba(255,255,255,.10)', glans: false },
    { naam: 'grafiet',       uitleg: 'vlak profiel, halfmat',   kleur: '#4A4844', sponning: 'rgba(255,255,255,.12)', glans: false },
    { naam: 'klassiek goud', uitleg: 'geprofileerd, bladgoud',  kleur: '#C79242', sponning: 'rgba(30,28,25,.35)',    glans: true },
    { naam: 'oud brons',     uitleg: 'geprofileerd, gepatineerd', kleur: '#B5762F', sponning: 'rgba(30,28,25,.35)',  glans: true },
    { naam: 'warm eiken',    uitleg: 'geolied hout',            kleur: '#6B5A3E', sponning: 'rgba(30,28,25,.28)',    glans: false },
    { naam: 'licht essen',   uitleg: 'blank hout',              kleur: '#C2A981', sponning: 'rgba(30,28,25,.22)',    glans: false },
    { naam: 'terracotta',    uitleg: 'gelakt profiel',          kleur: '#9A4A2E', sponning: 'rgba(30,28,25,.30)',    glans: false },
    { naam: 'mosgroen',      uitleg: 'gelakt profiel',          kleur: '#4E7350', sponning: 'rgba(30,28,25,.28)',    glans: false },
    { naam: 'diep mosgroen', uitleg: 'gelakt profiel, mat',     kleur: '#2E4430', sponning: 'rgba(255,255,255,.10)', glans: false },
    { naam: 'olijf',         uitleg: 'gelakt profiel, mat',     kleur: '#8A8F5A', sponning: 'rgba(30,28,25,.26)',    glans: false },
    { naam: 'museumwit',     uitleg: 'vlak profiel, mat',       kleur: '#EFEDE4', sponning: 'rgba(30,28,25,.18)',    glans: false }
  ];

  var WANDEN = [
    { naam: 'crème',         kleur: '#F5F2E6' },
    { naam: 'gebroken wit',  kleur: '#FBFAF7' },
    { naam: 'beige',         kleur: '#E7DCC6' },
    { naam: 'warm zand',     kleur: '#DED6C2' },
    { naam: 'olijf',         kleur: '#8A8F5A' },
    { naam: 'mosgroen',      kleur: '#4E7350' },
    { naam: 'diep mosgroen', kleur: '#2E4430' },
    { naam: 'terracotta',    kleur: '#9A4A2E' }
  ];

  var stand = { werk: 0, lijst: 3, breedte: 6, wand: 0 };

  var lijstEl = document.getElementById('tester-lijst');
  var doekEl = document.getElementById('tester-doek');
  var titelEl = document.getElementById('tester-titel');
  var metaEl = document.getElementById('tester-meta');
  var lijstnaamEl = document.getElementById('tester-lijstnaam');
  var breedteEl = document.getElementById('tester-breedte');
  var schuif = document.getElementById('tester-schuif');
  var minis = document.getElementById('tester-minis');
  var lijsten = document.getElementById('tester-lijsten');
  var wanden = document.getElementById('tester-wanden');
  var cta = document.getElementById('tester-cta');

  /* ---------- Keuzeknoppen opbouwen ---------- */
  werken.forEach(function (w, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', w.titel + ' (' + w.jaar + ')');
    var s = document.createElement('span');
    s.style.backgroundImage = 'url("img/schilderijen/klein/' + w.slug + '.webp")';
    b.appendChild(s);
    b.addEventListener('click', function () { stand.werk = i; teken(); });
    minis.appendChild(b);
  });

  LIJSTEN.forEach(function (l, i) {
    var b = document.createElement('button');
    b.type = 'button';
    var staal = document.createElement('span');
    staal.className = 'tester-staal' + (l.kleur ? '' : ' leeg') + (l.glans ? ' glans' : '');
    if (l.kleur) staal.style.backgroundColor = l.kleur;
    var tekst = document.createElement('span');
    var naam = document.createElement('span');
    naam.className = 'naam';
    naam.textContent = l.naam;
    var uitleg = document.createElement('span');
    uitleg.className = 'uitleg';
    uitleg.textContent = l.uitleg;
    tekst.appendChild(naam);
    tekst.appendChild(uitleg);
    b.appendChild(staal);
    b.appendChild(tekst);
    b.addEventListener('click', function () { stand.lijst = i; teken(); });
    lijsten.appendChild(b);
  });

  WANDEN.forEach(function (k, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.title = k.naam;
    b.setAttribute('aria-label', 'Wandkleur ' + k.naam);
    b.style.backgroundColor = k.kleur;
    b.addEventListener('click', function () { stand.wand = i; teken(); });
    wanden.appendChild(b);
  });

  schuif.addEventListener('input', function () {
    stand.breedte = Number(schuif.value);
    teken();
  });

  /* ---------- Alles bijwerken na een keuze ---------- */
  function drukKnoppen(houder, actief) {
    var knoppen = houder.querySelectorAll('button');
    for (var i = 0; i < knoppen.length; i++) {
      knoppen[i].setAttribute('aria-pressed', i === actief ? 'true' : 'false');
    }
  }

  function teken() {
    var w = werken[stand.werk];
    var l = LIJSTEN[stand.lijst];
    var breedte = l.kleur ? stand.breedte : 0;

    lijstEl.style.padding = breedte + 'px';
    lijstEl.style.backgroundColor = l.kleur || 'transparent';
    lijstEl.classList.toggle('glans', l.glans);
    doekEl.style.backgroundImage = 'url("img/schilderijen/klein/' + w.slug + '.webp")';
    doekEl.style.aspectRatio = w.w + ' / ' + w.h;
    doekEl.style.boxShadow = l.sponning ? 'inset 0 0 0 1px ' + l.sponning : 'none';
    doekEl.setAttribute('aria-label', w.titel + ' — ' + w.techniek + ', ' + w.jaar);
    wand.style.backgroundColor = WANDEN[stand.wand].kleur;

    titelEl.textContent = w.titel;
    metaEl.textContent = [w.techniek, w.afmetingen, w.jaar].join(' · ');
    lijstnaamEl.textContent = l.kleur ? l.naam + ' · ' + l.uitleg : 'zonder lijst · doek op spieraam';
    breedteEl.textContent = l.kleur ? stand.breedte + ' mm profiel' : 'geen lijst gekozen';
    schuif.disabled = !l.kleur;

    /* Het contactformulier neemt de keuze over via het werk-veld */
    var keuze = w.titel + ' (' + w.jaar + ')' +
      ' · lijst: ' + (l.kleur ? l.naam + ', ' + stand.breedte + ' mm' : 'zonder lijst') +
      ' · wand: ' + WANDEN[stand.wand].naam;
    cta.href = 'contact.html?werk=' + encodeURIComponent(keuze);

    drukKnoppen(minis, stand.werk);
    drukKnoppen(lijsten, stand.lijst);
    drukKnoppen(wanden, stand.wand);
  }

  teken();
})();
