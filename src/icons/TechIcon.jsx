export function TechIcon({ name, className = '' }){
  // minimal mapping to small SVG placeholders, extendable
  const n = name.toLowerCase()
  if(n.includes('react')) return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/><path d="M12 2v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
  )
  if(n.includes('node')) return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/></svg>
  )
  // default placeholder
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2"/></svg>
  )
}
