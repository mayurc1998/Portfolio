import React from 'react'
import { site } from '../data/site'
import EnvelopeIcon from '../icons/EnvelopeIcon'
import WhatsappIcon from '../icons/WhatsappIcon'
import PhoneIcon from '../icons/PhoneIcon'
import UpRightIcon from '../icons/UpRightIcon'

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
        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded p-3 gap-3">
        <div>
          <div className="font-medium">Email</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 break-all">
            {email}
          </div>
        </div>

        <a
          href={gmailLink}
          target="_blank"
          rel="noreferrer"
          className="
            flex items-center justify-center
            bg-primary text-white!
            rounded-full md:rounded
            w-10 h-10 md:w-auto md:h-auto
            md:px-3 md:py-2
            gap-2
            shrink-0
          "
        >
          <EnvelopeIcon className="h-5 w-5" color='white' />
          <span className="hidden md:inline text-sm">Open Gmail</span>
        </a>
        </div>

        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded p-3 gap-3">
        <div>
          <div className="font-medium">WhatsApp</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 break-all">
            {wa}
          </div>
        </div>

        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          className="
            flex items-center justify-center
            bg-primary text-white!
            rounded-full md:rounded
            w-10 h-10 md:w-auto md:h-auto
            md:px-3 md:py-2
            gap-2
            shrink-0
          "
        >
          <WhatsappIcon className="h-6 w-6" color='white' />
          <span className="hidden md:inline text-sm">Open WhatsApp</span>
        </a>
        </div>
        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded p-3 gap-3">
        <div>
          <div className="font-medium">Call</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 break-all">
            9321826470
          </div>
        </div>

          <a
            href={call}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center justify-center
              bg-primary text-white!
              rounded-full md:rounded
              w-10 h-10 md:w-auto md:h-auto
              md:px-3 md:py-2
              gap-2
              shrink-0
            "
          >
            <PhoneIcon className="h-4 w-4" color='white' />
            <span className="hidden md:inline text-sm">Open Phone Number</span>
          </a>
        </div>
        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded p-3 gap-3">
        <div>
          <div className="font-medium">LinkedIn</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 break-all">
            mayur-chablani
          </div>
        </div>

          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center justify-center
              bg-primary text-white!
              rounded-full md:rounded
              w-10 h-10 md:w-auto md:h-auto
              md:px-3 md:py-2
              gap-2
              shrink-0
            "
          >
            <UpRightIcon className="h-4 w-4" color='white' />
            <span className="hidden md:inline text-sm">Visit profile</span>
          </a>
        </div>
      </div>

    </section>
  )
}