// let comision = 70065

// console.log(comision)

// ---------------------------------------
// FUNCIONES

// function suma(a, b){
//     // calculo, validacion
//     return a + b
// }

// console.log (suma(4, 5))

// const restar =(a, b)=> a - b


// console.log(restar(6,3))

// --------------------------------------
// FUNCION ANONIMA

// const saludar = function(nombre){
//     console.log(`Hola ${nombre}!`)
// }

// saludar("Andres")

// ------------------------------------

// CLASES

// Atributos = Caracteristicas
// Metodos() = Acciones

// class persona{
//     constructor(nombre, edad){
//         this.nombre = nombre
//         this.edad = edad
//     }

//     saludar(){
//         console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} anos`)
//     }
// }

// let persona1 = new persona("Juan", 30)

// // console.log(persona1)
// persona1.saludar()

// ---------------------------------
// CREACION UNA CLASE CONTADOR

class contador{
    static cuentaGlobal = 0

    constructor(responsable){
        this.responsable=responsable
        this.cuentaIndividual = 0
    }

    obtenerResponsable(){
        return this.responsable
    }

    obtenerCuentaIndividual(){
        return this.cuentaIndividual
    }

    static obtenerCuentaGlobal(){
        return contador.cuentaGlobal
    }

    contar(){
        this.cuentaIndividual++
        contador.cuentaGlobal++
    }
}

const contador1 = new contador("PersonaA")
console.log(contador1.obtenerResponsable())

contador1.contar()
contador1.contar()
contador1.contar()
contador1.contar()

console.log(contador1.obtenerCuentaIndividual())
console.log(contador.obtenerCuentaGlobal())