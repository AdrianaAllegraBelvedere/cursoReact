import React from  'react';
import logo from '../logo.svg';

const NavBar = () => {

    return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Productos Destacados</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Carrito</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">login</a>
                    </li>
                </ul>
            </div>
            </nav>
    );
}

export default NavBar;