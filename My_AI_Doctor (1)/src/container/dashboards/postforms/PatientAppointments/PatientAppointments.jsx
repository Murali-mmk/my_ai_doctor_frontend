import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

function PatientPostAppointments() {
  const patientId = localStorage.getItem("patient_id");
  const [formData, setFormData] = useState({
    department_id: "",
    service_type: "",
    appointment_date: "",
    appointment_time: "",
    reason_for_visit: "",
    symptoms: "",
    status: "",
    patient: patientId,
    doctor_id: "", // Added doctor_id
  });

  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]); // Stores doctors based on the selected department
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch departments on component mount
  useEffect(() => {
    async function fetchDepartments() {
      try {
        const response = await fetch(
          "https://my-ai-doctor-server.onrender.com/api/doctor/departments/"
        );
        const data = await response.json();

        if (Array.isArray(data.results)) {
          setDepartments(data.results);
        } else {
          console.error("Expected an array but received:", data.results);
        }
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    }
    fetchDepartments();
  }, []);

  // Fetch doctors based on selected department
  useEffect(() => {
    if (formData.department_id) {
      async function fetchDoctors() {
        try {
          const response = await fetch(
            `https://my-ai-doctor-server.onrender.com/api/doctor/doctors/?department_id=${formData.department_id}`
          );
          const data = await response.json();

          if (Array.isArray(data.results)) {
            setDoctors(data.results);
          } else {
            console.error("Expected an array but received:", data.results);
          }
        } catch (error) {
          console.error("Error fetching doctors:", error);
        }
      }
      fetchDoctors();
    }
  }, [formData.department_id]);

  const statusOptions = [
    { value: "SCHEDULED", label: "Scheduled" },
    { value: "COMPLETED", label: "Completed" },
    { value: "CANCELLED", label: "Cancelled" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (selectedOption) => {
    setFormData({
      ...formData,
      status: selectedOption?.value || "",
    });
  };

  const handleDepartmentChange = (selectedOption) => {
    setFormData({
      ...formData,
      department_id: selectedOption?.value || "",
    });
  };

  const handleDoctorChange = (selectedOption) => {
    setFormData({
      ...formData,
      doctor_id: selectedOption?.value || "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToSend = {
      ...formData,
    };

    try {
      const response = await fetch(
        "https://my-ai-doctor-server.onrender.com/api/patient/patient-appointments/create/",
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
        <h2 className="mb-4 text-center">Patient Appointments</h2>
        <Form onSubmit={handleSubmit}>
          {/* Department Dropdown */}
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="department">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Department
                </Form.Label>
                <Select
                  options={departments.map((dept) => ({
                    value: dept.department_id, // department_id as value
                    label: dept.department_name, // department_name as label
                  }))}
                  value={
                    departments
                      ? departments.find(
                          (dept) =>
                            dept.department_id === formData.department_id
                        )
                      : null
                  }
                  onChange={handleDepartmentChange} // Update department_id in formData
                  placeholder="Select a department"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Doctor Dropdown */}
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="doctor">
                <Form.Label className="fs-15 fw-semibold">Doctor</Form.Label>
                <Select
                  options={doctors.map((doctor) => ({
                    value: doctor.doctor_id, // doctor_id as value
                    label: `${doctor.first_name} ${doctor.last_name}`, // Combine first and last name for the label
                  }))}
                  value={
                    doctors
                      ? doctors.find(
                          (doctor) => doctor.doctor_id === formData.doctor_id
                        )
                      : null
                  }
                  onChange={handleDoctorChange} // Update doctor_id in formData
                  placeholder="Select a doctor"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Other form fields (service type, appointment date, etc.) */}
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="serviceType">
                <Form.Label className="fs-15 fw-semibold">
                  Service Type
                </Form.Label>
                <Form.Control
                  type="text"
                  name="service_type"
                  value={formData.service_type}
                  onChange={handleInputChange}
                  placeholder="Enter service type"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="appointmentDate">
                <Form.Label className="fs-15 fw-semibold">
                  Appointment Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="appointment_date"
                  value={formData.appointment_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Other input fields */}
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="appointmentTime">
                <Form.Label className="fs-15 fw-semibold">
                  Appointment Time
                </Form.Label>
                <Form.Control
                  type="time"
                  name="appointment_time"
                  value={formData.appointment_time}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="reasonForVisit">
                <Form.Label className="fs-15 fw-semibold">
                  Reason for Visit
                </Form.Label>
                <Form.Control
                  type="text"
                  name="reason_for_visit"
                  value={formData.reason_for_visit}
                  onChange={handleInputChange}
                  placeholder="Enter reason for visit"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Symptoms and Status */}
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="symptoms">
                <Form.Label className="fs-15 fw-semibold">Symptoms</Form.Label>
                <Form.Control
                  type="text"
                  name="symptoms"
                  value={formData.symptoms}
                  onChange={handleInputChange}
                  placeholder="Enter symptoms"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="status">
                <Form.Label className="fs-15 fw-semibold">Status</Form.Label>
                <Select
                  options={statusOptions}
                  value={
                    statusOptions.find(
                      (status) => status.value === formData.status
                    ) || null
                  }
                  onChange={handleStatusChange}
                  placeholder="Select status"
                />
              </Form.Group>
            </Col>
          </Row>

          {/*  <Button variant="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button> */}
        </Form>
      </div>
    </div>
  );
}

export default PatientPostAppointments;
