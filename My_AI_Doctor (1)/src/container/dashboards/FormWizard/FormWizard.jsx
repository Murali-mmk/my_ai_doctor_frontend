import React, { useState } from "react";
import { Button, Container, Row, Col, Nav } from "react-bootstrap";

import PatientPostAppointments from '../../dashboards/PatientAppointments/PatientPostAppointments.jsx';
import PatientPostBilling from '../../dashboards/PatientBilling/PatientPostBilling.jsx';
import PatientPostSurgicalHistory from '../../dashboards/SurgicalHistory/PatientPostSurgicalHistory.jsx';
import PatientPostVitalSigns from '../../dashboards/PatientVitalSigns/PatientPostVitalSigns.jsx';
import PatientPostMedicalConditions from '../../dashboards/PatientMedicalConditions/PatientPostMedicalConditions.jsx';
import PatientPostMedications from '../../dashboards/PatientMedications/PatientPostMedications.jsx';
import PatientPostFamilyMedicalHistory from '../../dashboards/FamilyMedicalHistory/PatientPostFamilyMedicalHistory.jsx';
import PatientPostDetails from '../../dashboards/PatientDetails/PatientPostDetails.jsx';
import PatientPostDocuments from '../../dashboards/PatientDocuments/PatientPostDocuments.jsx';
import PatientPostAllergies from '../../dashboards/PatientAllergies/PatientPostAllergies.jsx';
import PatientPostImmunizations from '../../dashboards/PatientImmunizations/PatientPostImmunizations.jsx';
import PatientPostInsuranceDetails from '../../dashboards/InsuranceDetails/PatientPostInsuranceDetails.jsx';
import PatientPostPaymentMethods from '../../dashboards/PatientPaymentMethods/PatientPostPaymentMethods.jsx';
import ContactPostDetails from '../../dashboards/ContactDetails/ContactPostDetails.jsx';
import EmergencyPostContactDetails from '../../dashboards/EmergencyContact/EmergencyPostContactDetails.jsx';

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

  const renderStepper = () => (
    <Nav className="stepper">
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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PatientPostAppointments />;
      case 2:
        return <ContactPostDetails />;
      case 3:
        return <EmergencyPostContactDetails />;
      case 4:
        return <PatientPostDocuments />;
      case 5:
        return <PatientPostPaymentMethods />;
      case 6:
        return <PatientPostBilling />;
      case 7:
        return <PatientPostInsuranceDetails />;
      case 8:
        return <PatientPostMedicalConditions />;
      case 9:
        return <PatientPostSurgicalHistory />;
      case 10:
        return <PatientPostFamilyMedicalHistory />;
      case 11:
        return <PatientPostAllergies />;
      case 12:
        return <PatientPostMedications />;
      case 13:
        return <PatientPostImmunizations />;
      case 14:
        return <PatientPostDetails />;
      case 15:
        return <PatientPostVitalSigns />;
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
      {/* Dashboard Navbar */}
      <DashboardNavbar />

      {/* Form Wizard */}
      <Container className="form-wizard-container">
        {/* Stepper */}
        <div className="stepper-container">{renderStepper()}</div>

        {/* Form Content */}
        <div className="form-content">{renderStep()}</div>

        {/* Navigation Buttons */}
        <div className="navigation-buttons d-flex justify-content-between">
          {currentStep > 1 && (
            <Button variant="secondary" onClick={prevStep}>
              Previous
            </Button>
          )}
          {currentStep < totalSteps ? (
            <Button variant="primary" onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button variant="success">Submit</Button>
          )}
        </div>
      </Container>

      <style jsx>{`
        .form-wizard-container {
          margin-top: 100px;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #fff;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .stepper-container {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .stepper {
          display: flex;
          width: 100%;
        }

        .stepper-item {
          flex: 1;
          text-align: center;
        }

        .stepper-link {
          text-decoration: none;
          cursor: pointer;
        }

        .stepper-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #ddd;
          color: #000;
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

        .form-content {
          margin-bottom: 20px;
        }

        .navigation-buttons {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
};

export default FormWizard;
