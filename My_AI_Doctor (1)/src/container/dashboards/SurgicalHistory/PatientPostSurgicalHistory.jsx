import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function PatientPostSurgicalHistory() {
  const id = localStorage.getItem("patient_id");
  console.log(id);
  const [formData, setFormData] = useState({
    patient: id,
    surgery_type: "",
    surgery_date: "",
    hospital: "",
    surgeon: "",
    outcome: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/patient/patient-details/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Surgical history form submitted successfully:", data);
      alert("Surgical history details submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit surgical history details. Please try again.");
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
        <h2 className="mb-4 text-center">Patient Surgical History</h2>
        <Form onSubmit={handleSubmit}>
          
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="surgeryType">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Surgery Type
                </Form.Label>
                <Form.Control
                  type="text"
                  name="surgery_type"
                  value={formData.surgery_type}
                  onChange={handleInputChange}
                  placeholder="Enter Surgery Type"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="surgeryDate">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Surgery Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="surgery_date"
                  value={formData.surgery_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="hospital">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Hospital
                </Form.Label>
                <Form.Control
                  type="text"
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleInputChange}
                  placeholder="Enter Hospital Name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="surgeon">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Surgeon
                </Form.Label>
                <Form.Control
                  type="text"
                  name="surgeon"
                  value={formData.surgeon}
                  onChange={handleInputChange}
                  placeholder="Enter Surgeon Name"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="outcome">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Outcome
                </Form.Label>
                <Form.Control
                  type="text"
                  name="outcome"
                  value={formData.outcome}
                  onChange={handleInputChange}
                  placeholder="Enter Surgery Outcome"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="notes">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Notes
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Enter Notes"
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

export default PatientPostSurgicalHistory;
