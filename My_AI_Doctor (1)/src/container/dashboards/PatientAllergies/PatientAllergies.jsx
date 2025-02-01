import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

function PatientAllergies() {
  const [allergies, setAllergies] = useState([]);
  const id = localStorage.getItem("patient_id");

  // Static data fallback
  const staticData = [
    {
      allergen_type: "Peanuts",
      reaction: "Anaphylaxis",
      severity: "Severe",
      identified_date: "2022-05-10",
      notes: "Carries an EpiPen.",
    },
  ];

  useEffect(() => {
    // Set the static data as the default value
    setAllergies(staticData);

    const fetchData = async () => {
      try {
        const response = await fetch(`http://192.168.1.89:8000/api/patient/patient-details/${id}`);
        
        // Check if the response is OK (200)
        if (!response.ok) {
          console.log("API failed, keeping static data");
        } else {
          const data = await response.json();
          setAllergies(data.results && data.results.length > 0 ? data.results : staticData);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
        // Static data is already set, no need to change it
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container className="py-5" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Card className="shadow-sm">
        <Card.Body>
          <h2 className="mb-4 text-center" style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Patient Allergy Details
          </h2>
          {allergies.length > 0 ? (
            allergies.map((allergy, index) => (
              <React.Fragment key={index}>
                <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Allergen Type:</Form.Label>
                    <Form.Control
                      value={allergy.allergen_type || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Reaction:</Form.Label>
                    <Form.Control
                      value={allergy.reaction || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Severity:</Form.Label>
                    <Form.Control
                      value={allergy.severity || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Identified Date:</Form.Label>
                    <Form.Control
                      value={allergy.identified_date || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={8} md={6} sm={12}>
                    <Form.Label className="fw-bold">Notes:</Form.Label>
                    <Form.Control
                      as="textarea"
                      value={allergy.notes || "N/A"}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                </Row>
              </React.Fragment>
            ))
          ) : (
            <p className="text-center">No allergy records found for this patient.</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PatientAllergies;
