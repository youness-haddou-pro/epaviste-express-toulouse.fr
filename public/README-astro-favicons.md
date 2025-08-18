# Astro Favicon & PWA

Placez tous les fichiers dans le dossier public/ de votre projet.

## Inclure dans src/layouts/Base.astro (ou dans votre layout principal)

<!-- Favicon (clair/sombre) -->
<link rel="icon" href="/favicon-light.ico" media="(prefers-color-scheme: light)">
<link rel="icon" href="/favicon-dark.ico" media="(prefers-color-scheme: dark)">

<!-- Tailles PNG -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-light-32.png" media="(prefers-color-scheme: light)">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-dark-32.png" media="(prefers-color-scheme: dark)">

<!-- SVG -->
<link rel="icon" type="image/svg+xml" href="/favicon-light.svg" media="(prefers-color-scheme: light)">
<link rel="icon" type="image/svg+xml" href="/favicon-dark.svg" media="(prefers-color-scheme: dark)">

<!-- PWA -->
<link rel="manifest" href="/manifest.json">

<!-- iOS -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

## Notes

- Safari iOS utilise apple-touch-icon.png et ignore manifest.json pour l’icône sur l’écran d’accueil.
- Android/Chrome utilise les icônes déclarées dans manifest.json.
- Gardez les noms de fichiers tels quels ou mettez à jour les chemins dans <link>/manifest si vous les renommez.
