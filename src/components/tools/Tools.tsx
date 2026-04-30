import Image from "next/image";
import styles from "@/styles/Section2.module.css"
import "@/app/globals.css"
import Card from "@/components/cards/LessonCard"
import cards from "@/app/data/cards.json"
import data from "@/app/data/headers.json"
export default function Section2() {
    return (
        <section>
            <div className={styles.Header}>
                <div className={styles.lcontainer}>
                    <h1 className={styles.title}>
                        <span className={styles.line}>
                            {data[2].header[0]}{" "}
                            <span className={styles.head}>
                                {data[2].header[1]}
                            </span>
                            <Image
                                src="/images/vector14.png"
                                alt="underline"
                                width={250.5}
                                height={12.4}
                                className={styles.vector}
                            />
                        </span>
                        {" "}{data[2].header[2]}
                    </h1>
                    <p className={styles.para}>{data[2].para}</p>
                    <p className={styles.parab}>{data[2]?.bullet?.[0]}</p>
                    <p className={styles.parab}>{data[2]?.bullet?.[1]}</p>
                    <p className={styles.parab}>{data[2]?.bullet?.[2]}</p>
                    <span className={styles.link}><a href=""></a>{data[2].link}</span>
                </div>

                <div className={styles.rcontainer}>
                    <Image
                        src="/images/Blob3.png"
                        alt="blob"
                        width={624}
                        height={544}
                        className={styles.blob3}
                    />
                    <Image
                        src="/images/Desktop.png"
                        alt="blob"
                        width={624}
                        height={400}
                        className={styles.desktop}
                    />
                    <Image
                        src="/images/Desktopmb.png"
                        alt="blob"
                        width={500}
                        height={280}
                        className={styles.desktopmb}
                    />
                    <div className={styles.cards}>
                        {cards.map((card, index) => (
                            <Card
                                key={index}
                                type={card.type}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </section >
    );
}
