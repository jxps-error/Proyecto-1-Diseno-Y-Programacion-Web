# 🧑‍🍳 CookPlanner - Versión HTML/CSS/JavaScript

Plataforma web para planificar comidas, descubrir recetas y gestionar presupuestos.

## 📁 Archivos Incluidos

- **index.html** - Página de login y registro
- **home.html** - Página principal con buscador y filtros
- **recipe-detail.html** - Detalle de receta con ingredientes, costos y reseñas
- **planner.html** - Planificador semanal con lista de compras
- **chef-dashboard.html** - Panel para que los chefs creen y gestionen recetas
- **admin-dashboard.html** - Panel de administración con métricas y gestión de categorías
- **data.js** - Funciones de datos y autenticación (localStorage)
- **styles.css** - Estilos globales de la aplicación
- **README.md** - Este archivo

## 🚀 Cómo Usar

### Opción 1: Abrir directamente en el navegador

1. Descarga todos los archivos en la misma carpeta
2. Abre `index.html` en tu navegador web
3. Usa las cuentas de prueba para iniciar sesión

### Opción 2: Servidor local (recomendado)

Si tienes Python instalado:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Si tienes Node.js instalado:

```bash
# Instalar http-server (solo una vez)
npm install -g http-server

# Ejecutar servidor
http-server
```

Luego abre http://localhost:8000 en tu navegador.

## 👥 Cuentas de Prueba

### Usuario Normal
- Email: user@cookplanner.com
- Contraseña: user123
- Permisos: Ver recetas, agregar a favoritos, planificar comidas

### Chef
- Email: chef@cookplanner.com
- Contraseña: chef123
- Permisos: Todo lo de usuario + crear/editar/eliminar recetas

### Administrador
- Email: admin@cookplanner.com
- Contraseña: admin123
- Permisos: Todo lo anterior + gestión de categorías, métricas del sistema

## 📱 Funcionalidades por Pantalla

### 1. Login/Registro (index.html)
- Iniciar sesión con email y contraseña
- Registrarse como nuevo usuario
- Validación de formularios
- Cuentas de prueba pre-configuradas

### 2. Página Principal (home.html)
- Búsqueda de recetas por nombre, ingredientes o etiquetas
- Filtros avanzados:
  - Por categoría (Pasta, Ensaladas, Mexicana, etc.)
  - Por dificultad (Fácil, Medio, Difícil)
  - Por presupuesto máximo (slider de $5 a $100)
- Categorías populares con contador de recetas
- Grid de recetas con imagen, rating, costo y tiempo

### 3. Detalle de Receta (recipe-detail.html)
- Información completa de la receta
- Lista de ingredientes con precios individuales
- Costo total y costo por porción
- Instrucciones paso a paso
- Sistema de favoritos
- Agregar al planificador semanal
- Sistema de reseñas y calificaciones (5 estrellas)
- Visualización de todas las reseñas

### 4. Planificador Semanal (planner.html)
- Calendario de 7 días (Lunes a Domingo)
- Agregar/eliminar recetas por día
- Cálculo automático de presupuesto semanal
- Lista de compras consolidada:
  - Ingredientes agrupados
  - Cantidades totales
  - Precios totales
- Descargar lista de compras en .txt
- Resumen de presupuesto:
  - Total semanal
  - Promedio por día
  - Total de recetas planificadas
  - Visualización de días planificados

### 5. Panel de Chef (chef-dashboard.html)
**Solo accesible para usuarios con rol "chef"**

- Estadísticas personales:
  - Total de recetas creadas
  - Calificación promedio
  - Total de reseñas recibidas
- Crear nuevas recetas con:
  - Información básica (título, categoría, dificultad, etc.)
  - Lista de ingredientes con precios
  - Cálculo automático de costo total y por porción
  - Instrucciones paso a paso
  - Etiquetas personalizadas
- Editar recetas existentes
- Eliminar recetas
- Vista de todas las recetas creadas

