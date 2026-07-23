import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { BrutalButton } from '../ui/BrutalButton';
import { FaTimes, FaSpinner, FaUpload } from 'react-icons/fa';

interface ProjectFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [title, setTitle] = useState('');
  const [descEn, setDescEn] = useState('');
  const [descId, setDescId] = useState('');
  const [projectType, setProjectType] = useState<'web' | 'mobile'>('web');
  const [tags, setTags] = useState('');

  const [showRepo, setShowRepo] = useState(false);
  const [repoUrl, setRepoUrl] = useState('');
  const [showDemo, setShowDemo] = useState(false);
  const [demoUrl, setDemoUrl] = useState('');

  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!imageFile) {
        throw new Error('Please select an image file');
      }

      // 1. Upload Image
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
      const filePath = `projects/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('project_image')
        .upload(filePath, imageFile);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('project_image')
        .getPublicUrl(filePath);

      // 2. Insert into Database
      const tagArray = tags.split(',').map(t => t.trim()).filter(Boolean);

      const { error: dbError } = await supabase
        .from('projects')
        .insert({
          title,
          description_en: descEn,
          description_id: descId,
          project_type: projectType,
          image_url: publicUrl,
          tags: tagArray,
          show_repo: showRepo,
          repo_url: showRepo ? repoUrl : null,
          show_demo: showDemo,
          demo_url: showDemo ? demoUrl : null
        });

      if (dbError) throw dbError;

      onSuccess();
      onClose();
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm overflow-y-auto pt-24 pb-12">
      <div className="bg-neo-card text-neo-bg border-4 border-neo-border p-6 md:p-8 shadow-brutal-lg max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neo-border hover:text-neo-primary transition-colors"
        >
          <FaTimes size={24} />
        </button>

        <h2 className="text-3xl font-heading font-black mb-6 border-b-4 border-neo-border pb-2 inline-block">
          Add New Project
        </h2>

        {error && (
          <div className="bg-red-100 border-2 border-red-500 text-red-700 p-3 font-bold mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block font-bold mb-1">Title</label>
                <input required type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full border-4 border-neo-border p-2 bg-white" />
              </div>
              <div>
                <label className="block font-bold mb-1">Description (EN)</label>
                <textarea required rows={3} value={descEn} onChange={e => setDescEn(e.target.value)} className="w-full border-4 border-neo-border p-2 bg-white" />
              </div>
              <div>
                <label className="block font-bold mb-1">Description (ID)</label>
                <textarea required rows={3} value={descId} onChange={e => setDescId(e.target.value)} className="w-full border-4 border-neo-border p-2 bg-white" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-bold mb-1">Project Type</label>
                <select value={projectType} onChange={e => setProjectType(e.target.value as 'web' | 'mobile')} className="w-full border-4 border-neo-border p-2 bg-white">
                  <option value="web">Web (Landscape)</option>
                  <option value="mobile">Mobile (Portrait)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold mb-1">Image</label>
                <div className="border-4 border-dashed border-neo-border p-4 bg-white text-center">
                  <input type="file" id="image" accept="image/*" className="hidden" onChange={e => setImageFile(e.target.files?.[0] || null)} />
                  <label htmlFor="image" className="cursor-pointer flex flex-col items-center">
                    <FaUpload size={24} className="mb-2" />
                    <span className="font-bold">{imageFile ? imageFile.name : 'Choose Image'}</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-bold mb-1">Tags (comma separated)</label>
                <input required type="text" placeholder="React, Tailwind, Node.js" value={tags} onChange={e => setTags(e.target.value)} className="w-full border-4 border-neo-border p-2 bg-white" />
              </div>
            </div>
          </div>

          <div className="border-t-4 border-neo-border pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 font-bold cursor-pointer">
                <input type="checkbox" checked={showRepo} onChange={e => setShowRepo(e.target.checked)} className="w-5 h-5 border-4 border-neo-border accent-neo-primary" />
                Show Repository Link
              </label>
              {showRepo && (
                <input type="url" placeholder="https://github.com/..." value={repoUrl} onChange={e => setRepoUrl(e.target.value)} className="w-full border-4 border-neo-border p-2 bg-white" required />
              )}
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 font-bold cursor-pointer">
                <input type="checkbox" checked={showDemo} onChange={e => setShowDemo(e.target.checked)} className="w-5 h-5 border-4 border-neo-border accent-neo-primary" />
                Show Live Demo Link
              </label>
              {showDemo && (
                <input type="url" placeholder="https://..." value={demoUrl} onChange={e => setDemoUrl(e.target.value)} className="w-full border-4 border-neo-border p-2 bg-white" required />
              )}
            </div>
          </div>

          <BrutalButton type="submit" disabled={loading} className="w-full justify-center py-4 text-xl mt-8">
            {loading ? <FaSpinner className="animate-spin mx-auto" /> : 'Publish Project'}
          </BrutalButton>
        </form>
      </div>
    </div>
  );
};
