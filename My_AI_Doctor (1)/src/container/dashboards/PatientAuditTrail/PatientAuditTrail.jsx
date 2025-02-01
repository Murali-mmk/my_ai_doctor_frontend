import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner, Form } from "react-bootstrap";


function PatientAuditTrail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api();
  }, []);

  const api = () => {
    fetch("https://my-ai-doctor-server.onrender.com/api/patient/patient-audit-trail/10000/")
      .then((res) => res.json())
      .then((res) => {
        if (Array.isArray(res)) {
          setData(res);
        } else {
          console.error("Expected an array but got:", res);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  };

  return (
    <Container className="py-5" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Card className="shadow-sm">
        <Card.Body>
          <h2 className="mb-4 text-center">Patient Audit Trail</h2>

          {loading ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : data.length > 0 ? (
            data.map((item, i) => (
              <React.Fragment key={i}>
                {/* Row 1 */}
                <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Consent Type:</Form.Label>
                    <Form.Control
                      value={item.consent_type || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Given Date:</Form.Label>
                    <Form.Control
                      value={item.given_date || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Expiry Date:</Form.Label>
                    <Form.Control
                      value={item.expiry_date || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                </Row>

                {/* Row 2 */}
                <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Document URL:</Form.Label>
                    <Form.Control
                      value={item.document_url || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Witness Name:</Form.Label>
                    <Form.Control
                      value={item.witness_name || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Digital Signature:</Form.Label>
                    <Form.Control
                      value={item.digital_signature || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                </Row>

                {/* Row 3 */}
                <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Notes:</Form.Label>
                    <Form.Control
                      value={item.notes || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Created At:</Form.Label>
                    <Form.Control
                      value={item.created_at || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Patient:</Form.Label>
                    <Form.Control
                      value={item.patient || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                </Row>
                <hr />
              </React.Fragment>
            ))
          ) : (
            <p>No audit records found.</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PatientAuditTrail;
