import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function PatientPostMedications() {
  const patientId = localStorage.getItem("patient_id");
  const [formData, setFormData] = useState({
    medicine_name: "",
    dosage: "",
    frequency: "",
    start_date: "",
    end_date: "",
    prescribing_doctor: "",
    purpose: "",
    side_effects: "",
    is_current: false,
    patient: patientId
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

    // Assuming you have the patient ID saved in localStorage or a variable
    

    const dataToSend = {
      ...formData
    };

    try {
      const response = await fetch(
        "http://192.168.1.89:8000/api/patient/patient-medications/create/",
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
      alert("Patient medication submitted successfully!");
      localStorage.setItem("medication_id",data.medication_id)
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
        <h2 className="mb-4 text-center">Patient Medications</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="medicineName">
                <Form.Label>Medicine Name</Form.Label>
                <Form.Control
                  type="text"
                  name="medicine_name"
                  value={formData.medicine_name}
                  onChange={handleInputChange}
                  placeholder="Enter medicine name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="dosage">
                <Form.Label>Dosage</Form.Label>
                <Form.Control
                  type="text"
                  name="dosage"
                  value={formData.dosage}
                  onChange={handleInputChange}
                  placeholder="Enter dosage"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="frequency">
                <Form.Label>Frequency</Form.Label>
                <Form.Control
                  type="text"
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleInputChange}
                  placeholder="Enter frequency"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="startDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="endDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="prescribingDoctor">
                <Form.Label>Prescribing Doctor</Form.Label>
                <Form.Control
                  type="text"
                  name="prescribing_doctor"
                  value={formData.prescribing_doctor}
                  onChange={handleInputChange}
                  placeholder="Enter prescribing doctor"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="purpose">
                <Form.Label>Purpose</Form.Label>
                <Form.Control
                  type="text"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  placeholder="Enter purpose"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="sideEffects">
                <Form.Label>Side Effects</Form.Label>
                <Form.Control
                  type="text"
                  name="side_effects"
                  value={formData.side_effects}
                  onChange={handleInputChange}
                  placeholder="Enter side effects"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="isCurrent">
                <Form.Check
                  type="checkbox"
                  label="Is Current Medication"
                  name="is_current"
                  checked={formData.is_current}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
{/* 
          <div className="text-center">
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div> */}
        </Form>
      </div>
    </div>
  );
}

export default PatientPostMedications;
