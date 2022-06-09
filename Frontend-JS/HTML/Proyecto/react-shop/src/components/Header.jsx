import React from 'react';
import menu from '../../../img/menu.png';
import logo from '../../../img/Lilus.svg';
import carrito from '../../../img/icon_shopping_cart.svg';
import '../styles/Header.scss';

const Header = () => {
    return (
        <nav>
        <img src={menu} alt="menu" className="menu"/>
        <div className="navbar-left">
          <img src={logo} alt="logo" className="logo"/>
          <ul>
            <li>
              <a href="/">Todo</a>
            </li>
            <li>
              <a href="/">Sabores</a>
            </li>
            <li>
              <a href="/">Decoración</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-email">lizcardenas@outlook.com</li>
            <li className="navbar-shopping-cart">
              <img src={carrito} alt="shopping cart"/>
              <div>3</div>
            </li>
          </ul>
        </div>
      </nav>
      
      
    );
}

export default Header;