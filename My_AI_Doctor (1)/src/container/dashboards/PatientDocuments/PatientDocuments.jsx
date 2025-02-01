import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

function PatientDocuments() {
  const [documents, setDocuments] = useState([]);

  // Static data
  const staticData = [
    {
      document_type: "Medical Report",
      document_title: "Blood Test Report",
      document_date: "2023-06-15",
      document_url: "https://example.com/report.pdf",
      source: "Hospital Lab",
      description: "Routine blood test report with cholesterol levels.",
      tags: "Blood Test, Health"
    }
  ];

  useEffect(() => {
    // Set the static data immediately
    setDocuments(staticData);
  }, []);

  return (
    <Container className="py-5" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Card className="shadow-sm">
        <Card.Body>
          <h2 className="mb-4 text-center" style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Patient Documents
          </h2>
          {documents.map((item, index) => (
            <React.Fragment key={index}>
              <Row className="mb-3">
                <Col lg={4} md={6} sm={12}>
                  <Form.Label className="fw-bold">Document Type:</Form.Label>
                  <Form.Control value={item.document_type || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Form.Label className="fw-bold">Document Title:</Form.Label>
                  <Form.Control value={item.document_title || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Form.Label className="fw-bold">Document Date:</Form.Label>
                  <Form.Control value={item.document_date || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={4} md={6} sm={12}>
                  <Form.Label className="fw-bold">Document URL:</Form.Label>
                  <Form.Control value={item.document_url || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Form.Label className="fw-bold">Source:</Form.Label>
                  <Form.Control value={item.source || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Form.Label className="fw-bold">Description:</Form.Label>
                  <Form.Control value={item.description || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={4} md={6} sm={12}>
                  <Form.Label className="fw-bold">Tags:</Form.Label>
                  <Form.Control value={item.tags || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                </Col>
              </Row>
            </React.Fragment>
          ))}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PatientDocuments;
