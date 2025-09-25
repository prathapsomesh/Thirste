"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { MessageSquare, Palette, CupSoda, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare size={40} className="text-primary" />,
      title: "Share Your Requirement",
      desc: "Whether it’s an ad campaign, wedding, corporate event, hotel, or store branding – just tell us your vision and goals.",
    },
    {
      icon: <Palette size={40} className="text-success" />,
      title: "We Design Your Labels",
      desc: "Our creative team crafts eye-catching label designs tailored to your brand identity and audience.",
    },
    {
      icon: <CupSoda size={40} className="text-warning" />,
      title: "Branding on Bottles",
      desc: "Your custom labels are applied to our premium bottles, making them stylish, professional, and brand-ready.",
    },
    {
      icon: <Truck size={40} className="text-danger" />,
      title: "Dispatch & Delivery",
      desc: "We package and deliver your customised bottles, ready to impress at your event or business.",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #ffffff, #f0f8ff)",
      }}
      id="howitworks"
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center fw-bold mb-5"
        >
          How It Works
        </motion.h2>

        <Row className="justify-content-center">
          {steps.map((step, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-100 shadow-sm border-0 text-center p-4 rounded-3">
                  <div className="mb-3">{step.icon}</div>
                  <Card.Title className="fw-bold">{step.title}</Card.Title>
                  <Card.Text>{step.desc}</Card.Text>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
