import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

function PatientImmunizations() {
  // Static data to be used for immunizations
  const staticData = [
    {
      vaccine_name: "Hepatitis B",
      administered_date: "2022-05-15",
      dose_number: "1",
      administered_by: "Dr. John Doe",
      location: "Health Center A",
      next_due_date: "2023-05-15",
      batch_number: "HB123456",
      notes: "No side effects reported"
    },
   
  ];

  // Directly set the static data in state
  const [immunizations, setImmunizations] = useState(staticData);

  return (
    <Container className="py-5" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Card className="shadow-sm">
        <Card.Body>
          <h2 className="mb-4 text-center" style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Patient Immunizations
          </h2>
          {immunizations.length > 0 ? (
            immunizations.map((item, index) => (
              <React.Fragment key={index}>
                <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Vaccine Name:</Form.Label>
                    <Form.Control value={item.vaccine_name || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Administered Date:</Form.Label>
                    <Form.Control value={item.administered_date || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Dose Number:</Form.Label>
                    <Form.Control value={item.dose_number || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Administered By:</Form.Label>
                    <Form.Control value={item.administered_by || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Location:</Form.Label>
                    <Form.Control value={item.location || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Next Due Date:</Form.Label>
                    <Form.Control value={item.next_due_date || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Batch Number:</Form.Label>
                    <Form.Control value={item.batch_number || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Notes:</Form.Label>
                    <Form.Control value={item.notes || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                  </Col>
                </Row>
              </React.Fragment>
            ))
          ) : (
            <p className="text-center">No immunizations available to display.</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PatientImmunizations;
