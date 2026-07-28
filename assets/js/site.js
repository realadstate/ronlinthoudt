/* ==========================================================================
   Ron Linthoudt — site.js
   Regelt het mobiele menu, de galerie met filters en de detailweergave.
   Je hoeft hier normaal gesproken niets in aan te passen.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- Mobiel menu ---------- */
  var hamburger = document.querySelector('.hamburger');
  var menu = document.querySelector('.menu');
  if (hamburger && menu) {
    hamburger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- Hulpjes ---------- */
  var werken = (typeof SCHILDERIJEN !== 'undefined') ? SCHILDERIJEN : [];
  var detail = document.getElementById('detail');

  function vlagKlasse(status) {
    if (status === 'te koop') return 'koop';
    if (status === 'verkocht') return 'verkocht';
    return 'niet';
  }
  function vlagTekst(status) {
    if (status === 'te koop') return 'Te koop';
    if (status === 'verkocht') return 'Verkocht';
    return 'Niet te koop';
  }
  function prijsTekst(prijs) {
    if (!prijs) return '';
    return '€ ' + String(prijs).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  function ontsnap(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function kaart(w, index, pad) {
    pad = pad || '';
    return '<li class="werk">' +
      '<button type="button" data-index="' + index + '">' +
        '<span class="lijst">' +
          '<img src="' + pad + 'img/schilderijen/klein/' + ontsnap(w.slug) + '.webp" ' +
            'alt="' + ontsnap(w.titel) + ' — ' + ontsnap(w.techniek) + ', ' + ontsnap(w.jaar) + '" ' +
            'width="' + w.w + '" height="' + w.h + '" loading="lazy" decoding="async">' +
        '</span>' +
        '<h3>' + ontsnap(w.titel) + '</h3>' +
        '<span class="meta">' + ontsnap(w.jaar) + ' · ' + ontsnap(w.afmetingen) + ' · ' + ontsnap(w.techniek) + '</span><br>' +
        '<span class="vlag ' + vlagKlasse(w.status) + '">' + vlagTekst(w.status) +
          (w.prijs ? ' · ' + prijsTekst(w.prijs) : '') + '</span>' +
      '</button></li>';
  }

  /* ---------- Uitgelicht werk op de homepagina ---------- */
  var uitgelicht = document.getElementById('uitgelicht');
  if (uitgelicht && werken.length) {
    var beste = werken.filter(function (w) { return w.status === 'te koop'; }).slice(0, 5);
    if (beste.length < 5) beste = werken.slice(0, 5);
    uitgelicht.innerHTML = beste.map(function (w) {
      return kaart(w, werken.indexOf(w));
    }).join('');
    koppelKaarten(uitgelicht);
  }

  /* ---------- Galerie met filters ---------- */
  var galerie = document.getElementById('galerie');
  var zichtbaar = werken.slice();

  if (galerie) {
    var stand = { categorie: 'Alles', jaar: 'alle', alleenTeKoop: false };

    var jaarKeuze = document.getElementById('jaar');
    if (jaarKeuze) {
      var jaren = werken.map(function (w) { return w.jaar; })
        .filter(function (j, i, a) { return a.indexOf(j) === i; })
        .sort().reverse();
      jaarKeuze.insertAdjacentHTML('beforeend', jaren.map(function (j) {
        return '<option value="' + j + '">' + j + '</option>';
      }).join(''));
    }

    function past(w) {
      if (stand.categorie !== 'Alles' && w.categorie !== stand.categorie) return false;
      if (stand.jaar !== 'alle' && w.jaar !== stand.jaar) return false;
      if (stand.alleenTeKoop && w.status !== 'te koop') return false;
      return true;
    }

    function tekenGalerie() {
      zichtbaar = werken.filter(past);
      var teller = document.getElementById('teller');
      if (teller) {
        teller.textContent = zichtbaar.length === werken.length
          ? werken.length + ' werken'
          : zichtbaar.length + ' van ' + werken.length + ' werken';
      }
      if (!zichtbaar.length) {
        galerie.innerHTML = '<li class="leeg-melding">Geen schilderijen gevonden met deze combinatie.<br>' +
          '<button type="button" class="wis" id="wis-leeg" style="margin-top:10px">Alle filters wissen</button></li>';
        var wisLeeg = document.getElementById('wis-leeg');
        if (wisLeeg) wisLeeg.addEventListener('click', wisAlles);
        return;
      }
      galerie.innerHTML = zichtbaar.map(function (w, i) { return kaart(w, i); }).join('');
      koppelKaarten(galerie);
    }

    function wisAlles() {
      stand = { categorie: 'Alles', jaar: 'alle', alleenTeKoop: false };
      document.querySelectorAll('#categorieen button').forEach(function (b) {
        b.setAttribute('aria-pressed', b.dataset.categorie === 'Alles' ? 'true' : 'false');
      });
      var tk = document.getElementById('te-koop');
      if (tk) tk.setAttribute('aria-pressed', 'false');
      if (jaarKeuze) jaarKeuze.value = 'alle';
      tekenGalerie();
    }

    var categorieen = document.getElementById('categorieen');
    if (categorieen) {
      categorieen.addEventListener('click', function (e) {
        var b = e.target.closest('button');
        if (!b) return;
        stand.categorie = b.dataset.categorie;
        categorieen.querySelectorAll('button').forEach(function (x) {
          x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
        });
        tekenGalerie();
      });
    }
    var teKoopKnop = document.getElementById('te-koop');
    if (teKoopKnop) {
      teKoopKnop.addEventListener('click', function () {
        stand.alleenTeKoop = !stand.alleenTeKoop;
        teKoopKnop.setAttribute('aria-pressed', stand.alleenTeKoop ? 'true' : 'false');
        tekenGalerie();
      });
    }
    if (jaarKeuze) {
      jaarKeuze.addEventListener('change', function () {
        stand.jaar = jaarKeuze.value;
        tekenGalerie();
      });
    }
    var wisKnop = document.getElementById('wis');
    if (wisKnop) wisKnop.addEventListener('click', wisAlles);

    tekenGalerie();

    /* Directe link naar een werk, bijv. werk.html#2017-stilleven-met-oude-potten */
    if (location.hash.length > 1) {
      var gezocht = decodeURIComponent(location.hash.slice(1));
      var pos = zichtbaar.findIndex(function (w) { return w.slug === gezocht; });
      if (pos > -1) opnenDetail(pos);
    }
  }

  function koppelKaarten(houder) {
    houder.querySelectorAll('button[data-index]').forEach(function (b) {
      b.addEventListener('click', function () {
        var lijst = (houder.id === 'galerie') ? zichtbaar : werken;
        opnenDetail(parseInt(b.dataset.index, 10), lijst);
      });
    });
  }

  /* ---------- Detailweergave ---------- */
  var huidigeLijst = werken;
  var huidig = 0;
  var laatsteFocus = null;

  function opnenDetail(index, lijst) {
    if (!detail) { return; }
    huidigeLijst = lijst || zichtbaar;
    if (!huidigeLijst[index]) return;
    huidig = index;
    laatsteFocus = document.activeElement;
    tekenDetail();
    detail.classList.add('aan');
    detail.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var sluit = detail.querySelector('.sluit');
    if (sluit) sluit.focus();
  }
  function sluitDetail() {
    if (!detail) return;
    detail.classList.remove('aan');
    detail.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (history.replaceState) history.replaceState(null, '', location.pathname + location.search);
    if (laatsteFocus) laatsteFocus.focus();
  }
  function schuif(richting) {
    huidig = (huidig + richting + huidigeLijst.length) % huidigeLijst.length;
    tekenDetail();
  }
  function tekenDetail() {
    var w = huidigeLijst[huidig];
    var binnen = detail.querySelector('.detail-binnen');
    var meerdere = huidigeLijst.length > 1;
    binnen.innerHTML =
      '<img src="img/schilderijen/' + ontsnap(w.slug) + '.webp" ' +
        'alt="' + ontsnap(w.titel) + ' — ' + ontsnap(w.techniek) + ', ' + ontsnap(w.afmetingen) + '">' +
      '<div class="detail-info">' +
        '<h2>' + ontsnap(w.titel) + '</h2>' +
        '<div class="jr">' + ontsnap(w.jaar) + ' · ' + ontsnap(w.categorie) + '</div>' +
        '<dl>' +
          '<dt>Afmeting</dt><dd>' + ontsnap(w.afmetingen) + '</dd>' +
          '<dt>Techniek</dt><dd>' + ontsnap(w.techniek) + '</dd>' +
          '<dt>Status</dt><dd>' + vlagTekst(w.status) + '</dd>' +
        '</dl>' +
        (w.prijs
          ? '<div class="prijs">' + prijsTekst(w.prijs) + '</div>' +
            '<p class="toelichting">Excl. lijst · bezichtiging en verkoop uitsluitend op afspraak</p>'
          : (w.status === 'te koop'
              ? '<p class="toelichting">Prijs op aanvraag.</p>'
              : '<p class="toelichting">Dit werk is niet beschikbaar. Vergelijkbaar werk in opdracht is bespreekbaar.</p>')) +
        '<a class="knop vol" href="contact.html?werk=' + encodeURIComponent(w.titel + ' (' + w.jaar + ')') + '">Afspraak aanvragen</a>' +
        (meerdere ? '<p class="toelichting" style="margin-top:22px">' + (huidig + 1) + ' van ' + huidigeLijst.length + ' — blader met de pijltjestoetsen</p>' : '') +
      '</div>';
    if (history.replaceState) history.replaceState(null, '', '#' + w.slug);
  }

  if (detail) {
    detail.querySelector('.sluit').addEventListener('click', sluitDetail);
    var vorige = detail.querySelector('.vorige');
    var volgende = detail.querySelector('.volgende');
    if (vorige) vorige.addEventListener('click', function () { schuif(-1); });
    if (volgende) volgende.addEventListener('click', function () { schuif(1); });
    detail.addEventListener('click', function (e) { if (e.target === detail) sluitDetail(); });
    document.addEventListener('keydown', function (e) {
      if (!detail.classList.contains('aan')) return;
      if (e.key === 'Escape') sluitDetail();
      if (e.key === 'ArrowLeft') schuif(-1);
      if (e.key === 'ArrowRight') schuif(1);
    });
  }

  /* ---------- Contactformulier: schilderij voorselecteren ---------- */
  var werkVeld = document.getElementById('werk');
  if (werkVeld && werken.length) {
    var teKoop = werken.filter(function (w) { return w.status === 'te koop'; });
    werkVeld.insertAdjacentHTML('beforeend', teKoop.map(function (w) {
      var naam = w.titel + ' (' + w.jaar + ')';
      return '<option value="' + ontsnap(naam) + '">' + ontsnap(naam) + '</option>';
    }).join(''));
    var uitUrl = new URLSearchParams(location.search).get('werk');
    if (uitUrl) {
      var gevonden = Array.prototype.slice.call(werkVeld.options).some(function (o) {
        if (o.value === uitUrl) { werkVeld.value = uitUrl; return true; }
        return false;
      });
      if (!gevonden) {
        werkVeld.insertAdjacentHTML('beforeend', '<option value="' + ontsnap(uitUrl) + '" selected>' + ontsnap(uitUrl) + '</option>');
      }
    }
  }
})();
