import styles from "./testimonialCard.module.css"
import Image from "next/image";

type CardProps = {
  para: string;
  image: string;
  name: string;
  job: string;
};
export default function Card({para, image, name, job}: CardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.para}>
                {para}
            </div>
            <div className={styles.con}>
                <Image
                    src={image}
                    alt="underline"
                    width={64}
                    height={64}
                    className={styles.image}
                />
                <div className={styles.con2}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.job}>{job}</p>
                </div>
            </div>
        </div>
    );

}
