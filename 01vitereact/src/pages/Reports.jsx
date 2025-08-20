import React from "react";

function Reports() {
  const reports = [
    { id: 1, type: "Theft", location: "Downtown", description: "Stolen bike near the park" },
    { id: 2, type: "Assault", location: "Market Road", description: "Fight between two groups" },
  ];

  return (
    <div className="page">
      <h2>Crime Reports</h2>
      <div className="report-list">
        {reports.map((report) => (
          <div key={report.id} className="report-card">
            <h3>{report.type}</h3>
            <p><strong>Location:</strong> {report.location}</p>
            <p>{report.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reports;
