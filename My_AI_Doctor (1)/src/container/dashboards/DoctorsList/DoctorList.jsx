import React, { useState } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa"; // Importing the search icon
import DoctorMapping from "./DoctorMapping"; // Assuming you have this component

const DoctorsList = ({ variant }) => {
  const [search, setSearch] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All"); // State for department filter

  // **Static Doctor Data**
  const doctors = [
    {
      doctor_id: 1,
      first_name: "John",
      last_name: "Doe",
      specialization: "Cardiology",
    },
    {
      doctor_id: 2,
      first_name: "Alice",
      last_name: "Smith",
      specialization: "Neurology",
    },
    {
      doctor_id: 3,
      first_name: "Robert",
      last_name: "Brown",
      specialization: "Dermatology",
    },
    {
      doctor_id: 4,
      first_name: "Emily",
      last_name: "Davis",
      specialization: "Orthopedics",
    },
    {
      doctor_id: 5,
      first_name: "John",
      last_name: "Doe",
      specialization: "Cardiology",
    },
    {
      doctor_id: 6,
      first_name: "Alice",
      last_name: "Smith",
      specialization: "Neurology",
    },
    {
      doctor_id: 7,
      first_name: "Robert",
      last_name: "Brown",
      specialization: "Dermatology",
    },
    {
      doctor_id: 8,
      first_name: "Emily",
      last_name: "Davis",
      specialization: "Orthopedics",
    },
  ];

  // Extract unique departments for filtering
  const departments = ["All", ...new Set(doctors.map((doc) => doc.specialization))];

  // **Filtering Logic**
  const filteredDoctors = doctors.filter((doctor) => {
    const fullName = `${doctor.first_name} ${doctor.last_name}`.toLowerCase();
    const specialization = doctor.specialization.toLowerCase();
    const matchesSearch =
      fullName.includes(search.toLowerCase()) || specialization.includes(search.toLowerCase());
    const matchesDepartment = departmentFilter === "All" || doctor.specialization === departmentFilter;

    return matchesSearch && matchesDepartment;
  });

  return (
    <Container fluid className="mt-4 p-2">
      {/* Search Bar and Department Filter */}
      <Row className="mb-4 mt-3">
        <Col md={4} className="ms-3 position-relative">
          <Form.Control
            type="text"
            placeholder="Search a doctor or medical department"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ paddingLeft: "40px", fontSize: "14px" }}
            className="border-dark"
          />
          {/* Search Icon inside the input field */}
          <FaSearch className="position-absolute top-50 start-1 translate-middle-y ms-3" size={13} />
        </Col>
        <Col md={4} className="mx-auto me-4">
          <Form.Select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="border-dark"
          >
            {departments.map((dept, index) => (
              <option key={index} value={dept}>
                {dept}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      {/* Display Doctors Data */}
      <Row>
        {filteredDoctors.length !== 0 ? (
          <DoctorMapping arr={filteredDoctors} variant={variant} />
        ) : (
          <Col className="text-center">
            <Card className="p-4">
              <Card.Body>
                <h5>No Doctors Found</h5>
                <p>Try searching with a different keyword or select another department.</p>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default DoctorsList;

