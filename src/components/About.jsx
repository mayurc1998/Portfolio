import React from 'react'
import { site } from '../data/site'

export default function About(){
  const { name, current_role, total_experience_years } = site
  return (
    <section id="about" className="bg-white rounded-lg shadow-sm p-6 my-8">
      <h2 className="text-2xl font-semibold mb-3">About me</h2>
      <p className="text-gray-700 mb-4">More than 4 years of experience as a Software Development Engineer with a demonstrated history of working in the telecommunications industry. Highly skilled in Full Stack Development and Automations. I have managed several projects in short periods, handling customer requirements and issues using innovative ideas and strong problem-solving skills.</p>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold">Name</h3>
          <div className="text-sm text-gray-600">{name}</div>
        </div>
        <div>
          <h3 className="font-semibold">Role</h3>
          <div className="text-sm text-gray-600">{current_role}</div>
        </div>
        <div>
          <h3 className="font-semibold">Experience</h3>
          <div className="text-sm text-gray-600">{total_experience_years}</div>
        </div>
      </div>
    </section>
  )
}