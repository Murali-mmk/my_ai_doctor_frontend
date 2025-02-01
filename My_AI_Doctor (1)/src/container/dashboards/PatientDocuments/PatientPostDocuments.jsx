import React, { useState } from "react";
import { Form, Row, Col, Button, Badge } from "react-bootstrap";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

function PatientPostDocuments() {
  const [formData, setFormData] = useState({
    document_type: "",
    document_title: "",
    document_date: "",
    document_url: "",
    source: "",
    description: "",
    tags: [],
    uploaded_at: "",
  });

  const sourceOptions = [
    { value: "Hospital", label: "Hospital" },
    { value: "Clinic", label: "Clinic" },
    { value: "Doctor", label: "Doctor" },
    { value: "Lab", label: "Lab" },
    { value: "Other", label: "Other" },
  ];

  const tagOptions = [
    { value: "Medical", label: "Medical" },
    { value: "Lab Report", label: "Lab Report" },
    { value: "Prescription", label: "Prescription" },
    { value: "Invoice", label: "Invoice" },
    { value: "Other", label: "Other" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagsChange = (selectedOptions) => {
    setFormData({
      ...formData,
      tags: selectedOptions || [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <div>
      {/* <style>
        {`
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
          }

          .form-container {
            width: 950px;
            max-width: 1000px;
            padding: 30px 50px;
            background: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
          }
        `}
      </style> */}
      <div className="form-container">
        <h2 className="mb-4 text-center">Patient Documents</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="documentType">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Document Type
                </Form.Label>
                <Form.Control
                  type="text"
                  name="document_type"
                  value={formData.document_type}
                  onChange={handleInputChange}
                  placeholder="Enter document type"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="documentTitle">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Document Title
                </Form.Label>
                <Form.Control
                  type="text"
                  name="document_title"
                  value={formData.document_title}
                  onChange={handleInputChange}
                  placeholder="Enter document title"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="documentDate">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Document Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="document_date"
                  value={formData.document_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="documentUrl">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Document URL
                </Form.Label>
                <Form.Control
                  type="url"
                  name="document_url"
                  value={formData.document_url}
                  onChange={handleInputChange}
                  placeholder="Enter document URL"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="source">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Source
                </Form.Label>
                <Select
                  options={sourceOptions}
                  name="source"
                  value={sourceOptions.find(
                    (opt) => opt.value === formData.source
                  )}
                  onChange={(selectedOption) =>
                    setFormData({
                      ...formData,
                      source: selectedOption?.value || "",
                    })
                  }
                  placeholder="Select source"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="tags">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Tags
                </Form.Label>
                <Select
                  options={tagOptions}
                  isMulti
                  name="tags"
                  value={formData.tags}
                  onChange={handleTagsChange}
                  placeholder="Select tags"
                />
              </Form.Group>
              <div className="mt-3">
                {formData.tags.length > 0 && (
                  <>
                    <h6>Selected Tags:</h6>
                    {formData.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        pill
                        bg="primary"
                        className="me-2"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          handleTagsChange(
                            formData.tags.filter((t) => t.value !== tag.value)
                          )
                        }
                      >
                        {tag.label} &times;
                      </Badge>
                    ))}
                  </>
                )}
              </div>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="uploadedAt">
                <Form.Label
                  className="fw-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Uploaded At
                </Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="uploaded_at"
                  value={formData.uploaded_at}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          {/*   <div className="text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div> */}
        </Form>
      </div>
    </div>
  );
}

export default PatientPostDocuments;
