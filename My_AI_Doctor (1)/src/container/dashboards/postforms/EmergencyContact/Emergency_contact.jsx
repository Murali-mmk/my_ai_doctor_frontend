import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

function EmergencyContactDetails() {
  const id = localStorage.getItem("patient_id");

  const [formData, setFormData] = useState({
    contact_name: "",
    relationship: "",
    phone_number: "",
    address: "",
    is_primary: true,
    patient: id,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const relationshipOptions = [
    { value: "Father", label: "Father" },
    { value: "Mother", label: "Mother" },
    { value: "Sibling", label: "Sibling" },
    { value: "Spouse", label: "Spouse" },
    { value: "Friend", label: "Friend" },
    { value: "Other", label: "Other" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, selectedOption) => {
    setFormData({ ...formData, [name]: selectedOption?.value || "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://my-ai-doctor-server.onrender.com/api/patient/emergencycontact/",
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
      <style>
        {`
         /*  body {
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
        <h2 className="mb-4 text-center">Emergency Contact Details</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="contactName">
                <Form.Label className="fs-15 fw-semibold">
                  Contact Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="contact_name"
                  value={formData.contact_name}
                  onChange={handleInputChange}
                  placeholder="Enter contact name"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="relationship">
                <Form.Label className="fs-15 fw-semibold">
                  Relationship
                </Form.Label>
                <Select
                  options={relationshipOptions}
                  value={relationshipOptions.find(
                    (opt) => opt.value === formData.relationship
                  )}
                  onChange={(selectedOption) =>
                    handleSelectChange("relationship", selectedOption)
                  }
                  placeholder="Select relationship"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="phoneNumber">
                <Form.Label className="fs-15 fw-semibold">
                  Phone Number
                </Form.Label>
                <Form.Control
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="address">
                <Form.Label className="fs-15 fw-semibold">Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter address"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Check
                className="fs-15 fw-semibold"
                type="checkbox"
                id="isPrimary"
                label="Primary Contact"
                name="is_primary"
                checked={formData.is_primary}
                onChange={(e) =>
                  setFormData({ ...formData, is_primary: e.target.checked })
                }
              />
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

export default EmergencyContactDetails;
