import React, { Suspense } from 'react'
import Loader from '../components/shared/loader'
import { Outlet } from 'react-router-dom'
import styles from "./layout.module.scss"
import Sidebar from '../components/shared/sidebar'

function Main() {
  return (
    <Suspense fallback={<Loader/>}>
        {/*Sidebar*/}
        <Sidebar/>
        <main className={styles.main}>
            {/* Navbar */}
            <section className={styles.content}>
                <Outlet/>
            </section>
        </main>
    </Suspense>
  );
}

export default Main
