import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

// Pages
import Intro from './pages/Intro'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import Education from './pages/Education'
import Contact from './components/Contact'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#071026] text-gray-800 dark:text-gray-200 antialiased">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}