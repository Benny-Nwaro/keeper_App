import React from "react";

export default function Navbar() {
  return (
    <nav className="flex place-content-center bg-neutral  sticky top-0 divide-y divide-slate-200 ">
      <div className="">
        <div className="flex place-content-center pt-6 ">
          <a
            href="#"
            className="text-black hover:bg-pink-600 hover:text-white  px-3 py-2 text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-black hover:bg-pink-600 hover:text-white  px-3 py-2 text-sm font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-black hover:bg-pink-600 hover:text-white  px-3 py-2 text-sm font-medium"
          >
            Consultancy
          </a>
          <a
            href="#"
            className="text-black hover:bg-pink-600 hover:text-white  px-3 py-2 text-sm font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
