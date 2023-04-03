// Defino estilos personalizados para el sweet alert
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'main-btn twhite btn',
        cancelButton: 'alert-btn twhite btn'
    },
    buttonsStyling: false
})

// Traer productos desde products
import {productsList} from './products.js';

// Array que almacena los productos del carrito
let cartItems = [];

// Crear las variables para los botones con un scope global (cuando se creen los productos se les reasignara)
let deleteButton = document.getElementsByClassName('delete');
let moreButton = document.getElementsByClassName('more');
let lessButton = document.getElementsByClassName('less');



// Checar si tenemos productos guardados en el carrito desde el localstorage
function checkStorage(){
    if (localStorage.getItem('backpack')) {
        cartItems = JSON.parse(localStorage.getItem('backpack'));
        console.log("si hay carrito");
    }
}
checkStorage();
console.log(cartItems);

// Esta linea de codigo se debe borrar cuando haya forma de agregar productos
// cartItems = productsList.slice(1, 10); 

            // funcion para crear los eventos del boton de borrar
const createDeleteButtons = () => {
    for (const button of deleteButton) {
        button.onclick = (e) => {

            console.log("entre a borrar");
            let deleteId = e.target.id.slice(0, -3);
            console.log(deleteId);
            for (let index = 0; index < cartItems.length; index++) {
                if(deleteId == cartItems[index].id){
                    Swal.fire({
                        title: '¿Estás seguro?',
                        text: "Se eliminara de tu mochila",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#874c62',
                        cancelButtonColor: '#9d75cb',
                        confirmButtonText: 'Si, quitalo',
                        cancelButtonText: 'Cancela'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            cartItems.splice(index, 1);
                            updateCart();
                            swalWithBootstrapButtons.fire(
                                'Eliminado',
                                'Tu producto fue eliminado del carrito',
                                'success',
                            )
                        }
                    })
                    
                }
            }
            localStorage.setItem('backpack', JSON.stringify(cartItems));

        }
    }
}

            // Funcion para crear botones de +
const createMoreButtons = () => {
    for (const button of moreButton) {
        button.onclick = (e) => {

            console.log("entre a agregar productos");
            let moreId = e.target.id.slice(0, -3);
            console.log(moreId);
            for (let index = 0; index < cartItems.length; index++) {
                if(moreId == cartItems[index].id){
                    // checar si hay stock disponible
                    if(cartItems[index].quantity<cartItems[index].stock){
                        cartItems[index].quantity++;
                        updateCart();
                    }else{
                        swalWithBootstrapButtons.fire('Pronto tendremos más stock')
                    }
                    
                }
            }
            localStorage.setItem('backpack', JSON.stringify(cartItems));

        }
    }
}

            // Funcion para crear botones de -
const createLessButtons = () => {
    for (const button of lessButton) {
        button.onclick = (e) => {

            console.log("entre a quitar productos");
            let lessId = e.target.id.slice(0, -3);
            console.log(lessId);
            for (let index = 0; index < cartItems.length; index++) {
                if(lessId == cartItems[index].id){
                    // si hay mas de un producto se restaran
                    if(cartItems[index].quantity>1){
                        cartItems[index].quantity--;
                        updateCart();
                        
                    }else{ //si solo queda un producto de ese tipo, lo eliminara del carrito
                        Swal.fire({
                            title: '¿Estás seguro?',
                            text: "Se eliminara de tu mochila",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#874c62',
                            cancelButtonColor: '#9d75cb',
                            confirmButtonText: 'Si, quitalo',
                            cancelButtonText: 'Cancela'

                        }).then((result) => {
                            if (result.isConfirmed) {
                                cartItems.splice(index, 1);
                                updateCart();
                                swalWithBootstrapButtons.fire(
                                    'Eliminado',
                                    'Tu producto fue eliminado del carrito',
                                    'success',
                                )
                            }

                        })
                    }
                    
                }
            }
            localStorage.setItem('backpack', JSON.stringify(cartItems));

        }
    }
}


// Función para mostrar los productos del carrito y actualizar el total y subtotal
function updateCart() {
    console.log("Si furulo");
    // Obtener el carttbody donde se mostrarán los productos del carrito
    const cartBody = document.getElementById("cart-items");

    // Obtener el contenedor donde se mostrará el total del carrito
    const cartTotal = document.getElementById("cart-total");

    // Reiniciar el contenido del carttbody y el total
    cartBody.innerHTML = "";
    cartTotal.innerHTML = "$0";

    // Recorrer el array de productos del carrito y añadir cada uno al cartbody
    cartItems.forEach((item) => {
        // Crear una fila para el producto
        const row = document.createElement("div");

        row.className = "row";

        // Añadir la imagen, el nombre, el precio, la cantidad y el subtotal de cada producto en nuestro array
        row.innerHTML = `
            <div class="col-5 col-md-4 d-flex justify-content-center align-items-center">
                <img class="img-products img-fluid" src="${item.img}" alt="${item.name}">
            </div>
            <div class="col-7 col-md-6 d-flex justify-content-start align-items-between flex-column flex-wrap">
                <h3 class="item-name"> <b>${item.name}</b></h3>
                <br>
                <p class="description">${item.description}</p>
            </div>

            <div class="col-12 col-md-2 d-flex flex-row-reverse flex-md-column no-wrap align-items-center justify-content-between my-2">
                <h4>$${(item.price * item.quantity).toFixed(2)}</h4>
                <div class="d-flex flex-row justify-content-center align-items-center wrap">
                    <button class="less secondary-btn circle " id=${item.id + 'les'}>-</button>
                    <span class="m-2 px-3 py-1 border-scholar">${item.quantity}</span>
                    <button class="more main-btn twhite circle " id=${item.id + 'mor'}>+</button>
                </div>
                <button class="delete px-2 py-2 alert-btn " id=${item.id + 'del'}>
                    <img class="delete img-thrash" id=${item.id + 'del'} src="../assets/img/botebasura.png">
                </button>
            </div>
            <hr>
        `;
        // Añadir la fila al tbody
        cartBody.appendChild(row);
    });

    // Se asignan las variables para los botones
    deleteButton = document.getElementsByClassName('delete');
    moreButton = document.getElementsByClassName('more');
    lessButton = document.getElementsByClassName('less');

    // Se llama a las funciones que crean los eventos de los botones
    createDeleteButtons();
    createMoreButtons();
    createLessButtons();

    // Calcular el total del carrito
    const cartTotalValue = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    // Mostrar el total del carrito
    cartTotal.innerHTML = `$${cartTotalValue.toFixed(2)}`;
}

