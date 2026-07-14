'use client';

import { useState } from 'react';
import { Project } from '../../types';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';

const initialProjects: Project[] = [
  { id: 1, title: "Verde Studio Redesign", description: "A full rebrand for a sustainable architecture firm.", tag: "Branding · Web", emoji: "🌿", gradientClass: "p1" },
  { id: 2, title: "Pulsar Dashboard", description: "Analytics platform for real-time data monitoring.", tag: "Product · SaaS", emoji: "🌐", gradientClass: "p2" },
  { id: 3, title: "Hue Color System", description: "Mobile-first design tool for creative professionals.", tag: "App · iOS", emoji: "🎨", gradientClass: "p3" },
];

const expandedProjects: Project[] = [
  { id: 4, title: "Stellar App Platform", description: "Cloud-based project management for distributed teams.", tag: "Product · Web", emoji: "🚀", gradientClass: "p1" },
  { id: 5, title: "Cinematic Brand Kit", description: "Video-first branding system for creative studios.", tag: "Branding · Motion", emoji: "🎬", gradientClass: "p2" },
  { id: 6, title: "DataMind Analytics", description: "AI-powered insights platform for business intelligence.", tag: "Analytics · AI", emoji: "📊", gradientClass: "p3" },
];

export default function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleProjects = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="work" className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Selected work</h2>
        <button
          onClick={toggleProjects}
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
