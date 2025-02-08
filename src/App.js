import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientHistory from "./pages/Patient_History"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/patient-history" element={<PatientHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
