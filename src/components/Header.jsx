import React, { useEffect, useState } from "react";
import { site } from "../data/site";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { name } = site;
  const [isDark, setIsDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("site-dark");

    if (saved === "1") {
      enableDark();
    } else if (saved === "0") {
      disableDark();
    } else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) enableDark();
    }
  }, []);

  const enableDark = () => {
    setIsDark(true);
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("site-dark", "1");
  };

  const disableDark = () => {
    setIsDark(false);
    document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("site-dark", "0");
  };

  const toggle = () => {
    isDark ? disableDark() : enableDark();
  };

  const navLinkClass = ({ isActive }) =>
    `hover:text-gray-900 dark:hover:text-white transition ${
      isActive
        ? isDark
          ? "!text-blue-400"
          : "!text-teal-700"
        : "text-gray-600 dark:text-gray-300"
    }`;
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm dark:bg-gray-900/95 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          title={name}
          aria-label={name}
          className={`initial-badge w-10 h-10 flex items-center justify-center rounded-full font-bold tracking-wider ${
            isDark ? "bg-primary text-white" : "bg-[#064e45] text-white"
          }`}
        >
          MC
        </NavLink>

        {/* Navigation */}
        {/* Nav */}
          <nav
            className={`
              absolute md:static top-full left-0 right-0
              bg-white 
              md:bg-transparent!
              md:flex md:items-center
              shadow-none!
              md:mr-15
              ${mobileOpen ? "block" : "hidden md:flex"}
            `}
          >
            <div className="flex flex-col md:flex-row md:items-center max-md:text-center gap-2 md:gap-6 p-4 md:p-0 text-sm">
              <NavLink to="/about" onClick={() => setMobileOpen(false)} className={navLinkClass}>
                About
              </NavLink>
              <NavLink to="/skills" onClick={() => setMobileOpen(false)} className={navLinkClass}>
                Skills
              </NavLink>
              <NavLink to="/projects" onClick={() => setMobileOpen(false)} className={navLinkClass}>
                Projects
              </NavLink>
              <NavLink to="/education" onClick={() => setMobileOpen(false)} className={navLinkClass}>
                Education
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className={({ isActive })=> `${navLinkClass({isActive})} initial-badge font-bold md:bg-green-800 ${isDark && "text-gray-600" }  md:text-white! px-4 pb-2 md:py-2 rounded text-center`}
              >
                Contact
              </NavLink>
             
              
            </div>
          </nav>
      </div>
    <div className="absolute top-4 right-2">
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className={`md:hidden p-2 ${isDark && "text-white"}`}
      >
        ☰
    </button>
    <button
          onClick={toggle}
          className="p-2 "
        >
          {isDark ? "☀️" : "🌙"}
      </button>
      </div>  
    </header>
  );
}
