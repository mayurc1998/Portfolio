import React from 'react'

export default function Education(){
  const ed = [
    { school: 'Thadomal Shahani Engineering College , Mumbai University', degree: 'B.E - Computer Science', year: '2016 - 2020' },
    { school: 'Dnyanasadhana college of arts, science and commerce ', degree: 'HSC', year: '2014- 2016' },
    { school: 'St.Xaviers English High School and Jr.college ', degree: 'SSC', year: '2013 - 2014' }
  ]
  return (
    <section id="education" className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div className="grid md:grid-cols-1 gap-4">
        {ed.map((e,i) => (
          <div key={i} className="bg-white p-4 rounded shadow-sm">
            <div className="font-semibold">{e.school}</div>
            <div className="text-sm text-gray-600">{e.degree} — {e.year}</div>
          </div>
        ))}
      </div>
    </section>
  )
}