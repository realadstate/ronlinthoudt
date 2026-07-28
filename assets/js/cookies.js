/* ==========================================================================
   Ron Linthoudt · cookies.js
   Cookiebanner met Google Consent Mode v2. Dit script laadt in de <head>,
   vóór eventuele Google-scripts: alles staat standaard op 'denied' totdat de
   bezoeker een keuze maakt. De keuze wordt op het apparaat zelf onthouden en
   is aan te passen via de knop 'Cookievoorkeuren' in de voettekst.
   ========================================================================== */
(function () {
  'use strict';

  var SLEUTEL = 'cookie-keuze'; /* 'alles' of 'noodzakelijk' */

  /* Google Consent Mode: standaard alles weigeren, vóór welke tag dan ook */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
    wait_for_update: 500
  });

  function bewaardeKeuze() {
    try { return localStorage.getItem(SLEUTEL); } catch (e) { return null; }
  }
  function bewaar(keuze) {
    try { localStorage.setItem(SLEUTEL, keuze); } catch (e) { }
  }
  function pasToe(keuze) {
    var alles = keuze === 'alles';
    gtag('consent', 'update', {
      ad_storage: alles ? 'granted' : 'denied',
      ad_user_data: alles ? 'granted' : 'denied',
      ad_personalization: alles ? 'granted' : 'denied',
      analytics_storage: alles ? 'granted' : 'denied',
      functionality_storage: alles ? 'granted' : 'denied',
      personalization_storage: alles ? 'granted' : 'denied'
    });
  }

  if (bewaardeKeuze()) pasToe(bewaardeKeuze());

  /* ---------- De banner zelf ---------- */
  var banner = null;

  function kies(keuze) {
    bewaar(keuze);
    pasToe(keuze);
    if (banner) { banner.remove(); banner = null; }
  }

  function toonBanner() {
    if (banner) return;
    banner = document.createElement('div');
    banner.className = 'cookiebanner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookievoorkeuren');
    banner.innerHTML =
      '<h2>Cookies</h2>' +
      '<p>Deze site wil graag anonieme statistieken bijhouden om te zien wat bezoekers bekijken. ' +
      'Kiest u ‘alleen noodzakelijk’, dan worden er geen statistiek- of marketingcookies geplaatst. ' +
      'Meer daarover leest u in de <a href="privacy.html">privacyverklaring</a>.</p>' +
      '<div class="acties">' +
        '<button type="button" class="knop vol" data-keuze="alles">Alles accepteren</button>' +
        '<button type="button" class="knop" data-keuze="noodzakelijk">Alleen noodzakelijk</button>' +
      '</div>';
    banner.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-keuze]');
      if (b) kies(b.getAttribute('data-keuze'));
    });
    document.body.appendChild(banner);
  }

  function klaar() {
    var knoppen = document.querySelectorAll('.cookie-voorkeuren');
    for (var i = 0; i < knoppen.length; i++) {
      knoppen[i].addEventListener('click', toonBanner);
    }
    if (!bewaardeKeuze()) toonBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', klaar);
  } else {
    klaar();
  }
})();
