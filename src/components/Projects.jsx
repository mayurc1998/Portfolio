import React from 'react'
import { projects } from '../data/projects'

export default function Projects(){
  return (
    <section id="projects" className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <article key={i} className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-600 my-2">{p.problem}</p>
            <p className="text-sm text-gray-700">Solution: {p.solution}</p>
            <p className="text-xs text-gray-500 mt-2">Tech: {p.tech_stack.join(', ')}</p>
            <p className="text-xs text-gray-500">Impact: {p.impact}</p>
          </article>
        ))}
      </div>
    </section>
  )
}