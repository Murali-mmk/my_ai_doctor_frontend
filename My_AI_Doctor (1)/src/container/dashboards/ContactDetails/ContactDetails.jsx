import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";


const Contact_details = () => {
  const [patient, setPatient] = useState([]);
  const id = localStorage.getItem('patient_id')
  
  useEffect(() => {
    // Fetch data from the API
    fetch(`http://192.168.1.89:8000/api/patient/patient-details/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPatient(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
     
      <Container className="patient-contact-container py-5" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Card className="shadow-sm" style={{ borderRadius: '8px' }}>
          <Card.Body>
            <h2 className="patient-contact-heading mb-4" style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
              Contact Details
            </h2>
            {/* Assuming contactData contains a single contact object wrapped in an array */}
            {patient.length > 0 ? (
             patient.map((contactdetails, index) => (
                <React.Fragment key={index}>
                  {/* Row 1 */}
                  <Row className="mb-3">
                    <Col lg={4} md={6} sm={12}>
                      <Form.Label className="patient-contact-label" style={{ fontWeight: '600', marginBottom: '8px' }}>
                        Email:
                      </Form.Label>
                      <Form.Control
                        className="patient-contact-text-field"
                        value={contactdetails?.contacts?.[0]?.email || "N/A"}
                        readOnly
                        style={{
                          backgroundColor: '#f8f9fa',
                          border: '1px solid #ddd',
                          padding: '10px',
                          fontSize: '1rem',
                          color: '#495057',
                        }}
                      />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                      <Form.Label className="patient-contact-label" style={{ fontWeight: '600', marginBottom: '8px' }}>
                        Mobile Number:
                      </Form.Label>
                      <Form.Control
                        className="patient-contact-text-field"
                        value={contactdetails?.contacts?.[0]?.mobile_number || "N/A"}
                        readOnly
                        style={{
                          backgroundColor: '#f8f9fa',
                          border: '1px solid #ddd',
                          padding: '10px',
                          fontSize: '1rem',
                          color: '#495057',
                        }}
                      />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                      <Form.Label className="patient-contact-label" style={{ fontWeight: '600', marginBottom: '8px' }}>
                        Alternate Phone:
                      </Form.Label>
                      <Form.Control
                        className="patient-contact-text-field"
                        value={contactdetails?.contacts?.[0]?.alternate_phone || "N/A"}
                        readOnly
                        style={{
                          backgroundColor: '#f8f9fa',
                          border: '1px solid #ddd',
                          padding: '10px',
                          fontSize: '1rem',
                          color: '#495057',
                        }}
                      />
                    </Col>
                  </Row>

                  {/* Row 2 */}
                  <Row className="mb-3">
                    <Col lg={4} md={6} sm={12}>
                      <Form.Label className="patient-contact-label" style={{ fontWeight: '600', marginBottom: '8px' }}>
                        Address Line 1:
                      </Form.Label>
                      <Form.Control
                        className="patient-contact-text-field"
                        value={contactdetails?.contacts?.[0]?.address_line1 || "N/A"}
                        readOnly
                        style={{
                          backgroundColor: '#f8f9fa',
                          border: '1px solid #ddd',
                          padding: '10px',
                          fontSize: '1rem',
                          color: '#495057',
                        }}
                      />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                      <Form.Label className="patient-contact-label" style={{ fontWeight: '600', marginBottom: '8px' }}>
                        Address Line 2:
                      </Form.Label>
                      <Form.Control
                        className="patient-contact-text-field"
                        value={contactdetails?.contacts?.[0]?.address_line2 || "N/A"}
                        readOnly
                        style={{
                          backgroundColor: '#f8f9fa',
                          border: '1px solid #ddd',
                          padding: '10px',
                          fontSize: '1rem',
                          color: '#495057',
                        }}
                      />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                      <Form.Label className="patient-contact-label" style={{ fontWeight: '600', marginBottom: '8px' }}>
                        City:
                      </Form.Label>
                      <Form.Control
                        className="patient-contact-text-field"
                        value={contactdetails?.contacts?.[0]?.city || "N/A"}
                        readOnly
                        style={{
                          backgroundColor: '#f8f9fa',
                          border: '1px solid #ddd',
                          padding: '10px',
                          fontSize: '1rem',
                          color: '#495057',
                        }}
                      />
                    </Col>
                  </Row>

                  {/* Row 3 */}
                  <Row className="mb-3">
                    <Col lg={4} md={6} sm={12}>
                      <Form.Label className="patient-contact-label" style={{ fontWeight: '600', marginBottom: '8px' }}>
                        State:
                      </Form.Label>
                      <Form.Control
                        className="patient-contact-text-field"
                        value={contactdetails?.contacts?.[0]?.state || "N/A"}
                        readOnly
                        style={{
                          backgroundColor: '#f8f9fa',
                          border: '1px solid #ddd',
                          padding: '10px',
                          fontSize: '1rem',
                          color: '#495057',
                        }}
                      />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                      <Form.Label className="patient-contact-label" style={{ fontWeight: '600', marginBottom: '8px' }}>
                        Country:
                      </Form.Label>
                      <Form.Control
                        className="patient-contact-text-field"
                        value={contactdetails?.contacts?.[0]?.country || "N/A"}
                        readOnly
                        style={{
                          backgroundColor: '#f8f9fa',
                          border: '1px solid #ddd',
                          padding: '10px',
                          fontSize: '1rem',
                          color: '#495057',
                        }}
                      />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                      <Form.Label className="patient-contact-label" style={{ fontWeight: '600', marginBottom: '8px' }}>
                        Postal Code:
                      </Form.Label>
                      <Form.Control
                        className="patient-contact-text-field"
                        value={contactdetails?.contacts?.[0]?.postal_code || "N/A"}
                        readOnly
                        style={{
                          backgroundColor: '#f8f9fa',
                          border: '1px solid #ddd',
                          padding: '10px',
                          fontSize: '1rem',
                          color: '#495057',
                        }}
                      />
                    </Col>
                  </Row>
                </React.Fragment>
              ))
            ) : (
              <p>No contact details available</p>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Contact_details;
