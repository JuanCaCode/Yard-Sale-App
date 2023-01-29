//En este login utilizaremos el hook useRef para aplicar a nuestro formulario
import React, {useRef} from 'react';
import styles from '@styles/pages/Login.module.scss';
import logo from '@logos/logo_yard_sale.svg';
import Link from 'next/link';
import Image from 'next/image';

const Login = () => {
    const formulario = useRef(null);

    // const handleSubmit = (event) =>{
    //     event.preventDefault(); //que no mande la info por url y no recargue la página
    //     const formData = new FormData(formulario.current);
    //     const data = {
    //         username : formData.get('email_input'),
    //         password : formData.get('password_input')
    //     }
    //     console.table(data);
    // }

    return (
        <section className={styles["login"]}>
            <div className={styles["login_form-container"]}>
                <Image src={logo} alt="logo" className={styles["login_logo"]} />
                {/* Hacemos referencia al formulario */}
                <form className={styles["login_form"]} action="/" ref={formulario}>
                    <label htmlFor="email_input" className={styles["form_label"]}>Email address</label>
                    <input name="email_input" type="text" className={styles["form_input"]} placeholder="login@example.com" />
                    <label htmlFor="password_input" className="form_label">Password</label>
                    <input name="password_input" type="password" className={styles["form_input"]} placeholder="*********" />
                    <button href="/" className={`${styles["form_btn"]} primary_btn`} >Login</button>
                    <Link href="/">Forgot my password</Link>
                </form>
                <button href={'/create-account'} className={`secondary_btn ${styles["sign_up_btn"]}`}>Sign up</button>
            </div>
        </section>
    )
}

export default Login;