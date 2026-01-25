import React, { useRef } from 'react'
import { site } from '../data/site'
import profilePic from "../assets/profilePic.png"
import EnvelopeIcon from "../icons/EnvelopeIcon"
import GithubIcon from "../icons/GithubIcon"
import LinkedinIcon from "../icons/LinkedinIcon"
import resume from  "../assets/Mayur_Chablani_Resume_15_SEPT_2025.pdf"

export default function Intro(){
  const { name, current_role, total_experience_years } = site
   const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4; // up/down
    const rotateY = ((x - centerX) / centerX) * 4;  // left/right

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };
  return (
    <section id="home" className="py-12 animate-fade-up">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{name}</h1>
          <p className="text-primary font-medium mb-2">{current_role} · {total_experience_years} experience</p>
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="bg-white dark:bg-[#071022] rounded-lg p-6 mt-3 shadow-lg tilt-card"
        >
          <p className="text-gray-700 dark:text-gray-200">
            Short summary — I design and build scalable full-stack systems with a bias
            for reliable APIs, observability, automation and testability. I mentor
            engineers, lead front-end architecture and ship customer-facing platforms.
          </p>

          <div className="mt-4 flex gap-3 items-center">
            <a
              href={resume}
              download
              className="bg-primary text-white px-4 py-2 rounded"
            >
              Resume
            </a>

            <div className="flex gap-3 ml-4">
              <a
                href="https://www.linkedin.com/in/mayur-chablani-bb6b4617b"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon className="h-10 w-10" color="#0fb4a6" />
              </a>
              <a
                href="https://github.com/mayurc1998"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon className="h-10 w-10" color="#0fb4a6" />
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  "mayurchablani7@gmail.com"
                )}`}
              >
                <EnvelopeIcon className="h-10 w-10" color="#0fb4a6" />
              </a>
            </div>
          </div>
        </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={profilePic} alt={name} className="w-90 h-90 rounded-lg object-cover shadow-2xl border border-gray-100 dark:border-gray-700" />
        </div>
      </div>
    </section>
  )
}