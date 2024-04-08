"use client";

import "./styles.css";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LocalSwitcher from "../local-switcher";
import { useLocale } from "next-intl";
import { TypographyRace } from "../Typography/Typography";

const Navbar = () => {
  const pathname = usePathname();
  const localActive = useLocale();

  const [darkMode, setDarkMode] = useState(localStorage?.theme === "dark");
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  const navLinks = [{ name: "Login", href: `/${localActive}/login` }];

  return (
    <nav className="sticky top-0 left-0 w-full h-[70px] dark:bg-dark_secondary_bg_color bg-light_bg_color overflow-hidden shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <TypographyRace
            content="Logo"
            fontSize="18px"
            fontWeight="500"
            marginBottom=""
          />
        </a>

        <ul className="flex items-center justify-center gap-x-2">
          {navLinks.map((link) => {
            const isActive = pathname?.startsWith(link.href);

            return (
              <a
                href={link.href}
                key={link.name}
                className={`${isActive ? "active-link" : "link"}`}
              >
                <li className="dark:text-dark_heading_color text-light_heading_color">
                  {link.name}
                </li>
              </a>
            );
          })}
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClick={() => setDarkMode(!darkMode)}
              checked={!darkMode}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <LocalSwitcher />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
