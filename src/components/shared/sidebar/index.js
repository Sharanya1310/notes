import React from 'react'
import styles from './sidebar.module.scss'
import BrandLogo from '../brand'
import { Icon } from '@iconify/react'
import sideData from'../../../data/sidebar.json';
function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <BrandLogo logoOnly={true} />
        <section>
            {
                sideData.map(item =>{
                <article className={ styles.item}>
                    <Icon icon={item.icon}/>
                </article>
            })
            }
        </section>
        <article>
            <Icon icon={'material-symbols:logout'}/>
        </article>
    </aside>
  )
}

export default Sidebar
