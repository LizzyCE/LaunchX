import React from 'react';
import logo from '../../../img/Lilus.svg';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
    return (
        <div className="login">
        <div className="form-container">
            <h1 className="title">Mi cuenta</h1>
             <form action="/" className="form">
                 <div>
                     <label for="name" className="label">Nombre</label>
                     <input type="text" 
                     id="name" 
                     placeholder="Liz Cárdenas" 
                     className="input input-name"/>
                     <label for="email" className="label">Correo</label>
                     <input type="text" 
                     id="email" 
                     placeholder="correo@example.com" 
                     className="input input-email"/>
                    <label for="password" className="label">Contraseña</label>
                     <input type="password" 
                     id="new-password" 
                     placeholder="*******" 
                     className="input input-password"/>  
                 </div>
                 <input type="submit" 
                 value="Crear" 
                 className="primary-button create-button"/>
             </form>
        </div>
     </div>
    );
}

export default CreateAccount;