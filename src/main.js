//! Singleton Pattern

let counter = 0;
let instance;

class Counter {

    //! Para crear solo una instancia de la clase se usa el patron Singleton 
    constructor() {
        if (instance) {
            //instance = this;
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

// * Evitamos que el singleton se pueda modificar y congelamos la intancia
const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;

//No es singleton ya que se puede instanciar varias veces
// const counter1 = new Counter();
// const counter2 = new Counter();

// console.log("🚀 ~ varias instancias??? :", counter1.getInstance() === counter2.getInstance());