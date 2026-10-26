# Portafolio DGuz20 (Gustavo)
Sitio estático multipágina (HTML, CSS, JS), bilingüe ES/EN, sin dependencias ni build.

## Ejecutar en local
    python3 -m http.server 8000   # abre http://localhost:8000

## Desplegar en GitHub Pages
1. Crea un repositorio en GitHub (p. ej. `portfolio`) y sube todo el contenido de esta carpeta a la rama `main`.
2. En el repositorio: Settings → Pages → Source: "Deploy from a branch" → rama `main`, carpeta `/ (root)` → Save.
3. Tu sitio estará en `https://TU-USUARIO.github.io/portfolio/` (tarda ~1 minuto).

## Personalizar
- Enlaces sociales: pie de página de cada `.html` (busca `TODO`). Son suposiciones: verifícalos.
- Proyectos: `projects.html`, reemplaza las tarjetas marcadas con `TODO`.
- Textos ES/EN: `js/i18n.js`. Colores: variables al inicio de `css/style.css`.
- La terminal soporta: help, whoami, about, skills, tools, ctf, projects, social, ls, lang, theme, clear.
