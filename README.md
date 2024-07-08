# Notebook Cards with Bootstrap

![Notebook](https://i.ibb.co/7v3Dg4w/Vite-React-TS.png)

Muestra una lista de notebooks de gama alta con detalles completos y una vista previa de imágenes , los cuales al pasar el cursor meustran el video del equipo en reproduccion automatica.

## Características:

- **Despliegue de tarjetas**: Presenta los notebooks en formato de tarjetas con imagen y video al pasar el cursor; tambien la tarjetas incluyen detalles como titulo, anio y descripcion, store [stock y precio].
- **Interactividad al hacer hover**: Cambia la opacidad para mostrar videos incrustados automáticamente cuando se pasa el mouse sobre la tarjeta.
- **Diseño responsivo**: Adaptado para una visualización óptima en diferentes dispositivos utilizando las utilidades de Bootstrap para un diseño flexible.

## Descripción de archivos:

### `1. Card.css`:

Define estilos CSS adicionales para personalizar las tarjetas de notebook, complementando las utilidades proporcionadas por Bootstrap. Aplica un diseño visual atractivo que incluye gradientes de fondo, bordes, sombras y efectos de texto.

### `2. Card.tsx`:

Componente React que define una tarjeta individual para mostrar detalles de un notebook. Utiliza clases de Bootstrap como `card`, `card-body`, y `img-fluid` para estructurar y estilizar las tarjetas de manera eficiente. Implementa la reproducción automática de videos incrustados al hacer hover sobre la tarjeta.

### `3. ListaNotebook.tsx`:

Componente que muestra un solo elemento de la lista de notebooks en formato de lista. Renderiza el título y el año de cada notebook utilizando las clases de Bootstrap para listas y elementos de texto.

### `4. Notebook.tsx`:

Componente que muestra la lista completa de notebooks utilizando el componente `ListaNotebook` para cada elemento. Incorpora el sistema de rejilla de Bootstrap para alinear y distribuir las tarjetas de manera responsiva.

### `5. NotebookArray.tsx`:

Archivo que contiene los datos estáticos de notebooks en formato de array. Define la estructura de datos para cada notebook, incluyendo detalles como titulo,anio,descripcion,store,imagen y video.

### `6. App.css`:

Estilos CSS globales para la aplicación, complementando y personalizando los estilos de Bootstrap según sea necesario. Configura el tamaño máximo de la página, los márgenes y otros estilos generales que afectan a toda la aplicación.

### `7. App.tsx`:

Componente principal que organiza la estructura de la página. Utiliza componentes de Bootstrap como `container`, `row`, y `col` para manejar el diseño de la página y la disposición de las tarjetas de notebooks.

### `8. index.css`:

Estilos globales que afectan a toda la aplicación. Configura la tipografía, colores de fondo y estilos de enlace para mantener una apariencia consistente en toda la página, integrando las clases de Bootstrap cuando es necesario.

### `9. main.tsx`:

Punto de entrada de la aplicación que renderiza el componente principal `App` en el elemento root del documento HTML. Utiliza `ReactDOM.createRoot` para manejar la renderización de manera eficiente con React concurrent mode.

### `10. index.html`:

Archivo HTML base que sirve como punto de entrada de la aplicación. Contiene el elemento root donde se renderiza la aplicación React y enlaza los recursos necesarios de Bootstrap.

## CARD NOTEBOOKS __ GIF
![Card](https://i.ibb.co/XWygkQn/Vite-React-TS-Perfil-1-Microsoft-Edge-2024-07-08-06-09-59.gif)
