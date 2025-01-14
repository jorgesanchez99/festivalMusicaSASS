# Festival de Música

Este proyecto es una página web diseñada para un festival de música. El objetivo principal es proporcionar información sobre el evento, incluyendo la programación, los artistas, y la venta de entradas. Es parte del curso **"Desarrollo Web Completo con HTML5, CSS3, JS, AJAX, PHP y MySQL"** de Udemy.

## Tecnologías Utilizadas

El proyecto emplea las siguientes tecnologías y herramientas:

- **HTML5**: Estructura de la página web.
- **CSS3**: Estilización del contenido.
- **JavaScript**: Interactividad en la página.
- **Gulp**: Automatización de tareas.
- **Sass**: Preprocesador CSS para una mejor organización y productividad.

## Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/jorgesanchez99/festivalMusicaSASS.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd festivalMusica
   ```

3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

4. Ejecuta el siguiente comando para compilar los estilos de Sass a CSS y habilitar la recarga automática durante el desarrollo:
   ```bash
   npm run dev
   ```

## Uso de Gulp y Sass

El proyecto utiliza **Gulp** para automatizar tareas comunes y **Sass** para preprocesar los estilos CSS.

### Gulp

Gulp se encarga de las siguientes tareas:
- Compilación de archivos Sass a CSS.
- Minificación de archivos para optimizar el rendimiento.
- Recarga automática del navegador al detectar cambios.
- Manejo de errores durante el desarrollo.

El archivo `gulpfile.js` contiene la configuración de estas tareas. Además, se ha definido un script en el archivo `package.json` para ejecutar Gulp en modo de desarrollo:
```json
"scripts": {
  "dev": "gulp dev"
}
```

### Sass

Los estilos se escriben en **Sass** para aprovechar funcionalidades como variables, mixins y anidación.  
- Los archivos Sass están ubicados en el directorio `src/scss`.
- Los estilos procesados se generan en el directorio `build/css`.

