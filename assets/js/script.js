// Se crea la clase Padre o "super clase"
class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre
        this._direccion = direccion
        this._telefono = telefono
    }
    datosPropietario() {
        return `El nombre del dueño es: <strong>${this._nombre}</strong>, con domicilio en <strong>${this._direccion}</strong> y su número de contacto es: <strong>${this._telefono}</strong>.`
    }
}

// Se crea la clase hija de Propietario
class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono)
        this._tipo = tipo
    }
    setTipo(tipo) {
        this._tipo = tipo
    }
    getTipo() {
        return this._tipo
    }
    datosTipoAnimal() {
        return `El tipo de animal es un: <strong>${this._tipo}</strong>`
    }
}

// Se crea la clase nieta de Propietario, hija de Animal
class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo)
        this._nombreMascota = nombreMascota
        this._enfermedad = enfermedad
    }
    setNombre(nombreMascota) {
        this._nombreMascota = nombreMascota
    }
    getNombre() {
        return this._nombreMascota
    }
    setEnfermedad(enfermedad) {
        this._enfermedad = enfermedad
    }
    getEnfermedad() {
        return this._enfermedad
    }
    datosMascota() {
        return `El nombre de la mascota es <strong>${this._nombreMascota}</strong>, y padece de <strong>${this._enfermedad}</strong>.`
    }
}

// Se seleccionan los elementos del formulario a trabajar
const formulario = document.querySelector('#formulario')

// Se crea el evento para el formulario
const fichaMedica = (event) => {
    event.preventDefault()
    const nombre = document.querySelector("#propietario").value
    const direccion = document.querySelector('#direccion').value
    const telefono = document.querySelector('#telefono').value
    const tipo = document.querySelector('#tipo').value
    const nombreMascota = document.querySelector('#nombreMascota').value
    const enfermedad = document.querySelector('#enfermedad').value
    const resultado = document.querySelector('#resultado')

    // Se genera la condición para imprimir la información dependiendo del tipo de animal seleccionado en el input del form
    if (tipo === "Gato") {
        // Se crea la mascota que recibe todos los atributos, parámetros y argumentos
        const gato = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)

        // Se imprime en el HTML la información obtenida por el usuario
        resultado.innerHTML =
        `
        <li>${gato.datosPropietario()}</li>
        <br>
        <li>${gato.datosTipoAnimal()}. ${gato.datosMascota()}</li>
        `
    } else if (tipo === "Perro") {
        // Se crea la mascota que recibe todos los atributos, parámetros y argumentos
        const perro = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)

        // Se imprime en el HTML la información obtenida por el usuario
        resultado.innerHTML =
        `
        <li>${perro.datosPropietario()}</li>
        <br>
        <li>${perro.datosTipoAnimal()}. ${perro.datosMascota()}</li>
        `
    } else {
        // Se crea la mascota que recibe todos los atributos, parámetros y argumentos
        const conejo = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)

        // Se imprime en el HTML la información obtenida por el usuario
        resultado.innerHTML =
        `
        <li>${conejo.datosPropietario()}</li>
        <br>
        <li>${conejo.datosTipoAnimal()}. ${conejo.datosMascota()}</li>
        `
    }
}

// Se agrega el "escuchador" del evento para que funcione con el botón
formulario.addEventListener('submit', fichaMedica)