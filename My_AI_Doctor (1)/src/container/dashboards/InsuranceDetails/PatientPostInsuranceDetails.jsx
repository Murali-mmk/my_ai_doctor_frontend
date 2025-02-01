import React, { useState } from "react";
import { Form, Row, Col, Button, Badge } from "react-bootstrap";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

function PatientPostInsuranceDetails() {
  const id = localStorage.getItem("patient_id");

  const [formData, setFormData] = useState({
    provider_name: "",
    policy_number: "",
    group_number: "",
    policy_holder_name: "",
    relationship_to_patient: "",
    policy_start_date: "",
    policy_end_date: "",
    patient:id,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagsChange = (selectedOptions) => {
    setFormData({
      ...formData,
      tags: selectedOptions || [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/patient/insurance/",
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
      console.log("insurance Form submitted successfully:", data);
      localStorage.setItem("insurance_id",data.insurance_id)
      alert("Emergency contact details submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit emergency contact details. Please try again.");
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
        <h2 className="mb-4 text-center">Patient Insurance Details</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="documentType">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Provider Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="provider_name"
                  value={formData.provider_name}
                  onChange={handleInputChange}
                  placeholder="Enter Provider Name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="documentTitle">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Policy Number
                </Form.Label>
                <Form.Control
                  type="text"
                  name="policy_number"
                  value={formData.policy_number}
                  onChange={handleInputChange}
                  placeholder="Enter Policy Number"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="documentUrl">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Group Number
                </Form.Label>
                <Form.Control
                  type="text"
                  name="group_number"
                  value={formData.group_number}
                  onChange={handleInputChange}
                  placeholder="Enter Group Number"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="documentTitle">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Policy Holder Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="policy_holder_name"
                  value={formData.policy_holder_name}
                  onChange={handleInputChange}
                  placeholder="Enter Policy Holder Name"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="documentType">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Relationship To Patient
                </Form.Label>
                <Form.Control
                  type="text"
                  name="relationship_to_patient"
                  value={formData.relationship_to_patient}
                  onChange={handleInputChange}
                  placeholder="Enter Relationship To Patient"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="documentDate">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Policy Start Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="policy_start_date"
                  value={formData.policy_start_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="documentDate">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Policy End Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="policy_end_date"
                  value={formData.policy_end_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          {/* <div className="text-center">
                      <Button variant="primary" type="submit" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                      </Button>
          </div> */}
        </Form>
      </div>
    </div>
  );
}

export default PatientPostInsuranceDetails;
