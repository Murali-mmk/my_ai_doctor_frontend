import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import docimage from "../../../assets/images/placeholder-image/placeholder-male.png";

export default function DoctorMapping() {
  // Static doctor data
  const doctors = [
    {
      doctor_id: 1,
      first_name: "John",
      last_name: "Doe",
      specialization: "Cardiologist",
    },
    {
      doctor_id: 2,
      first_name: "Jane",
      last_name: "Smith",
      specialization: "Dermatologist",
    },
    {
      doctor_id: 3,
      first_name: "Robert",
      last_name: "Brown",
      specialization: "Orthopedic",
    },
    {
      doctor_id: 4,
      first_name: "Emily",
      last_name: "Davis",
      specialization: "Pediatrician",
    },
    {
      doctor_id: 5,
      first_name: "John",
      last_name: "Doe",
      specialization: "Cardiologist",
    },
    {
      doctor_id: 6,
      first_name: "Jane",
      last_name: "Smith",
      specialization: "Dermatologist",
    },
    {
      doctor_id: 7,
      first_name: "Robert",
      last_name: "Brown",
      specialization: "Orthopedic",
    },
    {
      doctor_id: 8,
      first_name: "Emily",
      last_name: "Davis",
      specialization: "Pediatrician",
    },
  ];

  return (
    <div className="p-4">
      <Row className="g-4">
        {doctors.map((doctor) => (
          <Col key={doctor.doctor_id} xs={12} sm={6} md={3}>
            <Card className="h-100 shadow-sm border-1 custom-card team-member-card">
              <div className="teammember-cover-image">
                <img
                  src={docimage} 
                  alt={`${doctor.first_name} ${doctor.last_name}`}
                  className="card-img-top"
                  style={{ objectFit: "cover" }}
                />
                <span className="avatar avatar-xl avatar-rounded">
                  <img
                    src={docimage}
                    alt={`${doctor.first_name} ${doctor.last_name}`}
                  />
                </span>
              </div>
              <Card.Body className="p-0">
                <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom border-block-end-dashed p-3">
                  <div className="team-member-details flex-fill">
                    <p className="mb-0 fw-semibold fs-16 text-truncate">
                      <Link to={`/dashboards/doctordetails/${doctor.doctor_id}`}>
                        {`${doctor.first_name} ${doctor.last_name}`}
                      </Link>
                    </p>
                    <div className="d-flex align-items-center">
                      <p className="fw-semibold mb-0 me-2">Specialization:</p>
                      <span className="text-muted fs-12">
                        {doctor.specialization}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Buttons inside the Card */}
                <Row className="g-3 px-2 pt-0 mt-0">
                  <Col xs={6}>
                    <Link to={`/dashboards/doctordetails/${doctor.doctor_id}`}>
                      <Button variant="outline-secondary" className="w-100 py-2">
                        View Profile
                      </Button>
                    </Link>
                  </Col>
                  <Col xs={6}>
                    <Link to={"/dashboards/bookappointments"}>
                      <Button className="w-100 py-2">Book Appointment</Button>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}


























// import React from "react";
// import { Card, Button, Row, Col, Dropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import docimage from "../../../assets/images/placeholder-image/placeholder-male.png";

// export default function DoctorMapping({ arr }) {
//   if (!arr || !Array.isArray(arr)) {
//     return <div>No data available</div>;
//   }

//   return (
//     <div className="p-4">
//       <Row className="g-4">
//         {arr.map((doctor) => (
//           <Col key={doctor.doctor_id} xs={12} sm={6} md={3}>
//             <Card className="h-100 shadow-sm border-1 custom-card team-member-card">
//               <div className="teammember-cover-image">
//                 <img
//                   src={docimage} 
//                   alt={`${doctor.first_name} ${doctor.last_name}`}
//                   className="card-img-top"
//                   style={{ objectFit: "cover" }}
//                 />
//                 <span className="avatar avatar-xl avatar-rounded">
//                   <img
//                     src={docimage}
//                     alt={`${doctor.first_name} ${doctor.last_name}`}
//                   />
//                 </span>

//               </div>
//               <Card.Body className="p-0">
//                 <div className="d-flex flex-wrap align-items-center mt-sm-0 mt-5 justify-content-between border-bottom border-block-end-dashed p-3">
//                   <div className="team-member-details flex-fill">
//                     <p className="mb-0 fw-semibold fs-16 text-truncate">
//                       <Link
//                         to={`/dashboards/doctordetails/${doctor.doctor_id}`}
//                       >
//                         {`${doctor.first_name} ${doctor.last_name}`}
//                       </Link>
//                     </p>
//                     <div className="d-flex align-items-center">
//                       <p className="fw-semibold mb-0 me-2">Specialization:</p>
//                       <span className="text-muted fs-12">
//                         {doctor.specialization}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

              
//                 <Row className="g-3 px-2 pt-0 mt-0">
//                   <Col xs={6}>
//                     <Link to={`/dashboards/doctordetails/${doctor.doctor_id}`}>
//                       <Button
//                         variant="outline-secondary"
//                         className="w-100 py-2"
//                       >
//                         View Profile
//                       </Button>
//                     </Link>
//                   </Col>
//                   <Col xs={6}>
//                     <Link to={"/dashboards/bookappointments"}>
//                       <Button className="w-100 py-2">Book Appointment</Button>
//                     </Link>
//                   </Col>
//                 </Row>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// import React from 'react';
// import { Card, Button, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import docimage from '../../../assets/images/placeholder-image/placeholder-male.png'

// export default function DoctorMapping({ arr }) {
//   if (!arr || !Array.isArray(arr)) {
//     return <div>No data available</div>;
//   }

//   return (
//     <div className="p-4">
//       <Row className="g-4">
//         {arr.map((doctor) => (
//           <Col key={doctor.doctor_id} xs={12} sm={6} md={4}>
//             <Card className="h-100 shadow-sm border-1">
//               <Card.Body className="d-flex flex-column">

//                 <div className="d-flex align-items-start mb-3">
//                   <img
//                     src={docimage}
//                     alt={`${doctor.first_name} ${doctor.last_name}`}
//                     className="rounded-circle"
//                     style={{ width: '120px', height: '120px', objectFit: 'cover', marginRight: '15px' }}
//                   />
//                   <div>
//                     <Card.Title className="mb-1">{`${doctor.first_name} ${doctor.last_name}`}</Card.Title>
//                     <Card.Text className="mb-1"><strong>Specialization:</strong> {doctor.specialization}</Card.Text>
//                     <Card.Text className="mb-1"><strong>Location:</strong> {doctor.location || "Not Mentioned"}</Card.Text>
//                     <Card.Text className="mb-1"><strong>Experience:</strong> {doctor.experience} years</Card.Text>
//                   </div>
//                 </div>

//                 <Row className="g-3">
//                   <Col xs={6}>
//                     <Link to={`/dashboards/doctordetails/${doctor.doctor_id}`}>
//                       <Button variant='outline-light' className="w-100 py-2 border-2">
//                         View Profile
//                       </Button>
//                     </Link>
//                   </Col>
//                   <Col xs={6}>
//                     <Button className="w-100 py-2">
//                       Book Appointment
//                     </Button>
//                   </Col>
//                 </Row>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }
