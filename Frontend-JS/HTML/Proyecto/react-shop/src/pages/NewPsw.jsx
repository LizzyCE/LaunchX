import React from 'react';
import logo from '../../../img/Lilus.svg';
import '../styles/NewPsw.scss';

const NewPsw = () => {
    return (
        <div className="login">
       <div className="form-container">
           <img src={logo} alt="logo" className="logo"/>
           <h1 className="title">Crear nueva contraseña</h1>
            <p className="subtitle">Ingresa una nueva contraseña para tu cuenta</p>
            <form action="/" className="form">
                <label for="password" className="label">Contraseña</label>
                <input type="password" 
                id="password" 
                placeholder="*******" 
                className="input input-password"/>
                <label for="new-password" className="label">Confirmar contraseña</label>
                <input type="password" 
                id="new-password" 
                placeholder="*******" 
                className="input input-password"/>
                <input type="submit" 
                value="Confirmar" 
                className="primary-button login-button"/>
            </form>
       </div>
    </div>
    );
}

export default NewPsw;