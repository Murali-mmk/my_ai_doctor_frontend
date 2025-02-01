import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

function PatientDetails() {
  const [formData, setFormData] = useState({
    title: "Mr",
    first_name: "",
    middle_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    blood_group: "",
    marital_status: "",
    occupation: "",
    national_id: "",
    profile_photo_url: "",
    is_active: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  const bloodGroupOptions = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
  ];

  const maritalStatusOptions = [
    { value: "Married", label: "Married" },
    { value: "Single", label: "Single" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, selectedOption) => {
    setFormData({ ...formData, [name]: selectedOption?.value || "" });
  };

  const submitFormData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://my-ai-doctor-server.onrender.com/api/patient/patients/create/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to submit: ${response.statusText}`);
      }

      const data = await response.json();
      // console.log("Form submitted successfully:", data);
      console.log("==================================", data.data.patient_id);
      localStorage.setItem("patient_id", data.data.patient_id);

      alert("Patient details saved successfully!");
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(err.message);
      alert("Failed to save patient details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFormData();
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
        <h2 className="mb-4 text-center">Patient Details</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="title">
                <Form.Label className="fs-15 fw-semibold">Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter title"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="firstName">
                <Form.Label className="fs-15 fw-semibold">
                  First Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  placeholder="Enter first name"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="middleName">
                <Form.Label className="fs-15 fw-semibold">
                  Middle Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="middle_name"
                  value={formData.middle_name}
                  onChange={handleInputChange}
                  placeholder="Enter middle name"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="lastName">
                <Form.Label className="fs-15 fw-semibold">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  placeholder="Enter last name"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="dateOfBirth">
                <Form.Label className="fs-15 fw-semibold">
                  Date of Birth
                </Form.Label>
                <Form.Control
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="gender">
                <Form.Label className="fs-15 fw-semibold">Gender</Form.Label>
                <Select
                  options={genderOptions}
                  value={genderOptions.find(
                    (opt) => opt.value === formData.gender
                  )}
                  onChange={(selectedOption) =>
                    handleSelectChange("gender", selectedOption)
                  }
                  placeholder="Select gender"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="bloodGroup">
                <Form.Label className="fs-15 fw-semibold">
                  Blood Group
                </Form.Label>
                <Select
                  options={bloodGroupOptions}
                  value={bloodGroupOptions.find(
                    (opt) => opt.value === formData.blood_group
                  )}
                  onChange={(selectedOption) =>
                    handleSelectChange("blood_group", selectedOption)
                  }
                  placeholder="Select blood group"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="maritalStatus">
                <Form.Label className="fs-15 fw-semibold">
                  Marital Status
                </Form.Label>
                <Select
                  options={maritalStatusOptions}
                  value={maritalStatusOptions.find(
                    (opt) => opt.value === formData.marital_status
                  )}
                  onChange={(selectedOption) =>
                    handleSelectChange("marital_status", selectedOption)
                  }
                  placeholder="Select marital status"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="occupation">
                <Form.Label className="fs-15 fw-semibold">
                  Occupation
                </Form.Label>
                <Form.Control
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  placeholder="Enter occupation"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="nationalId">
                <Form.Label className="fs-15 fw-semibold">
                  National ID
                </Form.Label>
                <Form.Control
                  type="text"
                  name="national_id"
                  value={formData.national_id}
                  onChange={handleInputChange}
                  placeholder="Enter national ID"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="profilePhotoUrl">
                <Form.Label>Profile Photo URL</Form.Label>
                <Form.Control
                  type="url"
                  name="profile_photo_url"
                  value={formData.profile_photo_url}
                  onChange={handleInputChange}
                  placeholder="Enter profile photo URL"
                />
              </Form.Group>
            </Col>
          </Row> */}

          <Row className="mb-3">
            <Col md={12}>
              <Form.Check
                className="fs-15 fw-semibold"
                type="checkbox"
                id="isActive"
                label="Active"
                name="is_active"
                checked={formData.is_active}
                onChange={(e) =>
                  setFormData({ ...formData, is_active: e.target.checked })
                }
              />
            </Col>
          </Row>

          {/* <div className="text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div> */}
          {error && (
            <div className="text-danger mb-3">
              <strong>Error:</strong> {error}
            </div>
          )}

          {/*  <div className="text-center">
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Saving..." : "Submit"}
            </Button>
          </div> */}
        </Form>
      </div>
    </div>
  );
}

export default PatientDetails;
