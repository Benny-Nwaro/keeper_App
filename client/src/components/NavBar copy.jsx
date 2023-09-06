import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-neutral sticky top-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
      
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex items-center space-x-4 right-0 ">
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
                  Corporate
                </a>
                <a
                  href="#"
                  className="text-black hover:bg-pink-600 hover:text-white  px-3 py-2 text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-black hover:bg-pink-600 hover:text-white  px-3 py-2 text-sm font-medium"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="text-black hover:bg-pink-600 hover:text-white  px-3 py-2 text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
