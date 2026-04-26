'use client';

import { useState } from 'react';
import styles from '../admin.module.css';

interface ProjectFormProps {
  project?: any;
  onSuccess: () => void;
}

export default function ProjectForm({ project, onSuccess }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    description: project?.description || '',
    imageUrl: project?.imageUrl || '',
    link: project?.link || '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const method = project ? 'PUT' : 'POST';
      const body = project ? { ...formData, id: project.id } : formData;

      const res = await fetch('/api/projects', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error('Failed to save project');

      setFormData({ title: '', description: '', imageUrl: '', link: '' });
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.formGroup}>
        <label>Project Title *</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter project title"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your project"
          rows={4}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Image URL</label>
        <input
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Project Link</label>
        <input
          type="url"
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="https://project-url.com"
        />
      </div>

      <button type="submit" className={styles.btnSubmit} disabled={loading}>
        {loading ? 'Saving...' : project ? 'Update Project' : 'Add Project'}
      </button>
    </form>
  );
}
