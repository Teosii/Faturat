import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import { Routes, Route, useLocation } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      {location.pathname !== "/signup" && (
        <>
          <Hero />
          <Features />
          <Pricing />
        </>
      )}

      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
