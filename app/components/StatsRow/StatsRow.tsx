import { Stat } from '../../types';
import styles from './StatsRow.module.css';

interface StatsRowProps {
  stats: Stat[];
}

export default function StatsRow({ stats }: StatsRowProps) {
  return (
    <div className={styles.statsRow}>
      {stats.map((stat, index) => (
        <div key={index}>
          <div className={styles.statNum}>
            {stat.value}
          </div>
          <div className={styles.statLabel}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
