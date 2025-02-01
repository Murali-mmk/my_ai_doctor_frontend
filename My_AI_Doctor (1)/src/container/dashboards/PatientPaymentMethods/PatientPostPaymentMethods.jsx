import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";

function PatientPostPaymentMethods() {
  const [formData, setFormData] = useState({
    payment_type: "",
    card_last_four: "",
    expiry_date: "",
    is_default: false,
    created_at: "",
    patient: "",
  });

  const paymentOptions = [
    { value: "Credit Card", label: "Credit Card" },
    { value: "Net banking", label: "Net banking" },
    { value: "UPI", label: "UPI" },
    { value: "Other", label: "Other" },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
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
        <h2 className="mb-4 text-center">Patient Payment Methods</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="paymentType">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Payment Type
                </Form.Label>
                <Select
                  options={paymentOptions}
                  name="paymentType"
                  value={paymentOptions.find(
                    (opt) => opt.value === formData.payment_type
                  )}
                  onChange={(selectedOption) =>
                    setFormData({
                      ...formData,
                      paymentType: selectedOption?.value || "",
                    })
                  }
                  placeholder="Select Payment Method"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="cardLastFour">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Card Last Four
                </Form.Label>
                <Form.Control
                  type="text"
                  name="card_last_four"
                  value={formData.card_last_four}
                  onChange={handleInputChange}
                  placeholder="Enter last four digits of card"
                  maxLength={4}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="expiryDate">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Expiry Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="expiry_date"
                  value={formData.expiry_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="createdAt">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Created At
                </Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="created_at"
                  value={formData.created_at}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="patient">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Patient
                </Form.Label>
                <Form.Control
                  type="text"
                  name="patient"
                  value={formData.patient}
                  onChange={handleInputChange}
                  placeholder="Enter patient name"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="isDefault">
                <Form.Check
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                  type="checkbox"
                  name="is_default"
                  label="Is Default"
                  checked={formData.is_default}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          {/*   <div className="text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div> */}
        </Form>
      </div>
    </div>
  );
}

export default PatientPostPaymentMethods;