updateCart();

// Evento del boton de terminar compra
let buyButton = document.getElementById('buyIt');

    buyButton.onclick = async () => {

        console.log("soy el boton de comprar");
        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    '1': 'Tarjeta',
                    '2': 'Paypal',
                    '3': 'Transferencia',
                    '4': 'Contraentrega'
                })
            }, 500)
        })

        const { value: payment } = await Swal.fire({
            title: 'Metodo de pago',
            input: 'radio',
            inputOptions: inputOptions,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to choose something!'
                }
            }
        })
        console.log(payment);

        switch (payment) {
            // caso de pago con tarjeta
            case '1':
                setTimeout(() => {
                    const { value: formValues } = Swal.fire({
                        title: 'Pago con tarjeta',
                        html:
                            '<input id="swal-input1" class="swal2-input" placeholder="Notas">' +
                            '<input id="swal-input2" class="swal2-input" placeholder="Ubicación (dentro del plantel)">',
                        focusConfirm: false,
                        preConfirm: () => {
                            return [
                                document.getElementById('swal-input1').value,
                                document.getElementById('swal-input2').value
                            ]
                        }
                    })
        
                    if (formValues) {
                        Swal.fire(JSON.stringify(formValues))
                    }
                }, 500)
                break;

            // caso de pago con Paypal
            case '2':
                setTimeout(() => {
                    const { value: formValues } = Swal.fire({
                        title: 'Pago con Paypal',
                        html:
                            '<input id="swal-input1" class="swal2-input" placeholder="Notas">' +
                            '<input id="swal-input2" class="swal2-input" placeholder="Ubicación (dentro del plantel)">',
                        focusConfirm: false,
                        preConfirm: () => {
                            return [
                                document.getElementById('swal-input1').value,
                                document.getElementById('swal-input2').value
                            ]
                        }
                    })
        
                    if (formValues) {
                        Swal.fire(JSON.stringify(formValues))
                    }
                }, 500)
                break;
            
            // caso de pago por transferencia
            case '3':
                setTimeout(() => {
                    const { value: formValues } = Swal.fire({
                        title: 'Pago por transferencia',
                        html:
                            '<input id="swal-input1" class="swal2-input" placeholder="Notas">' +
                            '<input id="swal-input2" class="swal2-input" placeholder="Ubicación (dentro del plantel)">',
                        focusConfirm: false,
                        preConfirm: () => {
                            return [
                                document.getElementById('swal-input1').value,
                                document.getElementById('swal-input2').value
                            ]
                        }
                    })
        
                    if (formValues) {
                        Swal.fire(JSON.stringify(formValues))
                    }
                }, 500)
                break;

            // caso de pago contra entrega
            case '4':
                setTimeout(() => {
                    const { value: formValues } = Swal.fire({
                        title: 'Pago contraentrega',
                        html:
                            '<input id="swal-input1" class="swal2-input" placeholder="Notas">' +
                            '<input id="swal-input2" class="swal2-input" placeholder="Ubicación (dentro del plantel)">',
                        focusConfirm: false,
                        preConfirm: () => {
                            return [
                                document.getElementById('swal-input1').value,
                                document.getElementById('swal-input2').value
                            ]
                        }
                    })
        
                    if (formValues) {
                        Swal.fire(JSON.stringify(formValues))
                    }
                }, 500)
                break;
            
        }
        
        
    }


// // Función para añadir un producto al carrito
// function addToCart(product) {
//     // Buscar si el producto ya está en el carrito
//     const index = cartItems.findIndex((item) => item.name === product.name);
//     if (index !== -1) {
//         // Si el producto ya está en el carrito, aumentar su cantidad
//         cartItems[index].quantity++;
//     } else {
//         // Si el producto no está en el carrito, añadirlo
//         cartItems.push({
//             name: product.name,
//             price: product.price,
//             image: product.image,
//             quantity: 1,
//         });
//     }
//     // Actualizar el carrito
//     updateCart();
// }


// // Evento para añadir un producto al carrito cuando se hace clic en el botón "Añadir al carrito"
// const addToCartButtons = document.querySelectorAll(".add-to-cart");
// addToCartButtons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//         const product = {
//             name: event.target.dataset.name,
//             price: parseFloat(event.target.dataset.price),
//             image: event.target.dataset.image,
//         };
//         addToCart(product);
//     });
// });