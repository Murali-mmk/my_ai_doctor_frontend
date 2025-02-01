import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function PatientBilling() {
  const [formData, setFormData] = useState({
    bill_id: "",
    amount: "",
    insurance_covered: "",
    patient_responsibility: "",
    status: "",
    bill_date: "",
    due_date: "",
    paid_date: "",
    patient: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://my-ai-doctor-server.onrender.com/api/patient/patient-billing/",
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
      console.log("Form submitted successfully:", data);
      alert("Patient billing submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div>
      <style>
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
            // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
          }
        `}
      </style>
      <div className="form-container">
        <h2 className="mb-4 text-center">Patient Billing Information</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="billId">
                <Form.Label className="fs-15 fw-semibold">Bill ID</Form.Label>
                <Form.Control
                  type="number"
                  name="bill_id"
                  value={formData.bill_id}
                  onChange={handleInputChange}
                  placeholder="Enter Bill ID"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="amount">
                <Form.Label className="fs-15 fw-semibold">
                  Amount ($)
                </Form.Label>
                <Form.Control
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="Enter Amount"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="insuranceCovered">
                <Form.Label className="fs-15 fw-semibold">
                  Insurance Covered ($)
                </Form.Label>
                <Form.Control
                  type="number"
                  name="insurance_covered"
                  value={formData.insurance_covered}
                  onChange={handleInputChange}
                  placeholder="Enter Insurance Covered Amount"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="patientResponsibility">
                <Form.Label className="fs-15 fw-semibold">
                  Patient Responsibility ($)
                </Form.Label>
                <Form.Control
                  type="number"
                  name="patient_responsibility"
                  value={formData.patient_responsibility}
                  onChange={handleInputChange}
                  placeholder="Enter Patient Responsibility"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="status">
                <Form.Label className="fs-15 fw-semibold">Status</Form.Label>
                <Form.Control
                  type="text"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  placeholder="Enter Status (e.g., Pending)"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="billDate">
                <Form.Label className="fs-15 fw-semibold">Bill Date</Form.Label>
                <Form.Control
                  type="date"
                  name="bill_date"
                  value={formData.bill_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="dueDate">
                <Form.Label className="fs-15 fw-semibold">Due Date</Form.Label>
                <Form.Control
                  type="date"
                  name="due_date"
                  value={formData.due_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="paidDate">
                <Form.Label className="fs-15 fw-semibold">Paid Date</Form.Label>
                <Form.Control
                  type="date"
                  name="paid_date"
                  value={formData.paid_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="patient">
                <Form.Label className="fs-15 fw-semibold">
                  Patient ID
                </Form.Label>
                <Form.Control
                  type="number"
                  name="patient"
                  value={formData.patient}
                  onChange={handleInputChange}
                  placeholder="Enter Patient ID"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="appointment">
                <Form.Label className="fs-15 fw-semibold">
                  Appointment ID
                </Form.Label>
                <Form.Control
                  type="number"
                  name="appointment"
                  value={formData.appointment}
                  onChange={handleInputChange}
                  placeholder="Enter Appointment ID"
                />
              </Form.Group>
            </Col>
          </Row>

          {/*  <div className="text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div> */}
        </Form>
      </div>
    </div>
  );
}

export default PatientBilling;
