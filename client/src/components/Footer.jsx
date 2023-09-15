import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col  bg-neutral-100  dark:bg-neutral-600 lg:text-left bottom-0">
      <div className="container p-6">
        <div className="flex flex-row place-content-center space-x-12 ">
          {/*  links section--> */}
          <div className="flex flex-row space-x-4 mb-6">
            <NavLink to=".">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </div>

          <div className="mb-0 list-none ">
            <p className="text-neutral-800 dark:text-neutral-200">
              Contact us: Tel-234 8167203767
            </p>
          </div>
          <div className="mb-0 list-none ">
            <p className="text-neutral-800 dark:text-neutral-200">
              Founders:{" "}
              <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                Aroh Ebenezer
              </a>
              <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                | Favour Izehbije
              </a>
              <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                | Temitope Ilesanya
              </a>
            </p>
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
