// declaraciones
// ------------




// query de elementos
// -----------

const serviciosList = document.querySelector('#serviciosList')
const botonComprar = document.querySelector('#botoncomprar');
const imgGrande = document.querySelector(".imgGrande");
const textDesc = document.querySelector(".textDesc");
const buttonGrande = document.querySelector(".buttonGrande");


const verCarrito = document.querySelector("#verCarrito");
const carritoConServicios = document.querySelector("#carritoConServicios")

const totalContent = document.querySelector("#totalContent");



// funciones
// --------------
const renderizarDatosServicios = (e) => {
    const idServicioElegido = (e.target.closest('.col').getAttribute('data-id'));
    const servicioElegido = allServicios.find((servicio) => servicio.id == idServicioElegido)

    imgGrande.setAttribute('src', servicioElegido.img);
    textDesc.textContent = servicioElegido.descripcion;

    buttonGrande.setAttribute("data-id", servicioElegido.id)
}

const renderizarListaServicios = () => {
    allServicios.forEach((servicio) => {
        const servicioButton = document.createElement("button");
    servicioButton.classList.add("col");
    servicioButton.setAttribute("data-id", servicio.id);
    servicioButton.innerHTML = `
    <div class="p-3 border bg-light">${servicio.nombre}
        <img class="listaAtencion" src="${servicio.img}" alt="${servicio.alt}">
        <p> ${servicio.precio} $ </p>
    </div>
    `;

    serviciosList.append(servicioButton);
    });
    const serviciosButtons = document.querySelectorAll('.col')
    serviciosButtons.forEach((button) =>{
        button.addEventListener("click", renderizarDatosServicios)
    })
}

const agregarServicioCarrito = (e) => {
    const idServicioElegido = e.target.getAttribute("data-id");
    const servicioElegido = allServicios.find((servicio) => servicio.id == idServicioElegido);

    carrito.push (servicioElegido);
    console.log(carrito);

    localStorage.setItem('carrito', JSON.stringify(carrito));

}

const eliminarServicio = (e) => {
    const idServicioElegido = e.target.closest(".carritoConServicios").getAttribute("data-id");
    carrito = carrito.filter((servicio) => servicio.id != idServicioElegido)
    mostrarCarritoDeCompra()
    
}



const mostrarCarritoDeCompra = () => {
    carritoConServicios.innerHTML = ""
    totalContent.innerHTML = ""
    carrito.forEach((servicio) => {
        const content = document.createElement("div");
        content.classList.add("carritoConServicios");
        content.setAttribute("data-id", servicio.id)
        content.innerHTML = `
        <img class="imgCarrito" src="${servicio.img}">
        <h3>${servicio.nombre}</h3>
        <p>${servicio.precio}$</p>
        `;
    
        carritoConServicios.append(content);

        
    }); 

    const carritoServicio = document.querySelectorAll(".carritoConServicios")
    carritoServicio.forEach((button) => {
        button.addEventListener("click", eliminarServicio)
    })


    const total = carrito.reduce((acc,el) => acc + el.precio, 0)

    const totalBuying = document.createElement("h1");
    totalBuying.classList.add("totalContent")
    totalBuying.innerHTML = `total a pagar: ${total} $`

    totalContent.append(totalBuying)
    
}




// EventListener
// -----------

buttonGrande.addEventListener ("click", agregarServicioCarrito)



verCarrito.addEventListener("click", mostrarCarritoDeCompra)


// ejecuciones
// ---------

renderizarListaServicios();