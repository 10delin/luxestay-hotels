# LuxeStay Hotels

¡Bienvenido a LuxeStay Hotels! Un proyecto que utiliza Vite y React para crear una aplicación web que te permite explorar habitaciones y hacer reservas.

## Enlace a la Página Web

Visita la [página web desplegada en Vercel](https://luxestay-hotels.vercel.app/) para ver en acción la aplicación.

## Características Destacadas

- Proyecto creado eficientemente con Vite y React.
- Organización de la interfaz de usuario con componentes React.
- Diseño responsivo que se adapta a dispositivos móviles.
- Gestión del estado global y peticiones a la API mediante Redux Toolkit.
- Navegación fluida con [React Router](https://reactrouter.com/).
- Formularios manejados eficazmente con [Formik](https://formik.org/).
- Datos obtenidos desde [esta URL](https://raw.githubusercontent.com/10delin/luxestay-hotels.json/main/roomsApi.json) en GitHub.
- Pruebas implementadas con [Cypress](https://www.cypress.io/) para garantizar la calidad.
- Automatización de pruebas, análisis lint y formato de commits con [Husky](https://typicode.github.io/husky/#/).
- Estilos limpios y legibles creados con [Styled Components](https://styled-components.com/).

## Nuevas Funcionalidades

### Reservas Locales y Visualización de Reservas

Se ha mejorado la experiencia de usuario al agregar una nueva funcionalidad que permite a los usuarios guardar sus reservas de habitaciones localmente. Ahora, cuando un usuario completa el formulario de reserva, la reserva se guarda en el almacenamiento local del navegador, lo que garantiza que la información de la reserva esté disponible incluso después de cerrar la página.
Además, hemos introducido una página adicional llamada "Bookings", donde los usuarios pueden ver un listado de sus reservas anteriores. Esto ofrece una visión rápida y conveniente de las habitaciones reservadas en el pasado, lo que puede ser útil para referencia o seguimiento.

### Validación Avanzada de Formularios

Para mejorar la calidad de las reservas y asegurarnos de que los datos ingresados sean precisos, se ha implementado una validación exhaustiva en el formulario de reserva. Cada campo del formulario, incluyendo nombre, apellidos, email y país, es ahora validado en tiempo real. Si un usuario intenta enviar el formulario con datos incorrectos o faltantes, se mostrarán mensajes de error específicos junto a los campos relevantes. Esto ayuda a evitar errores comunes y brinda una experiencia más fluida y amigable al usuario.

## Cómo Empezar

Sigue estos pasos para comenzar:

1. Clona el repositorio: `git clone https://github.com/10delin/luxestay-hotels.git`
2. Navega al directorio del proyecto: `cd luxestay-hotels`
3. Instala las dependencias: `npm install`
4. Inicia el servidor de desarrollo: `npm run dev`

## Comandos

- Iniciar servidor de desarrollo: `npm run dev`
- Construir versión de producción: `npm run build`
- Previsualizar versión de producción: `npm run preview`
- Ejecutar pruebas Cypress: `npm run cy:run`
- Abrir interfaz gráfica de Cypress: `npm run cy:open`
- Configuración automatizada de Husky: `npm run prepare` y `npm run husky`

## Páginas

- **Home**: Muestra un listado de habitaciones y permite su selección.
- **Bookings**: Muestra reservas anteriores realizadas por usuarios.
- **Form**: Resume la elección de habitación y presenta un formulario de nombre, apellidos, email y país.
- **Reservation**: Resumen de la reserva con datos del formulario y la habitación elegida.

## Dependencias Principales

- [@reduxjs/toolkit](https://redux-toolkit.js.org/): Gestión de estado global.
- [formik](https://formik.org/): Manejo de formularios.
- [Cypress](https://www.cypress.io/): Pruebas automatizadas.
- [Husky](https://typicode.github.io/husky/#/): Automatización de pruebas y commits.
- [Styled Components](https://styled-components.com/): Estilos reutilizables.

## Créditos

Proyecto creado por [Antonio Delage Cruzado](https://github.com/10delin).
