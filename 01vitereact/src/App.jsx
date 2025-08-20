import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ReportCrime from "./pages/ReportCrime";
import Reports from "./pages/Reports";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <h1 className="logo">Crime Report Portal</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/report">Report Crime</Link>
            <Link to="/reports">View Reports</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        {/* Pages */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<ReportCrime />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          © 2025 Crime Report Portal | All Rights Reserved
        </footer>
      </div>
    </Router>
  );
}

export default App;

