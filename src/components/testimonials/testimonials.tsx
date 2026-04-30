import Image from "next/image";
import styles from "@/styles/Section6.module.css"
import "@/app/globals.css"
import Card from "@/components/cards/FeatureCard"
import cards from "@/app/data/cards.json"
import data from "@/app/data/headers.json"
export default function Section6() {
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
                    <div className={styles.image}>
                        <Image
                            src="/images/Blob4.png"
                            alt="blob"
                            width={624}
                            height={544}
                            className={styles.blob4}
                        />
                        <Image
                            src="/images/Picture1.png"
                            alt=""
                            width={226}
                            height={238}
                            className={styles.pic1}
                        />
                        <Image
                            src="/images/Picture2.png"
                            alt=""
                            width={360}
                            height={160}
                            className={styles.pic2}
                        />

                        <Image
                            src="/images/Picture3.png"
                            alt=""
                            width={290}
                            height={160}
                            className={styles.pic3}
                        />
                        <Image
                            src="/images/Avatar.png"
                            alt=""
                            width={120}
                            height={120}
                            className={styles.avatar}
                        />
                        <div className={styles.cards}>
                            <Card
                                type={cards[1].type}
                                title={cards[1].title}
                                description={cards[1].description}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
}
