import React from 'react';
import logo from '../../../img/Lilus.svg';
import '../styles/Menu.scss';

const menu = () => {
    return (
        <div class="desktop-menu">
        <ul>
          <li>
            <a href="/" class="title">Mis pedidos</a>
          </li>
          <li>
            <a href="/">Mi cuenta</a>
          </li>
          <li>
            <a href="/">Cerrar Sesión</a>
          </li>
          
        </ul>
    </div>
    );
}

export default Menu;