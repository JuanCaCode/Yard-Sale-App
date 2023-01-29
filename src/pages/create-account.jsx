import React from 'react'
import styles from '@styles/pages/EditAccount.module.scss';
import logo from '@logos/logo_yard_sale.svg';
import Image from 'next/image';

const CreateAccount = () => {

    return (
        <section className={styles["create-account"]}>
            <div className={styles["create-account_form-container"]}>
                <Image src={logo} alt="logo" className={styles["create-account_logo"]} />
                <h1 className={styles["form_title"]}>Register a new account</h1>
                <form className={styles["create-account_form"]} action="#">
                    <div className={styles["form_container_principal"]}>
                        <label htmlFor="name_input" className={styles["form_label"]}>Name</label>
                        <input id="name_input" type="text" className={`${styles["form_input"]} ${styles["input_name"]}`} placeholder="Your name" />
                        <label htmlFor="email_input" className={styles["form_label"]}>Email</label>
                        <input id="email_input" type="text" className={`${styles["form_input"]} ${styles["input_email"]}`} placeholder="login@example.com" />
                        <label htmlFor="password_input" className={styles["form_label"]}>Password</label>
                        <input id="password_input" type="password" className={`${styles["form_input"]} ${styles["input_passw"]}`} placeholder="*********" />
                    </div>
                    <input type="submit" value="Save" className={` ${styles["form_btn"]} primary_btn`} />
                </form>
            </div>
        </section>

    )
}

export default CreateAccount;