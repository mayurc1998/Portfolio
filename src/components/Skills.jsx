import React from 'react'
import { skills } from '../data/skills'

export default function Skills(){
  const { primary } = skills
  return (
    <section id="skills" className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold mb-2">Primary</h3>
          <div className="flex flex-wrap gap-2">
            {primary.map((s,i) => (
              <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}