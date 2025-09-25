"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  Layers,
  DollarSign,
  PackageCheck,
  ShieldCheck,
  RefreshCcw,
} from "lucide-react"; // icons

const WhyUs = () => {
  const reasons = [
    {
      icon: <Layers size={40} className="text-primary" />,
      title: "Low Minimum Order Quantity",
      desc: "Order as Min as 200 cases.",
    },
    {
      icon: <DollarSign size={40} className="text-success" />,
      title: "Affordable Pricing",
      desc: "High Impact, Low cost",
    },
    {
      icon: <PackageCheck size={40} className="text-warning" />,
      title: "End to End Service",
      desc: "From Design to Hassle-Free Delivery of the product.",
    },
    {
      icon: <ShieldCheck size={40} className="text-danger" />,
      title: "FSSAI & ISI Certified",
      desc: "Pure and Hygienic water,",
    },
    {
      icon: <RefreshCcw size={40} className="text-info" />,
      title: "Flexible Plans",
      desc: "Choose one-time orders or recurring deliveries that fit your lifestyle or business needs.",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #f9f9f9, #ffffff)",
      }}
      id="whyus"
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center fw-bold mb-5"
        >
          Why Us?
        </motion.h2>

        {/* First row with 3 cards */}
        <Row className="justify-content-center">
          {reasons.slice(0, 3).map((reason, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-100 shadow-sm border-0 text-center p-4 rounded-3">
                  <div className="mb-3">{reason.icon}</div>
                  <Card.Title className="fw-bold">{reason.title}</Card.Title>
                  <Card.Text>{reason.desc}</Card.Text>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Second row with 2 cards */}
        <Row className="justify-content-center">
          {reasons.slice(3).map((reason, index) => (
            <Col md={5} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-100 shadow-sm border-0 text-center p-4 rounded-3">
                  <div className="mb-3">{reason.icon}</div>
                  <Card.Title className="fw-bold">{reason.title}</Card.Title>
                  <Card.Text>{reason.desc}</Card.Text>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyUs;
