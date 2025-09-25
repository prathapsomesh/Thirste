"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#0d1b2a",
        color: "#ffffff",
        padding: "40px 0 20px 0",
        marginTop: "60px",
      }}
    >
      <Container>
        <Row className="gy-4">
          {/* Company Info */}
          <Col md={4}>
            <h5 className="fw-bold">Thirste</h5>
            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Customised bottled water solutions for events, corporate branding,
              hotels, restaurants, and more. Pure, certified, and delivered to
              your doorstep.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h5 className="fw-bold">Quick Links</h5>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
              <li>
                <a href="#whyus" className="text-decoration-none text-white">
                  Why Us
                </a>
              </li>
              <li>
                <a
                  href="#howitworks"
                  className="text-decoration-none text-white"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="text-decoration-none text-white">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact & Socials */}
          <Col md={4}>
            <h5 className="fw-bold">Get In Touch</h5>
            <p className="mb-1">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className="me-2 text-warning"
              />
              +91 6361103919
            </p>
            <p>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="me-2 text-warning"
              />
              hello@thirste.in
            </p>

            <div className="d-flex gap-3 mt-2">
              <a
                href="https://instagram.com/youarethirste"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  className="text-white"
                />
              </a>
              <a
                href="https://wa.me/6361103919"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  size="lg"
                  className="text-white"
                />
              </a>
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />

        <Row>
          <Col className="text-center" style={{ fontSize: "13px" }}>
            © {new Date().getFullYear()} Thirste. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
