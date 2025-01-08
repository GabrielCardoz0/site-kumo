import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Site399 from "./pages/Site399";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="home" element={<Home/>} />
          <Route path="sobre" element={<About/>} />
          <Route path="contato" element={<Contact/>} />
          <Route path="servicos" element={<Services/>} />
          <Route path="faq" element={<FAQ/>} />
          <Route path="site-profissional" element={<Site399/>} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
