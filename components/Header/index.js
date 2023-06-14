import Link from 'next/link';
import React, { useState } from 'react';
import styles from './header.module.css';

const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.navbarHeader}>
                    <Link href="/" className={styles.navbarLogo}>
                        <img src="/images/header/ns-logo.svg" alt="logo" />
                    </Link>
                </div>

                <ul className={styles.navbarMenu}>
                    <li className={styles.navbarItem}>
                        <Link href="/">HOME</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link href="/project">PROJECTS</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link href="/services">SERVICES</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link href="/about ">ABOUT US</Link>
                    </li>
                    <li className={styles.navbarItems}>
                        <Link href="/tlak ">LET'S TALK</Link>
                    </li>
                </ul>
                <div class={styles.hamburger}>
                    <span class={styles.bar}></span>
                    <span class={styles.bar}></span>
                    <span class={styles.bar}></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
