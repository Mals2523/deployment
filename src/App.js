import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DoctorDashboard from "./pages/DoctorDashboard";
import Patient_History from "./pages/Patient_History";



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

