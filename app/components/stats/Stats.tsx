import StatItem from "./StatItem";
import statsData from "@/app/data/stats.json";

export default function Stats() {
  const { stats } = statsData;

  return (
    <section className="bg-[#0B1B33] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

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