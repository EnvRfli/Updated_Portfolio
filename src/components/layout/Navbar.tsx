import React, { useState, useEffect } from 'react';
import { useLanguageStore } from '../../store/useLanguageStore';
import { useAdminStore } from '../../store/useAdminStore';
import { FaBars, FaTimes, FaLock, FaUnlock } from 'react-icons/fa';
import { AdminLogin } from '../admin/AdminLogin';

export const Navbar: React.FC = () => {
  const { lang, toggleLanguage } = useLanguageStore();
  const { isAdmin, showAdminLogin, setShowAdminLogin } = useAdminStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const text = {
    en: { home: 'Home', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
    id: { home: 'Beranda', experience: 'Pengalaman', projects: 'Proyek', contact: 'Kontak' }
  };

  const handleScroll = (id: string) => {
    setIsMenuOpen(false); // Close mobile menu if open
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setShowAdminLogin(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setShowAdminLogin]);

  return (
    <>
      <nav className="text-neo-border border-b-4 border-neo-border bg-neo-card px-6 py-4 flex justify-between items-center sticky top-0 z-40 shadow-brutal-sm">
        {/* Logo */}
        <div className="flex items-center gap-1 font-heading font-black text-2xl tracking-tighter cursor-pointer" onClick={() => handleScroll('home')}>
          <div className="w-10 h-10 bg-neo-primary text-white border-[3px] border-neo-border flex items-center justify-center shadow-[2px_2px_0px_0px_#171717] transform -rotate-6 hover:rotate-0 transition-transform">
            R
          </div>
          <span className="ml-2 text-neo-bg">AFLI.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-body font-bold items-center text-lg">
          <button onClick={() => handleScroll('home')} className="hover:text-neo-primary hover:-translate-y-1 transition-all">
            {text[lang].home}
          </button>
          <button onClick={() => handleScroll('experience')} className="hover:text-neo-primary hover:-translate-y-1 transition-all">
            {text[lang].experience}
          </button>
          <button onClick={() => handleScroll('projects')} className="hover:text-neo-primary hover:-translate-y-1 transition-all">
            {text[lang].projects}
          </button>
          <button onClick={() => handleScroll('contact')} className="hover:text-neo-primary hover:-translate-y-1 transition-all">
            {text[lang].contact}
          </button>
          
          <button 
            onClick={toggleLanguage}
            className="ml-4 px-4 py-1.5 bg-neo-secondary text-neo-bg border-4 border-neo-border shadow-[3px_3px_0px_0px_#171717] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all font-black text-sm uppercase tracking-wider"
          >
            {lang === 'en' ? 'EN / id' : 'id / EN'}
          </button>
          
          {(showAdminLogin || isAdmin) && (
            <button 
              onClick={() => setShowAdminLogin(true)}
              className="ml-2 px-3 py-1.5 bg-black text-white border-4 border-neo-border shadow-brutal-sm hover:-translate-y-1 transition-all flex items-center justify-center"
              title={isAdmin ? "Admin Dashboard" : "Admin Login"}
            >
              {isAdmin ? <FaUnlock size={18} /> : <FaLock size={18} />}
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 bg-neo-secondary text-neo-bg border-2 border-neo-border shadow-[2px_2px_0px_0px_#171717] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all font-black text-xs uppercase"
          >
            {lang === 'en' ? 'EN / id' : 'id / EN'}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 border-4 border-neo-border bg-white shadow-brutal-sm text-neo-bg"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-neo-card border-b-4 border-neo-border flex flex-col font-body font-bold text-xl shadow-brutal-lg md:hidden">
            <button 
              onClick={() => handleScroll('home')} 
              className="w-full text-left px-6 py-4 border-b-2 border-neo-border hover:bg-neo-primary hover:text-white transition-colors"
            >
              {text[lang].home}
            </button>
            <button 
              onClick={() => handleScroll('experience')} 
              className="w-full text-left px-6 py-4 border-b-2 border-neo-border hover:bg-neo-primary hover:text-white transition-colors"
            >
              {text[lang].experience}
            </button>
            <button 
              onClick={() => handleScroll('projects')} 
              className="w-full text-left px-6 py-4 border-b-2 border-neo-border hover:bg-neo-primary hover:text-white transition-colors"
            >
              {text[lang].projects}
            </button>
            <button 
              onClick={() => handleScroll('contact')} 
              className="w-full text-left px-6 py-4 hover:bg-neo-primary hover:text-white transition-colors"
            >
              {text[lang].contact}
            </button>
            {(showAdminLogin || isAdmin) && (
              <button 
                onClick={() => {
                  setShowAdminLogin(true);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-6 py-4 bg-black text-white hover:bg-neo-primary transition-colors flex items-center gap-4"
              >
                {isAdmin ? <FaUnlock size={18} /> : <FaLock size={18} />}
                <span>{isAdmin ? 'Admin Dashboard' : 'Admin Login'}</span>
              </button>
            )}
          </div>
        )}
      </nav>
      <AdminLogin />
    </>
  );
};
