import React from 'react'
import '@styles/pages/CreateAccount.scss'
const CreateAccount = () => {
    return (
        <section className="create-account">
            <div className="create-account_form-container">
                <h1 className="form_title">My account</h1>
                <form className="create-account_form" action="#">
                    <div className="form_container_principal">
                        <label htmlFor="name_input" className="form_label">Name</label>
                        <input id="name_input" type="text" className="form_input input_name" placeholder="Your name" />
                        <label htmlFor="email_input" className="form_label">Email</label>
                        <input id="email_input" type="text" className="form_input input_email" placeholder="login@example.com" />
                        <label htmlFor="password_input" className="form_label">Password</label>
                        <input id="password_input" type="password" className="form_input input_passw " placeholder="*********" />
                    </div>
                    <input type="submit" value="Save" className="form_btn primary_btn" />
                </form>
            </div>
        </section>
    )
}

export default CreateAccount