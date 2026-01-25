import React from 'react'
import React from 'react'
import { projects } from '../data/projects'

export default function Experience(){
  const leadership = [
    'Mentored junior developers across React and full-stack projects',
    'Conducted code reviews and guided architectural decisions',
    'Led frontend development initiatives on multiple portals'
  ]
  return (
    <section id="experience" className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Experience & Leadership</h2>
      <div className="bg-white rounded shadow-sm p-4">
        <h3 className="font-semibold">Leadership</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          {leadership.map((l,i) => <li key={i}>{l}</li>)}
        </ul>
        <h3 className="font-semibold">Recent Projects</h3>
        <div className="grid md:grid-cols-2 gap-3 mt-3">
          {projects.slice(0,4).map((p,i) => (
            <div key={i} className="p-3 border rounded hover:shadow-md transition-transform active:scale-99">
              <div className="font-semibold">{p.name}</div>
              <div className="text-xs text-gray-500">{p.tech_stack.join(', ')}</div>
              <div className="text-sm text-gray-700 mt-2">{p.solution}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}