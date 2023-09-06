import "./App.css";
import { Home } from "./pages/landingpage/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound} from "./pages/errors/notfound/NotFound"
import { NavBar } from "./components";
function App() {

  return (
    <div className="App">

      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

