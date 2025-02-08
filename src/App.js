import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientHistory from "./pages/Patient_History";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default homepage route */}
        <Route path="/" element={<DoctorDashboard />} />

        {/* Other routes */}
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/patient-history" element={<PatientHistory />} />

        {/* 404 Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

// Separate 404 component for better styling
function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="#/">Go to Home</a>
    </div>
  );
}

export default App;
