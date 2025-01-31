# Uso del Patrón Singleton

Este proyecto demuestra el uso del patrón Singleton en JavaScript para gestionar un contador compartido entre dos botones.

## Estructura del Proyecto
## Descripción de Archivos

- `index.html`: Contiene la estructura HTML básica con dos botones.
- `index.js`: Importa los módulos `blueButton.js` y `redButton.js`.
- `src/blueButton.js`: Añade un evento de clic al botón azul que incrementa el contador.
- `src/redButton.js`: Añade un evento de clic al botón rojo que incrementa el contador.
- `src/main.js`: Implementa el patrón Singleton para el contador.
- `styles.css`: Contiene los estilos para los botones y la página.
# Proyecto de Botones con Patrón Singleton

El patrón Singleton se implementa en el archivo [`src/main.js`](src/main.js). Este patrón asegura que solo haya una instancia de la clase `Counter` en toda la aplicación.

### Implementación del Singleton

```javascript
let counter = 0;
let instance;

class Counter {
    constructor() {
        if (instance) {
            throw new Error("Ya existe una instancia de Counter");
        }
        instance = this;
    }

    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        return ++counter;
    }

    decrement() {
        return --counter;
    }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
