import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>FAQ</a>
      </li>
      <li>
        <a>Changelog</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Download</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div className="max-w-full md:w-11/12 mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-xl md:text-2xl font-bold whitespace-nowrap">
            CS — Ticket System
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <a className="rounded-xs p-1 md:p-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            {" "}
            <FontAwesomeIcon icon={faPlus} />
            New Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
