/* ==========================================================================
   SCHILDERIJEN · dit is het enige bestand dat je hoeft aan te passen
   als er een schilderij bijkomt, verkocht is of van prijs verandert.
   --------------------------------------------------------------------------
   Een nieuw schilderij toevoegen? Kopieer een blok tussen { en }, plaats het
   bovenaan de lijst en pas de gegevens aan:

     "titel"      de naam van het schilderij
     "jaar"       "2026"
     "afmetingen" "60 x 80 cm"   (hoogte x breedte)
     "techniek"   "Olieverf op doek"  of  "Olieverf op paneel"
     "prijs"      "1250"  zonder euroteken en zonder punt.  null = geen prijs
     "status"     "te koop"  of  "verkocht"  of  "niet te koop"
     "categorie"  "Stilleven"  of  "Landschap"  of  "Overig"
     "slug"       de bestandsnaam van de foto ZONDER .webp
     "foto"       (optioneel) andere bestandsnaam dan de slug. Vervang je een
                  foto, geef het nieuwe bestand dan een nieuwe naam (bijv.
                  "2023-citroenen-2") en zet die hier; zo zien bezoekers met
                  een oude versie in hun browsergeheugen toch de nieuwe foto.
     "w" en "h"   breedte en hoogte van de foto in pixels

   Zet de foto zelf als .webp in     img/schilderijen/
   en een kleinere versie in         img/schilderijen/klein/
   met exact dezelfde bestandsnaam als de slug.

   Let op: achter elk blok hoort een komma, behalve achter het laatste.
   ========================================================================== */

