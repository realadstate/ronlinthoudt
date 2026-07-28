# Website Ron Linthoudt — beheerhandleiding

Deze site is gewoon een map met bestanden. Geen database, geen inlog, geen updates.
Wat je hier ziet is precies wat er online staat.

---

## Wat staat waar?

```
index.html            de homepagina
werk.html             de galerie met alle schilderijen
over.html             over Ron
exposities.html       overzicht exposities
contact.html          contactformulier
privacy.html          privacyverklaring
bedankt.html          pagina na het versturen van het formulier
404.html              pagina die verschijnt bij een verkeerde link

data/
  schilderijen.js     >> ALLE SCHILDERIJEN STAAN HIER <<

img/schilderijen/         de grote foto's
img/schilderijen/klein/   dezelfde foto's, kleiner (voor de galerie)

assets/css/stijl.css  alle kleuren, letters en vormgeving
assets/js/site.js     de filters en de detailweergave
assets/favicon.svg    het icoontje in de browsertab

sitemap.xml           voor Google
robots.txt            voor Google
_headers              instellingen voor Cloudflare
_redirects            oude links van de Exto-site opvangen
README.md             uitleg die GitHub op de projectpagina toont
.gitignore            bestanden die niet mee de repo in gaan
```

Voor dagelijks beheer heb je er maar **twee** nodig: `data/schilderijen.js` en de map `img/schilderijen/`.

---

## Een schilderij toevoegen

### Stap 1 — de foto klaarmaken

Je hebt twee versies van dezelfde foto nodig, allebei in **WebP**-formaat:

| Waar | Formaat | Bestandsnaam |
|---|---|---|
| `img/schilderijen/` | lange zijde max. 1600 px | `2026-bloemkool.webp` |
| `img/schilderijen/klein/` | lange zijde max. 800 px | `2026-bloemkool.webp` |

De bestandsnaam noemen we de **slug**: jaartal, streepje, titel in kleine letters met streepjes in plaats van spaties. Geen hoofdletters, geen accenten, geen komma's.

Foto's omzetten kan gratis op [squoosh.app](https://squoosh.app) — sleep de foto erin, kies rechts "WebP", zet de kwaliteit rond 80, stel de breedte in en download.

### Stap 2 — het schilderij in de lijst zetten

Open `data/schilderijen.js` in een gewone teksteditor (Kladblok, TextEdit, VS Code). Bovenaan staat uitleg. Daaronder begint de lijst. Kopieer een blok, plak het op de plek waar je het wilt hebben, en pas de gegevens aan:

```javascript
 {
  "titel": "Bloemkool",
  "jaar": "2026",
  "afmetingen": "60 x 60 cm",
  "techniek": "Olieverf op doek",
  "prijs": "995",
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2026-bloemkool",
  "w": 1400,
  "h": 1400
 },
```

Let op deze dingen:

- **`prijs`** zonder euroteken en zonder punt: `"995"`, niet `"€ 995,-"`. Geen prijs? Zet er `null` (zonder aanhalingstekens).
- **`status`** moet exact een van deze drie zijn: `"te koop"`, `"verkocht"`, `"niet te koop"`.
- **`categorie`** moet exact een van deze drie zijn: `"Stilleven"`, `"Landschap"`, `"Overig"`.
- **`slug`** moet exact overeenkomen met de bestandsnaam van de foto, zonder `.webp`.
- **`w` en `h`** zijn de breedte en hoogte van de **grote** foto in pixels. Klopt niet helemaal? Niet erg, het voorkomt alleen dat de pagina schokt tijdens het laden.
- Achter elk blok hoort een **komma**, behalve achter het allerlaatste.

### Stap 3 — controleren

Open `index.html` door erop te dubbelklikken. De site opent in je browser en werkt volledig, ook zonder internet. Zie je het nieuwe schilderij? Dan is het goed.

