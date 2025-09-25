"use client";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { labels } from "@/app/Config/labels";
import { Card, Image } from "react-bootstrap";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function NavbarTop() {
  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Container>
        {/* Brand */}
        <Navbar.Brand href="/">
          <Image
            src="/thirste.svg"
            width={150}
            height={55}
            alt="Thirste Logo"
            className="mr-2"
            quality={100}
          />
        </Navbar.Brand>

        {/* Hamburger toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex flex-column flex-lg-row align-items-start align-items-lg-center">
            {/* Text next to icons */}
            <Nav.Item className="font-poppins d-flex flex-column text-start text-lg-end mb-2 mb-lg-0 me-lg-3">
              <span>{labels.navbar.links.get_your_bottle}</span>
              <span className="fw-bold">{labels.navbar.links.phone}</span>
            </Nav.Item>

            {/* Instagram */}
            <Nav.Link
              href="https://instagram.com/youarethirste"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center mb-2 mb-lg-0 me-lg-2"
            >
              <FaInstagram size={22} style={{ color: "#E1306C" }} />
              <span className="ms-2  d-lg-inline">Instagram</span>
            </Nav.Link>

            {/* WhatsApp */}
            <Nav.Link
              href="https://wa.me/6361103919"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center"
            >
              <FaWhatsapp size={22} style={{ color: "#25D366" }} />
              <span className="ms-2  d-lg-inline">WhatsApp</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
