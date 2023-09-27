import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { hamburger } from "../assets/icons";
import { logo2 } from "../assets/images";
export const NavBar = () => {
  const [userData, setUserData] = useState();
  const currentUser = localStorage.getItem("user_data");

  useEffect(() => {
    try {
      const data = JSON.parse(currentUser);
      console.log(data); // Logging the parsed data, not userData
      setUserData(data);
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }, [currentUser]);
  function logoutAndReload() {
    // Clear localStorage
    localStorage.clear();
  
    // Reload the page
    window.location.reload();
  }
  
  return (
    <section className="w-full py-2 shadow-md">
      <nav className="flex justify-between items-center max-container pl-8 pr-8">
        <Link to="/">
          <div>
            <img src={logo2} alt="logo" className="w-[30%] object-cover" />
          </div>
        </Link>

        <ul className="flex-1 flex gap-x-10 font-palanquin text-[20px] font-medium max-lg:hidden">
          <li className="">
            <NavLink to=".">Home</NavLink>
          </li>
          <li className="">
            <NavLink to="about">About</NavLink>
          </li>
          <li className="">
            <NavLink to="contact">Contact</NavLink>
          </li>
          {userData && userData.status === "success" ? (
            <>
              <li className="">
                <NavLink to="dashboard">Dashboard</NavLink>
              </li>

              <li className="" onClick={logoutAndReload}>
                <p>Log Out</p>
              </li>
            </>
          ) : (
            <>
                <ul className="ml-[15px] flex gap-x-10 font-palanquin text-[20px] font-medium max-lg:hidden">
                  <li className="">
                    <NavLink to="auth/login">Login</NavLink>
                  </li>
                  <li className="">
                    <NavLink to="auth/register">Register</NavLink>
                  </li>
                </ul>
            </>
          )}
        </ul>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={35} height={35} />
        </div>
      </nav>
    </section>
  );
};
