import React from 'react';
import logo from '../../../img/Lilus.svg';
import logoemail from '../../../img/message.png';
import '../styles/SendEmail.scss';

const SendEmail = () => {
	return (
        <div className="login">
        <div className="form-container">
            <img src={logo} alt="logo" className="logo" />
            <h1 className="title">¡El correo ha sido enviado!</h1>
             <p className="subtitle">Por favor checar la bandeja de entrada
                 para seguir las instrucciones sobre el cambio de contraseña
             </p>
             <div className="email-image">
               <img src={logoemail} alt="email" className="correo"/>  
             </div>
             <button className="primary-button 
             login-button">Login</button>
             <p className="resend">
                 <span>¿No se recibió el correo?</span>
                 <a href="/">Reenviar</a>
             </p>
        </div>
     </div>
    );
}

export default SendEmail;