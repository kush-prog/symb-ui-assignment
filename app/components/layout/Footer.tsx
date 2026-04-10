import Image from "next/image";
import Link from "next/link";
import footerData from "@/app/data/footer.json";
import styles from "@/app/styles/footer.module.css";

export default function Footer() {
  const { logo, columns, bottom } = footerData;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columnsGrid}>
          <div className={styles.logoCol}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={styles.logoImg}
            />
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className={styles.columnTitle}>{column.title}</h3>
              <ul className={styles.linkList}>
                {column.links.map((link) => (
                  <li key={link.label} className={link.badge ? styles.badgeRow : ""}>
                    <Link href={link.href} className={styles.link}>{link.label}</Link>
                    {link.badge && (
                      <span className={styles.badge}>
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>{bottom.copyright}</p>

          <div className={styles.bottomLinks}>
            {bottom.links.map((link) => (
              <Link key={link.label} href={link.href} className={styles.bottomLink}>
                {link.label}
              </Link>
            ))}

            <span className={styles.locale}>🌐 {bottom.locale.language}</span>
            <span className={styles.locale}>€ {bottom.locale.currency}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}