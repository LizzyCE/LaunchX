import React from 'react';
import logo from '../../../img/Lilus.svg';
import '../styles/MyAccount.scss';

const MyAccount = () => {

    return(
            <div className="login">
              <div className="form-container">
                 <h1 className="title">Mi cuenta</h1>
                   <form action="/" className="form">
                     <div>
                       <label for="name" className="label">Nombre</label>
                         <p className="value">Liz Cárdenas</p>
                         <label for="email" className="label">Correo</label>
                         <p className="value">lizcardenas@outlook.com</p>
                         <label for="password" className="label">Contraseña</label>
                         <p className="value">***********</p>
                      </div>
                        <input type="submit" 
                          value="Editar" 
                          className="secondary-button edit-button"/>
                    </form>
                </div>
            </div>
    );
 }

export default MyAccount;