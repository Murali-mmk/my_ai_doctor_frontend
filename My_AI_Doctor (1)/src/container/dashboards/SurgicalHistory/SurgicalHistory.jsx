import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner, Form } from "react-bootstrap";

function SurgicalHistory() {
  const [surgicalHistory, setSurgicalHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Static data for testing purposes
  useEffect(() => {
    // Mock data
    const mockData = [
      {
        surgical_history: [
          {
            surgery_type: "Appendectomy",
            surgery_date: "2021-05-15",
            hospital: "City Hospital",
            surgeon: "Dr. John Doe",
            outcome: "Successful",
            notes: "Patient recovered well after surgery.",
          },
        ],
      },
      
    ];

    // Simulate a delay as if fetching data
    setTimeout(() => {
      setSurgicalHistory(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Container className="py-5" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Card className="shadow-sm">
        <Card.Body>
          <h2 className="mb-4 text-center" style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Surgical History
          </h2>
          {loading ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : error ? (
            <p className="text-danger text-center">{error}</p>
          ) : surgicalHistory.length > 0 ? (
            surgicalHistory.map((history, index) => (
              <React.Fragment key={index}>
                <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Surgery Type:</Form.Label>
                    <Form.Control
                      value={history?.surgical_history?.[0]?.surgery_type || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Surgery Date:</Form.Label>
                    <Form.Control
                      value={history?.surgical_history?.[0]?.surgery_date || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Hospital:</Form.Label>
                    <Form.Control
                      value={history?.surgical_history?.[0]?.hospital || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Surgeon:</Form.Label>
                    <Form.Control
                      value={history?.surgical_history?.[0]?.surgeon || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Outcome:</Form.Label>
                    <Form.Control
                      value={history?.surgical_history?.[0]?.outcome || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Notes:</Form.Label>
                    <Form.Control
                      value={history?.surgical_history?.[0]?.notes || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                </Row>
              </React.Fragment>
            ))
          ) : (
            <p className="text-center">No surgical history found.</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SurgicalHistory;
