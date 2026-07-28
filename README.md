# linthoudt.nl — website Ron Linthoudt

Statische website voor kunstschilder Ron Linthoudt. Geen build-stap, geen dependencies:
gewoon HTML, CSS en een beetje JavaScript.

De vormgeving komt uit het design system **Ron Linthoudt** in Claude Design:
mosgroen, beige en crème, met Jost en Spectral als lettertypen. Die staan
lokaal in `assets/fonts/`, dus de site laadt zonder externe verbindingen.

**Live:** https://linthoudt.nl
**Hosting:** Cloudflare Pages (automatische deploy bij elke push naar `main`)

## Snel wijzigen

| Wat | Waar |
|---|---|
| Schilderij toevoegen, prijs of status wijzigen | `data/schilderijen.js` |
| Foto's | `img/schilderijen/` (groot) en `img/schilderijen/klein/` |
| Teksten | de losse `.html`-bestanden |
| Kleuren en lettertypen | bovenin `assets/css/stijl.css` |
| Foto's van Ron | `img/ron-atelier.webp` en `img/ron-portret.webp` |

Uitgebreide uitleg staat in **[LEES-MIJ.md](LEES-MIJ.md)**.

## Lokaal bekijken

Dubbelklik op `index.html`. De site werkt volledig offline — er is geen server nodig.

## Publiceren

```bash
git add .
git commit -m "Schilderij X toegevoegd"
git push
```

Cloudflare bouwt en publiceert automatisch. Binnen een minuut staat het online.

## Cloudflare-instellingen

Dit is een site zonder build-stap. In Cloudflare Pages:

- **Framework preset:** None
- **Build command:** *leeg laten*
- **Build output directory:** `/` (de root van de repo)
