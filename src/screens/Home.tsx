import React, { useEffect, useState } from 'react';
import { BrutalButton } from '../components/ui/BrutalButton';
import { BrutalCard } from '../components/ui/BrutalCard';
import { BrutalBadge } from '../components/ui/BrutalBadge';
import { mockProfile, mockExperiences, technicalSkills } from '../data/mockData';
import { useLanguageStore } from '../store/useLanguageStore';
import { useAdminStore } from '../store/useAdminStore';
import { supabase } from '../lib/supabase';
import type { Project } from '../models/project.types';
import { ProjectForm } from '../components/admin/ProjectForm';
import { FaGithub, FaExternalLinkAlt, FaPlus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import profileImg from '../assets/profile3.jpeg';

export const Home: React.FC = () => {
  const { lang } = useLanguageStore();
  const { isAdmin } = useAdminStore();

  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [projectFilter, setProjectFilter] = useState<'all' | 'mobile' | 'web'>('all');

  const profile = mockProfile[lang];
  const experiences = mockExperiences[lang];

  const text = {
    en: {
      hello: "Hello, World!",
      im: "I'm",
      viewWork: "View My Work",
      contactMe: "Contact Me",
      techSkills: "Technical Skills",
      experience: "Experience",
      projectsTitle: "Featured Projects",
      techStack: "Tech Stack:",
      contactTitle: "Let's Talk!",
      fullName: "Full Name",
      yourEmail: "Your Email",
      yourMessage: "Your Message",
      send: "Send Message",
      noProjects: "No projects found.",
      liveDemo: "Live Demo",
      repository: "Repository",
      addProject: "Add Project"
    },
    id: {
      hello: "Halo Dunia!",
      im: "Saya",
      viewWork: "Lihat Karya Saya",
      contactMe: "Hubungi Saya",
      techSkills: "Keahlian Teknis",
      experience: "Pengalaman Kerja",
      projectsTitle: "Proyek Unggulan",
      techStack: "Teknologi:",
      contactTitle: "Mari Berbincang!",
      fullName: "Nama Lengkap",
      yourEmail: "Email Anda",
      yourMessage: "Pesan Anda",
      send: "Kirim Pesan",
      noProjects: "Tidak ada proyek.",
      liveDemo: "Lihat Demo",
      repository: "Repositori",
      addProject: "Tambah Proyek"
    }
  };

  const t = text[lang];

  const fetchProjects = async () => {
    setLoadingProjects(true);
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setProjects(data as Project[]);
    }
    setLoadingProjects(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(p => {
    if (projectFilter === 'all') return true;
    return p.project_type === projectFilter;
  });

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section id="home" className="flex flex-col lg:flex-row items-center gap-16 pt-12 md:pt-24">
        <div className="flex-1 space-y-8 z-10">
          <div className="inline-block px-4 py-2 bg-neo-primary text-white border-4 border-neo-border shadow-brutal-sm transform -rotate-3 mb-2">
            <h2 className="text-xl font-heading font-bold m-0 leading-none">{t.hello}</h2>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1]">
            {t.im} <br />
            <span className="text-neo-card bg-neo-bg border-4 border-neo-border px-6 py-2 inline-block mt-4 shadow-brutal transform rotate-1">
              {profile.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-body font-medium leading-relaxed max-w-2xl bg-neo-card text-neo-bg p-6 border-4 border-neo-border shadow-brutal relative bg-[#f4f0e6]">
            <span className="absolute -top-4 -left-4 w-8 h-8 bg-neo-secondary border-4 border-neo-border rounded-full"></span>
            {profile.role}
            <br />
            <span className="text-base md:text-lg block mt-4 text-gray-900">
              {profile.bio}
            </span>
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <BrutalButton onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              {t.viewWork}
            </BrutalButton>
            <BrutalButton
              variant="secondary"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t.contactMe}
            </BrutalButton>
          </div>
        </div>

        {/* Profile Image & Decorative Elements */}
        <div className="relative w-full max-w-[320px] mx-auto lg:mx-0 lg:ml-auto mt-12 lg:mt-0">
          {/* Main Photo Container */}
          <div className="relative z-10 bg-neo-secondary border-4 border-neo-border shadow-brutal-lg p-3 transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="border-4 border-neo-border overflow-hidden bg-neo-card">
              <img src={profileImg} alt="Profile" className="w-full h-auto object-cover aspect-[4/5] object-top grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          </div>

          {/* Decorative Floating Elements */}
          <div className="absolute -top-6 -right-4 md:-right-6 w-14 h-14 bg-neo-primary border-4 border-neo-border rounded-full shadow-brutal flex items-center justify-center z-20 transform hover:scale-110 transition-transform cursor-pointer">
            <span className="text-white font-bold text-2xl">✧</span>
          </div>

          <div className="absolute top-1/2 -left-6 md:-left-10 w-10 h-10 bg-neo-bg border-4 border-neo-border shadow-brutal transform rotate-45 z-0 opacity-50"></div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-neo-secondary border-4 border-neo-border rounded-none shadow-brutal"></div>
          <h2 className="text-4xl md:text-5xl border-b-4 border-neo-border inline-block pb-2">{t.techSkills}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <BrutalCard key={category} className="flex flex-col h-full bg-[#f4f0e6]">
              <h3 className="text-xl mb-4 capitalize border-b-2 border-neo-border pb-2 inline-block">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <BrutalBadge key={skill} className="bg-white">{skill}</BrutalBadge>
                ))}
              </div>
            </BrutalCard>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="space-y-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-neo-primary border-4 border-neo-border rounded-full shadow-brutal"></div>
          <h2 className="text-4xl md:text-5xl border-b-4 border-neo-border inline-block pb-2">{t.experience}</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <BrutalCard key={exp.id} className="relative bg-[#f4f0e6]">
              {/* Date Badge */}
              <div className="absolute -top-4 right-4 bg-neo-secondary px-4 py-1 border-4 border-neo-border shadow-brutal-sm font-bold text-neo-bg">
                {exp.startDate} - {exp.endDate}
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-neo-primary mt-2">{exp.company}</h3>
              <p className="text-xl font-bold mb-4">{exp.role}</p>
              <ul className="list-disc list-inside space-y-2 mb-6 font-body text-lg">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 border-t-2 border-neo-border pt-4 items-center">
                <span className="font-bold mr-2 text-lg">{t.techStack}</span>
                {exp.techStack.map(tech => (
                  <BrutalBadge key={tech}>{tech}</BrutalBadge>
                ))}
              </div>
            </BrutalCard>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-12">
        {showProjectForm && (
          <ProjectForm onClose={() => setShowProjectForm(false)} onSuccess={fetchProjects} />
        )}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white border-4 border-neo-border transform rotate-45 shadow-brutal"></div>
            <h2 className="text-4xl md:text-5xl border-b-4 border-neo-border inline-block pb-2">{t.projectsTitle}</h2>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <button 
              onClick={() => setProjectFilter('all')} 
              className={`font-bold font-heading border-4 border-neo-border px-6 py-2 transition-all shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none ${projectFilter === 'all' ? 'bg-neo-primary text-white' : 'bg-white text-neo-bg'}`}
            >
              All
            </button>
            <button 
              onClick={() => setProjectFilter('mobile')} 
              className={`font-bold font-heading border-4 border-neo-border px-6 py-2 transition-all shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none ${projectFilter === 'mobile' ? 'bg-neo-primary text-white' : 'bg-white text-neo-bg'}`}
            >
              Mobile
            </button>
            <button 
              onClick={() => setProjectFilter('web')} 
              className={`font-bold font-heading border-4 border-neo-border px-6 py-2 transition-all shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none ${projectFilter === 'web' ? 'bg-neo-primary text-white' : 'bg-white text-neo-bg'}`}
            >
              Website
            </button>
          </div>
        </div>
        
        {isAdmin && (
          <div className="flex justify-end">
            <BrutalButton onClick={() => setShowProjectForm(true)} className="flex items-center gap-2">
              <FaPlus /> {t.addProject}
            </BrutalButton>
          </div>
        )}

        {loadingProjects ? (
          <div className="py-12 text-center font-bold text-2xl animate-pulse">Loading projects...</div>
        ) : projects.length === 0 ? (
          <div className="py-12 text-center font-bold text-xl bg-[#f4f0e6] border-4 border-neo-border text-gray-600">
            {t.noProjects}
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <BrutalCard hoverEffect className="flex flex-col h-full bg-[#fdfbf7]">
                
                {/* Image Container */}
                <div className={`w-full border-4 border-neo-border bg-neo-card mb-4 overflow-hidden flex items-center justify-center ${project.project_type === 'mobile' ? 'h-56' : 'h-48'}`}>
                  <img 
                    src={project.image_url} 
                    alt={project.title}
                    className={`w-full h-full transition-all duration-500 ${project.project_type === 'mobile' ? 'object-contain p-2' : 'object-cover'}`}
                  />
                </div>
                
                <div className="flex justify-between items-start mb-2 gap-2">
                  <h3 className="text-2xl font-bold text-neo-primary line-clamp-2">{project.title}</h3>
                  <BrutalBadge className="uppercase text-[10px] bg-neo-primary text-white whitespace-nowrap mt-1">{project.project_type}</BrutalBadge>
                </div>
                
                <p className="font-body mb-6 text-base flex-grow text-neo-bg">
                  {lang === 'en' ? project.description_en : project.description_id}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t-2 border-neo-border mb-6">
                  {project.tags.map(tag => (
                    <BrutalBadge key={tag} className="text-xs bg-white text-neo-bg">{tag}</BrutalBadge>
                  ))}
                </div>
                
                <div className="flex gap-2 mt-auto">
                  {project.show_demo && project.demo_url && (
                    <a href={project.demo_url} target="_blank" rel="noreferrer" className="flex-1">
                      <BrutalButton className="w-full justify-center flex items-center gap-2 text-sm py-2 px-2">
                        <FaExternalLinkAlt /> {t.liveDemo}
                      </BrutalButton>
                    </a>
                  )}
                  {project.show_repo && project.repo_url && (
                    <a href={project.repo_url} target="_blank" rel="noreferrer" className="flex-1">
                      <BrutalButton variant="secondary" className="w-full justify-center flex items-center gap-2 text-sm py-2 px-2">
                        <FaGithub /> {t.repository}
                      </BrutalButton>
                    </a>
                  )}
                </div>
              </BrutalCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="space-y-8 pt-12 flex flex-col items-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-12 bg-neo-secondary border-4 border-neo-border shadow-brutal transform -rotate-12"></div>
          <h2 className="text-4xl md:text-5xl border-b-4 border-neo-border inline-block pb-2">{t.contactTitle}</h2>
        </div>
        <div className="w-full max-w-2xl mx-auto">
          <BrutalCard className="bg-[#f4f0e6]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const body = formData.get('message');
                window.location.href = `mailto:mrafliagusta@gmail.com?subject=Portfolio Contact from ${name}&body=${body}`;
              }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-heading font-bold text-lg">{t.fullName}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="px-4 py-3 bg-neo-card border-4 border-neo-border shadow-brutal-sm font-body text-lg focus:outline-none focus:shadow-brutal transition-shadow"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-heading font-bold text-lg">{t.yourEmail}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="px-4 py-3 bg-neo-card border-4 border-neo-border shadow-brutal-sm font-body text-lg focus:outline-none focus:shadow-brutal transition-shadow"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-heading font-bold text-lg">{t.yourMessage}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="px-4 py-3 bg-neo-card border-4 border-neo-border shadow-brutal-sm font-body text-lg focus:outline-none focus:shadow-brutal transition-shadow resize-y"
                ></textarea>
              </div>
              <BrutalButton type="submit" variant="primary" className="mt-4 text-xl self-start">
                {t.send}
              </BrutalButton>
            </form>
          </BrutalCard>
        </div>
      </section>
    </div>
  );
};
