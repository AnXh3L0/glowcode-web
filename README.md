# Glow Cafe – Website Zyrtar

> **Glow Cafe – Shija që ndriçon ditën tuaj.**
> Kafene cilësore në Rrugën Jakov Xoxa 12, Fier. Hapur çdo ditë 07:00–20:00.

## Permbledhje

Ky është website-i statik premium i **Glow Cafe** i ndërtuar me HTML të pastër, CSS dhe pak JavaScript pa varësi. Faqja është në gjuhën shqipe dhe mbështet plotësisht aksesueshmerinë, dizajnin e përgjegjshëm dhe përvojën premium të përdoruesit.

## Struktura e Skedarëve

```
glowcode-web/
├── index.html   – Faqja kryesore (struktura HTML e plotë)
├── style.css    – Stilizimi me palet bardhë + pink, font Inter
├── script.js    – JS i lehtë: nav, tabs, FAQ accordion
└── README.md    – Ky skedar
```

## Seksionet

| Seksioni           | Përshkrimi                                     |
|--------------------|------------------------------------------------|
| **Hero**           | Sfond me gradientë premium, slogan, CTA        |
| **Rreth Nesh**     | Historia e biznesit, visual placeholder        |
| **Menu**           | Tabs (Kafe, Pije, Energjike, Alkol) me çmime  |
| **Shërbimet**      | Kartë me disponueshmërinë e shërbimeve         |
| **Pse Ne?**        | 4 pikat kryesore dalluese                      |
| **Dëshmimet**      | 3 komente demo (të shënuara qartë si demo)     |
| **Orari**          | Orar javor me badge "Hapur"                    |
| **Vendndodhja**    | Detaje kontakti + Google Maps embed            |
| **FAQ**            | 7 pyetje të shpeshta me accordion              |
| **CTA**            | Buton telefoni + link hartës                   |
| **Footer**         | 3 kolona: Brand, Navigim, Kontakt              |

## Aksesueshmëria

- ✅ Skip link ("Kalo te përmbajtja kryesore")
- ✅ Një H1 i vetëm (`<h1>Glow Cafe</h1>`)
- ✅ Landmark-e semantike (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ✅ ARIA roles dhe `aria-expanded` për nav dhe FAQ
- ✅ ARIA `role="tablist"` / `role="tab"` / `role="tabpanel"` për menu
- ✅ `aria-label` për iframe hartës dhe imazhet
- ✅ Focus states të dukshme (`outline` pink me offset)
- ✅ `@media (prefers-reduced-motion: reduce)` – animimet çaktivizohen
- ✅ Kontrast ngjyrash mbi pragun WCAG AA
- ✅ Lundrimi me tastierë (arrow keys tek tabs, Escape për nav)

## Dizajni i Përgjegjshëm

- **Desktop (>1024px):** Layout me shumë kolona, nav i plotë
- **Tablet (≤900px):** 2 kolona për shërbime / testimoniale
- **Mobile (≤720px):** Nav hamburger, 1 kolonë për çdo seksion
- **Mobile i vogël (≤480px):** Menu items të stack-uara

## Personalizimi

### Ngjyrat
Ndrysho variablat CSS në krye të `style.css`:
```css
:root {
  --pink:       #ff4fa3;   /* ngjyrë kryesore pink */
  --pink-dark:  #c21873;   /* pink i errët për tekst */
  --pink-light: #ffe6f2;   /* pink i zbehtë për sfonde */
}
```

### Imazhi i Hero-it
Hero-ja aktualisht përdor gradientë CSS premium. Për të shtuar foto reale:
1. Vendos foton (p.sh. `images/hero-cafe.jpg`) në folder `images/`
2. Ndrysho `.hero-bg` në `style.css`:
```css
.hero-bg {
  background: url("images/hero-cafe.jpg") center/cover no-repeat;
}
```

### Menuja dhe Çmimet
Ndrysho direkt HTML-in brenda seksionit `#menu` te `index.html`.

### Informacioni i Kontaktit
Kërko dhe zëvendëso `0690000000` dhe `Rruga Jakov Xoxa 12` nëse ndryshon.

### Komentet Demo
Zëvendëso blloqet `<blockquote class="testimonial-card">` me komente reale klientësh dhe hiq njoftimin demo.

## Si ta hapësh lokalisht

1. Klono repo-n:
   ```bash
   git clone https://github.com/AnXh3L0/glowcode-web.git
   cd glowcode-web
   ```
2. Hap `index.html` direkt në browser, ose përdor një server të thjeshtë:
   ```bash
   python3 -m http.server 8080
   ```
3. Shko te `http://localhost:8080`

## Teknologjitë e Përdorura

- **HTML5** semantik
- **CSS3** (Custom Properties, Grid, Flexbox, clamp(), backdrop-filter)
- **Vanilla JavaScript** (pa framework, pa dependencies)
- **Inter** font nga Google Fonts
- **SVG** inline icons (pa library shtesë)

## Licenca

© 2026 Glow Cafe. Të gjitha të drejtat e rezervuara.
