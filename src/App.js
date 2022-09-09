import About from "./component/About";
import Contact from "./component/Contact";
import Header from "./component/Header";
import Home from "./component/Home";
import Services from "./component/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";

function App() {

  return (

    <Router>
      <>
        <Header />
        {/* <Home />
        <About />
        <Services />
        <Contact /> */}

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={< About />} />
          <Route exact path="/service" element={< Services />} />
          <Route exact path="/contact" element={< Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>


  );
}

export default App;
