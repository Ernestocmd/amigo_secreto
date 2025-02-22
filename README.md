# Amigo secreto
Una sencilla aplicación web para sortear al "Amigo Secreto" de forma aleatoria.

## Características

- **Ingreso de nombres:** Agrega nombres mediante un campo de texto y un botón.  
- **Validaciones:** Impide ingresar nombres vacíos o duplicados.  
- **Sorteo aleatorio:** Realiza el sorteo con un efecto visual que simula una ruleta.  
- **Actualización dinámica:** El nombre sorteado se elimina de la lista para futuros sorteos.

## Tecnologías Utilizadas

- **HTML5:** Estructura y semántica de la página.
- **CSS3:** Estilizado de la interfaz, utilizando variables y animaciones.
- **JavaScript:** Lógica para el manejo de eventos, manipulación del DOM y el sorteo.

## Estructura del Proyecto
<pre>
.
├── index.html
├── style.css
├── app.js
└── assets
    ├── amigo-secreto.png
    └── play_circle_outline.png
</pre>



## Instalación y Uso

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
2. **Abrir el proyecto:**
   - Navega a la carpeta del proyecto y abre el archivo index.html en tu navegador web.
3. **Uso de la aplicación:**
   - Ingresa un nombre en el campo de texto y presiona el botón "Añadir" o la tecla Enter.
   - Visualiza los nombres en la lista.
   - Cuando tengas al menos dos nombres, haz clic en el botón "Sortear amigo" para realizar el sorteo.
   - El nombre seleccionado se mostrará con una animación y se eliminará de la lista.
