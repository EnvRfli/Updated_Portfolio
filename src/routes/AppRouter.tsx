import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { Home } from '../screens/Home';

// Placeholder screens
const About = () => <div className="text-4xl font-heading font-bold">About Page (WIP)</div>;
const Projects = () => <div className="text-4xl font-heading font-bold">Projects Page (WIP)</div>;

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
