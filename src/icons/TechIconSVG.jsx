export function TechIconSVG({ name, className = '' }){
  const n = name.toLowerCase()
  // include a few official SVGs inline. Add more as needed.
  if(n.includes('react')) return (
    <svg className={className} viewBox="0 0 841.9 595.3" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="20"><ellipse cx="420.9" cy="296.5" rx="220" ry="90" transform="rotate(30 420.9 296.5)"/><ellipse cx="420.9" cy="296.5" rx="220" ry="90" transform="rotate(-30 420.9 296.5)"/><ellipse cx="420.9" cy="296.5" rx="220" ry="90"/></g></svg>
  )
  if(n.includes('node')) return (
    <svg className={className} viewBox="0 0 256 272" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M128 0l128 74v124l-128 74-128-74V74z"/></svg>
  )
  if(n.includes('postgres')) return (
    <svg className={className} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><ellipse cx="32" cy="32" rx="28" ry="16" fill="currentColor"/></svg>
  )
  if(n.includes('mongo')) return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2C10 6 8 9 12 20c4-11 2-14 2-18s-2-0-2-0z"/></svg>
  )
  if(n.includes('vite')) return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2l9 20H3L12 2z"/></svg>
  )
  // fallback circle
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" fill="currentColor" /></svg>
  )
}
