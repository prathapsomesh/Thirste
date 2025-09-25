"use client";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import {
  faEnvelope,
  faPhoneAlt,
  faUser,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const contactNow = (e) => {
    e.preventDefault();

    if (!userName || !phoneNumber || !message) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    emailjs
      .sendForm(
        "service_v5agcfh", // ✅ Your EmailJS Service ID
        "template_fksbggc", // ✅ Your EmailJS Template ID
        e.target, // Pass form
        "X2QnBq7jZbRmpBPm_" // ✅ Your Public Key
      )
      .then(
        () => {
          setLoading(false);
          setError(null);
          setSuccess(
            "Request received successfully. We'll get back to you within 24 hours. Thank you!"
          );
          e.target.reset();
        },
        (err) => {
          console.error("EmailJS error:", err);
          setLoading(false);
          setSuccess(null);
          setError("Something went wrong, please try again later.");
        }
      );
  };

  return (
    <section id="contact" style={{ padding: "80px 0", background: "#f9f9f9" }}>
      <Container>
        <h2 className="text-center fw-bold mb-5">Contact Us</h2>

        <Row className="g-4">
          {/* Contact Form */}
          <Col md={8}>
            <Card className="shadow-sm border-0 p-4 rounded-3">
              <Form onSubmit={contactNow}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <FontAwesomeIcon
                      icon={faUser}
                      className="me-2 text-secondary"
                      color="#0000"
                    />
                    Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="from_name"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      className="me-2 text-secondary"
                    />
                    Phone
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your phone number"
                    name="contact_number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="me-2 text-secondary"
                    />
                    Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your message..."
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="secondary"
                  disabled={loading}
                  className="w-100"
                >
                  {loading ? (
                    <>
                      Sending...
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="ms-2"
                      />
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>

                {error && (
                  <Alert variant="danger" className="mt-3">
                    {error}
                  </Alert>
                )}
                {success && (
                  <Alert variant="success" className="mt-3">
                    {success}
                  </Alert>
                )}
              </Form>
            </Card>
          </Col>

          {/* Contact Info */}
          <Col md={4}>
            <Card className="shadow-sm border-0 p-4 rounded-3">
              <div className="mb-4">
                <FontAwesomeIcon
                  icon={faUser}
                  className="me-2 text-secondary"
                />
                <strong>Thirste</strong>
              </div>

              <div className="mb-4">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="me-2 text-secondary"
                />
                +91 6361103919
              </div>

              <div className="mb-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="me-2 text-secondary"
                />
                hello@thirste.in
              </div>

              <div>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="me-2 text-secondary"
                />
                <a
                  href="https://maps.app.goo.gl/Z7NH3eyjHqo9YTnv5"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  Get Directions
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
