import React from "react";
import logo from "../../public/assets/logos/logo_yard_sale.svg";
import '../styles/containers/RecoveryPassword.scss';

const RecoveryPassword = () =>{
    return (
        <section className="login">
            <div className="login_form-container">
                <img src={logo} alt="logo" className="login_logo" />
                <h1 className="form_title">Create a new password</h1>
                <p className="form_subtitle">Enter a new password for your account</p>
                <form className="login_form" action="#">
                    <label htmlFor="password" className="form_label">Password</label>
                    <input id="password" type="password" className="form_input form_input--password" placeholder="*********" />
                    <label htmlFor="password_re-enter" className="form_label">Re-enter password</label>
                    <input id="password_re-enter" type="password" className="form_input form_input--password" placeholder="*********" />
                    <input type="submit" value="Confirmar" className="form_btn primary_btn" />
                </form>
            </div>
        </section>        
    );
}

export default RecoveryPassword;
