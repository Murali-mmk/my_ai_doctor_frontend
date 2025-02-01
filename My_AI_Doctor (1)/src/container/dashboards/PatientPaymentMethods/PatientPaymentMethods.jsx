import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";

function PatientPaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch(`http://192.168.1.89:8000/api/patient/patient-payment-methods/10000`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPaymentMethods(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch payment methods.");
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Patient Payment Methods</h2>

      {loading ? (
        <p>Loading payment methods...</p>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : paymentMethods.length > 0 ? (
        paymentMethods.map((item, index) => (
          <Card key={index} className="mb-4">
            <Card.Body>
              {/* Row 1 */}
              <Row className="mb-3">
                <Col sm={4}>
                  <strong>Payment Type:</strong>
                  <div>{item.payment_type || "N/A"}</div>
                </Col>
                <Col sm={4}>
                  <strong>Card Last Four:</strong>
                  <div>{item.card_last_four || "N/A"}</div>
                </Col>
                <Col sm={4}>
                  <strong>Expiry Date:</strong>
                  <div>{item.expiry_date || "N/A"}</div>
                </Col>
              </Row>

              {/* Row 2 */}
              <Row className="mb-3">
                <Col sm={4}>
                  <strong>Is Default:</strong>
                  <div>{item.is_default ? "Yes" : "No"}</div>
                </Col>
                <Col sm={4}>
                  <strong>Created At:</strong>
                  <div>{item.created_at || "N/A"}</div>
                </Col>
                <Col sm={4}>
                  <strong>Patient:</strong>
                  <div>{item.patient || "N/A"}</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No payment methods found for this patient.</p>
      )}
    </Container>
  );
}

export default PatientPaymentMethods;
