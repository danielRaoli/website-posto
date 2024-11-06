import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ProductsAndServicesPage from "./pages/products-services-page";
import { ButtonWhatsApp } from "./components/whatsappbutton";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <Navbar />
          <ButtonWhatsApp />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/products-services"
              element={<ProductsAndServicesPage />}
            />
          </Routes>
          <Footer />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
