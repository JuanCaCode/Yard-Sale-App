import React from 'react';
import '../styles/pages/PassRecoverySent.scss';
import logo from '../../public/assets/logos/logo_yard_sale.svg';
import email from '../../public/assets/icons/email.svg';

const PassRecoverySent = () => {
  return (
    <section className="pass-recovery-sent">
        <div className="pass-recovery-sent_form-container">
            <img src={logo} alt="logo" className="pass-recovery-sent_logo" />
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

export default PassRecoverySent;