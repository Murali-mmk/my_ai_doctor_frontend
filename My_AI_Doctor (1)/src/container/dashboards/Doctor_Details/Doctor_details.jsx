import React from "react";
import { Card, Button, Row, Col, ListGroup, Container } from "react-bootstrap";
import docimage from "../../../assets/images/placeholder-image/placeholder-male.png";

function DoctorDetails() {
  const doctor = {
    first_name: "Rahul",
    last_name: "Sharma",
    specialization: "Dermatologist",
    email: "rahul.sharma@example.com",
    phone: "+91 98765 43210",
    joining_date: "15th March 2018",
    status: "Active",
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Container className="mt-3 p-4">
        <Row className="mb-4">
          <Col md={3} style={{ height: "28vh", width: "16vw" }}>
            <Card.Img
              variant="top"
              src={docimage}
              alt={`Dr. ${doctor.first_name} ${doctor.last_name}`}
              className="rounded-3 shadow-sm"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
          <Col md={9} style={{ height: "28vh", width: "51.4vw" }}>
            <Card className="h-auto">
              <Card.Body className="p-3">
                <Row>
                  <Col>
                    <Card.Title>
                      Dr. {doctor.first_name} {doctor.last_name}
                    </Card.Title>
                  </Col>
                  <Col className="text-end">
                    <Button size="lg">Book Appointment</Button>
                  </Col>
                </Row>
                <Card.Text>
                  <strong>Specialization:</strong> {doctor.specialization}
                </Card.Text>
                <Card.Text>
                  <strong>Email:</strong> {doctor.email}
                </Card.Text>
                <Card.Text>
                  <strong>Phone:</strong> {doctor.phone}
                </Card.Text>
                <Card.Text>
                  <strong>Joining Date:</strong> {doctor.joining_date}
                </Card.Text>
                <Card.Text>
                  <strong>Status:</strong> {doctor.status}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Location Card */}
        <Card className="mb-4 shadow-sm">
          <Card.Body className="p-3">
            <Card.Title>Location</Card.Title>
            <Card.Text>
              Door No-1-1-83, New Venkojipalem MVP sector 6, NH16, near HP Petrol
              Bunk, Visakhapatnam, Andhra Pradesh 530022
            </Card.Text>
            <Card.Text>
              <strong>Contact:</strong> 040-68334455
            </Card.Text>
          </Card.Body>
        </Card>

        {/* About Doctor Card */}
        <Card className="mb-4 shadow-sm">
          <Card.Body className="p-3">
            <Card.Title>About Doctor</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item className="border-0 p-0 mt-2">
                <strong>Expertise:</strong> Acne, Hair Disorders, Psoriasis
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 mt-2">
                <strong>Publications:</strong> Improved outcomes for familial
                tricho-epithelioma
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 mt-2">
                <strong>Awards:</strong> Treasurer IADVL AP YEAR 2021-22
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 mt-2">
                <strong>Membership:</strong> IADVL LM/AP/8074
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 mt-2">
                <strong>Languages:</strong> English, తెలుగు, हिंदी
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default DoctorDetails;
