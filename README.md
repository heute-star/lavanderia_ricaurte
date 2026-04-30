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

---

**© 2026 Lavandería Ricaurte** | Cuenca, Ecuador 🇪🇨