const SCHILDERIJEN = [
 {
  "titel": "Gele en rode paprika",
  "jaar": "2024",
  "afmetingen": "80 x 60 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "verkocht",
  "categorie": "Stilleven",
  "slug": "2024-gele-en-rode-paprika",
  "foto": "2024-gele-en-rode-paprika-2",
  "w": 1303,
  "h": 1600
 },
 {
  "titel": "Kuifje en de zwarte rotsen",
  "jaar": "2024",
  "afmetingen": "40 x 30 cm",
  "techniek": "Olieverf op paneel",
  "prijs": null,
  "status": "niet te koop",
  "categorie": "Overig",
  "slug": "2024-kuifje-en-de-zwarte-rotsen",
  "w": 829,
  "h": 1100
 },
 {
  "titel": "Citroenen",
  "jaar": "2023",
  "afmetingen": "80 x 80 cm",
  "techniek": "Olieverf op doek",
  "prijs": "995",
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2023-citroenen",
  "foto": "2023-citroenen-2",
  "w": 1100,
  "h": 1100
 },
 {
  "titel": "De Prins",
  "jaar": "2023",
  "afmetingen": "60 x 60 cm",
  "techniek": "Olieverf op doek",
  "prijs": "995",
  "status": "te koop",
  "categorie": "Overig",
  "slug": "2023-de-prins",
  "foto": "2023-de-prins-2",
  "w": 1600,
  "h": 1562
 },
 {
  "titel": "Schapenkop",
  "jaar": "2023",
  "afmetingen": "90 x 90 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "verkocht",
  "categorie": "Overig",
  "slug": "2023-schapenkop",
  "w": 1072,
  "h": 1100
 },
 {
  "titel": "Spaghetti",
  "jaar": "2023",
  "afmetingen": "80 x 120 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "verkocht",
  "categorie": "Stilleven",
  "slug": "2023-spaghetti",
  "w": 1600,
  "h": 1096
 },
 {
  "titel": "Katrol",
  "jaar": "2022",
  "afmetingen": "80 x 120 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "verkocht",
  "categorie": "Stilleven",
  "slug": "2022-katrol",
  "w": 1600,
  "h": 1041
 },
 {
  "titel": "Octo",
  "jaar": "2022",
  "afmetingen": "60 x 60 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2022-octo",
  "foto": "2022-octo-2",
  "w": 1600,
  "h": 1473
 },
 {
  "titel": "Brood",
  "jaar": "2021",
  "afmetingen": "100 x 120 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "verkocht",
  "categorie": "Stilleven",
  "slug": "2021-brood",
  "foto": "2021-brood-2",
  "w": 1600,
  "h": 1241
 },
 {
  "titel": "Kreeft",
  "jaar": "2021",
  "afmetingen": "24 x 30 cm",
  "techniek": "Olieverf op paneel",
  "prijs": "495",
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2021-kreeft",
  "foto": "2021-kreeft-2",
  "w": 1600,
  "h": 1238
 },
 {
  "titel": "Zoetigheid",
  "jaar": "2021",
  "afmetingen": "40 x 90 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2021-zoetigheid",
  "foto": "2021-zoetigheid-2",
  "w": 1600,
  "h": 825
 },
 {
  "titel": "Aardbeien",
  "jaar": "2020",
  "afmetingen": "60 x 90 cm",
  "techniek": "Olieverf op doek",
  "prijs": "1495",
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2020-aardbeien",
  "foto": "2020-aardbeien-2",
  "w": 1600,
  "h": 1052
 },
 {
  "titel": "Kraan",
  "jaar": "2020",
  "afmetingen": "60 x 60 cm",
  "techniek": "Olieverf op doek",
  "prijs": "995",
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2020-kraan",
  "w": 1100,
  "h": 1100
 },
 {
  "titel": "Aardbeien",
  "jaar": "2019",
  "afmetingen": "13 x 18 cm",
  "techniek": "Olieverf op paneel",
  "prijs": "300",
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2019-aardbeien",
  "foto": "2019-aardbeien-2",
  "w": 1600,
  "h": 1118
 },
 {
  "titel": "Bestek",
  "jaar": "2019",
  "afmetingen": "60 x 60 cm",
  "techniek": "Olieverf op doek",
  "prijs": "995",
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2019-bestek",
  "foto": "2019-bestek-2",
  "w": 1600,
  "h": 1413
 },
 {
  "titel": "Haan",
  "jaar": "2019",
  "afmetingen": "18 x 13 cm",
  "techniek": "Olieverf op paneel",
  "prijs": null,
  "status": "verkocht",
  "categorie": "Overig",
  "slug": "2019-haan",
  "foto": "2019-haan-3",
  "w": 1131,
  "h": 1600
 },
 {
  "titel": "Percolator",
  "jaar": "2019",
  "afmetingen": "70 x 50 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "verkocht",
  "categorie": "Stilleven",
  "slug": "2019-percolator",
  "foto": "2019-percolator-2",
  "w": 1308,
  "h": 1600
 },
 {
  "titel": "De geërgerde man",
  "jaar": "2018",
  "afmetingen": "18 x 13 cm",
  "techniek": "Olieverf op paneel",
  "prijs": "300",
  "status": "te koop",
  "categorie": "Overig",
  "slug": "2018-de-geergerde-man",
  "foto": "2018-de-geergerde-man-2",
  "w": 778,
  "h": 1100
 },
 {
  "titel": "Delfts blauwe tulpenvaas",
  "jaar": "2018",
  "afmetingen": "90 x 90 cm",
  "techniek": "Olieverf op doek",
  "prijs": "1495",
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2018-delfts-blauwe-tulpenvaas",
  "foto": "2018-delfts-blauwe-tulpenvaas-2",
  "w": 1100,
  "h": 1100
 },
 {
  "titel": "Rode ui",
  "jaar": "2018",
  "afmetingen": "18 x 13 cm",
  "techniek": "Olieverf op paneel",
  "prijs": "300",
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2018-rode-ui",
  "foto": "2018-rode-ui-2",
  "w": 1526,
  "h": 1600
 },
 {
  "titel": "Oliespuit",
  "jaar": "2017",
  "afmetingen": "60 x 60 cm",
  "techniek": "Olieverf op doek",
  "prijs": "995",
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2017-oliespuit",
  "foto": "2017-oliespuit-2",
  "w": 1600,
  "h": 1570
 },
 {
  "titel": "Percolator",
  "jaar": "2017",
  "afmetingen": "70 x 50 cm",
  "techniek": "Olieverf op doek",
  "prijs": "1250",
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2017-percolator",
  "foto": "2017-percolator-2",
  "w": 1296,
  "h": 1600
 },
 {
  "titel": "Schaakstukken",
  "jaar": "2017",
  "afmetingen": "60 x 40 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "verkocht",
  "categorie": "Stilleven",
  "slug": "2017-schaakstukken",
  "w": 351,
  "h": 550
 },
 {
  "titel": "Stilleven met knoflook",
  "jaar": "2017",
  "afmetingen": "40 x 60 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "verkocht",
  "categorie": "Stilleven",
  "slug": "2017-stilleven-met-knoflook",
  "w": 800,
  "h": 537
 },
 {
  "titel": "Stilleven met oude potten",
  "jaar": "2017",
  "afmetingen": "50 x 70 cm",
  "techniek": "Olieverf op doek",
  "prijs": "1250",
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2017-stilleven-met-oude-potten",
  "w": 751,
  "h": 550
 },
 {
  "titel": "Turkse vaas",
  "jaar": "2017",
  "afmetingen": "90 x 90 cm",
  "techniek": "Olieverf op doek",
  "prijs": "1495",
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2017-turkse-vaas",
  "foto": "2017-turkse-vaas-2",
  "w": 1100,
  "h": 1100
 },
 {
  "titel": "Beugelfles",
  "jaar": "2016",
  "afmetingen": "70 x 50 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "verkocht",
  "categorie": "Stilleven",
  "slug": "2016-beugelfles",
  "foto": "2016-beugelfles-2",
  "w": 1320,
  "h": 1600
 },
 {
  "titel": "Corona",
  "jaar": "2016",
  "afmetingen": "120 x 80 cm",
  "techniek": "Olieverf op doek",
  "prijs": "1495",
  "status": "verkocht",
  "categorie": "Stilleven",
  "slug": "2016-corona",
  "foto": "2016-corona-2",
  "w": 863,
  "h": 1600
 },
 {
  "titel": "Olijfolie flessen",
  "jaar": "2016",
  "afmetingen": "70 x 50 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "verkocht",
  "categorie": "Stilleven",
  "slug": "2016-olijfolie-flessen",
  "foto": "2016-olijfolie-flessen-2",
  "w": 1306,
  "h": 1600
 },
 {
  "titel": "Stilleven met koffiekan",
  "jaar": "2016",
  "afmetingen": "60 x 50 cm",
  "techniek": "Olieverf op doek",
  "prijs": "1250",
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2016-stilleven-met-koffiekan",
  "w": 454,
  "h": 550
 },
 {
  "titel": "Stilleven met mandarijnen",
  "jaar": "2015",
  "afmetingen": "60 x 60 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2015-stilleven-met-mandarijnen",
  "foto": "2015-stilleven-met-mandarijnen-2",
  "w": 1600,
  "h": 1563
 },
 {
  "titel": "Stilleven met knoflook",
  "jaar": "2014",
  "afmetingen": "50 x 69 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "niet te koop",
  "categorie": "Stilleven",
  "slug": "2014-stilleven-met-knoflook",
  "w": 659,
  "h": 550
 },
 {
  "titel": "Stilleven met petroleumkan",
  "jaar": "2014",
  "afmetingen": "60 x 50 cm",
  "techniek": "Olieverf op doek",
  "prijs": "1250",
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2014-stilleven-met-petroleumkan",
  "w": 457,
  "h": 550
 },
 {
  "titel": "Trostomaten",
  "jaar": "2014",
  "afmetingen": "70 x 50 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "verkocht",
  "categorie": "Stilleven",
  "slug": "2014-trostomaten",
  "foto": "2014-trostomaten-2",
  "w": 1600,
  "h": 1569
 },
 {
  "titel": "Bord met uien",
  "jaar": "2013",
  "afmetingen": "50 x 40 cm",
  "techniek": "Olieverf op paneel",
  "prijs": "795",
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2013-bord-met-uien",
  "w": 430,
  "h": 550
 },
 {
  "titel": "Bosuien",
  "jaar": "2012",
  "afmetingen": "20 x 60 cm",
  "techniek": "Olieverf op paneel",
  "prijs": "495",
  "status": "verkocht",
  "categorie": "Stilleven",
  "slug": "2012-bosuien",
  "w": 800,
  "h": 248
 },
 {
  "titel": "Kersen",
  "jaar": "2012",
  "afmetingen": "20 x 40 cm",
  "techniek": "Olieverf op paneel",
  "prijs": null,
  "status": "verkocht",
  "categorie": "Stilleven",
  "slug": "2012-kersen",
  "w": 800,
  "h": 381
 },
 {
  "titel": "Asperges",
  "jaar": "2011",
  "afmetingen": "40 x 60 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "verkocht",
  "categorie": "Stilleven",
  "slug": "2011-asperges",
  "foto": "2011-asperges-2",
  "w": 1600,
  "h": 936
 },
 {
  "titel": "Artisjok",
  "jaar": "2010",
  "afmetingen": "40 x 60 cm",
  "techniek": "Olieverf op doek",
  "prijs": "795",
  "status": "verkocht",
  "categorie": "Stilleven",
  "slug": "2010-artisjok",
  "foto": "2010-artisjok-2",
  "w": 1600,
  "h": 1045
 },
 {
  "titel": "Bloemkool",
  "jaar": "2010",
  "afmetingen": "60 x 60 cm",
  "techniek": "Olieverf op doek",
  "prijs": "995",
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2010-bloemkool",
  "foto": "2010-bloemkool-2",
  "w": 1600,
  "h": 1566
 },
 {
  "titel": "Kreeft",
  "jaar": "2010",
  "afmetingen": "62 x 43 cm",
  "techniek": "Olieverf op papier",
  "prijs": null,
  "status": "verkocht",
  "categorie": "Stilleven",
  "slug": "2010-kreeft",
  "w": 464,
  "h": 550
 },
 {
  "titel": "Paksoi",
  "jaar": "2010",
  "afmetingen": "40 x 60 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "te koop",
  "categorie": "Stilleven",
  "slug": "2010-paksoi",
  "foto": "2010-paksoi-2",
  "w": 1600,
  "h": 1005
 },
 {
  "titel": "De Gaap",
  "jaar": "2009",
  "afmetingen": "90 x 90 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "verkocht",
  "categorie": "Overig",
  "slug": "2009-de-gaap",
  "foto": "2009-de-gaap-2",
  "w": 1088,
  "h": 1100
 },
 {
  "titel": "Snavelbek",
  "jaar": "2009",
  "afmetingen": "90 x 90 cm",
  "techniek": "Olieverf op doek",
  "prijs": "895",
  "status": "te koop",
  "categorie": "Overig",
  "slug": "2009-snavelbek",
  "foto": "2009-snavelbek-3",
  "w": 1600,
  "h": 1577
 },
 {
  "titel": "Het Colosseum",
  "jaar": "2008",
  "afmetingen": "100 x 120 cm",
  "techniek": "Olieverf op doek",
  "prijs": null,
  "status": "verkocht",
  "categorie": "Landschap",
  "slug": "2008-het-colosseum",
  "w": 670,
  "h": 550
 },
 {
  "titel": "De Gehangene",
  "jaar": "2007",
  "afmetingen": "90 x 90 cm",
  "techniek": "Olieverf op doek",
  "prijs": "895",
  "status": "te koop",
  "categorie": "Overig",
  "slug": "2007-de-gehangene",
  "foto": "2007-de-gehangene-2",
  "w": 1038,
  "h": 1100
 }
];
