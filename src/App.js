import "./App.css";
import Homepage from "./component/Homepage";
import Booking from "./component/Booking";
import Services from "./component/Services"
import About from "./component/About"
import Contact from "./component/Contact"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
