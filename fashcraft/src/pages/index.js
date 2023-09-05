import Home from "./Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "./About";
import Consultancy from "./Consultancy";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return <>
 <Navbar/>
 <Routes>
    <Route path="/" element={ < Home/>} />
    <Route path="/about" element={ <About/>} />
    <Route path="/consultancy" element={ <Consultancy/>} />
    <Route path="/contact" element={ <Contact/> } />
 </Routes>
 <Footer/>

  </>;
}

export default App;
