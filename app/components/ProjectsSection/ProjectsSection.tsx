'use client';

import { useState } from 'react';
import { Project } from '../../types';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';

const initialProjects: Project[] = [
  {
    id: 1,
    title: "Limitless — Full Stack Web App",
    description: "A modern full-stack web application built with React, Node.js, and PostgreSQL. Features user authentication, real-time updates, and a clean component-based UI.",
    tag: "React · Node.js · PostgreSQL",
    emoji: "🏆",
    gradientClass: "p1"
  },
  {
    id: 2,
    title: "University Portal",
    description: "A role-based academic management system built with C#. Streamlines course workflows for students, faculty, and admins — including enrollment, grade management, and profile controls.",
    tag: "C# · .NET",
    emoji: "🎓",
    gradientClass: "p2"
  },
  {
    id: 3,
    title: "Expense Tracker",
    description: "A native Android expense tracking application built with Kotlin. Helps users log, categorize, and visualize their personal finances with an intuitive mobile-first UI.",
    tag: "Kotlin · Android",
    emoji: "📱",
    gradientClass: "p3"
  },
];

const expandedProjects: Project[] = [
  {
    id: 4,
    title: "Best Thesis Project — AI/ML",
    description: "Award-winning thesis project (Best Poster Award) exploring machine learning techniques. Presented at university level with outstanding faculty recognition.",
    tag: "Python · Machine Learning",
    emoji: "🤖",
    gradientClass: "p1"
  },
  {
    id: 5,
    title: "Data Structures & Algorithms Library",
    description: "A comprehensive C++ library implementing classic data structures and algorithm patterns, built during competitive programming practice sessions.",
    tag: "C++ · DSA",
    emoji: "⚙️",
    gradientClass: "p2"
  },
];

export default function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="work" className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Selected work</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`${styles.sectionLink} ${isExpanded ? styles.sectionLinkActive : ''}`}
          style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
        >
          {isExpanded ? "Hide projects" : "All projects"}
          <span className={isExpanded ? styles.arrowRotate : ''}>→</span>
        </button>
      </div>
      <div className={styles.projectsGrid}>
        {initialProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {isExpanded && expandedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isExpanded={true}
            animationDelay={`${(index + 1) * 0.1}s`}
          />
        ))}
      </div>
    </section>
  );
}
