let divProductos = document.getElementById("productos");

const imprimirProductos = () =>{
  const producto = [];

  for(let i = 0; i < 2 ; i++){
    producto[i] = document.createElement("div") 
    producto[i].className = "row";
    producto[i].innerHTML = `
    <div class="col-xl-3 col-sm-12 col-md-6">
      <img src="/Pages/confirmacionDeCompra/assets/productoLaptop.jpg" class="imagen" id="imagen" alt="Imagen del producto">
    </div>
    <div class="col-xl-9 col-sm-12 col-md-6 divNombre">
      <h4 id="nombre">Laptop SELL 8gb de RAM, Memoria interna de 1 GB. EL MEJOR PRECIO</h4>
    </div>`;
  
    divProductos.appendChild(producto[i]);
  }
}

imprimirProductos();