import React, { createContext, useState, useEffect } from 'react'

export const FilterContext = createContext({ selected: [], toggle: () => {}, clear: () => {} })

export function FilterProvider({ children }){
  const [selected, setSelected] = useState([])
  function toggle(skill){
    setSelected(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill])
  }
  function clear(){ setSelected([]) }

  useEffect(() => {
    function onClear(){ clear() }
    window.addEventListener('clear-filters', onClear)
    return () => window.removeEventListener('clear-filters', onClear)
  }, [])

  return (
    <FilterContext.Provider value={{ selected, toggle, clear }}>
      {children}
    </FilterContext.Provider>
  )
}
