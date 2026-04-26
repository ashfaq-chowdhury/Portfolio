'use client';

import { useState, useEffect } from 'react';
import ProjectForm from './components/ProjectForm';
import ProfileForm from './components/ProfileForm';
import ProjectsList from './components/ProjectsList';
import styles from './admin.module.css';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'projects' | 'profile'>('projects');
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [refreshProjects, setRefreshProjects] = useState(0);

  return (
    <div className={styles.adminContainer}>
      <div className={styles.adminHeader}>
        <h1>Admin Dashboard</h1>
        <p>Manage your portfolio content</p>
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tabBtn} ${activeTab === 'projects' ? styles.active : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          📁 Projects
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === 'profile' ? styles.active : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          👤 Profile
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'projects' && (
          <div>
            <div className={styles.projectsHeader}>
              <h2>My Projects</h2>
              <button
                className={styles.btnAdd}
                onClick={() => setIsAddingProject(!isAddingProject)}
              >
                {isAddingProject ? '❌ Cancel' : '✅ Add Project'}
              </button>
            </div>

            {isAddingProject && (
              <ProjectForm
                onSuccess={() => {
                  setIsAddingProject(false);
                  setRefreshProjects(prev => prev + 1);
                }}
              />
            )}

            <ProjectsList refreshKey={refreshProjects} />
          </div>
        )}

        {activeTab === 'profile' && (
          <div>
            <h2>Update Profile</h2>
            <ProfileForm />
          </div>
        )}
      </div>
    </div>
  );
}
