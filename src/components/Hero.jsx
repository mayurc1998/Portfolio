import React from 'react'
import { site } from '../data/site'
import profilePic from "../assets/profilePic.png"
export default function Hero(){
  const { name, current_role, total_experience_years } = site
  return (
    <section className="grid md:grid-cols-3 gap-8 items-center py-12">
      <div className="md:col-span-2 animate-fade-up">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Hi, I'm {name}</h1>
        <p className="text-primary font-medium mb-2">{current_role} · {total_experience_years} experience</p>
        <p className="text-gray-700 mb-6">I build scalable web applications with clean architecture, strong engineering practices and a focus on developer experience.</p>
        <div className="flex items-center gap-4">
          <a href="/Mayur_Chablani_Resume_15_SEPT_2025.pdf" target="_blank" rel="noreferrer" className="bg-primary text-white px-4 py-2 rounded shadow-sm text-sm">Download Resume</a>
          <a href="#projects" className="text-sm text-gray-700 hover:underline">See my work</a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <img src={profilePic} alt={name} className="w-44 h-44 rounded-lg object-cover shadow-2xl border border-gray-100 dark:border-gray-700" />
      </div>
    </section>
  )
}