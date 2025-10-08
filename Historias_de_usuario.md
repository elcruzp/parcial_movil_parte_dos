# README — Historias de Usuario (App Veterinaria · Ionic React)

**Alcance:** Frontend móvil en Ionic React (sin backend).
**Rutas por módulo:** `/{modulo}` (lista), `/{modulo}/form/:id?` (crear/editar), `/{modulo}/detalle/:id` (detalle).
**Persistencia:** `localStorage` (datos semilla al primer arranque).
**MoSCoW:** **M**ust · **S**hould · **C**ould · **W**on’t

---

## Índice

* [Navegación y base](#navegación-y-base)
* [Usuarios](#usuarios)
* [Mascotas](#mascotas)
* [Productos](#productos)
* [Categorías](#categorías)
* [Tipos de Mascota](#tipos-de-mascota)
* [Persistencia, UX y calidad](#persistencia-ux-y-calidad)

---

## Navegación y base

1. **HU-001 — Menú lateral (M)**
   **Como** usuario **quiero** un menú lateral **para** moverme entre módulos.
   **Criterios:** ítems: Inicio, Usuarios, Mascotas, Productos, Categorías, Tipos de Mascota; al tocar un ítem navega a su ruta.

2. **HU-002 — Home (M)**
   **Como** usuario **quiero** una pantalla de inicio **para** entrar a cualquier módulo.
   **Criterios:** `/` redirige a `/home`; Home muestra accesos a todos los módulos.

3. **HU-003 — Rutas y redirecciones (M)**
   **Como** usuario **quiero** que URLs inválidas redirijan **para** no ver pantallas vacías.
   **Criterios:** cualquier ruta desconocida redirige a `/home`; cada módulo expone **lista**, **form**, **detalle**.

4. **HU-004 — Estados vacíos (S)**
   **Como** usuario **quiero** ver mensaje cuando no hay registros **para** saber qué hacer.
   **Criterios:** en listas vacías se muestra “No hay registros” y botón **Crear**.

---

## Usuarios

5. **HU-010 — Listado de usuarios (M)**
   **Como** admin **quiero** ver una lista **para** consultar datos básicos.
   **Criterios:** `/usuarios` lista tarjetas con **nombre, email, rol, estado**; tap → `/usuarios/detalle/:id`; FAB **+** → `/usuarios/form`.

6. **HU-011 — Crear usuario (M)**
   **Como** admin **quiero** registrar un usuario **para** incorporarlo.
   **Criterios:** form con **nombre, email, rol (Admin/Vet/Asistente), estado (activo/inactivo)**; guardar crea y navega a detalle.

7. **HU-012 — Editar usuario (M)**
   **Como** admin **quiero** editar un usuario **para** mantener datos al día.
   **Criterios:** `/usuarios/form/:id` pre-carga valores; guardar actualiza y navega a detalle.

8. **HU-013 — Detalle de usuario (M)**
   **Como** admin **quiero** ver detalle **para** revisar su información.
   **Criterios:** `/usuarios/detalle/:id` muestra campos completos y botón **Editar**.

9. **HU-014 — Validaciones usuario (M)**
   **Como** admin **quiero** validaciones **para** evitar errores.
   **Criterios:** **nombre** y **email** obligatorios; **email** con formato válido; no guarda si hay errores.

10. **HU-015 — Búsqueda/filtrado en usuarios (C)**
    **Como** admin **quiero** filtrar por texto **para** encontrar rápido.
    **Criterios:** input de búsqueda por **nombre/email** con filtrado en tiempo real.

---

## Mascotas

11. **HU-020 — Listado de mascotas (M)**
    **Como** recepcionista **quiero** ver mascotas **para** gestionarlas.
    **Criterios:** `/mascotas` muestra **nombre, tipo, dueño**; tap → detalle; FAB **+** → form.

12. **HU-021 — Crear mascota (M)**
    **Como** recepcionista **quiero** registrar mascota **para** asociarla a su dueño.
    **Criterios:** form con **nombre**, **tipo** (select TiposMascotas), **dueño** (select Usuarios), **observaciones** opcional; guardar crea y navega a detalle.

13. **HU-022 — Editar mascota (M)**
    **Como** recepcionista **quiero** editar mascota **para** corregir datos.
    **Criterios:** `/mascotas/form/:id` pre-carga valores; guardar actualiza y va a detalle.

14. **HU-023 — Detalle de mascota (M)**
    **Como** veterinario **quiero** ver detalle **para** consultas rápidas.
    **Criterios:** muestra **nombre, tipo, dueño, observaciones** y botón **Editar**.

15. **HU-024 — Validaciones mascota (S)**
    **Como** recepcionista **quiero** validación en el form **para** evitar datos incompletos.
    **Criterios:** `nombre`, `tipo` y `dueño` obligatorios.

---

## Productos

16. **HU-030 — Listado de productos (M)**
    **Como** encargado **quiero** ver productos **para** gestionarlos.
    **Criterios:** `/productos` muestra **nombre, categoría** (y **precio/stock** si aplica); tap → detalle; FAB **+** → form.

17. **HU-031 — Crear/Editar producto (M)**
    **Como** encargado **quiero** crear/editar productos **para** mantener catálogo.
    **Criterios:** form con **nombre**, **categoría** (select), **precio/stock** opcionales; guardar crea/actualiza y redirige a detalle.

18. **HU-032 — Detalle de producto (S)**
    **Como** encargado **quiero** ver detalle **para** revisar especificaciones.
    **Criterios:** `/productos/detalle/:id` muestra campos y botón **Editar**.

---

## Categorías

19. **HU-040 — Listado de categorías (S)**
    **Como** encargado **quiero** ver categorías **para** organizar productos.
    **Criterios:** `/categorias` lista categorías; FAB **+** → form; tap → detalle.

20. **HU-041 — Crear/Editar categoría (S)**
    **Como** encargado **quiero** gestionar categorías **para** mantener taxonomía.
    **Criterios:** form con **nombre**, **descripción** opcional; guardado redirige a detalle.

21. **HU-042 — Detalle de categoría (C)**
    **Como** encargado **quiero** ver detalle de categoría **para** confirmar datos.
    **Criterios:** vista de detalle + **Editar**.

---

## Tipos de Mascota

22. **HU-050 — Listado de tipos de mascota (S)**
    **Como** recepcionista **quiero** ver tipos **para** usarlos en Mascotas.
    **Criterios:** `/tiposmascotas` lista; FAB **+** → form; tap → detalle.

23. **HU-051 — Crear/Editar tipo de mascota (S)**
    **Como** recepcionista **quiero** gestionar tipos **para** mantener opciones.
    **Criterios:** form con **nombre**; guarda y va a detalle.

24. **HU-052 — Detalle de tipo de mascota (C)**
    **Como** recepcionista **quiero** ver detalle del tipo **para** revisar.
    **Criterios:** vista de detalle + **Editar**.

---

## Persistencia, UX y calidad

25. **HU-060 — Persistencia local (M)**
    **Como** usuario **quiero** que los datos persistan **para** no perderlos al cerrar.
    **Criterios:** CRUD lee/escribe en `localStorage`; al recargar, la data permanece.

26. **HU-061 — Datos semilla (S)**
    **Como** usuario **quiero** ver ejemplos iniciales **para** entender la app.
    **Criterios:** carga 2–3 registros por módulo en el primer inicio.

27. **HU-062 — Feedback de acciones (S)**
    **Como** usuario **quiero** confirmaciones **para** saber que se guardó.
    **Criterios:** toast/snackbar al **Guardar/Actualizar/Eliminar**.

28. **HU-063 — Mobile first & accesibilidad (M)**
    **Como** usuario móvil **quiero** una UI usable **para** interactuar cómodamente.
    **Criterios:** uso de `IonPage/Header/Content/Fab`, tamaños táctiles, contraste correcto; navegación consistente.

29. **HU-064 — Búsqueda/filtrado en todas las listas (C)**
    **Como** usuario **quiero** buscar en listas **para** ahorrar tiempo.
    **Criterios:** campo de búsqueda en Usuarios, Mascotas, Productos, Categorías y Tipos.

30. **HU-065 — Pruebas manuales de navegación (S)**
    **Como** equipo **quiero** una checklist de pruebas **para** asegurar rutas y flujos.
    **Criterios:** cubrir redirecciones, CRUD completo y persistencia en cada módulo.
