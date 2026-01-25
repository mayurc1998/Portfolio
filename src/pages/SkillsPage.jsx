import React from 'react'
import { skills } from '../data/skills'
import { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'
import { ClipboardIcon } from '../icons/ClipboardIcon'

export default function SkillsPage(){
  const { frameworks, frontend, backend, databases, tools, testing } = skills
  const { selected, toggle } = useContext(FilterContext)
  const groups = [
    { key: 'frameworks', title: 'Frameworks', items: frameworks },
    { key: 'frontend', title: 'Frontend', items: frontend },
    { key: 'backend', title: 'Backend & Architecture', items: backend },
    { key: 'databases', title: 'Databases', items: databases },
    { key: 'tools', title: 'Tools & Integrations', items: tools },
    { key: 'testing', title: 'Testing & Quality', items: testing }
  ]

  function copyToClipboard(text){
    navigator.clipboard?.writeText(text)
  }

  return (
    <section id="skills" className="py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex gap-3 items-center">
          <button onClick={() => window.dispatchEvent(new CustomEvent('clear-filters'))} className="text-sm px-3 py-1 rounded antialiased bg-gray-100 dark:bg-gray-800">Clear filters</button>
        </div>
      </div>

      <div className="space-y-6">
        {groups.map((g, gi) => (
          <div key={g.key} className="bg-white dark:bg-[#071022] rounded-lg p-5 shadow-sm animate-fade-up" style={{ animationDelay: `${gi*80}ms` }}>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{g.title}</h3>
              <div className="text-xs text-gray-500 dark:text-gray-400">{g.items.length} items</div>
            </div>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              {g.items.map((s, idx) => {
                const active = selected.includes(s.name)
                return (
                  <button key={idx} onClick={() => toggle(s.name)} onDoubleClick={() => copyToClipboard(s.name)} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition border ${active ? 'bg-primary/10 border-primary' : 'bg-gray-100 dark:bg-gray-800 border-transparent'} dark:text-gray-200`}>
                    <div className="flex-1 text-left">
                      <div>{s.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{s.level}</div>
                    </div>
                    <ClipboardIcon className="w-4 h-4 opacity-60" />
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}