import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function PatientPostVitalSigns() {
  const patientId = localStorage.getItem("patient_id");
  const [formData, setFormData] = useState({
    temperature: "",
    blood_pressure: "",
    pulse_rate: "",
    respiratory_rate: "",
    oxygen_saturation: "",
    pain_level: "",
    recorded_at: "",
    recorded_by: "",
    patient: patientId
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Assuming you have the patient ID saved in localStorage or a variable
    const patientId = localStorage.getItem("patient_id");  // Retrieve the patient ID from localStorage or set it as needed.

    const dataToSend = {
      ...formData,
      patient: patientId,  // Add the patient ID to the request payload
    };

    try {
      const response = await fetch(
        "https://my-ai-doctor-server.onrender.com/api/patient/vitals/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Form submitted successfully:", data);
      alert("Patient vital signs submitted successfully!");
      localStorage.setItem("vital_id", data.vital_id);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* <style>
        {`
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
          }

          .form-container {
            width: 950px;
            max-width: 1000px;
            padding: 30px 50px;
            background: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
          }
        `}
      </style> */}
      <div className="form-container">
        <h2 className="mb-4 text-center">Patient Vital Signs</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="temperature">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Temperature (°C)
                </Form.Label>
                <Form.Control
                  type="number"
                  name="temperature"
                  value={formData.temperature}
                  onChange={handleInputChange}
                  placeholder="Enter temperature"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="bloodPressure">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Blood Pressure (mmHg)
                </Form.Label>
                <Form.Control
                  type="text"
                  name="blood_pressure"
                  value={formData.blood_pressure}
                  onChange={handleInputChange}
                  placeholder="Enter blood pressure"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="pulseRate">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Pulse Rate (beats/min)
                </Form.Label>
                <Form.Control
                  type="number"
                  name="pulse_rate"
                  value={formData.pulse_rate}
                  onChange={handleInputChange}
                  placeholder="Enter pulse rate"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="respiratoryRate">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Respiratory Rate (breaths/min)
                </Form.Label>
                <Form.Control
                  type="number"
                  name="respiratory_rate"
                  value={formData.respiratory_rate}
                  onChange={handleInputChange}
                  placeholder="Enter respiratory rate"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="oxygenSaturation">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Oxygen Saturation (%)
                </Form.Label>
                <Form.Control
                  type="number"
                  name="oxygen_saturation"
                  value={formData.oxygen_saturation}
                  onChange={handleInputChange}
                  placeholder="Enter oxygen saturation"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="painLevel">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Pain Level (1-10)
                </Form.Label>
                <Form.Control
                  type="number"
                  name="pain_level"
                  value={formData.pain_level}
                  onChange={handleInputChange}
                  placeholder="Enter pain level"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="recordedAt">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Recorded At
                </Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="recorded_at"
                  value={formData.recorded_at}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="recordedBy">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Recorded By
                </Form.Label>
                <Form.Control
                  type="text"
                  name="recorded_by"
                  value={formData.recorded_by}
                  onChange={handleInputChange}
                  placeholder="Enter doctor's name"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* <div className="text-center">
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div> */}
        </Form>
      </div>
    </div>
  );
}

export default PatientPostVitalSigns;
