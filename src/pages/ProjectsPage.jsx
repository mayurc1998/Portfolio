import React, { useContext } from 'react'
import { projects } from '../data/projects'
import { FilterContext } from '../context/FilterContext'

export default function ProjectsPage(){
  const { selected } = useContext(FilterContext)
  const filtered = selected.length ? projects.filter(p => p.tech_stack.some(t => selected.includes(t))) : projects

  return (
    <section id="projects" className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((p,i) => (
          <article key={i} className="bg-white dark:bg-[#071022] p-4 rounded shadow-sm hover:shadow-md transition-all">
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Problem: {p.problem}</p>
            <p className="text-sm text-gray-700 dark:text-gray-100 mt-2">Solution: {p.solution}</p>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">Tech: {p.tech_stack.join(', ')}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Impact: {p.impact}</div>
          </article>
        ))}
      </div>
    </section>
  )
}