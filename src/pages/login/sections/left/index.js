import React from "react";
import styles from './left.module.scss'
import loginImg from '../../../../assets/login.avif'
function Left(){
    return(
        <section className={styles.left}>
         <img src={loginImg} alt="LoginImg"></img>
         <div>      
         <h1>Keep Life Simple</h1>
         <p>Store all your notes in a simple and intutive app that helps you enjoy what is most important in life.</p></div>

        </section>
        
    )
}

export default Left;