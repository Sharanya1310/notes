import React from "react";
import BrandImg from '../../../assets/brand.svg'
import styles from './brand.module.scss';

function BrandLogo(props){
    const{logoOnly,className}=props;
    return(
        <article className={styles.brand}>
            <img src={BrandImg} alt="brandlogo"/>
            {!logoOnly ?  (
            <h1>NOTE.<span>me</span></h1>
            ):null}
        </article>
    )
}
export default BrandLogo;