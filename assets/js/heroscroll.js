/* ==========================================================================
   Ron Linthoudt · heroscroll.js
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
  var atelier = document.querySelector('.atelier');

  function klem(v) { return Math.min(1, Math.max(0, v)); }
  function verzacht(v) { return 1 - Math.pow(1 - v, 3); }

  function bijwerken() {
    var top = baan.getBoundingClientRect().top;
    var lengte = baan.offsetHeight - window.innerHeight;
    var p = klem(-top / Math.max(1, lengte));
    var s = verzacht(klem(p / 0.55));                 /* uitwaaieren, met uitloop */
    var l = klem((p - 0.26) / 0.24);                  /* logo faden */
    var nav = klem((p - 0.52) / 0.13);                /* navigatie inschuiven */
    var uit = klem((p - 0.68) / 0.32);                /* hero wijkt terug onder de sectie */
    wortel.style.setProperty('--s', s.toFixed(4));
    wortel.style.setProperty('--l', l.toFixed(4));
    wortel.style.setProperty('--nav', nav.toFixed(4));
    wortel.style.setProperty('--uit', uit.toFixed(4));
    /* Onzichtbare delen ook onbereikbaar maken voor muis en toetsenbord */
    if (midden) midden.classList.toggle('uit', l <= 0.01);
    if (kop) kop.classList.toggle('uit', nav <= 0.01);
    /* Overgang naar de ateliersectie: foto en paneel schuiven in beeld
       zodra de sectie de onderkant van het scherm binnenkomt */
    if (atelier) {
      var a = verzacht(klem((window.innerHeight - atelier.getBoundingClientRect().top) /
        (window.innerHeight * 0.65)));
      wortel.style.setProperty('--a', a.toFixed(4));
    }
  }

  window.addEventListener('scroll', bijwerken, { passive: true });
  window.addEventListener('resize', bijwerken);
  bijwerken();
})();
