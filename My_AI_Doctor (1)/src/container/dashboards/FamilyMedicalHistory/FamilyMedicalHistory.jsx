import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

function FamilyMedicalHistory() {
  const [familyMedicalHistory, setFamilyMedicalHistory] = useState([]);

  // Static data
  const staticData = [
    {
      relationship: "Father",
      medical_condition: "Diabetes",
      age_at_onset: "45",
      current_status: "Alive",
      notes: "Managed with insulin.",
    },
  ];

  useEffect(() => {
    // Use static data
    setFamilyMedicalHistory(staticData);
  }, []);

  return (
    <Container className="py-5" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Card className="shadow-sm">
        <Card.Body>
          <h2 className="mb-4 text-center" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            Family Medical History
          </h2>
          {familyMedicalHistory.length > 0 ? (
            familyMedicalHistory.map((item, i) => (
              <React.Fragment key={i}>
                <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Relationship:</Form.Label>
                    <Form.Control
                      value={item.relationship || "N/A"}
                      readOnly
                      style={{
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #ddd',
                        padding: '10px',
                        fontSize: '1rem',
                      }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Medical Condition:</Form.Label>
                    <Form.Control
                      value={item.medical_condition || "N/A"}
                      readOnly
                      style={{
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #ddd',
                        padding: '10px',
                        fontSize: '1rem',
                      }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Age at Onset:</Form.Label>
                    <Form.Control
                      value={item.age_at_onset || "N/A"}
                      readOnly
                      style={{
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #ddd',
                        padding: '10px',
                        fontSize: '1rem',
                      }}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Current Status:</Form.Label>
                    <Form.Control
                      value={item.current_status || "N/A"}
                      readOnly
                      style={{
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #ddd',
                        padding: '10px',
                        fontSize: '1rem',
                      }}
                    />
                  </Col>
                  <Col lg={8} md={6} sm={12}>
                    <Form.Label className="fw-bold">Notes:</Form.Label>
                    <Form.Control
                      as="textarea"
                      value={item.notes || "N/A"}
                      readOnly
                      style={{
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #ddd',
                        padding: '10px',
                        fontSize: '1rem',
                        height: '100px',
                      }}
                    />
                  </Col>
                </Row>
              </React.Fragment>
            ))
          ) : (
            <p>No family medical history records found.</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default FamilyMedicalHistory;
