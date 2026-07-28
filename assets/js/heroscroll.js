/* ==========================================================================
   Ron Linthoudt — heroscroll.js
   Regelt de scrollanimatie van de hero op de homepagina: de schilderijen
   waaieren uit (--s), het logo verschijnt (--l) en de navigatie schuift in
   beeld (--nav). Je hoeft hier normaal gesproken niets in aan te passen.
   ========================================================================== */
(function () {
  'use strict';

  var baan = document.querySelector('.hero-baan');
  if (!baan) return;

  /* Bij 'minder beweging' in het besturingssysteem: geen animatie.
     De stylesheet toont dan meteen de eindstand. */
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var wortel = document.documentElement;
  var midden = document.querySelector('.hero-midden');
  var kop = document.querySelector('.kop-vast');

  function klem(v) { return Math.min(1, Math.max(0, v)); }

  function bijwerken() {
    var top = baan.getBoundingClientRect().top;
    var lengte = baan.offsetHeight - window.innerHeight;
    var p = klem(-top / Math.max(1, lengte));
    var s = 1 - Math.pow(1 - klem(p / 0.75), 3);      /* uitwaaieren, met uitloop */
    var l = klem((p - 0.34) / 0.30);                  /* logo faden */
    var nav = klem((p - 0.80) / 0.15);                /* navigatie inschuiven */
    wortel.style.setProperty('--s', s.toFixed(4));
    wortel.style.setProperty('--l', l.toFixed(4));
    wortel.style.setProperty('--nav', nav.toFixed(4));
    /* Onzichtbare delen ook onbereikbaar maken voor muis en toetsenbord */
    if (midden) midden.classList.toggle('uit', l <= 0.01);
    if (kop) kop.classList.toggle('uit', nav <= 0.01);
  }

  window.addEventListener('scroll', bijwerken, { passive: true });
  window.addEventListener('resize', bijwerken);
  bijwerken();
})();
