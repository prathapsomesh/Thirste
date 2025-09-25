"use client";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BottleAnimation.css";
import { motion } from "framer-motion";

const BottleAnimation = () => {
  return (
    <section
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Text Section */}
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="fw-bold"
            >
              Customised Water Bottles for Your Brand
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="lead mt-3"
            >
              Make a lasting impression with personalised water bottles that
              showcase your logo, style, and identity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <Button variant="primary" size="lg" href="#contact">
                Get Started
              </Button>
            </motion.div>
          </Col>

          {/* Right Image Section */}
          <Col md={6} className="text-center">
            <motion.img
              src="/banner.png"
              alt="Customised Water Bottle"
              className="img-fluid"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BottleAnimation;
