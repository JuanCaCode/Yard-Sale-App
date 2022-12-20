import React from 'react'
import '../styles/pages/Login.scss';
import logo from '../../public/assets/logos/logo_yard_sale.svg'

const login = () => {
    return (
        <section className="login">
            <div className="login_form-container">
                <img src={logo} alt="logo" className="login_logo" />
                <form className="login_form" action="#">
                    <label htmlFor="email_input" className="form_label">Email address</label>
                    <input id="email_input" type="text" className="form_input" placeholder="login@example.com" />
                    <label htmlFor="password_input" className="form_label">Password</label>
                    <input id="password_input" type="password" className="form_input" placeholder="*********" />
                    <input type="submit" value="Login" className="form_btn primary_btn" />
                    <a href="/">Forgot my password</a>
                    <button className="secondary_btn sign_up_btn">Sign up</button>
                </form>
            </div>
        </section>
    )
}

export default login