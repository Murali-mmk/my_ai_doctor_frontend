import { useState } from "react";
import { Card, Button, Form, Col, Row } from "react-bootstrap";

const BookAppointments = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <Card className="custom-card">
            <Card.Header className="justify-content-between">
                <Card.Title>Book Appointment</Card.Title>
                
            </Card.Header>
            <Card.Body>
                <div className="row gy-4">
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Form.Label htmlFor="department_id">Department ID</Form.Label>
                        <Form.Control type="number" id="department_id" placeholder="Enter Department ID" />
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Form.Label htmlFor="doctor_id">Doctor ID</Form.Label>
                        <Form.Control type="text" id="doctor_id" placeholder="Enter Doctor ID" />
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Form.Label htmlFor="service_type">Service Type</Form.Label>
                        <Form.Control type="text" id="service_type" placeholder="General Checkup" />
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Form.Label htmlFor="appointment_date">Appointment Date</Form.Label>
                        <Form.Control type="date" id="appointment_date" />
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Form.Label htmlFor="appointment_time">Appointment Time</Form.Label>
                        <Form.Control type="time" id="appointment_time" />
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Form.Label htmlFor="reason_for_visit">Reason for Visit</Form.Label>
                        <Form.Control type="text" id="reason_for_visit" placeholder="Routine checkup" />
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Form.Label htmlFor="appointment_type">Appointment Type</Form.Label>
                        <Form.Select id="appointment_type">
                            <option value="In person">In Person</option>
                            <option value="Online">Online</option>
                        </Form.Select>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Form.Label htmlFor="symptoms">Symptoms</Form.Label>
                        <Form.Control type="text" id="symptoms" placeholder="None" />
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Form.Label htmlFor="status">Status</Form.Label>
                        <Form.Control type="text" id="status" placeholder="Scheduled" disabled />
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Form.Label htmlFor="priority_level">Priority Level</Form.Label>
                        <Form.Select id="priority_level">
                            <option value="Normal">Normal</option>
                            <option value="High">High</option>
                            <option value="Urgent">Urgent</option>
                        </Form.Select>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Form.Label htmlFor="special_requirement">Special Requirement</Form.Label>
                        <Form.Control type="text" id="special_requirement" placeholder="None" />
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Form.Label htmlFor="chief_complaint">Chief Complaint</Form.Label>
                        <Form.Control type="text" id="chief_complaint" placeholder="None" />
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <Button variant="primary" className="mt-4">Book Appointment</Button>
                    </Col>
                </div>
            </Card.Body>
        </Card>
    );
};

export default BookAppointments;