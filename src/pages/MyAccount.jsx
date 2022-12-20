import React from 'react'
import '../styles/pages/MyAccount.scss'
const MyAccount = () => {
    return (
        <section className="my-account">
            <div className="my-account_form-container">
                <h1 className="form_title">My account</h1>
                <form className="my-account_form" action="#">
                    <div className="form_container_principal">
                        <label htmlFor="name_input" className="form_label">Name</label>
                        <p className="value">Juan Camilo Campo</p>
                        <label htmlFor="email_input" className="form_label">Email</label>
                        <p className="value">camilo@example.com</p>
                        <label htmlFor="password_input" className="form_label">Password</label>
                        <p className="value">*******</p>
                    </div>
                    <input type="submit" value="Edit" className="form_btn secondary_btn" />
                </form>
            </div>
        </section>
    )
}

export default MyAccount