import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DoctorDashboard.css";

const DoctorDashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/patients")
      .then((response) => setPatients(response.data))
      .catch((error) => console.error("Error fetching patients:", error));
  }, []);

  return (
    <div className="dashboard">
      <h2>Doctor Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Condition</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.condition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorDashboard;
