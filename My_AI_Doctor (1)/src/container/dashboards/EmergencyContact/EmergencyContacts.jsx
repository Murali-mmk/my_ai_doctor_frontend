import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

const Emergency_contact = () => {
  // Static data fallback
  const staticData = [
    {
      emergency_contacts: [
        {
          contact_name: "John Doe",
          relationship: "Father",
          phone_number: "123-456-7890",
          address: "123 Main St, City, Country",
          is_primary: true,
        },
      ],
    },
  ];

  const [patient, setPatient] = useState(staticData);

  useEffect(() => {
    // Set static data to state (removed API call)
    setPatient(staticData);
  }, []);

  return (
    <>
      <Container className="patient-emergency-contact-container py-5" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Card className="shadow-sm" style={{ borderRadius: '8px' }}>
          <Card.Body>
            <h2 className="patient-emergency-contact-heading mb-4" style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
              Emergency Contact Details
            </h2>

            {patient && patient.length > 0 ? (
              patient.map((contact, index) => (
                <React.Fragment key={index}>
                  {/* Row 1 */}
                  <Row className="mb-3">
                    <Col lg={4} md={6} sm={12}>
                      <Form.Label className="patient-emergency-contact-label" style={{ fontWeight: '600', marginBottom: '8px' }}>
                        Emergency Contact Name:
                      </Form.Label>
                      <Form.Control
                        value={contact?.emergency_contacts?.[0]?.contact_name || "N/A"}
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
                      <Form.Label className="patient-emergency-contact-label" style={{ fontWeight: '600', marginBottom: '8px' }}>
                        Relationship:
                      </Form.Label>
                      <Form.Control
                        value={contact?.emergency_contacts?.[0]?.relationship || "N/A"}
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
                      <Form.Label className="patient-emergency-contact-label" style={{ fontWeight: '600', marginBottom: '8px' }}>
                        Phone Number:
                      </Form.Label>
                      <Form.Control
                        value={contact?.emergency_contacts?.[0]?.phone_number || "N/A"}
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
                      <Form.Label className="patient-emergency-contact-label" style={{ fontWeight: '600', marginBottom: '8px' }}>
                        Address:
                      </Form.Label>
                      <Form.Control
                        value={contact?.emergency_contacts?.[0]?.address || "N/A"}
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
                      <Form.Label className="patient-emergency-contact-label" style={{ fontWeight: '600', marginBottom: '8px' }}>
                        Is Primary Contact:
                      </Form.Label>
                      <Form.Control
                        value={contact?.emergency_contacts?.[0]?.is_primary ? "Yes" : "No"}
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
              <p>No emergency contact details available</p>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Emergency_contact;
