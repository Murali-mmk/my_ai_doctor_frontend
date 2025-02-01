import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function PatientPostMedicalConditions() {
  const id = localStorage.getItem("patient_id");
  const [formData, setFormData] = useState({
    patient: id,
    condition_name: "",
    diagnosis_date: "",
    current_status: "",
    treating_physician: "",
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
        "https://my-ai-doctor-server.onrender.com/api/patient/medicalcondition/",
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
      console.log("Medical condition form submitted successfully:", data);
      alert("Medical condition details submitted successfully!");
      localStorage.setItem("condition_id",data.condition_id)
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit medical condition details. Please try again.");
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
        <h2 className="mb-4 text-center">Patient Medical Conditions</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="conditionName">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Condition Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="condition_name"
                  value={formData.condition_name}
                  onChange={handleInputChange}
                  placeholder="Enter condition name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="currentStatus">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Current Status
                </Form.Label>
                <Form.Control
                  type="text"
                  name="current_status"
                  value={formData.current_status}
                  onChange={handleInputChange}
                  placeholder="Enter current status"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="treatingPhysician">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Treating Physician
                </Form.Label>
                <Form.Control
                  type="text"
                  name="treating_physician"
                  value={formData.treating_physician}
                  onChange={handleInputChange}
                  placeholder="Enter treating physician name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="diagnosisDate">
                <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
                  Diagnosis Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="diagnosis_date"
                  value={formData.diagnosis_date}
                  onChange={handleInputChange}
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
                  placeholder="Enter any additional notes"
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

export default PatientPostMedicalConditions;
