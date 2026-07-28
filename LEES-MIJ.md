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
assets/fonts/         de lettertypen Jost en Spectral (staan op de site zelf)
assets/favicon.svg    het icoontje in de browsertab

img/ron-atelier.webp  foto van Ron in het atelier (homepagina)
img/ron-portret.webp  foto van Ron aan het werk (over-pagina)

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

Alles staat bovenaan in `assets/css/stijl.css`, in het blok dat begint met `:root{`. De huisstijl komt uit het design system in Claude Design:

| Naam | Kleur | Waar |
|---|---|---|
| `--moss` | `#4E7350` | groen: knoppen, banden, voettekst |
| `--moss-deep` | `#2E4430` | donkerder groen bij hover |
| `--beige` | `#E7DCC6` | vlakken en kaarten |
| `--cream` | `#F5F2E6` | achtergrond van elke pagina |
| `--ochre` | `#C79242` | accent: streepjes, jaartallen |
| `--ink` | `#33312C` | tekst |

Verander één waarde en de hele site volgt. Lettertypen zijn **Jost** (alles) en **Spectral** (citaten); die staan in `assets/fonts/` op de site zelf, dus er wordt geen verbinding met Google gemaakt.

---

## Contactformulier instellen

Het formulier in `contact.html` staat klaar maar is nog niet gekoppeld. Zie het stappenplan, stap 5 — het kost drie minuten.

---

## Iets teruggedraaid krijgen

Omdat alles in Git staat, is niets definitief. Ging er iets mis?

- **In Cloudflare:** ga naar **Workers & Pages → je project → Deployments**, zoek een eerdere versie en klik op **Rollback to this deployment**. Binnen een minuut staat de oude versie er weer.
- **In Git:** `git revert HEAD` draait de laatste commit terug; daarna pushen.

---

## Foto's van Ron vervangen

Er staan twee foto's van Ron op de site:

| Bestand | Waar | Verhouding |
|---|---|---|
| `img/ron-atelier.webp` | grote foto op de homepagina | vierkant werkt het best |
| `img/ron-portret.webp` | op de over-pagina | staand, ongeveer 4:5 |

Wil je een andere foto? Zet hem om naar WebP (lange zijde ±1400 px) en overschrijf het bestand met dezelfde naam. Dan hoef je verder niets aan te passen.

---

## Wat je vooral níét moet doen

- Bestandsnamen van foto's veranderen zonder ook de `slug` aan te passen — dan verdwijnt de afbeelding.
- Hoofdletters of spaties in bestandsnamen gebruiken. Cloudflare is daar streng in.
- De aanhalingstekens of komma's in `schilderijen.js` weghalen.
- Foto's rechtstreeks vanaf de camera uploaden. Een foto van 8 MB maakt de site traag; zet hem eerst om naar WebP. Bovendien wordt de repo dan onnodig zwaar — en Git vergeet nooit iets, ook niet als je het bestand later weghaalt.
- Originele camerabestanden (RAW, TIFF) in de repo zetten. Die staan in `.gitignore`; bewaar ze gewoon lokaal of in de cloud.
