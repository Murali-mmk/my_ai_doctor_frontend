import React, { useState } from "react";
import { Form, Row, Col, Button, Badge } from "react-bootstrap";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

function PatientImmunizations() {
  const patientId = localStorage.getItem("patient_id");
  const [formData, setFormData] = useState({
    vaccine_name: "",
    administered_date: "",
    dose_number: "",
    administered_by: "",
    location: "",
    next_due_date: "",
    batch_number: "",
    notes: " ",
    patient: patientId,
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

    const dataToSend = {
      ...formData,
    };

    try {
      const response = await fetch(
        "https://my-ai-doctor-server.onrender.com/api/patient/patient-immunizations/create/",
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
      localStorage.setItem("medication_id", data.medication_id);
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
          /* body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
          } */

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
        <h2 className="mb-4 text-center">Patient Immunizations</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="vaccineName">
                <Form.Label className="fs-15 fw-semibold">
                  Vaccine Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="vaccine_name"
                  value={formData.vaccine_name}
                  onChange={handleInputChange}
                  placeholder="Enter vaccine name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="administeredDate">
                <Form.Label className="fs-15 fw-semibold">
                  Administered Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="administered_date"
                  value={formData.administered_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="doseNumber">
                <Form.Label className="fs-15 fw-semibold">
                  Dose Number
                </Form.Label>
                <Form.Control
                  type="number"
                  name="dose_number"
                  value={formData.dose_number}
                  onChange={handleInputChange}
                  placeholder="Enter dose number"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="administeredBy">
                <Form.Label className="fs-15 fw-semibold">
                  Administered By
                </Form.Label>
                <Form.Control
                  type="text"
                  name="administered_by"
                  value={formData.administered_by}
                  onChange={handleInputChange}
                  placeholder="Enter administered by"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="location">
                <Form.Label className="fs-15 fw-semibold">Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter location"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="nextDueDate">
                <Form.Label className="fs-15 fw-semibold">
                  Next Due Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="next_due_date"
                  value={formData.next_due_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="batchNumber">
                <Form.Label className="fs-15 fw-semibold">
                  Batch Number
                </Form.Label>
                <Form.Control
                  type="text"
                  name="batch_number"
                  value={formData.batch_number}
                  onChange={handleInputChange}
                  placeholder="Enter batch number"
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
                  placeholder="Enter any notes"
                />
              </Form.Group>
            </Col>
          </Row>

          {/*  <div className="text-center">
                     <Button variant="primary" type="submit" disabled={isSubmitting}>
                       {isSubmitting ? "Submitting..." : "Submit"}
                     </Button>
                   </div> */}
        </Form>
      </div>
    </div>
  );
}

export default PatientImmunizations;
