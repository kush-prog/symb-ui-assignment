import Image from "next/image";
import styles from "@/styles/Section1.module.css"
import "@/app/globals.css"
import data from "@/app/data/headers.json"
export default function Section2() {
    return (
        <section className="bg-[#F1F5F9] overflow-hidden">
            <div className={styles.heroSection}>
                <div className={styles.topContentContainer}>
                    <h1 className={styles.mainHeading}>
                        <span>{data[1].header[0]}{" "}</span>
                        <span className={styles.textUnderlineContainer}>
                            <span className={styles.highlightedTextContainer}>{data[1].header[1]}</span>
                            <Image
                                src="/images/vector14.png"
                                alt="underline"
                                width={200}
                                height={20}
                                className={styles.underlineImage}
                            />
                        </span>
                        {data[1].header[2]} 
                    </h1>
                    <p className={styles.subheadingText}>{data[1]?.para?.[0]} <br /> {data[1]?.para?.[1]}</p>
                </div>
                <div className={styles.backgroundShapesContainer}>
                    <Image
                        src="/images/Blobl.png"
                        alt="left blob"
                        width={561}
                        height={652}
                        className={styles.leftBackgroundShape}
                    />
                    <Image
                        src="/images/Blobr.png"
                        alt="right blob"
                        width={561}
                        height={652}
                        className={styles.rightBackgroundShape}
                    />
                </div>
                <div className={styles.heroImagesContainer}>
                    <Image
                        src="/images/screen.png"
                        alt="scren"
                        width={1200}
                        height={700}
                        className={styles.desktopMockupImage}
                    />
                    <Image
                        src="/images/screenmb.png"
                        alt="scren"
                        width={561}
                        height={652}
                        className={styles.mobileMockupImage}
                    />
                    <Image
                        src="/images/Lines.png"
                        alt="lines"
                        width={1040}
                        height={50}
                        className={styles.decorativeLines}
                    />
                    <div className={styles.appIconsRow}>
                        <Image  className={styles.appIcon} src="/icons/app1.png" alt="" width={64} height={64} />
                        <Image className={styles.appIcon} src="/icons/app2.png" alt="" width={64} height={64} />
                        <Image className={styles.appIcon} src="/icons/app3.png" alt="" width={64} height={64} />
                        <Image className={styles.appIcon} src="/icons/app4.png" alt="" width={64} height={64} />
                        <Image className={styles.appIcon} src="/icons/app5.png" alt="" width={64} height={64} />
                        <Image className={styles.appIcon} src="/icons/app6.png" alt="" width={64} height={64} />
                        <Image className={styles.appIcon} src="/icons/app7.png" alt="" width={64} height={64} />
                        <Image className={styles.appIcon} src="/icons/app8.png" alt="" width={64} height={64} />
                        <Image className={styles.appIcon} src="/icons/app9.png" alt="" width={64} height={64} />
                    </div>
                </div>
            </div>
        </section>
    );
}