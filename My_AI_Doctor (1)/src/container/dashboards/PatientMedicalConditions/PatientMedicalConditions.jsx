import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner, Form } from "react-bootstrap";

function PatientMedicalConditions() {
  const [patient, setPatient] = useState([]); // Store the full patient data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const id = localStorage.getItem("patient_id");

  useEffect(() => {
    if (!id) {
      setError("Patient ID is not available.");
      setLoading(false);
      return;
    }

    fetch(`http://192.168.1.89:8000/api/patient/patient-details/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPatient(data.results || {}); // Store the entire patient object
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch medical conditions.");
        setLoading(false);
      });
  }, [id]);

  return (
    <Container className="py-5" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Card className="shadow-sm">
        <Card.Body>
          <h2 className="mb-4 text-center" style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Patient Medical Conditions
          </h2>
          {loading ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : error ? (
            <p className="text-danger text-center">{error}</p>
          ) : patient && patient.length > 0 ? (
            patient.map((condition, index) => (
              <React.Fragment key={index}>
                <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Condition Name:</Form.Label>
                    <Form.Control
                      value={condition?.medical_conditions?.[0].condition_name || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Diagnosis Date:</Form.Label>
                    <Form.Control
                      value={condition?.medical_conditions?.[0].diagnosis_date || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Current Status:</Form.Label>
                    <Form.Control
                      value={condition?.medical_conditions?.[0].current_status || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Treating Physician:</Form.Label>
                    <Form.Control
                      value={condition?.medical_conditions?.[0].treating_physician || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Notes:</Form.Label>
                    <Form.Control
                      value={condition?.medical_conditions?.[0].notes || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  {/* <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Created At:</Form.Label>
                    <Form.Control
                      value={condition?.medical_conditions?.[0].created_at || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col> */}
                </Row>
                
              </React.Fragment>
            ))
          ) : (
            <p className="text-center">No medical conditions found.</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PatientMedicalConditions;
