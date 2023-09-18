import "./App.css";
import { Home } from "./pages/landingpage/home/Home";
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router,
  // eslint-disable-next-line no-unused-vars
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { NotFound } from "./pages/errors/notfound/NotFound";
import { Contact } from "./pages/landingpage/contact/Contact";
import { About } from "./pages/landingpage/about/About";
import { Corporate } from "./pages/landingpage/corporate/Corporate";
import { DashBoardLayout, LandingPageLayout } from "./components";
import { Services } from "./pages/landingpage/services/Services";
import { DashBoardHome } from "./pages/dashboard/dashboardhome/DashBoardHome";
import { Customers } from "./pages/dashboard/customers/Customers";
import { Login } from "./pages/auth/login/Login";
import { Register } from "./pages/auth/register/Register";
// import { NavBar } from "./components";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="dashboard" element={<DashBoardLayout />}>
        <Route index element={<DashBoardHome />} />
        <Route path="services" element={<Customers />} />
      </Route>

      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
