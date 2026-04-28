import Image from "next/image";
import styles from "@/style/Header.module.css"
import "@/app/globals.css"
import data from "@/app/data/headers.json"
export default function Header() {
  return (
    <section className={styles.sectionHeader}>
      <div className={styles.Header}>
        <div className={styles.lcontainer}>
          <div className={styles.text}>
            <h1 className={styles.title}>
              <span className={styles.line}>
                <span className={styles.head}>
                  {data[0].header[0]}
                </span>
                <Image
                  src="/images/vector14.png"
                  alt="underline"
                  width={190.5}
                  height={12.4}
                  className={styles.vector}
                />
              </span>
              {data[0].header[1]}
            </h1>
            <p className={styles.para}>{data[0].para}</p>
            <div className={styles.buttons}>
              <button className={styles.signup}>Sign Up Now</button>
              <button className={styles.demo}>
                <Image
                  src="/icons/demo.png"
                  alt="icon"
                  height={24}
                  width={24}
                />
                View Demo</button>
            </div>
          </div>
          <div className={styles.trust}>
            <p>
              Trusted by <span className={styles.company}>leading companies</span>
            </p>
            <div className={styles.icon}>
              <Image src="/icons/col1.png" alt="" width={32} height={28} style={{ width: "30px", height: "32px" }}/>
              <Image src="/icons/col2.png" alt="" width={32} height={28} />
              <Image src="/icons/col3.png" alt="" width={32} height={28} />
              <Image src="/icons/col4.png" alt="" width={32} height={28} />
              <Image src="/icons/col5.png" alt="" width={32} height={28} />
            </div>
          </div>
        </div>

        <div className={styles.rcontainer}>
          <div className={styles.image}>
            <Image
              src="/images/group50.png"
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