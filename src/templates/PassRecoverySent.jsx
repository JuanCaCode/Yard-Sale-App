import React from 'react';
import '../styles/pages/PassRecoverySent.scss';
import logo from '@logos/logo_yard_sale.svg';
import Image from 'next/image';
import email from '@icons/email.svg';
import Link from 'next/link';

const PassRecoverySent = () => {
  return (
    <section className="pass-recovery-sent">
        <div className="pass-recovery-sent_form-container">
            <Image src={logo} alt="logo" className="pass-recovery-sent_logo" />
            <h1 className="form_title">Email has been sent!</h1>
            <p className="form_subtitle">Please check your inbox for instructions on how to reset the password.</p>
            <div className="form_email-image">
                <Image src={email} alt="email" />
            </div>
            <button className="primary_btn form_btn">Login</button>
            <p className="form_resend_text">
                <span> Did not receive the email?</span>
                <Link href="/">Resend</Link>
            </p>
        </div>
    </section>
  )
}

export default PassRecoverySent;