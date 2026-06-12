# Subir a GitHub y publicar en Vercel — guía paso a paso

Repositorio: **ninaspro_rov_valpo**
Carpeta del proyecto: `ROV niñas pro/ninaspro_rov_valpo`

---

## PASO 1 — Borrar el git viejo (una sola vez)

1. Abre la app **Terminal** (Cmd+Espacio, escribe "Terminal", Enter).
2. Copia y pega esta línea tal cual y dale Enter:

```bash
cd ~/Desktop/"ROV niñas pro"/ninaspro_rov_valpo && rm -rf .git
```

No debería mostrar nada. Listo.

---

## PASO 2 — Subir a GitHub con GitHub Desktop (lo más fácil)

1. Si no la tienes, instala **GitHub Desktop**: https://desktop.github.com (Download → instalar → abrir → inicia sesión con tu cuenta de GitHub).
2. En GitHub Desktop: menú **File → Add Local Repository…**
3. Pincha **Choose…** y selecciona la carpeta:
   `Escritorio / ROV niñas pro / ninaspro_rov_valpo`
4. Te dirá que no es un repositorio git → pincha el enlace **"create a repository"**.
5. En "Name" deja **ninaspro_rov_valpo** → botón **Create Repository**.
6. Arriba a la derecha pincha **Publish repository**.
   - Déjalo marcado "Keep this code private" si lo quieres privado.
   - Pincha **Publish repository**.

Ya está en GitHub. ✅

> Cada vez que cambies algo después: en GitHub Desktop escribe un resumen abajo a la
> izquierda → **Commit to main** → **Push origin**. Vercel se actualiza solo.

---

## PASO 3 — Publicar en Vercel

1. Entra a https://vercel.com e inicia sesión **con GitHub** (botón "Continue with GitHub").
2. Pincha **Add New… → Project**.
3. Busca **ninaspro_rov_valpo** en la lista y pincha **Import**.
   - Si no aparece, pincha "Adjust GitHub App Permissions" y dale acceso al repo.
4. No cambies nada (Vercel reconoce Next.js solo). Pincha **Deploy**.
5. Espera ~1 minuto. Te dará una dirección tipo `ninaspro-rov-valpo.vercel.app`. ✅

---

## PASO 4 (opcional) — Dominio propio

En el proyecto de Vercel → **Settings → Domains** → agrega `rov.ninaspro.cl`
y sigue las instrucciones de DNS (un registro CNAME).

---

## Antes de mostrarla al público

- Pega la **URL del formulario** en `lib/course.ts` (campo `links.formulario`).
  El botón "Inscripciones" se activa solo cuando dejes de tener `"#"` ahí.
- Cambia el recuadro de **foto grupal** por una foto real en `app/page.tsx`
  (guárdala en `public/`, horizontal, mínimo 1200×900).
