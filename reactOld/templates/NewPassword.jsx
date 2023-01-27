import React from "react";
import logo from "@logos/logo_yard_sale.svg";
import styles from '@styles/pages/NewPassword.scss';
import Image from "next/image";

const NewPassword = () =>{
    return (
        <section className={styles["new-password"]}>
            <div className={styles["new-password_form-container"]}>
                <Image src={logo} alt="logo" className={styles["new-password_logo"]} />
                <h1 className={styles["form_title"]}>Create a new password</h1>
                <p className={styles["form_subtitle"]}>Enter a new password for your account</p>
                <form className={styles["new-password_form"]} action="#">
                    <label htmlFor="password" className={styles["form_label"]}>Password</label>
                    <input id="password" type="password" className={styles["form_input form_input--password"]} placeholder="*********" />
                    <label htmlFor="password_re-enter" className={styles["form_label"]}>Re-enter password</label>
                    <input id="password_re-enter" type="password" className={styles["form_input form_input--password"]} placeholder="*********" />
                    <input type="submit" value="Confirmar" className={styles["form_btn primary_btn"]} />
                </form>
            </div>
        </section>        
    );
}

export default NewPassword;
