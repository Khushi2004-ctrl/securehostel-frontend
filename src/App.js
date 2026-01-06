import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

/* Components */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import ProtectedRoute from "./components/ProtectedRoute";

/* Pages */
import QR from "./pages/QR";
import NFC from "./pages/NFC";
import Face from "./pages/Face";
import Fob from "./pages/Fob";
import Admin from "./pages/Admin";
import Analytics from "./pages/Analytics";
import About from "./pages/About";
import FeaturesPage from "./pages/FeaturesPage";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import Security from "./pages/Security";
import Help from "./pages/Help";
import Contact from "./pages/Contact";

/* 🔹 Layout (Navbar only on Home) */
function Layout({ children, openLogin }) {
  const location = useLocation();
  const showNavbar = location.pathname === "/";

  return (
    <>
      {showNavbar && <Navbar openLogin={openLogin} />}
      {children}
    </>
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <BrowserRouter>
      <Layout openLogin={() => setShowLogin(true)}>
        <Routes>

          {/* 🔹 HOME PAGE */}
          <Route
            path="/"
            element={
              <main>
                <Hero openLogin={() => setShowLogin(true)} />
                <Features openLogin={() => setShowLogin(true)} />
                <Footer />
              </main>
            }
          />

          {/* 🔹 FEATURE ACCESS PAGES 
          <Route path="/qr" element={<QR />} />
          <Route path="/nfc" element={<NFC />} />
          <Route path="/face" element={<Face />} />
          <Route path="/fob" element={<Fob />} />*/}


<Route
  path="/qr"
  element={
    <ProtectedRoute>
      <QR />
    </ProtectedRoute>
  }
/>

<Route
  path="/nfc"
  element={
    <ProtectedRoute>
      <NFC />
    </ProtectedRoute>
  }
/>

<Route
  path="/face"
  element={
    <ProtectedRoute>
      <Face />
    </ProtectedRoute>
  }
/>

<Route
  path="/fob"
  element={
    <ProtectedRoute>
      <Fob />
    </ProtectedRoute>
  }
/>


          {/* 🔹 AUTH / DASHBOARD */}
         {/* <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<Analytics />} />*/}
          <Route
  path="/admin"
  element={
    <ProtectedRoute role="admin">
      <Admin />
    </ProtectedRoute>
  }
/>

<Route
  path="/dashboard"
  element={
    <ProtectedRoute role="warden">
      <Analytics />
    </ProtectedRoute>
  }
/>


          {/* 🔹 FOOTER PAGES */}
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Layout>

      {/* 🔹 GLOBAL LOGIN MODAL */}
      <LoginModal
        show={showLogin}
        close={() => setShowLogin(false)}
      />
    </BrowserRouter>
  );
}

export default App;
