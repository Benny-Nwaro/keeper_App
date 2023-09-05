import React from "react";

export default function Button() {
  return (
    <div>
      {" "}
      <button
        type="button"
        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Open main menu</span>

        <svg
          className="block h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        ></svg>

        <svg
          className="hidden h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        ></svg>
      </button>
    </div>
  );
}
