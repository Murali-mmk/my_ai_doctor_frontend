import { Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Pagination,
  Row,
} from "react-bootstrap";
import Pageheader from "../../../components/pageheader/pageheader";
import { Link } from "react-router-dom";
import docimage from "../../../assets/images/placeholder-image/placeholder-male.png";

const Appointments = () => {
  const appointments = [
    {
      id: 1,
      doctorName: "Dr. John Doe",
      price: "$100",
      serviceType: "General Checkup",
      appointmentType: "In-Person",
      priorityLevel: "High",
      date: { day: 13, month: "Dec" },
      status: "Shipped",
    },
    {
      id: 2,
      doctorName: "Dr. Jane Smith",
      price: "$150",
      serviceType: "Dental Checkup",
      appointmentType: "Online",
      priorityLevel: "Medium",
      date: { day: 15, month: "Dec" },
      status: "Pending",
    },
    {
      id: 3,
      doctorName: "Dr. Emily Johnson",
      price: "$200",
      serviceType: "Eye Checkup",
      appointmentType: "In-Person",
      priorityLevel: "Low",
      date: { day: 20, month: "Dec" },
      status: "Completed",
    },
    {
      id: 4,
      doctorName: "Dr. Michael Brown",
      price: "$250",
      serviceType: "Heart Checkup",
      appointmentType: "Online",
      priorityLevel: "High",
      date: { day: 25, month: "Dec" },
      status: "Shipped",
    },
  ];

  return (
    <Fragment>
      <Pageheader
        title="My Appointments"
        heading="Ecommerce"
        active="My Appointments"
      />
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Body className="card-body d-flex align-items-center flex-wrap">
              <div className="flex-fill">
                <span className="mb-0 fs-14 text-muted">
                  Total number of appointments up to now :{" "}
                  <span className="fw-semibold text-success">
                    {appointments.length}
                  </span>
                </span>
              </div>
              <Dropdown>
                <Dropdown.Toggle
                  variant=""
                  className="btn btn-light dropdown-toggle m-1"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <Dropdown.Item className="dropdown-item" href="#">
                    Date
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-flex align-items-center m-1" role="search">
                <Form.Control
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button variant="" className="btn btn-light ms-2" type="submit">
                  Search
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {appointments.map((appointment) => (
          <Col key={appointment.id} xl={6} xxl={3} lg={6} md={6} sm={12}>
            <Card className="custom-card">
              <Card.Header className="card-header d-block">
                <div className="d-sm-flex d-block align-items-center">
                  <div className="me-2">
                    <span className="avatar bg-light avatar-md mb-1">
                      <img src={docimage} alt="Doctor" />
                    </span>
                  </div>
                  <div className="flex-fill">
                    <Link to="#">
                      <span className="fs-14 fw-semibold">
                        Doctor Name: {appointment.doctorName}
                      </span>
                    </Link>
                    <span className="d-block text-success">
                      Price: {appointment.price}
                    </span>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className="orders-delivery-address">
                    <p className="mb-1 fw-semibold">
                      Service Type: {appointment.serviceType}
                    </p>
                    <p className="mb-1 fw-semibold">
                      Appointment Type: {appointment.appointmentType}
                    </p>
                    <p className="mb-1 fw-semibold">
                      Priority Level: {appointment.priorityLevel}
                    </p>
                  </div>
                  <div className="delivery-date text-center ms-auto">
                    <span className="fs-18 text-primary fw-bold">
                      {appointment.date.day}
                    </span>
                    <span className="fw-semibold">
                      {appointment.date.month}
                    </span>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="card-footer d-sm-flex d-block align-items-center justify-content-between">
                <div>
                  <span className="text-muted me-2">Status:</span>
                  <span className="badge bg-success-transparent">
                    {appointment.status}
                  </span>
                </div>
                <div className="mt-sm-0 mt-2">
                  <Link
                    to={`${
                      import.meta.env.BASE_URL
                    }dashboards/appointment-details`}
                  >
                    <Button variant="" className="btn btn-sm btn-danger-light">
                      View Details
                    </Button>
                  </Link>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <div
        className="d-flex justify-content-end mt-4"
        style={{ position: "absolute", bottom: "50px", right: "20px" }}
      >
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </div>
    </Fragment>
  );
};

export default Appointments;
