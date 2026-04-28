import Image from "next/image";
import styles from "@/style/Section3.module.css"
import "@/app/globals.css"
import data from "@/app/data/headers.json"
export default function Section3() {
    return (
        <section>
            <div className={styles.Header}>
                <div className={styles.lcontainer}>
                    <div className={styles.text}>
                        <h1 className={styles.title}>
                            <span className={styles.line}>
                                <span>
                                    {data[3].header[0]}
                                </span>
                                <Image
                                    src="/icons/Aero.png"
                                    alt="underline"
                                    width={64}
                                    height={64}
                                    className={styles.aero}
                                />
                            </span>
                            {" "}{data[3].header[1]}
                        </h1>
                        <p className={styles.para}>{data[3].para}</p>
                        <span className={styles.link}><a href=""></a>{data[3].link}</span>
                    </div>
                </div>

                <div className={styles.rcontainer}>
                    <div className={styles.image}>
                        <Image
                            src="/images/Col.png"
                            alt="loding"
                            width={624}
                            height={544}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}