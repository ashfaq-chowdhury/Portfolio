'use client';

import { useState, useEffect } from 'react';
import ProjectForm from './ProjectForm';
import styles from '../admin.module.css';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  createdAt: string;
}

interface ProjectsListProps {
  refreshKey: number;
}

export default function ProjectsList({ refreshKey }: ProjectsListProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProjects();
  }, [refreshKey]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      setError('Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const res = await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      setProjects(projects.filter(p => p.id !== id));
    } catch (err) {
      setError('Failed to delete project');
    }
  };

  if (loading) return <div className={styles.loading}>Loading projects...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.projectsList}>
      {projects.length === 0 ? (
        <p className={styles.noProjects}>No projects yet. Add one to get started!</p>
      ) : (
        <div className={styles.grid}>
          {projects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              {editingId === project.id ? (
                <ProjectForm
                  project={project}
                  onSuccess={() => {
                    setEditingId(null);
                    fetchProjects();
                  }}
                />
              ) : (
                <>
                  {project.imageUrl && (
                    <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
                  )}
                  <div className={styles.projectContent}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                        View Project →
                      </a>
                    )}
                  </div>
                  <div className={styles.projectActions}>
                    <button
                      className={styles.btnEdit}
                      onClick={() => setEditingId(project.id)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className={styles.btnDelete}
                      onClick={() => deleteProject(project.id)}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
