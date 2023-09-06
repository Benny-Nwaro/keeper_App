import { Outlet } from "react-router-dom";
import {DashboardLeftSider} from "./DashboardLeftSider"


export const DashBoardLayout = () => {
  return (
    <>
      <DashboardLeftSider/>

      <Outlet />
    </>
  );
};
