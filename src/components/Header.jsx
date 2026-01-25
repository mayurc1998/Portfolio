import React, { useEffect, useState } from "react";
import { site } from "../data/site";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { name } = site;
  const [isDark, setIsDark] = useState(false);

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
          ? "text-blue-400!"
          : "text-teal-700!"
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
        <nav className="flex items-center gap-6">
          <div className="hidden md:flex space-x-6 text-sm">
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/skills" className={navLinkClass}>
              Skills
            </NavLink>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
            <NavLink to="/education" className={navLinkClass}>
              Education
            </NavLink>
          </div>

          {/* Contact CTA */}
          <NavLink
            to="/contact"
            className="initial-badge bg-green-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition"
          >
            Contact
          </NavLink>

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="ml-2 p-2 rounded border border-gray-200 dark:border-gray-700"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </nav>
      </div>
    </header>
  );
}
