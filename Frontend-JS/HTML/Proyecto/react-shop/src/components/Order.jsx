import React from 'react';
import React from 'react';
import logo from '../../../img/Lilus.svg';
import logoemail from '../../../img/message.png';
import '../styles/Orders.scss';

const Orders = () => {
    return (
        <div className="my-order">
        <div className="my-order-container">
          <h1 className="title">Mi pedido</h1>
          <div className="my-order-content">
            <div className="order">
              <p>
                <span>08.06.22</span>
                <span>3 articulos</span>
              </p>
              <p>$35.00</p>
            </div>
            <div className="shopping-cart">
              <figure>
                <img src="/img/flor.png" alt="flores"/>
              </figure>
              <p>Decoración Flores</p>
              <p>$10.00MXN</p>
            </div>
            <div className="shopping-cart">
              <figure>
                <img src="/img/velas.png" alt="velas"/>
              </figure>
              <p>Decoración Velas</p>
              <p>$10.00MXN</p>
            </div>
            <div className="shopping-cart">
              <figure>
                <img src="/img/jarabe.png" alt="vainilla"/>
              </figure>
              <p>Sabor Vainilla</p>
              <p>$15.00MXN</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Orders;