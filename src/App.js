import { Routes, Route, useLocation } from "react-router-dom";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";

function App() {
  const location = useLocation();
  const isAuthPage = ["/signup", "/signin"].includes(location.pathname);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Pricing />
            </>
          }
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
