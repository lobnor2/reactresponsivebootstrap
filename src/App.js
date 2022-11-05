import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contactpage";
import Error from "./pages/Error";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contactpage from "./pages/Contactpage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/services" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
