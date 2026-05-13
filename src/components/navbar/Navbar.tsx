"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import styles from "@/styles/navbar.module.css"
import "@/app/globals.css"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className={styles.navbarContainer}>

        <div className={styles.leftSection}>
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={103}
            height={35}
            priority
          />

          <ul className={styles.navigationMenu}>
            <li className={styles.navItem}>Products</li>
            <li className={styles.navItem}>Solutions</li>
            <li className={styles.navItem}>Pricing</li>

            <li className={styles.dropdownItem}>
              Resources
              <Image
                src="/icons/chevron-down.png"
                alt="arrow"
                width={24}
                height={24}
              />
            </li>
          </ul>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.actionButtons}>
            <button className={styles.loginButton}>Log In</button>
            <button className={styles.signUpButton}>Sign Up Now</button>
          </div>

          <button
            className={styles.mobileMenuIcon}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavList}>
            <li className={styles.mobileNavItem}>Products</li>
            <li className={styles.mobileNavItem}>Solutions</li>
            <li className={styles.mobileNavItem}>Pricing</li>
          </ul>
          <div className={styles.mobileActionButtons}>
            <button className={styles.loginButton}>Log In</button>
            <button className={styles.signUpButton}>Sign Up Now</button>
          </div>
        </div>
      )}
    </nav>
  );
}