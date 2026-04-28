import Image from "next/image";
import data from "@/app/data/footer.json";
import styles from "@/style/footer.module.css"
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                    <div className={styles.logo}>
                        <Image
                            src="/images/Logo2.png"
                            alt="logo"
                            width={173}
                            height={35}
                        />
                    </div>
                    {data.sections.map((section, index) => (
                        <div key={index} className={styles.col}>
                            <h4 className={styles.footert}>{section.title}</h4>

                            {section.links.map((link, i) => (
                                <p key={i} className={styles.link}>{link}
                                    {link === "Accessibility" &&(
                                        <span className={styles.beta}>BETA</span>
                                    )}
                                </p>
                            ))}
                        </div>
                    ))}
            </div>
            <div className={styles.div}></div>
            <div className={styles.bottom}>
                <p>uteach @ {new Date().getFullYear()}. All rights reserved.</p>
                <div className={styles.links2}>
                    <span>Terms</span>
                    <span>Privacy</span>
                    <span className={styles.contact}>Contact</span>

                    <div className={styles.icon}>
                        <Image src="/icons/world.png" alt="" width={24} height={24} />
                        <span>EN</span>
                    </div>

                    <div className={styles.icon}>
                        <Image src="/icons/euro.png" alt="" width={24} height={24} />
                        <span>EUR</span>
                    </div>

                    <Image src="/icons/access.png" alt="" width={24} height={24} />
                </div>
            </div>
        </footer>
    );
}