import { Fragment } from 'react';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import ecommerceimg1 from "../../../assets/images/ecommerce/png/1.png";
import ecommerceimg11 from "../../../assets/images/ecommerce/png/11.png";
import ecommerceimg14 from "../../../assets/images/ecommerce/png/14.png";
import ecommerceimg32 from "../../../assets/images/ecommerce/png/32.png";
import ecommerceimg33 from "../../../assets/images/ecommerce/png/33.png";
import ecommerceimg34 from "../../../assets/images/ecommerce/png/34.png";
import face9 from "../../../assets/images/faces/9.jpg";
import React, { useRef } from 'react';


const Appointmentdetails = () => {
    
    const userDetails = {
        first_name: "John",
        last_name: "Doe",
        specialization: "Cardiology",
        registration_number: "REG123456",
        email: "john.doe@example.com",
        phone: "+1234567890",
        department: "Cardiology",
        joining_date: "2021-01-01",
        status: "Active",
        consultation_fee: "150.00"
    };
    // const printRef = useRef();
    
    const printRef = useRef();

    // Custom print function
    

 const print = () => {
    const printContent = document.getElementById('order-card'); // Targeting the specific card
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(printContent.innerHTML); // Copy the content of the card
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print(); // This will print only the selected card content
};


    return (
        <Fragment>
            <Pageheader title="Order Details" heading="Ecommerce" active="Order Details" />
            <div ref={printRef} className="print-container">
            <Row>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card" id="order-card">
        <Card.Header className="d-flex justify-content-between">
            <Card.Title>
                Service Type - <span className="text-primary">General Checkup</span>
            </Card.Title>
            <div>
                <span className="badge bg-primary-transparent">
                    Estimated Appointment: 01, Oct 2023
                </span>
            </div>
        </Card.Header>
        <Card.Body className="p-0">
            <div className="table-responsive">
                <Table className="text-nowrap">
                    {/* <thead>
                        <tr>
                            <th scope="col">Field</th>
                            <th scope="col">Details</th>
                            <th scope="col">Field</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        <tr>
                            <td><strong>Appointment Time</strong></td>
                            <td>10:00 AM</td>
                            <td><strong>Reason for Visit</strong></td>
                            <td>Routine checkup</td>
                        </tr>
                        <tr>
                            <td><strong>Appointment Type</strong></td>
                            <td>In person</td>
                            <td><strong>Symptoms</strong></td>
                            <td>None</td>
                        </tr>
                        <tr>
                            <td><strong>Status</strong></td>
                            <td>Scheduled</td>
                            <td><strong>Priority Level</strong></td>
                            <td>Normal</td>
                        </tr>
                        <tr>
                            <td><strong>Special Requirement</strong></td>
                            <td>None</td>
                            <td><strong>Chief Complaint</strong></td>
                            <td>None</td>
                        </tr>
                        <tr>
                            <td colSpan={4}></td>
                        </tr>
                        <tr>
                            <td colSpan={4}><div className="fw-semibold">Billing Information</div></td>
                        </tr>
                        <tr>
                            <td><strong>Amount</strong></td>
                            <td>$150.00</td>
                            <td><strong>Insurance Covered</strong></td>
                            <td>$100.00</td>
                        </tr>
                        <tr>
                            <td><strong>Patient Responsibility</strong></td>
                            <td>$50.00</td>
                            <td><strong>Status</strong></td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td><strong>Bill Date</strong></td>
                            <td>01, Oct 2023</td>
                            <td><strong>Due Date</strong></td>
                            <td>15, Oct 2023</td>
                        </tr>
                        <tr>
                            <td><strong>Paid Date</strong></td>
                            <td>Not Paid</td>
                            <td colSpan={2}></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Card.Body>
        <Card.Footer className="border-top-0">
            <div className="btn-list float-end">
                <Button variant='' className="btn btn-primary btn-wave btn-sm"
                    onClick={() => print()}
                ><i className="ri-printer-line me-1 align-middle d-inline-block"></i>Print</Button>
            </div>
        </Card.Footer>
    </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={3}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Doctor Details
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="d-flex align-items-center border-bottom border-block-end-dashed p-3 flex-wrap">
                                        <div className="me-2">
                                            <span className="avatar avatar-lg avatar-rounded">
                                                <img src={face9} alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <p className="mb-0">{userDetails.first_name} {userDetails.last_name}</p>
                                            <p className="mb-0 text-muted fs-12">{userDetails.email}</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-primary-transparent">{userDetails.specialization}</span>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom border-block-end-dashed">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <span className="fs-14 fw-semibold">Delivery address :</span>
                                        </div>
                                        <p className="mb-2 text-muted"><span className="fw-semibold text-default me-1 d-inline-flex">Phone : </span>{userDetails.phone}</p>
                                        <p className="mb-2 text-muted"><span className="fw-semibold text-default me-1 d-inline-flex">Department : </span>{userDetails.department}</p>
                                        <p className="mb-2 text-muted"><span className="fw-semibold text-default me-1 d-inline-flex">Joining Date : </span>{userDetails.joining_date}</p>
                                        <p className="mb-2 text-muted"><span className="fw-semibold text-default me-1 d-inline-flex">Status : </span>{userDetails.status}</p>
                                        <p className="mb-2 text-muted"><span className="fw-semibold text-default me-1 d-inline-flex">Consultation Fee : </span>${userDetails.consultation_fee}</p>
                                        <p className="mb-0 text-muted"><span className="fw-semibold text-default me-1 d-inline-flex">Zipcode : </span>200071</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={3}>
                <Card className="custom-card">
    <Card.Header>
        <Card.Title>
            Appointment Details
        </Card.Title>
        <div className="ms-auto text-success">#APT202401312</div>
    </Card.Header>
    <Card.Body className="px-4">
        <div className="appointment-track">
            <div className="d-flex mb-3">
                <div className="me-2">
                    <span className="avatar avatar-md avatar-rounded">
                        <img src={ecommerceimg32} alt="" />
                    </span>
                </div>
                <div className="flex-fill">
                    <p className="fw-semibold mb-0 fs-14">Appointment Scheduled</p>
                    <span className="fs-11 text-success">Jan 31, 2025</span>
                    <p className="text-muted fs-11 mb-0">Your appointment has been scheduled successfully.</p>
                </div>
            </div>

            <div className="d-flex mb-3">
                <div className="me-2">
                    <span className="avatar avatar-md avatar-rounded">
                        <img src={ecommerceimg33} alt="" />
                    </span>
                </div>
                <div className="flex-fill">
                    <p className="fw-semibold mb-0 fs-14">Appointment Confirmed</p>
                    <span className="fs-12">Jan 31, 2025, 10:00 AM</span>
                    <p className="text-muted fs-11 mb-0">Your appointment has been confirmed by Dr. Smith.</p>
                </div>
            </div>

            <div className="d-flex mb-3">
                <div className="me-2">
                    <span className="avatar avatar-md avatar-rounded">
                        <img src={ecommerceimg34} alt="" />
                    </span>
                </div>
                <div className="flex-fill">
                    <p className="fw-semibold mb-0 fs-14">Appointment Completed</p>
                    <span className="fs-12">Jan 31, 2025, 11:30 AM</span>
                    <p className="text-muted fs-11 mb-0">Your appointment was successfully completed.</p>
                </div>
            </div>
        </div>
    </Card.Body>
</Card>

                </Col>
            </Row>
            </div>
        </Fragment>
    );
};

export default Appointmentdetails;
