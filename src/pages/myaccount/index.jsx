import React from 'react'
import AppLayout from '@layouts/AppLayout';
import styles from '@styles/pages/MyAccount.module.scss'

const MyAccount = () => {
    return (
        <AppLayout>
            <section className={styles["my-account"]}>
                <div className={styles["my-account_form-container"]}>
                    <h1 className={styles["form_title"]}>My account</h1>
                    <form className={styles["my-account_form"]} action="#">
                        <div className={styles["form_container_principal"]}>
                            <label htmlFor="name_input" className={styles["form_label"]}>Name</label>
                            <p className={styles["value"]}>Juan Camilo Campo</p>
                            <label htmlFor="email_input" className={styles["form_label"]}>Email</label>
                            <p className={styles["value"]}>camilo@example.com</p>
                            <label htmlFor="password_input" className={styles["form_label"]}>Password</label>
                            <p className={styles["value"]}>*******</p>
                        </div>
                        <input type="submit" value="Edit" className={`${styles["form_btn"]} secondary_btn`} />
                    </form>
                </div>
            </section>
        </AppLayout>
    )
}

export default MyAccount