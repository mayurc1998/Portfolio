import React from 'react'
import { site } from '../data/site'

export default function Contact(){
  const { name } = site
  const email = 'mayurchablani7@gmail.com'
  const wa = 'https://wa.me/917738514893'
  const call = 'tel:+919321826470'
  const linkedin = 'https://www.linkedin.com/in/mayur-chablani-bb6b4617b'
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`

  return (
    <section id="contact" className="bg-white dark:bg-[#07131b] rounded-lg shadow-sm p-6 my-8">
      <h2 className="text-2xl font-semibold mb-3">Get in touch</h2>
      <p className="text-gray-700 dark:text-gray-200 mb-4">Looking for a Software Engineer or Full-Stack Developer? Let’s connect.</p>

      <div className="space-y-4">
        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded p-3">
          <div>
            <div className="font-medium">Email</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">{email}</div>
          </div>
          <div>
            <a href={gmailLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-3 py-2 rounded">Open in Gmail</a>
          </div>
        </div>

        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded p-3">
          <div>
            <div className="font-medium">WhatsApp</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">7738514893</div>
          </div>
          <div>
            <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-3 py-2 rounded">Open WhatsApp</a>
          </div>
        </div>

        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded p-3">
          <div>
            <div className="font-medium">Call</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">9321826470</div>
          </div>
          <div>
            <a href={call} className="inline-flex items-center gap-2 bg-primary text-white px-3 py-2 rounded">Call</a>
          </div>
        </div>

        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded p-3">
          <div>
            <div className="font-medium">LinkedIn</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">mayur-chablani</div>
          </div>
          <div>
            <a href={linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-3 py-2 rounded">Visit profile</a>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} {name}</p>
    </section>
  )
}