Zie je een lege galerie, dan zit er waarschijnlijk een komma te veel of te weinig in `schilderijen.js`. Plak de inhoud in [jsonlint.com](https://jsonlint.com) om te zien waar.

### Stap 4 — online zetten

Deze map is een Git-repository die gekoppeld is aan Cloudflare Pages. Publiceren gaat via een push:

```bash
git add .
git commit -m "Bloemkool toegevoegd"
git push
```

Gebruik je GitHub Desktop, dan is het: wijzigingen verschijnen links in beeld → onderin een omschrijving typen → **Commit to main** → **Push origin**.

Cloudflare merkt de push op en zet de nieuwe versie binnen ongeveer een minuut online. Je kunt de voortgang volgen bij **Workers & Pages → je project → Deployments**.

---

## Een schilderij als verkocht markeren

Zoek het werk op in `data/schilderijen.js` en verander twee regels:

```javascript
  "prijs": null,
  "status": "verkocht",
```

Het werk blijft in de galerie staan (dat is goed — het laat zien wat Ron kan), maar krijgt een grijs "Verkocht"-label en verdwijnt uit het filter "Alleen te koop" en uit de keuzelijst van het contactformulier.

---

## Een prijs wijzigen

Zoek het werk op en pas alleen `"prijs"` aan. Geen euroteken, geen punt: `"1250"` wordt op de site automatisch `€ 1.250`.

---

## Teksten aanpassen

Alle teksten staan gewoon in de HTML-bestanden. Open het bestand in een teksteditor, zoek de zin, en pas hem aan. Alles tussen `<` en `>` moet je met rust laten; de tekst daartussen mag je vrij wijzigen.

| Wat | In welk bestand |
|---|---|
| Biografie van Ron | `over.html` |
| Exposities | `exposities.html` |
| Tekst op de homepagina | `index.html` |
| E-mailadres | in **alle** bestanden — zoek op `ron@linthoudt.nl` |
| Privacyverklaring, KvK-nummer | `privacy.html` |

---

## Kleuren of lettertype aanpassen

Alles staat bovenaan in `assets/css/stijl.css`, in het blok dat begint met `:root{`. Verander bijvoorbeeld `--terra:#9A4A2E;` in een andere kleurcode en de accentkleur van de hele site wijzigt mee.

---

## Contactformulier instellen

Het formulier in `contact.html` staat klaar maar is nog niet gekoppeld. Zie het stappenplan, stap 5 — het kost drie minuten.

---

## Iets teruggedraaid krijgen

Omdat alles in Git staat, is niets definitief. Ging er iets mis?

- **In Cloudflare:** ga naar **Workers & Pages → je project → Deployments**, zoek een eerdere versie en klik op **Rollback to this deployment**. Binnen een minuut staat de oude versie er weer.
- **In Git:** `git revert HEAD` draait de laatste commit terug; daarna pushen.

---

## Portretfoto toevoegen

Op `index.html` en `over.html` staat nu een leeg vak met de tekst "Hier komt een portretfoto van Ron in het atelier". Zet de foto als `img/ron-linthoudt.webp` neer en vervang dat blok:

```html
<div class="portret">
  <span style="font-size:30px;line-height:1" aria-hidden="true">◻</span>
  <span>Hier komt een portretfoto van Ron in het atelier</span>
</div>
```

door:

```html
<img src="img/ron-linthoudt.webp" alt="Ron Linthoudt in zijn atelier"
     style="border:1px solid var(--lijn);width:100%">
```

Op `over.html` is het pad hetzelfde.

---

## Wat je vooral níét moet doen

- Bestandsnamen van foto's veranderen zonder ook de `slug` aan te passen — dan verdwijnt de afbeelding.
- Hoofdletters of spaties in bestandsnamen gebruiken. Cloudflare is daar streng in.
- De aanhalingstekens of komma's in `schilderijen.js` weghalen.
- Foto's rechtstreeks vanaf de camera uploaden. Een foto van 8 MB maakt de site traag; zet hem eerst om naar WebP. Bovendien wordt de repo dan onnodig zwaar — en Git vergeet nooit iets, ook niet als je het bestand later weghaalt.
- Originele camerabestanden (RAW, TIFF) in de repo zetten. Die staan in `.gitignore`; bewaar ze gewoon lokaal of in de cloud.
