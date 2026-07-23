import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-12">
        <Outlet />
      </main>
      <footer className="border-t-4 border-neo-border px-6 py-12 flex flex-col items-center gap-8 text-center font-body font-medium">
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/rafli-rizalfa" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white border-4 border-neo-border flex items-center justify-center shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all text-neo-bg">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/EnvRfli" target="_blank" rel="noreferrer" className="w-14 h-14 bg-neo-primary text-white border-4 border-neo-border flex items-center justify-center shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all">
            <FaGithub size={28} />
          </a>
          <a href="https://instagram.com/m.rafliagusta" target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#ffc3d6] border-4 border-neo-border flex items-center justify-center shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all text-neo-bg">
            <FaInstagram size={28} />
          </a>
          <a href="https://facebook.com/fpfrafli" target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#add8e6] border-4 border-neo-border flex items-center justify-center shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all text-neo-bg">
            <FaFacebook size={28} />
          </a>
        </div>
        <p className="text-xl">© {new Date().getFullYear()} M. Rafli Agusta Rizalfa.</p>
      </footer>
    </div>
  );
};
