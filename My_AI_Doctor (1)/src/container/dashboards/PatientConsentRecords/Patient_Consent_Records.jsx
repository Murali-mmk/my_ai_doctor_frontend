import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner, Form } from "react-bootstrap";

function Patient_Consent_Records() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const id = localStorage.getItem('patient_id');  // Get patient ID from localStorage
  console.log(id);

  useEffect(() => {
    fetch(`http://192.168.1.89:8000/api/patient/patient-details/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data); // Log the response
        setData(data.results || []);  // Ensure results is an array
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch consent records.");
        setLoading(false);
      });
  }, [id]);
  
  if (loading) {
    return <div className="d-flex justify-content-center"><Spinner animation="border" variant="primary" /></div>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (data.length > 0) {
    // Map the data to the structure you need
    const consentRecords = data.map((item) => ({
      consentId: item.consent_id || "N/A",
      consentType: item.consent_type || "N/A",
      givenDate: item.given_date || "N/A",
      expiryDate: item.expiry_date || "N/A",
      documentUrl: item.document_url || "N/A",
      witnessName: item.witness_name || "N/A",
      digitalSignature: item.digital_signature || "N/A",
      notes: item.notes || "N/A",
      createdAt: item.created_at || "N/A",
      patient: item.patient || "N/A",
    }));

    return (
      <Container className="py-5" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Card className="shadow-sm">
          <Card.Body>
            <h2 className="mb-4 text-center">Patient Consent Records</h2>
            {consentRecords.map((item, i) => (
              <React.Fragment key={i}>
                <Row className="mb-3">
                  {/* <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Consent ID:</Form.Label>
                    <Form.Control
                      value={item.consentId}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col> */}
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Consent Type:</Form.Label>
                    <Form.Control
                      value={item.consentType}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Given Date:</Form.Label>
                    <Form.Control
                      value={item.givenDate}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Expiry Date:</Form.Label>
                    <Form.Control
                      value={item.expiryDate}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                 
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Document URL:</Form.Label>
                    <Form.Control
                      value={item.documentUrl}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Witness Name:</Form.Label>
                    <Form.Control
                      value={item.witnessName}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Digital Signature:</Form.Label>
                    <Form.Control
                      value={item.digitalSignature}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Notes:</Form.Label>
                    <Form.Control
                      value={item.notes}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                  {/* <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Created At:</Form.Label>
                    <Form.Control
                      value={item.createdAt}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col> */}
                </Row>

                {/* <Row className="mb-3">
                  <Col lg={4} md={6} sm={12}>
                    <Form.Label className="fw-bold">Patient:</Form.Label>
                    <Form.Control
                      value={item.patient}
                      readOnly
                      style={{ backgroundColor: "#f8f9fa", border: "1px solid #ddd" }}
                    />
                  </Col>
                </Row> */}
                <hr />
              </React.Fragment>
            ))}
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return <p>No consent records found.</p>;
}

export default Patient_Consent_Records;
