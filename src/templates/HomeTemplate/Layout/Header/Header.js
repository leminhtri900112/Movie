import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100 bg-black bg-opacity-40 text-white fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"></img>
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              activeClassName="dark:text-violet-400 dark:border-violet-400"
              rel="noopener noreferrer"
              to="/home"
              className="text-white flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              activeClassName="dark:text-violet-400 dark:border-violet-400"
              rel="noopener noreferrer"
              to="/news"
              className="text-white flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400"
            >
              News
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              activeClassName="dark:text-violet-400 dark:border-violet-400"
              rel="noopener noreferrer"
              to="/contact"
              className="text-white flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900">
            Sign up
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-coolGray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
