import { Outlet } from "react-router-dom";
import {NavBar} from "./NavBar"
import Footer from "./Footer";


export const LandingPageLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
