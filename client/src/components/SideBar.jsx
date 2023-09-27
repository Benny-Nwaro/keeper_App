import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";

import { links } from "../data/newData";
import { useMyStateNav } from "../contexts/ContextProvider";
export const SideBar = () => {
  const { activeMenu, setActiveMenu, screenSize, } = useMyStateNav();
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-[gray]] text-md m-2 border-2 border-x-blue-500";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <div className=" ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 shadow-xl">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center ">
            <Link
              to="."
              onClick={() => handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware className="text-blue-900" />{" "}
              <span className="text-blue-900">FashCraft</span>
            </Link>

            <button
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              type="button"
              onClick={() => setActiveMenu(false)}
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`${
                      link.name == "dashboard"
                        ? "./"
                        : link.name == "home"
                        ? ".."
                        : link.name
                    }`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <link.icon />
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-10 ">
            <div>
              <p className="text-gray-400 m-3 mt-4 uppercase">Logout</p>

              <NavLink
                to={`logout`}
                onClick={handleCloseSideBar}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <span className="capitalize">Logout</span>
              </NavLink>

            </div>
          </div>
        </>
      )}
    </div>
  );
};
