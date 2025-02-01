import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner, Form } from "react-bootstrap";

function PatientAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const id = localStorage.getItem("id");
  useEffect(() => {
    // Fetch appointments from the API
    fetch(`http://192.168.1.89:8000/api/patient/patient-appointments/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAppointments(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch appointment data.");
        setLoading(false);
      });
  }, []);

  return (
    <Container className="py-5" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Card className="shadow-sm">
        <Card.Body>
          <h2 className="mb-4 text-center" style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Patient Appointments
          </h2>
          {loading ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : error ? (
            <p className="text-danger text-center">{error}</p>
          ) : appointments.length > 0 ? (
            appointments.map((item, index) => (
              <React.Fragment key={index}>
                <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Service Type:</Form.Label>
                    <Form.Control value={item.service_type || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Appointment Date:</Form.Label>
                    <Form.Control value={item.appointment_date || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Appointment Time:</Form.Label>
                    <Form.Control value={item.appointment_time || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Reason for Visit:</Form.Label>
                    <Form.Control value={item.reason_for_visit || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Symptoms:</Form.Label>
                    <Form.Control value={item.symptoms || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Status:</Form.Label>
                    <Form.Control value={item.status || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Created At:</Form.Label>
                    <Form.Control value={item.created_at || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Updated At:</Form.Label>
                    <Form.Control value={item.updated_at || "N/A"} readOnly style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }} />
                  </Col>
                </Row>
                <hr />
              </React.Fragment>
            ))
          ) : (
            <p className="text-center">No appointment records found for this patient.</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PatientAppointments;
