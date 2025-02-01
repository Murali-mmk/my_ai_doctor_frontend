import React, { FC, Fragment, useState, useEffect } from "react"; // added useEffect
import {
  Badge,
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  ListGroup,
  Nav,
  ProgressBar,
  Row,
  Tab,
} from "react-bootstrap";
import Pageheader from "../../../components/pageheader/pageheader";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Followersdata,
  Friendsdata,
  Gallerydata,
  Personalinfodata,
  RecentPostsdata,
  Skillsdata,
  Suggestionsdata,
} from "./profiledata";

import PatientPostSurgicalHistory from "../../dashboards/SurgicalHistory/PatientPostSurgicalHistory.jsx";
import PatientPostMedicalConditions from "../../dashboards/PatientMedicalConditions/PatientPostMedicalConditions.jsx";
import PatientPostMedications from "../../dashboards/PatientMedications/PatientPostMedications.jsx";
import PatientPostFamilyMedicalHistory from "../../dashboards/FamilyMedicalHistory/PatientPostFamilyMedicalHistory.jsx";
import PatientPostAppointments from "../../dashboards/PatientAppointments/PatientPostAppointments.jsx";
import PatientPostDetails from "../../dashboards/PatientDetails/PatientPostDetails.jsx";
import PatientPostDocuments from "../../dashboards/PatientDocuments/PatientPostDocuments.jsx";
import PatientPostAllergies from "../../dashboards/PatientAllergies/PatientPostAllergies.jsx";
import PatientPostImmunizations from "../../dashboards/PatientImmunizations/PatientPostImmunizations.jsx";
import PatientPostInsuranceDetails from "../../dashboards/InsuranceDetails/PatientPostInsuranceDetails.jsx";
import ContactPostDetails from "../../dashboards/ContactDetails/ContactPostDetails.jsx";
import EmergencyPostContactDetails from "../../dashboards/EmergencyContact/EmergencyPostContactDetails.jsx";
import PatientDocuments from "../../dashboards/PatientDocuments/PatientDocuments.jsx";
import InsuranceDetails from "../../dashboards/InsuranceDetails/InsuranceDetails.jsx";
import PatientDetails from "../../dashboards/PatientDetails/PatientDetails.jsx";
import PatientAllergies from "../../dashboards/PatientAllergies/PatientAllergies.jsx";
// import PatientDocuments from '../../dashboards/PatientDocuments/PatientDocuments.jsx';
import Patient_Billing from "../../dashboards/PatientBilling/PatientBilling.jsx";
import Patient_Consent_Records from "../../dashboards/PatientConsentRecords/Patient_Consent_Records.jsx";
import Contact_details from "../../dashboards/ContactDetails/ContactDetails.jsx";
import Emergency_contact from "../../dashboards/EmergencyContact/EmergencyContacts.jsx";
import FamilyMedicalHistory from "../../dashboards/FamilyMedicalHistory/FamilyMedicalHistory.jsx";
// import InsuranceDetails from '../../dashboards/InsuranceDetails/InsuranceDetails.jsx';
import PatientAuditTrail from "../../dashboards/PatientAuditTrail/PatientAuditTrail.jsx";
import SurgicalHistory from "../../dashboards/SurgicalHistory/SurgicalHistory.jsx";
import PatientImmunizations from "../../dashboards/PatientImmunizations/PatientImmunizations.jsx";
import PatientMedicalConditions from "../../dashboards/PatientMedicalConditions/PatientMedicalConditions.jsx";
import PatientAppointments from "../../dashboards/PatientAppointments/PatientAppointments.jsx";

import Button1 from "../../../components/common/Button1/Button1";

