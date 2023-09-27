import { Outlet, redirect, useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { SideBar } from "./SideBar";
import { DashBoardNav } from "./DashBoardNav";
import { NavContext, useMyStateNav } from "../contexts/ContextProvider";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "@mantine/core";

export const DashBoardLayout = () => {
  const navigate = useNavigate();
  const { activeMenu } = useContext(NavContext);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user_data");
    if (userData !== null) {
      setOnline(true);
    } else {
      setOnline(false);
      navigate("../auth/login");
    }
  }, [navigate]);

  return (
    <>
      {online ? (
        <div className="flex relative dark:bg-main-dark-bg">
          {/* floating button on the dashboard page that appears on all prages like settings   */}
          <Tooltip label="Settings">
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </div>
          </Tooltip>
          {/* floating button on the dashboard page that appears on all prages like settings   */}
          {activeMenu ? (
            <div className="w-72 fixed dark:bg-secondary-dark-bg bg-white">
              <SideBar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <SideBar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "sm:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <DashBoardNav />
              <Outlet />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
