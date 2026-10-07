# Nexora Web

Sitio estático de Nexora para presentar servicios digitales, mostrar proyectos y recibir solicitudes de cotización.

## Contenido

- `index.html`: página principal, secciones de servicios, proyectos, preguntas frecuentes y formulario.
- `styles.css`: diseño adaptable a celulares y computadores, incluida la navegación móvil.
- `script.js`: menú, animaciones de entrada, año del pie de página y envío de solicitudes por WhatsApp, Telegram o correo.
- `404.html`: página de respaldo que redirige al inicio cuando se publica en GitHub Pages.
- `assets/`: imágenes de marca, portada y vista previa para redes sociales.

## Ver el sitio localmente

Abre `index.html` en un navegador. No se necesita instalar dependencias ni ejecutar un proceso de compilación.

## Publicar en GitHub Pages

El repositorio asociado es [JersonEstrada20/NexoraWeb](https://github.com/JersonEstrada20/NexoraWeb). Para publicar el sitio:

1. En GitHub, abre **Settings → Pages**.
2. En **Build and deployment**, elige **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta `/(root)`, y guarda.
4. GitHub mostrará la URL pública cuando termine la publicación. Para este repositorio suele ser `https://jersonestrada20.github.io/NexoraWeb/`.

La disponibilidad de GitHub Pages depende de la visibilidad del repositorio y del plan de GitHub. También se puede usar otro servicio de hosting estático.

## Formulario de cotización

El formulario prepara un mensaje con los datos ingresados y permite abrir WhatsApp, compartirlo mediante Telegram o redactar un correo. Es una página estática: no almacena ni envía los datos a un servidor. Los enlaces y datos de contacto se configuran en `index.html` y `script.js`.

## Mantenimiento

- Mantén los archivos del sitio en la raíz para que GitHub Pages los publique directamente.
- Comprueba que cada imagen de `assets/` tenga una referencia en `index.html` o `styles.css` antes de agregarla o conservarla.
- No incluyas contraseñas, tokens ni datos privados en este repositorio.
