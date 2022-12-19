import React from 'react'
import '../styles/containers/EditAccount.scss'
const EditAccount = () => {
    return (
        <section className="login">
            <div className="login_form-container">
                <h1 className="form_title">My account</h1>
                <form className="login_form" action="#">
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

export default EditAccount