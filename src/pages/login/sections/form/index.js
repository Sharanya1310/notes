import React, { useState } from "react";
import styles from './form.module.scss'
import BrandLogo from "../../../../components/shared/brand";
import {Icon} from '@iconify/react'
import Input from "../../../../components/atoms/input";
import Button from "../../../../components/atoms/button"
function Form(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    return(
        <section className={styles["form-container"]}>
         <BrandLogo/>
        <div className={styles.form}>      
         <Button
          text="Join with Google"
          icon="bi:google"
          className={styles.google}
          />
         <div className={styles.option}>
           <span> or join with email address</span>
         </div>
         <article className={styles.details}>
            <Input 
            type="email"
            value={email}
            placeholder={" Type Your Email"}
             onChange={(e) => setEmail(e.target.value)}/>
            <Input 
            type="password"
            value={password}
            placeholder={" Type Your Password"}
             onChange={(e) => setPassword(e.target.value)}/>
            <Button
          text="Join with Email"
          icon="material-symbols:login"
          className={styles.emailbtn}
          />
         </article>
         </div>
        </section>
    );
};

export default Form;