<template>
  <div id="app">
    <div class="container contenedor">
      <b-navbar toggleable="lg" type="dark" variant="" style="background-color:#d2d2d2">
        <b-navbar-brand to="/" style="margin-left: 16px;">
          <img src="https://drive.google.com/uc?id=16jnE-VmKXs41srUz1uuPeb4ljbXTG2tx" alt="" width="50px">
          <!-- <img src="./assets/logoEmpresa.png" alt="" width="50px"> -->
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav >
          <b-navbar-nav>
            <!-- <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
            <b-nav-item to="/" exact exact-active-class="active">Inicio</b-nav-item>
            <b-nav-item to="/galeria" exact exact-active-class="active">Galeria</b-nav-item>
            <b-nav-item to="/contactanos" exact exact-active-class="active">Contactanos</b-nav-item>
            <!-- <b-nav-item to="/galeriaDetalle" exact exact-active-class="active">Detalle</b-nav-item> -->
          </b-navbar-nav>
        <!--  <b-navbar-nav class="ml-auto">
          </b-navbar-nav> -->
        </b-collapse>
      </b-navbar>
     <router-view></router-view>
    </div>
      <footer class="footer" id="footer">
      <!--   <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-6">
              <div class="embed-responsive embed-responsive-16by9 mb-4">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM"
                  allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div> -->
         <!-- Footer Elements -->
        <div class="container">

          <!-- Social buttons -->
          <ul class="list-unstyled list-inline text-center">
            <li class="list-inline-item">
              <a class="btn-floating btn-fb mx-1">
                <i class="fab fa-facebook-f"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-tw mx-1">
                <i class="fab fa-twitter"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-gplus mx-1">
                <i class="fab fa-google-plus-g"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-li mx-1">
                <i class="fab fa-linkedin-in"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-dribbble mx-1">
                <i class="fab fa-dribbble"> </i>
              </a>
            </li>
          </ul>
          <!-- Social buttons -->

        </div>
        <!-- Footer Elements -->

       <div class="footer-copyright text-center py-3" style="background-color:#d2d2d2;">© 2020 Copyright:
        <a href="#"> Alex Luis Opazo</a>
      </div>
    </footer>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <!--  -->
<!--     <div>
      <b-card title="Card Title" no-body>
        <b-card-header header-tag="nav" class="dato" style="background:#ffffff;">
            <b-nav card-header pills>
            <b-nav-item to="/" exact exact-active-class="active">Home</b-nav-item>
            <b-nav-item to="/about" exact exact-active-class="active">Foo</b-nav-item>
          </b-nav>
        </b-card-header>
        <b-card-body class="text-center">
          <router-view></router-view>
        </b-card-body>
      </b-card>
    </div> -->
    <!--  -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.saltoPading {
  padding-top: 50px;
}
.dato {
  width: 100%;
  position: fixed;
  z-index: 900;
 background:#ffffff;
}

#footer {
  background-color: #f5f5f5;
}

.contenedor {
 min-height:calc(100vh - 96px);
 position:relative;/*importante*/
/*  border:2px solid blue;
 */}

footer{
 background-color:red;
 color:white;
 padding:15px;
}
.imagenCatalogo:hover{
  filter: opacity(.5);
}
#wrapper3 {
    background-image: url('https://drive.google.com/uc?id=1gS9MaaHeJkeXkbnkQw8NLS8BwauddwKz');
    background-attachment: fixed;
    min-height: 350px;
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    display: block;
}
</style>
