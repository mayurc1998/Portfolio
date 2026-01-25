import React from 'react'
import { site } from '../data/site'
import { projects } from '../data/projects'

export default function AboutPage(){
  const { name, current_role, total_experience_years } = site
  return (
    <section id="about-page" className="py-8 animate-fade-up">
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <div className="bg-white rounded p-6 shadow-sm">
        <h3 className="text-xl font-semibold">{name} — {current_role}</h3>
        <p className="text-gray-700 mt-2">I am a Software Development Engineer with over {total_experience_years} of experience, primarily in telecommunications. I design and build scalable full-stack applications, own automation frameworks, and focus on reliability, performance and testability.</p>

        <h4 className="mt-4 font-semibold">Expertise & Problem solving</h4>
        <p className="text-gray-700">I solve problems by breaking them down into small measurable deliverables, designing APIs and systems that are observable and resilient, and introducing automation where repetitive work exists. I’ve Implemented projects of device management, CMS, and GenAI prototypes. I also mentor engineers and improve code quality through reviews and architecture guidance.</p>

        <h4 className="mt-4 font-semibold">Select impact</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
          {projects.slice(0,3).map((p,i) => (
            <li key={i}>{p.name} — {p.impact}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}