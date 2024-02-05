//Variables (Arriba)

const carrito = document.querySelector('#carrito');//Selecciono el id del carrito
const contenedorCarrito = document.querySelector('#lista-carrito tbody');//Selecciono el id de #lista-carrito y la clase tbody
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')//Selecciono el id de #vaciar-carriro
const listaCursos = document.querySelector('#lista-cursos');//Selecciono el id de #Lista-cursos
//Creando variable de carrito de compras
let articulosCarrito = [];

//Creo varios listeners para cada una de las acciones en una funcion
cargarEventListeners();

function cargarEventListeners(){
    //Cuando agregas un curso presionando el boton "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}



//Funciones (Abajo)

function agregarCurso(e){//Usamos el event bubbling para prevenir errores
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){//Verificar si el usuario le dio click en agregar al carrito 
        const cursoSeleccionado = e.target.parentElement.parentElement //traversing 2 veces para obtener la info
        leerDatosCurso(cursoSeleccionado); // Usamos una variable para no escribir todo eso cada vez que lo ocupemos
    }
}

//Lee el contenido del html al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
    //Creamos un objeto con el contenido del curso actual
    const infoCurso ={
        image: curso.querySelector('img').src, //Me da la imagen
        titulo: curso.querySelector('h4').textContent, //Me da el titulo del curso
        precio : curso.querySelector('.precio span').textContent, //Me da el precio del curso
        id : curso.querySelector('a').getAttribute('data-id'), //getAttribute extrae el id de cada curso en particular
        cantidad : 1
    }
    //agrega elementos al array del carrito con sprey operator para que cuando agregesmos articulos se copien y  no se pierdan
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito)

    //Mando llamar la funcion para agreagarlo al html
    carritoHTML();

}


//Muestra el Carrito de compras en el html 
function carritoHTML(){
    //Limpiar el html 

    limpiarHTML();

    //Recorre el carrito y genera el html
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>
            ${curso.titulo}
        </td>
        `;

        //Agrega el html deel carrito en el tbody
        contenedorCarrito.appendChild(row);
    })

}

//Eliminar los cursos del tbody
function limpiarHTML(){
    //Forma rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}
