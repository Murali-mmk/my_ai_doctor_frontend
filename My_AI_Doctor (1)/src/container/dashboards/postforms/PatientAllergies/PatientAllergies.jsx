import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function PatientPostAllergies() {
  const id = localStorage.getItem("patient_id"); // Fetch patient ID from localStorage

  const [formData, setFormData] = useState({
    allergen_type: "",
    reaction: "",
    severity: "",
    identified_date: "",
    notes: "",
    patient: id,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Include the patient ID in the form data
    const dataToSend = { ...formData }; // Add patient ID

    try {
      const response = await fetch(
        "https://my-ai-doctor-server.onrender.com/api/patient/patient-allergies/create/",
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
      alert("Patient allergies submitted successfully!");
      localStorage.setItem("allergy_id", data.allergy_id);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <style>
        {`
        /*   body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
          }
 */
          .form-container {
            width: 950px;
            max-width: 1000px;
            padding: 30px 50px;
            background: white;
            // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
          }
        `}
      </style>
      <div className="form-container">
        <h2 className="mb-4 text-center">Patient Allergies</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="allergenType">
                <Form.Label className="fs-15 fw-semibold">
                  Allergen Type
                </Form.Label>
                <Form.Control
                  type="text"
                  name="allergen_type"
                  value={formData.allergen_type}
                  onChange={handleInputChange}
                  placeholder="Enter allergen type"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="reaction">
                <Form.Label className="fs-15 fw-semibold">Reaction</Form.Label>
                <Form.Control
                  type="text"
                  name="reaction"
                  value={formData.reaction}
                  onChange={handleInputChange}
                  placeholder="Enter reaction"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="severity">
                <Form.Label className="fs-15 fw-semibold">Severity</Form.Label>
                <Form.Control
                  type="text"
                  name="severity"
                  value={formData.severity}
                  onChange={handleInputChange}
                  placeholder="Enter severity"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="identifiedDate">
                <Form.Label className="fs-15 fw-semibold">
                  Identified Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="identified_date"
                  value={formData.identified_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="notes">
                <Form.Label className="fs-15 fw-semibold">Notes</Form.Label>
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

          {/*  <div className="text-center">
            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div> */}
        </Form>
      </div>
    </div>
  );
}

export default PatientPostAllergies;
