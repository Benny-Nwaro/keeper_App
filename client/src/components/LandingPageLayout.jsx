import { Outlet } from "react-router-dom";
import {NavBar} from "./NavBar"


export const LandingPageLayout = () => {
  return (
    <>
      <NavBar/>

      <Outlet />
    </>
  );
};
