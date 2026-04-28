import Image from "next/image";
import "@/app/globals.css"
import styles from "@/style/Section4.module.css"

export default function Section5() {
    return (
        <section className={styles.section}>
            <div className={styles.border}>
                <div className={styles.container}>

                    <div className={styles.card}>
                        <Image src="/icons/Icon1.png" alt="" width={64} height={64} />
                        <h3 className={styles.number}>195</h3>
                        <p className={styles.label}>user countries</p>
                    </div>

                    <div className={styles.card}>
                        <Image src="/icons/Icon2.png" alt="" width={64} height={64} />
                        <h3 className={styles.number}>1M</h3>
                        <p className={styles.label}>valued teachers</p>
                    </div>

                    <div className={styles.card}>
                        <Image src="/icons/Icon3.png" alt="" width={64} height={64} />
                        <h3 className={styles.number}>17M</h3>
                        <p className={styles.label}>happy students</p>
                    </div>

                </div>
            </div>
        </section>
    );
}