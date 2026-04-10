"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import navbarData from "@/app/data/navbar.json";
import styles from "@/app/styles/navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { logo, navLinks, dropdownLinks, authButtons } = navbarData;

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>

        <div className={styles.logo}>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={styles.logoImg}
          />
        </div>

        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}

          {dropdownLinks.map((link) => (
            <div key={link.label} className={styles.dropdown}>
              <span>{link.label}</span>
              <span className={styles.dropdownArrow}>▾</span>
            </div>
          ))}
        </div>

        <div className={styles.authButtons}>
          <button className={styles.loginBtn}>
            {authButtons.login}
          </button>
          <button className={styles.signupBtn}>
            {authButtons.signup}
          </button>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
        >
          <div className={styles.hamburgerLines}>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </div>
        </button>

      </div>

      {open && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.mobileLink}>
              {link.label}
            </Link>
          ))}
          {dropdownLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.mobileLink}>
              {link.label}
            </Link>
          ))}

          <div className={styles.mobileAuthSection}>
            <button className={styles.mobileLoginBtn}>{authButtons.login}</button>
            <button className={styles.mobileSignupBtn}>{authButtons.signup}</button>
          </div>
        </div>
      )}
    </nav>
  );
}