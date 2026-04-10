import StatItem from "./StatItem";
import statsData from "@/app/data/stats.json";
import styles from "@/app/styles/stats.module.css";

export default function Stats() {
  const { stats } = statsData;

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {stats.map((stat, i) => (
          <StatItem
            key={i}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}