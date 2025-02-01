import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Tab, Nav } from "react-bootstrap";
import PatientDetails from "../PatientDetails/Patient_details";
import ContactDetails from "../ContactDetails/Contact_details";
import EmergencyContactDetails from "../EmergencyContact/Emergency_contact";
import PatientDocuments from "../PatientDocuments/PatientDocuments";
import PatientPaymentMethods from "../PatientPaymentMethods/PatientPaymentMethods";
import PatientBilling from "../PatientBilling/PatienBilling";
import PatientInsuranceDetails from "../PatientInsuranceDetails/PatientInsuranceDetails";
import PatientMedicalConditions from "../PatientMedicalCondition/PatientMedicalCondition";
import PatientSurgicalHistory from "../PatientSurgicalHistory/PatientSurgicalHistory";
import PatientFamilyMedicalHistory from "../PatientFamilyMedicalHistory/PatientFamilyMedicalHistory";
import PatientAllergies from "../PatientAllergies/PatientAllergies";
import PatientMedications from "../PatientMedications/PatientMedications";
import PatientImmunizations from "../PatientImmunizations/PatientImmunizations";
import PatientAppointments from "../PatientAppointments/PatientAppointments";
import PatientVitalSigns from "../PatientVitalSigns/PatientVitalSigns";

const FormWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 16;
  

  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const renderStepper = () => {
    return (
      <Nav className="stepper justify-content-center">
        {[...Array(totalSteps).keys()].map((step) => {
          const stepNumber = step + 1;
          return (
            <Nav.Item key={stepNumber} className="stepper-item">
              <Nav.Link
                className={`stepper-link ${
                  currentStep === stepNumber ? "active" : ""
                }`}
                onClick={() => setCurrentStep(stepNumber)}
              >
                <div className="stepper-circle">{stepNumber}</div>
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    );
  };
  // Render different steps based on the currentStep value
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <PatientDetails />
          </div>
        );
      case 2:
        return (
          <div>
            <ContactDetails />
          </div>
        );
      case 3:
        return (
          <div>
            <EmergencyContactDetails />
          </div>
        );
      case 4:
        return (
          <div>
            <PatientDocuments />
          </div>
        );
      case 5:
        return (
          <div>
            <PatientPaymentMethods />
          </div>
        );
      case 6:
        return (
          <div>
            <PatientBilling />
          </div>
        );
      case 7:
        return (
          <div>
            <PatientInsuranceDetails />
          </div>
        );
      case 8:
        return (
          <div>
            <PatientMedicalConditions />
          </div>
        );
      case 9:
        return (
          <div>
            <PatientSurgicalHistory />
          </div>
        );
      case 10:
        return (
          <div>
            <PatientFamilyMedicalHistory />
          </div>
        );
      case 11:
        return (
          <div>
            <PatientAllergies />
          </div>
        );
      case 12:
        return (
          <div>
            <PatientMedications />
          </div>
        );

      case 13:
        return (
          <div>
            <PatientImmunizations />
          </div>
        );
      case 14:
        return (
          <div>
            <PatientAppointments />
          </div>
        );
      case 15:
        return (
          <div>
            <PatientVitalSigns />
          </div>
        );

      case 16:
        return (
          <div>
            <h3>Step 16: Review Information</h3>
            <p>Review your information before submitting:</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Container className="fixed-top">
        <div className="stepper-container ">{renderStepper()}</div>
      </Container>
      <Container>
        <Row>
          <Col>
            {/* Render the stepper */}

            {/* Render the current step content */}
            <div className="form-wizard">{renderStep()}</div>
          </Col>
        </Row>
        <Container className="fixed-bottom mb-5">
          {/* Navigation buttons */}
          <div
            className="navigation-buttons d-flex justify-content-between"
            style={{ width: "1550px", minWidth: "100%" }}
          >
            {currentStep > 1 && (
              <Button
                variant="secondary"
                className="mt-4 mx-4"
                onClick={prevStep}
              >
                Previous
              </Button>
            )}
            {currentStep < totalSteps ? (
              <Button variant="primary" className="mt-4" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button variant="success" className="mt-4" onClick={nextStep}>
                Submit
              </Button>
            )}
          </div>
        </Container>

        {/* Styles */}
        <style jsx>{`
          .stepper-container {
            position: relative;
            width: 1550px;
            min-width: 100%;
          }
          .stepper {
            display: flex;
            position: relative;
          }
          .stepper::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 2px;
            background-color: #e9ecef;
            z-index: 0;
          }
          .stepper-item {
            z-index: 1;
            text-align: center;
            flex: 1;
          }
          .stepper-link {
            text-decoration: none;
            cursor: pointer;
          }
          .stepper-circle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: rgb(194, 195, 197);
            color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            font-weight: bold;
            margin: auto;
          }
          .stepper-link.active .stepper-circle {
            background-color: #007bff;
            color: #fff;
          }
          .stepper-link.active .stepper-circle::after {
            background-color: #007bff;
          }
        `}</style>
      </Container>
    </>
  );
};

export default FormWizard;
