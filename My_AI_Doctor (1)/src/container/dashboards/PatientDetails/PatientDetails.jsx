import React, { useState, useEffect } from "react";

const PatientDetails = () => {
  const [patient, setPatient] = useState([]);
  const staticData = [
    {
      title: "Mr.",
      first_name: "John",
      last_name: "Doe",
      gender: "Male",
      date_of_birth: "1990-01-01",
      blood_group: "O+",
      marital_status: "Single",
      occupation: "Engineer",
      national_id: "123456789",
      created_at: "2020-01-01",
      updated_at: "2021-01-01",
    },
  ];

  useEffect(() => {
    // Directly set the static data
    setPatient(staticData);
  }, []);

  // Inline styles for the UI
  const containerStyle = {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginRight: "10px",
  };

  const valueStyle = {
    color: "#555",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Patient Details</h2>
      {patient.length > 0 ? (
        patient.map((patientdetails, index) => (
          <div key={index}>
            <div style={rowStyle}>
              <span style={labelStyle}>Title:</span>
              <span style={valueStyle}>{patientdetails.title || "N/A"}</span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>First Name:</span>
              <span style={valueStyle}>{patientdetails.first_name || "N/A"}</span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>Last Name:</span>
              <span style={valueStyle}>{patientdetails.last_name || "N/A"}</span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>Gender:</span>
              <span style={valueStyle}>{patientdetails.gender || "N/A"}</span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>Date of Birth:</span>
              <span style={valueStyle}>{patientdetails.date_of_birth || "N/A"}</span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>Blood Group:</span>
              <span style={valueStyle}>{patientdetails.blood_group || "N/A"}</span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>Marital Status:</span>
              <span style={valueStyle}>{patientdetails.marital_status || "N/A"}</span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>Occupation:</span>
              <span style={valueStyle}>{patientdetails.occupation || "N/A"}</span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>National ID:</span>
              <span style={valueStyle}>{patientdetails.national_id || "N/A"}</span>
            </div>
          </div>
        ))
      ) : (
        <p>No patient details found.</p>
      )}
    </div>
  );
};

export default PatientDetails;
