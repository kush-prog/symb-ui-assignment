import Image from "next/image";
import styles from "@/style//Section7.module.css";
import data from "@/app/data/headers.json"

export default function Section8() {
    return (
        <section className={styles.section}>
            <Image
                src="/images/sec8-bg.png"
                alt="background"
                fill
                className={styles.desktopBg}
            />
            <Image
                src="/images/mobile-sec8.png"
                alt="background"
                fill
                className={styles.mobileBg}
            />
            <div className={styles.content}>
                <h2 className={styles.title}>
                    {data[6].header}
                </h2>
                <p className={styles.para}>
                    {data[6]?.para?.[0]}
                    <br />
                    {data[6]?.para?.[1]}
                </p>

                <button className={styles.button}>
                    Sign Up Now
                </button>
            </div>

        </section>
    );
}