import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner, Form } from "react-bootstrap";


function Patient_Billing() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://192.168.1.89:8000/api/patient/patient-billing/10000`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Container className="py-5" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Card className="shadow-sm">
          <Card.Body>
            <h2 className="mb-4 text-center">Patient Billing</h2>
            
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
                      <Form.Label className="fw-bold">Amount:</Form.Label>
                      <Form.Control
                        value={item.amount || "N/A"}
                        readOnly
                        style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                      />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                      <Form.Label className="fw-bold">Insurance Covered:</Form.Label>
                      <Form.Control
                        value={item.insurance_covered || "N/A"}
                        readOnly
                        style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                      />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                      <Form.Label className="fw-bold">Patient Responsibility:</Form.Label>
                      <Form.Control
                        value={item.patient_responsibility || "N/A"}
                        readOnly
                        style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                      />
                    </Col>
                  </Row>

                  {/* Row 2 */}
                  <Row className="mb-3">
                    <Col lg={4} md={6} sm={12}>
                      <Form.Label className="fw-bold">Status:</Form.Label>
                      <Form.Control
                        value={item.status || "N/A"}
                        readOnly
                        style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                      />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                      <Form.Label className="fw-bold">Bill Date:</Form.Label>
                      <Form.Control
                        value={item.bill_date || "N/A"}
                        readOnly
                        style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                      />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                      <Form.Label className="fw-bold">Due Date:</Form.Label>
                      <Form.Control
                        value={item.due_date || "N/A"}
                        readOnly
                        style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                      />
                    </Col>
                  </Row>

                  {/* Row 3 */}
                  <Row className="mb-3">
                    <Col lg={4} md={6} sm={12}>
                      <Form.Label className="fw-bold">Paid Date:</Form.Label>
                      <Form.Control
                        value={item.paid_date || "N/A"}
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
                    <Col lg={4} md={6} sm={12}>
                      <Form.Label className="fw-bold">Appointment:</Form.Label>
                      <Form.Control
                        value={item.appointment || "N/A"}
                        readOnly
                        style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                      />
                    </Col>
                  </Row>
                  <hr />
                </React.Fragment>
              ))
            ) : (
              <p>No billing records found.</p>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Patient_Billing;
