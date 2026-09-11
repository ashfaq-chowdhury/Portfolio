'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ExpertiseSection.module.css';

interface ExpertiseItem {
  label: string;
  sublabel: string;
  percentage: number;
  color: string;
}

const expertise: ExpertiseItem[] = [
  { label: "Web Dev", sublabel: "React · Node.js · SQL", percentage: 80, color: "#c8f04d" },
  { label: "Core CS", sublabel: "DSA · OOP · DBMS", percentage: 92, color: "#c8f04d" },
  { label: "Programming", sublabel: "C++ · Java · JS", percentage: 88, color: "#c8f04d" },
  { label: "AI / ML", sublabel: "Python · Scikit-learn", percentage: 72, color: "#c8f04d" },
  { label: "Android", sublabel: "Kotlin · Jetpack", percentage: 20, color: "#c8f04d" },
];

interface CircleChartProps {
  item: ExpertiseItem;
  animate: boolean;
}

function CircleChart({ item, animate }: CircleChartProps) {
  const radius = 52;
  const stroke = 7;
  const normalizedRadius = radius - stroke;
  const circumference = 2 * Math.PI * normalizedRadius;
  const offset = circumference - (animate ? item.percentage / 100 : 0) * circumference;

  return (
    <div className={styles.chartCard}>
      <div className={styles.svgWrapper}>
        <svg width={radius * 2} height={radius * 2}>
          {/* Track */}
          <circle
            className={styles.track}
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            fill="none"
            strokeWidth={stroke}
          />
          {/* Progress */}
          <circle
            className={styles.progress}
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            fill="none"
            strokeWidth={stroke}
            stroke={item.color}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transformOrigin: `${radius}px ${radius}px`,
              transform: 'rotate(-90deg)',
              transition: animate ? 'stroke-dashoffset 1.4s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            }}
          />
        </svg>
        <div className={styles.percentLabel}>
          {animate ? item.percentage : 0}<span className={styles.percentSign}>%</span>
        </div>
      </div>
      <div className={styles.chartLabel}>{item.label}</div>
      <div className={styles.chartSublabel}>{item.sublabel}</div>
    </div>
  );
}

export default function ExpertiseSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="expertise" className={styles.section} ref={sectionRef}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Expertise</h2>
        <p className={styles.sectionSubtitle}>Skill depth across my technology stack</p>
      </div>
      <div className={styles.chartsGrid}>
        {expertise.map((item, i) => (
          <CircleChart key={i} item={item} animate={visible} />
        ))}
      </div>
    </section>
  );
}