const Profile = () => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // For general errors
  const [patientError, setPatientError] = useState(null); // Specific error for patient details
  const [contactError, setContactError] = useState(null); // Specific error for contact details
  const [emergencyError, setEmergencyError] = useState(null); // Specific error for emergency contact details
  const [isEditing, setIsEditing] = useState(false);

  const id = localStorage.getItem("patient_id");
  console.log(id);
  const accessToken = localStorage.getItem("accessToken");
  console.log(accessToken);
  const refreshToken = localStorage.getItem("refreshToken");
 const staticData = [
     {
       title: "Mr.",
       first_name: "John",
       last_name: "Doe",
       gender: "Male",
       date_of_birth: "1990-01-01",
       blood_group: "O+",
       marital_status: "Single",
       occupation: "Engineer",
       national_id: "123456789",
       created_at: "2020-01-01",
       updated_at: "2021-01-01",
     },
   ];
 
   useEffect(() => {
     // Directly set the static data
     setPatient(staticData);
   }, []);

  

  const handleEditClick = () => {
    setIsEditing(true); // Switch to edit mode
  };

  const handleCancelEdit = () => {
    setIsEditing(false); // Switch back to view mode
  };

  const handleSubmitEdit = (updatedData) => {
    setUserData(updatedData); // Update user data after form submission
    setIsEditing(false); // Switch back to view mode after submitting
  };

  // if (loading) return <p>Loading patient details...</p>;
  // if (error) return <p>{error}</p>;
  // if (!patient) return <p>No patient details found.</p>;

  return (
    <Fragment>
      <Pageheader title="Profile" heading="Pages" active="Pricing" />
      <Row>
        <Col xxl={4} xl={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body className="card-body p-0">
              <div className="d-sm-flex align-items-center p-4 border-bottom-0 main-profile-cover">
                {/* Profile Image */}
                <div className="position-relative">
                  <span
                    className={`avatar avatar-xxl avatar-rounded ${
                      patient?.is_active ? "online" : "offline"
                    } me-3 shadow-lg`}
                  >
                    <img
                      src={patient?.profilePicture || "default-avatar.png"}
                      alt="Patient"
                      className="border border-2 border-white"
                    />
                  </span>
                </div>

                {/* Profile Details */}
                <div className="flex-fill main-profile-info">
                  {/* Name and Status */}
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="fw-bold mb-1 text-fixed-white text-uppercase">
                      {patient?.title || "MR"} {patient?.first_name || "JOHN"}{" "}
                      {patient?.last_name || "MICK"}
                    </h5>
                    <span className="badge bg-success fs-12">
                      {patient?.is_active ? "Active" : "Inactive"}
                    </span>
                  </div>

                  {/* Basic Information */}
                  <p className="fs-12 text-fixed-white mb-3 op-5">
                    <span className="me-3">
                      <i className="bi bi-person-hearts me-1"></i> Marital
                      Status:{" "}
                      <strong>{patient?.marital_status || "SINGLE"}</strong>
                    </span>
                    <span>
                      <i className="bi bi-briefcase me-1"></i> Occupation:{" "}
                      <strong>{patient?.occupation || "STUDENT"}</strong>
                    </span>
                    <br />
                    <span>
                      <i className="bi bi-credit-card me-1"></i> National ID:{" "}
                      <strong>{patient?.national_id || "123456rt"}</strong>
                    </span>
                  </p>

                  {/* Additional Info Section */}
                  <div className="d-flex mb-0">
                    <div className="me-4 text-center">
                      <p className="fw-bold fs-18 text-fixed-white text-shadow mb-0">
                        {patient?.date_of_birth || "2025-01-31"}
                      </p>
                      <p className="mb-0 fs-12 op-5 text-fixed-white">DOB</p>
                    </div>
                    <div className="me-4 text-center">
                      <p className="fw-bold fs-18 text-fixed-white text-shadow mb-0">
                        {patient?.blood_group || "B+"}
                      </p>
                      <p className="mb-0 fs-12 op-5 text-fixed-white">
                        Blood Group
                      </p>
                    </div>
                    <div className="me-4 text-center">
                      <p className="fw-bold fs-18 text-fixed-white text-shadow mb-0">
                        {patient?.gender || "Male"}
                      </p>
                      <p className="mb-0 fs-12 op-5 text-fixed-white">Gender</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-bottom border-block-end-dashed">
                <p className="fs-15 mb-2 me-4 fw-semibold">
                  Contact Information :
                </p>
                <div className="text-muted">
                  <p className="mb-2">
                    <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                      <i className="ri-mail-line align-middle fs-14"></i>
                    </span>
                    {patient?.contacts?.[0]?.email || "namdgh@gamil.com"}
                  </p>
                  <p className="mb-2">
                    <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                      <i className="ri-phone-line align-middle fs-14"></i>
                    </span>
                    {patient?.contacts?.[0]?.mobile_number || "123445671"} ,{" "}
                    {patient?.contacts?.[0]?.alternate_phone || "123445671"}
                  </p>
                  <p className="mb-0">
                    <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                      <i className="ri-map-pin-line align-middle fs-14"></i>
                    </span>
                    {patient?.contacts?.[0]?.country || "INDIA"}
                  </p>
                  {patient?.contacts?.[0]?.address_line1 || "HYB"} , {"\t"}
                  {patient?.contacts?.[0]?.city || "123h/h DNO:18-92"} {"\t"} ,{" "}
                  {patient?.contacts?.[0]?.state || "TS"}
                </div>
              </div>

              <div className="p-4 border-bottom border-block-end-dashed">
                {/* /patient-emergency-contacts */}
                <p className="fs-15 mb-2 me-4 fw-semibold">
                  Emergency Contact Information :
                </p>
                <div className="text-muted">
                  <p className="mb-2">
                    Contact Name : {"\t"}
                    {patient?.emergency_contacts?.[0]?.contact_name || "SAI"}
                  </p>
                  <p className="mb-0">
                    Relationship : {"\t"}
                    {patient?.emergency_contacts?.[0]?.relationship || "Brother"}
                  </p>
                  <p className="mb-2">
                    <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                      <i className="ri-phone-line align-middle fs-14"></i>
                    </span>
                    {patient?.emergency_contacts?.[0]?.phone_number || "12345678912"}
                  </p>
                  <p className="mb-0">
                    <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                      <i className="ri-map-pin-line align-middle fs-14"></i>
                    </span>
                    {patient?.emergency_contacts?.[0]?.address || "123h/h DNO:18-92"}
                  </p>
                  <p className="mb-0">
                    <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                      <i className="ri-check-line align-middle fs-14"></i>
                    </span>
                    {patient?.emergency_contacts?.[0]?.is_primary
                      ? "Yes"
                      : "No"}
                  </p>
                </div>
              </div>

              

              <div className="p-4 border-bottom border-block-end-dashed"></div>
            </Card.Body>
          </Card>
        </Col>

        <Col xxl={8} xl={12}>
          <Row>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Body className="p-0">
                  <Tab.Container defaultActiveKey="first">
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center justify-content-between">
                      <Nav
                        className="nav nav-tabs mb-0 tab-style-6 justify-content-start"
                        id="myTab"
                        role="tablist"
                      >
                        <Nav.Item>
                          <Nav.Link href="#posts-tab-pane" eventKey="first">
                            <i className="ri-bill-line me-1 align-middle d-inline-block"></i>
                            Documents
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            href="#followers-tab-pane"
                            eventKey="second"
                          >
                            <i className="ri-money-dollar-box-line me-1 align-middle d-inline-block"></i>
                            Medical History
                          </Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                          <Nav.Link href="#followers-tab-pane" eventKey="third">
                            <i className="ri-money-dollar-box-line me-1 align-middle d-inline-block"></i>
                            Appointments
                          </Nav.Link>
                        </Nav.Item> */}
                        <Nav.Item>
                          <Nav.Link href="#gallery-tab-pane" eventKey="third">
                            <i className="ri-exchange-box-line me-1 align-middle d-inline-block"></i>
                            Others
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <div>
                        {/* <p className="fw-semibold mb-2">
                          Profile 90% completed -
                          <Link to="#" className="text-primary fs-12">
                            Finish now
                          </Link>
                        </p> */}
                        <ProgressBar
                          className="progress-xs progress-animate"
                          variant="primary"
                          now={90}
                        />
                      </div>
                    </div>

                    {/* <Card.Body className="card-body p-0">
              <div className="d-sm-flex align-items-top p-4 border-bottom-0 main-profile-cover">
                <div>
                  <span className={`avatar avatar-xxl avatar-rounded ${patient?.is_active ? "online" : "offline"} me-3`}>
                    <img src={patient?.profilePicture || "default-avatar.png"} alt="Patient" />
                  </span>
                </div>
                <div className="flex-fill main-profile-info">
                  <div className="d-flex align-items-center justify-content-between">
                    <h6 className="fw-semibold mb-1 text-fixed-white">
                      {patient?.title || "N/A"} {patient?.first_name || "N/A"} {patient?.last_name || "N/A"}
                    </h6>
                  </div>
                  <p className="fs-12 text-fixed-white mb-4 op-5">
                    <span className="me-3">
                      <i className="me-1 align-middle"></i> {patient?.marital_status || "N/A"}
                    </span>
                    <span>
                      <i className="me-1 align-middle"></i> Occupation: {patient?.occupation || "N/A"}
                    </span>
                    <br />
                    <span>
                      <i className="fw-bold fs-20 text-fixed-white text-shadow mb-0"></i> National ID: {patient?.national_id || "N/A"}
                    </span>
                  </p>
                  <div className="d-flex mb-0">
                    <div className="me-4">
                      <p className="fw-bold fs-20 text-fixed-white text-shadow mb-0">{patient?.date_of_birth || "N/A"}</p>
                      <p className="mb-0 fs-11 op-5 text-fixed-white">DOB</p>
                    </div>
                    <div className="me-4">
                      <p className="fw-bold fs-20 text-fixed-white text-shadow mb-0">{patient?.blood_group || "N/A"}</p>
                      <p className="mb-0 fs-11 op-5 text-fixed-white">Blood Group</p>
                    </div>
                    <div className="me-4">
                      <p className="fw-bold fs-20 text-fixed-white text-shadow mb-0">{patient?.gender || "N/A"}</p>
                      <p className="mb-0 fs-11 op-5 text-fixed-white">Gender</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body> */}

                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        {isEditing ? (
                          <PatientPostDocuments
                            isEditing={isEditing}
                            onCancelEdit={handleCancelEdit}
                            onSubmitEdit={handleSubmitEdit}
                          />
                        ) : (
                          <PatientDocuments onEditClick={handleEditClick} />
                        )}
                        {isEditing ? (
                          <PatientPostInsuranceDetails
                            isEditing={isEditing}
                            onCancelEdit={handleCancelEdit}
                            onSubmitEdit={handleSubmitEdit}
                          />
                        ) : (
                          <InsuranceDetails onEditClick={handleEditClick} />
                        )}
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {isEditing ? (
                          <PatientPostFamilyMedicalHistory
                            isEditing={isEditing}
                            onCancelEdit={handleCancelEdit}
                            onSubmitEdit={handleSubmitEdit}
                          />
                        ) : (
                          <FamilyMedicalHistory onEditClick={handleEditClick} />
                        )}

                        {isEditing ? (
                          <PatientPostAllergies
                            isEditing={isEditing}
                            onCancelEdit={handleCancelEdit}
                            onSubmitEdit={handleSubmitEdit}
                          />
                        ) : (
                          <PatientAllergies onEditClick={handleEditClick} />
                        )}
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="third">
                        {isEditing ? (
                          <PatientPostMedicalConditions
                            isEditing={isEditing}
                            onCancelEdit={handleCancelEdit}
                            onSubmitEdit={handleSubmitEdit}
                          />
                        ) : (
                          <PatientMedicalConditions
                            onEditClick={handleEditClick}
                          />
                        )}

                        {isEditing ? (
                          <PatientPostAppointments
                            isEditing={isEditing}
                            onCancelEdit={handleCancelEdit}
                            onSubmitEdit={handleSubmitEdit}
                          />
                        ) : (
                          <PatientAppointments onEditClick={handleEditClick} />
                        )}
                      </Tab.Pane> */}
                      <Tab.Pane eventKey="third">
                        {isEditing ? (
                          <PatientPostImmunizations
                            isEditing={isEditing}
                            onCancelEdit={handleCancelEdit}
                            onSubmitEdit={handleSubmitEdit}
                          />
                        ) : (
                          <PatientImmunizations onEditClick={handleEditClick} />
                        )}
                        {isEditing ? (
                          <PatientPostSurgicalHistory
                            isEditing={isEditing}
                            onCancelEdit={handleCancelEdit}
                            onSubmitEdit={handleSubmitEdit}
                          />
                        ) : (
                          <SurgicalHistory onEditClick={handleEditClick} />
                        )}
                      
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Profile;
