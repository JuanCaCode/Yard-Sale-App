import React from 'react';
import '../styles/containers/EmailSentPassRecovery.scss';
import logo from '../../public/assets/logos/logo_yard_sale.svg';
import email from '../../public/assets/icons/email.svg';

const EmailSentPassRecovery = () => {
  return (
    <section className="login">
        <div className="login_form-container">
            <img src={logo} alt="logo" className="login_logo" />
            <h1 className="form_title">Email has been sent!</h1>
            <p className="form_subtitle">Please check your inbox for instructions on how to reset the password.</p>
            <div className="form_email-image">
                <img src={email} alt="email" />
            </div>
            <button className="primary_btn form_btn">Login</button>
            <p className="form_resend_text">
                <span> Didn't receive the email?</span>
                <a href="/">Resend</a>
            </p>
        </div>
    </section>
  )
}

export default EmailSentPassRecovery;