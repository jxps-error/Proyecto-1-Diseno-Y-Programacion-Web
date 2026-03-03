# CookPlanner - Plataforma de Gestión Culinaria

## Descripción del Proyecto

CookPlanner es una plataforma digital colaborativa orientada a la gestión y descubrimiento de recetas culinarias. El sistema permite a distintos tipos de usuarios crear, buscar, personalizar y planificar recetas, facilitando la organización de comidas según presupuesto, preferencias dietéticas e ingredientes disponibles.

El proyecto se desarrolla como parte del curso SOFT-06 Diseño y Programación Web de la Universidad CENFOTEC, aplicando tecnologías frontend (HTML, CSS y JavaScript) bajo un enfoque iterativo basado en retroalimentación simulada del cliente.

La plataforma integra funcionalidades sociales, planificación de menús y control presupuestario, ofreciendo una experiencia interactiva, estructurada y accesible para la comunidad culinaria.

---

## Alcance del Proyecto

El sistema incluirá:

- Registro e inicio de sesión de usuarios.
- Creación y gestión de recetas con cálculo automático de presupuesto.
- Búsqueda avanzada por nombre, ingredientes y presupuesto.
- Sistema de favoritos, calificaciones y comentarios.
- Planificador semanal con cálculo automático de costos.
- Generación automática de lista de compras.
- Control de roles (Chef, Usuario Regular, Administrador).
- Cumplimiento de accesibilidad WCAG 2.1 nivel AA.

---

## Tipos de Usuario

### Chef / Experto Culinario
- Crea y gestiona recetas.
- Edita contenido propio.
- Participa en la comunidad culinaria.

### Usuario Regular
- Busca recetas.
- Guarda recetas en favoritos.
- Califica y comenta.
- Planifica menús semanales.

### Administrador del Sistema
- Gestiona categorías.
- Modera contenido.
- Supervisa el correcto funcionamiento del sistema.

---

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

---

## Estrategia de Ramas (Branches)

- `main` → versión estable del proyecto.
- `develop` → integración de funcionalidades.
- `feature/nombre-funcionalidad` → desarrollo de nuevas características.
- `fix/nombre-error` → corrección de errores.

---

## Convención de Commits

Se utilizará la siguiente estructura:

- `new:` Nueva funcionalidad
- `fixed:` Corrección de errores
- `style:` Cambios visuales o de formato
- `docs:` Cambios en documentación
- `refactor:` Mejora de código sin cambiar funcionalidad
- `test:` Pruebas

Ejemplos:
- new: agregar buscador por ingredientes
- fixed: corregir cálculo de presupuesto
- style: mejorar diseño del dashboard
- docs: actualizar README

---

# Requerimientos Funcionales

## Gestión de Usuarios

**RF-01:** El sistema debe permitir el registro de usuarios capturando obligatoriamente:
- Nombre completo (mínimo 3 caracteres).
- Correo electrónico en formato válido y único.
- Contraseña con mínimo 8 caracteres, incluyendo al menos una letra y un número.

**RF-02:** El sistema debe validar que el correo electrónico y la contraseña coincidan exactamente con los registros almacenados para permitir el acceso.

**RF-03:** El sistema debe mostrar un mensaje de error genérico cuando las credenciales no coincidan con los registros almacenados.

---

## Gestión de Recetas

**RF-04:** El sistema debe permitir al Chef crear una receta registrando:
- Nombre de la receta.
- Lista de ingredientes (mínimo 1).
- Cantidad por ingrediente.
- Costo estimado por ingrediente.
- Tipo de receta.
- Nivel de dificultad (Fácil, Intermedio o Avanzado).
- Instrucciones paso a paso (mínimo 1 paso).

**RF-05:** El sistema debe calcular automáticamente el costo total de la receta sumando los costos individuales de los ingredientes ingresados.

**RF-06:** El sistema debe permitir modificar los datos de una receta previamente registrada por su autor.

---

## Búsqueda y Filtrado

**RF-07:** El sistema debe permitir buscar recetas por coincidencia parcial o exacta del nombre.

**RF-08:** El sistema debe permitir ingresar una lista de ingredientes disponibles y mostrar recetas que contengan al menos uno de los ingredientes ingresados.

**RF-09:** El sistema debe permitir filtrar recetas cuyo costo total sea menor o igual al presupuesto ingresado.

---

## Interacción del Usuario

**RF-10:** El sistema debe permitir a un usuario autenticado guardar recetas en su lista de favoritos.

**RF-11:** El sistema debe permitir calificar recetas con valores enteros entre 1 y 5.

**RF-12:** El sistema debe permitir publicar comentarios asociados a una receta.

---

## Planificador de Comidas

**RF-13:** El sistema debe permitir seleccionar recetas y asignarlas a días específicos de una semana calendario.

**RF-14:** El sistema debe calcular automáticamente el costo total del menú semanal sumando el costo de las recetas seleccionadas.

**RF-15:** El sistema debe generar automáticamente una lista consolidada de ingredientes basada en las recetas seleccionadas.

---

# Requerimientos No Funcionales

## Rendimiento

**RNF-01:** El tiempo de carga inicial no debe superar los 2 segundos en una red de 5 Mbps.

**RNF-02:** El sistema debe responder a búsquedas en menos de 1 segundo para el 95% de las solicitudes.

**RNF-03:** El sistema debe soportar al menos 1,000 usuarios concurrentes manteniendo tiempos de respuesta menores a 2 segundos.

---

## Seguridad

**RNF-04:** Las contraseñas deben almacenarse utilizando un algoritmo de cifrado hash seguro.

**RNF-05:** El sistema debe restringir funcionalidades según el rol del usuario autenticado.

---

## Accesibilidad (WCAG 2.1 Nivel AA)

**RNF-06:** El sistema debe garantizar una relación de contraste mínima de 4.5:1 entre texto y fondo.

**RNF-07:** Todas las funcionalidades deben ser accesibles mediante navegación exclusiva con teclado.

**RNF-08:** Todas las imágenes deben incluir texto alternativo descriptivo (atributo alt).

---

## Compatibilidad

**RNF-09:** La aplicación debe funcionar correctamente en las últimas dos versiones estables de Chrome, Edge y Firefox.