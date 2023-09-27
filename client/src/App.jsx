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
import { DashBoardLayout, LandingPageLayout, OrderId } from "./components";
import { Services } from "./pages/landingpage/services/Services";
import { DashBoardHome } from "./pages/dashboard/dashboardhome/DashBoardHome";
import { Customers } from "./pages/dashboard/customers/Customers";
import { Login } from "./pages/auth/login/Login";
import { Register } from "./pages/auth/register/Register";
import { NavContextProvider } from "./contexts/ContextProvider";
import { Expenses } from "./pages/dashboard/expenses/Expenses";
import { Measurements } from "./pages/dashboard/measurements/Measurements";
import { Order } from "./pages/dashboard/orders/Order";
import { Reports } from "./pages/dashboard/reports/Reports";
import { Salaries } from "./pages/dashboard/salaries/Salaries";
import { Settings } from "./pages/dashboard/settings/Settings";
import { Store } from "./pages/dashboard/store/Store";
import { Users } from "./pages/dashboard/users/Users";
import { Payment } from "./pages/dashboard/payments/Payment";
// import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { NavBar } from "./components";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="corporate" element={<Corporate />} />
        <Route path="services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="dashboard" element={<DashBoardLayout />}>
        <Route index element={<DashBoardHome />} />
        <Route path="customers" element={<Customers />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="measurements" element={<Measurements />} />
        <Route path="orders" element={<Order />} />
        {/* <Route index element={<Payments />} /> */}
        <Route path="payments" element={<Payment />} />
        <Route path="reports" element={<Reports />} />
        <Route path="salaries" element={<Salaries />} />
        <Route path="settings" element={<Settings />} />
        <Route path="store" element={<Store />} />
        <Route path="users" element={<Users />} />{" "}
        <Route path="reports" element={<Reports />} />{" "}
        <Route path="order/:customerId" element={<OrderId />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
    </>
  )
);
function App() {
  // axios.defaults.withCredentials = true;
  return (
    <NavContextProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </NavContextProvider>
  );
}

export default App;
