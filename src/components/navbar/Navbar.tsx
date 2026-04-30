import { Menu } from "lucide-react";
import Image from "next/image";
import styles from "@/styles/navbar.module.css"
import "@/app/globals.css"

export default function Navbar() {
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

          <div className={styles.mobileMenuIcon}>
            <Menu size={28} />
          </div>
        </div>

      </div>
    </nav>
  );
}