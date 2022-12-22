//En este login utilizaremos el hook useRef para aplicar a nuestro formulario
import React, {useRef} from 'react';
import '@styles/pages/Login.scss';
import logo from '@logos/logo_yard_sale.svg';

const login = () => {
    const formulario = useRef(null);

    const handleSubmit = (event) =>{
        event.preventDefault(); //que no mande la info por url y no recargue la página
        const formData = new FormData(formulario.current);
        const data = {
            username : formData.get('email_input'),
            password : formData.get('password_input')
        }
        console.table(data);
    }

    return (
        <section className="login">
            <div className="login_form-container">
                <img src={logo} alt="logo" className="login_logo" />
                {/* Hacemos referencia al formulario */}
                <form className="login_form" action="/" ref={formulario}>
                    <label htmlFor="email_input" className="form_label">Email address</label>
                    <input name="email_input" type="text" className="form_input" placeholder="login@example.com" />
                    <label htmlFor="password_input" className="form_label">Password</label>
                    <input name="password_input" type="password" className="form_input" placeholder="*********" />
                    <button type='submit' onClick={handleSubmit} className="form_btn primary_btn">Login</button>
                    <a href="/">Forgot my password</a>
                </form>
                <button onClick={handleSubmit} className="secondary_btn sign_up_btn">Sign up</button>
            </div>
        </section>
    )
}

export default login