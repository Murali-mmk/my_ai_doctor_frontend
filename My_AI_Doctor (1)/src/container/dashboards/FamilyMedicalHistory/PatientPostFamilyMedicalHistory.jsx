import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function PatientPostFamilyMedicalHistory() {
  const id = localStorage.getItem("patient_id");

  const [formData, setFormData] = useState({
    relationship: "",
    medical_condition: "",
    age_at_onset: "",
    current_status: "",
    notes: "",
    patient: id
  });

  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentStatusOptions = [
    { value: "Ongoing", label: "Ongoing" },
    { value: "Resolved", label: "Resolved" },
    { value: "Other", label: "Other" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Include the patient ID in the form data
    const dataToSend = { ...formData };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/patient/patient-family-medical-history/create/",
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
      localStorage.setItem("family_history_id",data.family_history_id)
      alert("Family medical history submitted successfully!");
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
        <h2 className="mb-4 text-center">Family Medical History</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="relationship">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Relationship
                </Form.Label>
                <Form.Control
                  type="text"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleInputChange}
                  placeholder="Enter relationship (e.g., Father)"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="medicalCondition">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Medical Condition
                </Form.Label>
                <Form.Control
                  type="text"
                  name="medical_condition"
                  value={formData.medical_condition}
                  onChange={handleInputChange}
                  placeholder="Enter medical condition"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="ageAtOnset">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Age at Onset
                </Form.Label>
                <Form.Control
                  type="number"
                  name="age_at_onset"
                  value={formData.age_at_onset}
                  onChange={handleInputChange}
                  placeholder="Enter age at onset"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="currentStatus">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Current Status
                </Form.Label>
                <Form.Select
                  name="current_status"
                  value={formData.current_status}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select current status
                  </option>
                  {currentStatusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="notes" className="mb-3">
            <Form.Label className="fw-semibold" style={{ fontSize: "18px" }}>
              Notes
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Enter additional notes (e.g., Father has a history of heart disease)"
            />
          </Form.Group>

          {/* <div className="text-center">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div> */}
        </Form>
      </div>
    </div>
  );
}

export default PatientPostFamilyMedicalHistory;
