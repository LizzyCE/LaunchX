import React, { useState }from 'react';
import '../styles/Header.scss';
import choco from '../assets/chocolate.png'

const ProductItem = () => {
     
    const [cart, setCart] = useState([]);
    const handleClick = () => {
		setCart(['Hola Mundo']);
	}

    return (
        <section class="main-container">
        <div class="cards-container">
              <div class="product-card">
              <img src={choco} alt="sabor"/>
              <div class="product-info">
                <div>
                  <p>$15.00 MXN</p>
                  <p>Sabor Chocolate</p>
                </div>
                <figure onClick={handleClick}>
                  <img src="carrito-de-compras.png" alt="agregar"/>
                </figure>
              </div>
            </div>
            <div class="product-card">
              <img src="jarabe.png" alt="sabor"/>
              <div class="product-info">
                <div>
                  <p>$15.00 MXN</p>
                  <p>Sabor Vainilla</p>
                </div>
                <figure>
                  <img src="carrito-de-compras.png" alt="agregar"/>
                </figure>
              </div>
            </div>
            <div class="product-card">
              <img src="mermelada-de-fresa.png" alt="sabor"/>
              <div class="product-info">
                <div>
                  <p>$15.00 MXN</p>
                  <p>Sabor Fresa</p>
                </div>
                <figure>
                  <img src="carrito-de-compras.png" alt="agregar"/>
                </figure>
              </div>
            </div>
            <div class="product-card">
              <img src="crema.png" alt="sabor"/>
              <div class="product-info">
                <div>
                  <p>$15.00 MXN</p>
                  <p>Sabor Queso Philadelphia</p>
                </div>
                <figure>
                  <img src="carrito-de-compras.png" alt="agregar"/>
                </figure>
              </div>
            </div>
            <div class="product-card">
              <img src="cerezas.png" alt="sabor"/>
              <div class="product-info">
                <div>
                  <p>$15.00 MXN</p>
                  <p>Sabor Cereza</p>
                </div>
                <figure>
                  <img src="carrito-de-compras.png" alt="agregar"/>
                </figure>
              </div>
            </div>
            <div class="product-card">
              <img src="uvas.png" alt="sabor"/>
              <div class="product-info">
                <div>
                  <p>$15.00 MXN</p>
                  <p>Sabor Zarzamora</p>
                </div>
                <figure>
                  <img src="carrito-de-compras.png" alt="agregar"/>
                </figure>
              </div>
            </div>
            <div class="product-card">
              <img src="velas.png" alt="sabor"/>
              <div class="product-info">
                <div>
                  <p>$10.00 MXN</p>
                  <p>Decoración Velas</p>
                </div>
                <figure>
                  <img src="carrito-de-compras.png" alt="agregar"/>
                </figure>
              </div>
            </div>
            <div class="product-card">
              <img src="flor.png" alt="sabor"/>
              <div class="product-info">
                <div>
                  <p>$10.00 MXN</p>
                  <p>Decoración Flores</p>
                </div>
                <figure>
                  <img src="carrito-de-compras.png" alt="agregar"/>
                </figure>
              </div>
            </div>
            <div class="product-card">
              <img src="estrellas.png" alt="sabor"/>
              <div class="product-info">
                <div>
                  <p>$10.00 MXN</p>
                  <p>Decoración Diamantina</p>
                </div>
                <figure>
                  <img src="carrito-de-compras.png" alt="agregar"/>
                </figure>
              </div>
            </div>
            <div class="product-card">
              <img src="papel-picado.png" alt="sabor"/>
              <div class="product-info">
                <div>
                  <p>$10.00 MXN</p>
                  <p>Decoración Figuras</p>
                </div>
                <figure>
                  <img src="carrito-de-compras.png" alt="agregar"/>
                </figure>
              </div>
            </div>
          </div>  
      </section>

    );
}

export default ProductItem;