### 6. Panel de Administración (admin-dashboard.html)
**Solo accesible para usuarios con rol "admin"**

- Métricas del sistema:
  - Total de recetas
  - Chefs activos
  - Total de reseñas
  - Rating promedio
- Gráficos y estadísticas:
  - Recetas por categoría (gráfico de barras)
  - Top 5 recetas mejor calificadas
  - Distribución por dificultad
  - Distribución de presupuestos
- Gestión de categorías:
  - Crear nuevas categorías con nombre e icono
  - Editar categorías existentes
  - Eliminar categorías (las recetas se mantienen)
- Moderación:
  - Lista de todas las recetas con su estado
  - Reseñas recientes del sistema
  - Información de chefs por receta

## 💾 Almacenamiento de Datos

La aplicación usa **localStorage** del navegador para guardar:

- Usuario autenticado actual
- Recetas creadas
- Categorías personalizadas
- Favoritos del usuario
- Planificador semanal
- Reseñas y calificaciones

**Nota:** Los datos se almacenan en tu navegador localmente. Si borras el caché o localStorage, perderás los datos personalizados (pero no los datos mock iniciales).

## 🎨 Personalización

### Cambiar colores principales
Edita `styles.css` y busca:
- `#f97316` (naranja principal)
- `#dc2626` (rojo)
- Reemplaza con tus colores preferidos

### Agregar más recetas mock
Edita `data.js` y agrega objetos al array `mockRecipes`

### Agregar más categorías
Edita `data.js` y agrega objetos al array `mockCategories`

## 🔧 Estructura del Código

### data.js
- `mockUsers`: Usuarios de prueba
- `mockRecipes`: Recetas iniciales
- `mockCategories`: Categorías iniciales
- Funciones de autenticación (`login`, `register`, `logout`)
- Funciones de gestión de datos (`getRecipes`, `addRecipe`, etc.)
- Funciones de localStorage para persistencia

### styles.css
- Reset y estilos base
- Sistema de navbar
- Sistema de cards
- Sistema de formularios
- Sistema de botones
- Sistema de grid responsive
- Badges, alerts, tabs, modales
- Tablas y utilidades
- Media queries para responsive

### Cada archivo HTML
- Estructura semántica HTML5
- Navbar con navegación
- JavaScript inline para funcionalidad específica
- Llamadas a funciones de `data.js`
- Manejo de eventos del DOM
- Renderizado dinámico con template strings

## 📝 Notas Importantes

1. **Compatibilidad:** Funciona en todos los navegadores modernos (Chrome, Firefox, Safari, Edge)

2. **Responsive:** Diseño adaptable a móviles, tablets y escritorio

3. **Sin dependencias:** No requiere librerías externas (jQuery, React, etc.)

4. **Nivel:** Código principiante-intermedio con comentarios claros

5. **Seguridad:** Este es un proyecto de demostración. NO usar passwords reales o datos sensibles.

## 🐛 Solución de Problemas

**Las imágenes no cargan:**
- Las imágenes usan URLs de Unsplash. Requiere conexión a internet.

**Los datos se pierden al recargar:**
- Verifica que tu navegador permita localStorage
- No uses modo incógnito/privado

**No puedo crear recetas como Usuario:**
- Debes iniciar sesión como Chef o crear una cuenta nueva y modificar el rol en `data.js`

**Error al abrir archivos:**
- Asegúrate de que todos los archivos estén en la misma carpeta
- Usa un servidor local en lugar de file://

## 📚 Recursos de Aprendizaje

Si quieres aprender más sobre las tecnologías usadas:

- **HTML:** https://developer.mozilla.org/es/docs/Web/HTML
- **CSS:** https://developer.mozilla.org/es/docs/Web/CSS
- **JavaScript:** https://developer.mozilla.org/es/docs/Web/JavaScript
- **localStorage:** https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

## 📄 Licencia

Este proyecto es de código abierto y puede ser usado libremente para aprendizaje y proyectos personales.

---

¡Disfruta cocinando con CookPlanner! 🍳👨‍🍳
