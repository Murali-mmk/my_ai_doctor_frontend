import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";

function PatientVitalSigns() {
  const [VitalSigns, setVitalSigns] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch(`http://192.168.1.89:8000/api/patient/patient-details/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setVitalSigns(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>

      <Container className="mt-5">
        <h2 className="text-center mb-4">Patient Vital Signs</h2>
        {VitalSigns.length > 0 ? (
          VitalSigns.map((item, i) => (
            <Card key={i} className="mb-4">
              <Card.Body>
                {/* Row 1 */}
                <Row className="mb-3">
                  <Col sm={4}>
                    <Form.Label>Temperature</Form.Label>
                    <Form.Text>{item.temperature}</Form.Text>
                  </Col>
                  <Col sm={4}>
                    <Form.Label>Blood Pressure</Form.Label>
                    <Form.Text>{item.blood_pressure}</Form.Text>
                  </Col>
                  <Col sm={4}>
                    <Form.Label>Pulse Rate</Form.Label>
                    <Form.Text>{item.pulse_rate}</Form.Text>
                  </Col>
                </Row>

                {/* Row 2 */}
                <Row className="mb-3">
                  <Col sm={4}>
                    <Form.Label>Respiratory Rate</Form.Label>
                    <Form.Text>{item.respiratory_rate}</Form.Text>
                  </Col>
                  <Col sm={4}>
                    <Form.Label>Oxygen Saturation</Form.Label>
                    <Form.Text>{item.oxygen_saturation}</Form.Text>
                  </Col>
                  <Col sm={4}>
                    <Form.Label>Pain Level</Form.Label>
                    <Form.Text>{item.pain_level}</Form.Text>
                  </Col>
                </Row>

                {/* Row 3 */}
                <Row>
                  <Col sm={4}>
                    <Form.Label>Recorded At</Form.Label>
                    <Form.Text>{item.recorded_at}</Form.Text>
                  </Col>
                  <Col sm={4}>
                    <Form.Label>Recorded By</Form.Label>
                    <Form.Text>{item.recorded_by}</Form.Text>
                  </Col>
                  <Col sm={4}>
                    <Form.Label>Additional Info</Form.Label>
                    <Form.Text>{item.additional_info || "N/A"}</Form.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>Loading Vital Signs or no records found...</p>
        )}
      </Container>
    </>
  );
}

export default PatientVitalSigns;
