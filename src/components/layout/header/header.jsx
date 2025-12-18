import React from 'react';
import styles from './header.module.css';
import logo from '../../../assets/logos/image (1).png';
import search from '../../../assets/icons/searchBlack.png';
import contact from '../../../assets/icons/arrow.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Edunity Logo" />
        </div>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="#home" className={styles.active}>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#instructor">Instructor</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Right Side Actions */}
        <div className={styles.actions}>
          <button className={styles.loginBtn}><img src={search} className={styles.search} alt="search" /></button>
          <button className={styles.joinBtn}>Contact Us<img src={contact} className={styles.contact} alt="contact" /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;