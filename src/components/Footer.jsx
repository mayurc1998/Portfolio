import React from 'react'
import { site } from '../data/site'

export default function Footer(){
  const { name } = site
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t bg-white/90 backdrop-blur-sm dark:bg-transparent">
      <div className="max-w-5xl mx-auto px-6 py-4 text-sm text-gray-600 dark:text-gray-400 text-center">© {new Date().getFullYear()} {name}</div>
    </footer>
  )
}