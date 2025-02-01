import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

function InsuranceDetails() {
  const [patient, setPatient] = useState([]);

  // Static data to be used for insurance details
  const staticData = [
    {
      insurances: [
        {
          provider_name: "ABC Insurance",
          policy_number: "123456789",
          group_number: "GRP987654",
          policy_holder_name: "John Doe",
          relationship_to_patient: "Self",
          policy_start_date: "2023-01-01",
          policy_end_date: "2024-01-01",
        },
      ],
    },
  ];

  useEffect(() => {
    // Set the static data immediately
    setPatient(staticData);
  }, []);

  return (
    <Container className="py-5" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Card className="shadow-sm">
        <Card.Body>
          <h2 className="mb-4 text-center" style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Insurance Details
          </h2>
          {patient.map((insuranceDetails, i) => (
            <React.Fragment key={i}>
              <Row className="mb-3">
                <Col lg={4} md={6} sm={12}>
                  <Form.Label className="fw-bold">Provider Name:</Form.Label>
                  <Form.Control
                    value={insuranceDetails?.insurances?.[0]?.provider_name || "N/A"}
                    readOnly
                    style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                  />
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Form.Label className="fw-bold">Policy Number:</Form.Label>
                  <Form.Control
                    value={insuranceDetails?.insurances?.[0]?.policy_number || "N/A"}
                    readOnly
                    style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                  />
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Form.Label className="fw-bold">Group Number:</Form.Label>
                  <Form.Control
                    value={insuranceDetails?.insurances?.[0]?.group_number || "N/A"}
                    readOnly
                    style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={4} md={6} sm={12}>
                  <Form.Label className="fw-bold">Policy Holder Name:</Form.Label>
                  <Form.Control
                    value={insuranceDetails?.insurances?.[0]?.policy_holder_name || "N/A"}
                    readOnly
                    style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                  />
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Form.Label className="fw-bold">Relationship To Patient:</Form.Label>
                  <Form.Control
                    value={insuranceDetails?.insurances?.[0]?.relationship_to_patient || "N/A"}
                    readOnly
                    style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                  />
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Form.Label className="fw-bold">Policy Start Date:</Form.Label>
                  <Form.Control
                    value={insuranceDetails?.insurances?.[0]?.policy_start_date || "N/A"}
                    readOnly
                    style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={4} md={6} sm={12}>
                  <Form.Label className="fw-bold">Policy End Date:</Form.Label>
                  <Form.Control
                    value={insuranceDetails?.insurances?.[0]?.policy_end_date || "N/A"}
                    readOnly
                    style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                  />
                </Col>
              </Row>
            </React.Fragment>
          ))}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default InsuranceDetails;
