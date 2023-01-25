/* Barra de navegación */
class MyHeader extends HTMLElement{
    connectedCallback() {
      this.innerHTML =`
      <div class="header">
          <div class="navbar">
            <div class="navbar__wrapper">
              <nav class="navbar__menu">
                  <a href="index.html" class="nombre-nav">
                      <img src="imagenes/icon-code.png" alt="logo" width="40" height="35" class="d-inline-block align-text-top"> Centurion Maria 
                  </a>
                <div id="nav-icon3"><span></span><span></span><span></span><span></span></div>
                <ul class="navbar__nav">
                  <li class="navbar__link after-transform"><a class="menu_link" href="#sobre-mi">Sobre mi</a></li>
                  <li class="navbar__link after-transform"><a class="menu_link" href="#skills">Skills</a></li>
                  <li class="navbar__link after-transform"><a class="menu_link" href="#formacion">Formación</a></li>
                  <li class="navbar__link after-transform"><a class="menu_link" href="#proyectos">Proyectos</a></li>
                  <li class="navbar__link after-transform"><a class="menu_link" href="#contactame">Contactame</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="navbar-responsive">
            <ul class="navbar-responsive__nav">
              <li class="navbar-responsive__link after-transform"><a href="#sobre-mi">Sobre mi</a></li>
              <li class="navbar-responsive__link after-transform"><a href="#skills">Skills</li>
              <li class="navbar-responsive__link after-transform"><a class="menu_link" href="#formacion">Formación</a></li>
              <li class="navbar-responsive__link after-transform"><a class="menu_link" href="#proyectos">Proyectos</a></li>
              <li class="navbar-responsive__link after-transform"><a class="menu_link" href="#contactame">Contactame</a></li>
            </ul>
          </div>
        </div>
      ` 
    }
  }
  customElements.define('my-header', MyHeader)