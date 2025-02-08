import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PatientHistory.css";

const PatientHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/history")
      .then((response) => setHistory(response.data))
      .catch((error) => console.error("Error fetching history:", error));
  }, []);

  return (
    <div className="history">
      <h2>Patient History</h2>
      <ul>
        {history.map((record) => (
          <li key={record.id}>
            {record.date} - {record.details}
          </li>
        ))}
      </ul>
    </div>
  );
};
