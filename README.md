# 🫧 Lavandería Ricaurte - Sitio Web

Sitio web mobile-first para Lavandería Ricaurte en Cuenca, Ecuador.

## 📋 Características

- ✅ Diseño mobile-first optimizado para smartphones
- ✅ Scroll suave entre secciones
- ✅ Botón flotante de WhatsApp siempre visible
- ✅ Animaciones de burbujas de fondo
- ✅ Mapa de Google Maps integrado
- ✅ Enlaces directos para llamar y WhatsApp
- ✅ Totalmente responsive (móvil, tablet, desktop)
- ✅ Accesible y rápido

## 🚀 Cómo publicar en GitHub Pages

### Opción 1: Crear repositorio desde cero

1. **Ve a GitHub** → https://github.com/new

2. **Crea un nuevo repositorio:**
   - Repository name: `lavanderia-ricaurte` (o el nombre que prefieras)
   - Description: "Sitio web de Lavandería Ricaurte"
   - ✅ Public (necesario para GitHub Pages gratis)
   - ❌ NO marques "Initialize this repository with a README"
   - Click "Create repository"

3. **En tu computadora, abre la terminal en esta carpeta y ejecuta:**

```bash
git init
git add .
git commit -m "Initial commit - Lavandería Ricaurte website"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/lavanderia-ricaurte.git
git push -u origin main
```

(Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub)

4. **Habilita GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Click en "Settings" (⚙️)
   - En el menú izquierdo, click en "Pages"
   - En "Source", selecciona "main" branch
   - Click "Save"
   - ¡Espera 1-2 minutos y tu sitio estará en línea! 🎉

5. **Tu sitio estará disponible en:**
   ```
   https://TU-USUARIO.github.io/lavanderia-ricaurte/
   ```

### Opción 2: Subir archivos manualmente

1. Crea un repositorio en GitHub (paso 1 y 2 de arriba)
2. En tu repositorio, click en "uploading an existing file"
3. Arrastra estos 3 archivos:
   - `index.html`
   - `styles.css`
   - `script.js`
4. Click "Commit changes"
5. Sigue el paso 4 de arriba para habilitar GitHub Pages

## 📝 Cómo actualizar precios

Cuando tengas los precios, edita el archivo `index.html`:

1. Busca la sección con id `precios` (línea ~173)
2. Reemplaza el contenido del `pricing-body` con una tabla de precios
3. Guarda y haz commit de los cambios

Ejemplo de tabla de precios:

```html
<div class="pricing-body">
    <div class="price-item">
        <span>Servicio completo (lavar + secar + doblar)</span>
        <strong>$X.XX por kg</strong>
    </div>
    <div class="price-item">
        <span>Edredones grandes</span>
        <strong>$X.XX</strong>
    </div>
    <!-- Agrega más precios aquí -->
</div>
```

## 🎨 Personalización

### Cambiar colores

Edita el archivo `styles.css` en las líneas 2-6:

```css
:root {
    --primary-blue: #0066CC;      /* Color azul principal */
    --accent-pink: #E91E63;       /* Color rosa de acento */
}
```

### Cambiar textos

Todos los textos están en `index.html`. Son fáciles de encontrar y editar.

### Agregar más secciones

Copia una sección existente en `index.html` y modifícala según necesites.

## 📱 Contacto

- **WhatsApp:** [0983 092 619](https://wa.me/593983092619)
- **Teléfono:** 2890 291
- **Ubicación:** Av. Antonio Ricaurte y Beningo Vázquez, Ricaurte, Cuenca

## 📄 Estructura de archivos

```
/
├── index.html      # Página principal (contenido)
├── styles.css      # Estilos y diseño
├── script.js       # Funcionalidad (menú, animaciones)
└── README.md       # Este archivo
```

## 🔧 Tecnologías usadas

- HTML5 semántico
- CSS3 con variables custom
- JavaScript vanilla (sin frameworks)
- Google Fonts: Outfit + DM Sans
- Google Maps API

## ⚡ Rendimiento

- Carga rápida: < 2 segundos
- Optimizado para 3G/4G
- Sin dependencias pesadas
- Imágenes optimizadas

## 🌐 Navegadores soportados

- ✅ Chrome (Android/iOS)
- ✅ Safari (iOS)
- ✅ Firefox
- ✅ Edge
- ✅ Samsung Internet

## 📞 Soporte

Si necesitas ayuda para actualizar el sitio, contacta al desarrollador o consulta:
- [Documentación de GitHub Pages](https://docs.github.com/es/pages)
- [Tutorial de Git](https://git-scm.com/book/es/v2)

---

**© 2024 Lavandería Ricaurte** | Cuenca, Ecuador 🇪🇨
