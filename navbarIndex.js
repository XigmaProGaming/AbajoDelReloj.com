const navbarLocation = document.querySelector("#navbarLocation");
const footer = document.querySelector("#footer")

navbarLocation.innerHTML = `<!-- Barra de navegacion arriba y abajo -->
<div class="sticky-top" id="navContainer">
  <!-- Barra de navegacion arriba-->
  <nav class="navbar navbar-expand-lg navbarBackground">
    <div class="container-fluid">
      <a class="navbar-brand collapse navbar-collapse" href="./index.html" style="width: 150px;">
        <img class="mx-auto" src="./Assets/logoAbajodelReloj.png" alt="Logo Abajo del Reloj" width="150px">
      </a>

      <!-- Boton hamburguesa -->
      <a href="#" class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasShop" aria-controls="offcanvasShop" aria-expanded="false" aria-label="Toggle navigation"   id="navbarToggler">
        <span class="material-symbols-outlined material-icons md-light" id="burgerIcon">
        menu
        </span>
      </a>
      <form class="d-flex col-sm-6 col-md-6 col-lg-6" role="search">
        <input class="form-control me-0" type="search" placeholder="Buscar productos" aria-label="Search" id="search-bar">
        <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
      </form>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link navbarTextClass" href="./Pages/Login/login.html">Iniciar Sesión</a>
          </li>
          <li class="nav-item">
            <a class="nav-link navbarTextClass" href="./Pages/Registrarse/registrarse.html">Registrarse</a>
          </li>
        </ul>
      </div>
      <a href="./Pages/CarritoCompras/CarritoCompras.html" style="color: black;">
        <span class="material-symbols-outlined material-icons md-light">
        shopping_cart
        </span>
      </a>
    </div>
  </nav>

<!-- Barra de navegacion abajo-->
  <nav class="navbar navbar-expand-lg  navbarBackground">
    <div class="container-fluid">
        <a class="navbar-brand collapse navbar-collapse" href="#"> </a>       
      <div class="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link navbarTextClass" href="./index.html">Página Principal</a>
          </li>
          <li class="nav-item">
            <a class="nav-link navbarTextClass" href="./Pages/Contactanos/contactenos.html">Contáctenos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link navbarTextClass" href="./Pages/acercaDeNosotros/aboutUs.html">Acerca de Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link navbarTextClass" href="./Pages/pedidos/pedidos.html">Pedidos</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  <!-- Offcanvas -->
  <div class="offcanvas offcanvas-start navbarBackground" tabindex="-1" id="offcanvasShop" aria-labelledby="offcanvasShopLabel">
    <div class="offcanvas-header">
      <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasShop" aria-controls="offcanvasShop" aria-expanded="false" aria-label="Toggle navigation"  style="color: black;">
        <span class="material-symbols-outlined material-icons md-light">
        menu
        </span>
      </a>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body" id="offcanvas-body-container">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link navbarTextClass" href="./index.html">Página Principal</a>
        </li>
        <!-- <li class="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasShop"  por si quieremos cerrar el offcanvas al hacer click en cada link> -->
        <li class="nav-item">
          <a class="nav-link navbarTextClass"  href="./Pages/Contactanos/contactenos.html">Contáctenos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navbarTextClass" href="./Pages/acercaDeNosotros/aboutUs.html">Acerca de Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navbarTextClass" href="./Pages/pedidos/pedidos.html">Pedidos</a>
        </li>
      </ul>
      <ul class="navbar-nav" id="bottom-offcanvas">
        <a class="nav-link navbarTextClass" href="./Pages/Login/login.html">Iniciar Sesión</a>
        <a class="nav-link navbarTextClass" href="./Pages/Registrarse/registrarse.html">Registrarse</a>
    </ul>
    </div>
  </div>`;

footer.innerHTML = `
<div class="footer">
      <div class="row noScroll">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3" id="logoLocation">
          <a href="./index.html" style="width: 200px;" >
            <img class="mx-auto" src="./Assets/logoAbajodelReloj.png" alt="Logo Abajo del Reloj" width="150px">
          </a>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-3">
          <h5>AbajoDelReloj.com</h5>
          <ul class="footerList">
            <li><a href="./Pages/acercaDeNosotros/aboutUs.html">Acerca de Nosotros</a></li>
            <li><a href="./Pages/Contactanos/contactenos.html">Contáctenos</a></li>
            <li><a href="./Pages/ListaProductos/ListaProductos.html">Listado de Productos</a></li>
          </ul>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-3">
          <h5>Redes Sociales</h5>
          <ul class="footerList">
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            <li><a href="https://twitter.com/home">Twitter</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
          </ul>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-3">
          <h5>Mi Cuenta</h5>
          <ul class="footerList">
            <li><a href="./Pages/Perfil/perfil.html">Mi perfil</a></li>
            <li><a href="./Pages/pedidos/pedidos.html">Mis pedidos</a></li>
            <li><a href="./Pages/AgregarProducto/agregarProducto.html">Agregar un producto</a></li>
          </ul>
        </div>
      </div>
      <div class="row noScroll">
        <div class="col-12"><h6>Copyright © 2023, AbajoDelReloj.com </h6></div>
      </div>
    </div>
`;
