import React from 'react'
import { site } from '../data/site'
import { useState, useEffect } from 'react'
import { Link ,useLocation} from 'react-router-dom'

export default function Header(){
  const { name } = site
  const [isDark, setIsDark] = useState(false)
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath)
  useEffect(() => {
    // initialize: prefer saved setting, otherwise follow OS preference
    const saved = localStorage.getItem('site-dark')
    if(saved === '1'){
      setIsDark(true)
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme','dark')
    } else if(saved === '0'){
      setIsDark(false)
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme','light')
    } else {
      const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      if(prefers){
        setIsDark(true)
        document.documentElement.classList.add('dark')
        document.documentElement.setAttribute('data-theme','dark')
      }
    }
  }, [])

  function toggle(){
    const next = !isDark
    setIsDark(next)
    if(next){
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme','dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme','light')
    }
    localStorage.setItem('site-dark', next ? '1' : '0')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm dark:bg-gray-900/95 dark:text-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" title={name} aria-label={name} className={`initial-badge w-10 h-10 flex items-center justify-center rounded-full ${isDark ? 'bg-primary text-white' : 'bg-[#064e45] text-white'} font-bold tracking-wider`}>MC</Link>
        </div>

        <nav className="flex items-center gap-4">
          <div className="hidden md:flex space-x-6 text-sm text-gray-600">
            <Link to="/about" className={`hover:text-gray-900 dark:hover:text-white ${currentPath == '/about'? isDark?'text-blue-400!':'text-teal-700!':''}`}>About</Link>
            <Link to="/skills" className={`hover:text-gray-900 dark:hover:text-white ${currentPath == '/skills'? isDark?'text-blue-400!':'text-teal-700!':''}`}>Skills</Link>
            <Link to="/projects" className={`hover:text-gray-900 dark:hover:text-white ${currentPath == '/projects'? isDark?'text-blue-400!':'text-teal-700!':''}`}>Projects</Link>
            <Link to="/education" className={`hover:text-gray-900 dark:hover:text-white ${currentPath == '/education'? isDark?'text-blue-400!':'text-teal-700!':''}`}>Education</Link> 
          </div>
           <div className='bg-green-800 p-2 rounded ml-5'>
              <Link to="/contact" className='initial-badge  text-white'>Contact</Link>
            </div>
          <button onClick={toggle} aria-label="Toggle dark" className="ml-2 p-2 rounded border border-gray-200 dark:border-gray-700">
            {isDark ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}