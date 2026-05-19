import Image from "next/image";
import styles from "@/styles/Section6.module.css"
import "@/app/globals.css"
import data from "@/app/data/headers.json"
export default function Features() {
    return (
        <section className={styles.sectionHeader}>
            <div className={styles.Header}>
                <div className={styles.lcontainer}>
                    <h1 className={styles.title}>
                        <span className={styles.line}>
                            {data[5].header[0]}{" "}
                            <span className={styles.features}>
                                {data[5].header[1]}</span>
                            <span>
                                <Image
                                    src="/images/vector14.png"
                                    alt="underline"
                                    width={250.5}
                                    height={12.4}
                                    className={styles.vector}
                                />
                            </span>
                        </span>
                    </h1>
                    <p className={styles.para}>{data[5].para}</p>
                    <span className={styles.link}><a href=""></a>{data[5].link}</span>
                </div>
                <div className={styles.rcontainer}>
                    <Image
                        src="/images/Right.svg"
                        alt="Features visual with cards and images"
                        width={624}
                        height={544}
                        className={styles.rightImage}
                    />
                </div>
            </div>

        </section >
    );
}