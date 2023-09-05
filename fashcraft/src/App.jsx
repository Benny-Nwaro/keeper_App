import "./App.css";
import About from "./pages/About";
import Consultancy from "./pages/Consultancy";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
    // <div className="flex flex-col">
    //   <Home />
    // </div>
  );
}

export default App;

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Consultancy from "./pages/Consultancy";
// import Contact from "./pages/Contact";
// import { Routes, Route } from "react-router-dom";
// import { Layout } from "./components/layout";

// function App() {
//   return <>
//  <Routes>
//     <Route element={<Layout/>}/>
//     <Route path="/" element={ < Home/>} />
//     <Route path="/about" element={ <About/>} />
//     <Route path="/consultancy" element={ <Consultancy/>} />
//     <Route path="/contact" element={ <Contact/> } />
//  </Routes>


//   </>;
// }

// export default App;
