import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left sticky bottom-0">
      <div className="container p-6">
        <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-4">
          {/* <!--First links section--> */}
          <div className="flex flex-row mb-6">
            <div className="mb-0 list-none">
              <li>
                <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                  Link 1
                </a>
              </li>
            </div>

            <div className="mb-0 list-none">
              <li>
                <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                  Link 1
                </a>
              </li>
            </div>
            <ul className="mb-0 list-none">
              <li>
                <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                  Link 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="w-full bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <a className="text-neutral-800 dark:text-neutral-400" href="#">
          FashCraft
        </a>
      </div>
    </footer>
  );
}
