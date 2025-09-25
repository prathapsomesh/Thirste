"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaBullhorn, FaBriefcase, FaTags, FaHeart } from "react-icons/fa";

const WhyCustomisedWaterBottles = () => {
  const benefits = [
    {
      title: "Brand Visibility",
      text: "Custom bottles keep your brand in front of customers daily.",
      icon: <FaBullhorn size={40} className="mb-3 text-primary" />,
    },
    {
      title: "Professional Offering",
      text: "Elevate your brand image, making your business look professional.",
      icon: <FaBriefcase size={40} className="mb-3 text-dark" />,
    },
    {
      title: "Cost-Effective Marketing",
      text: "Affordable giveaways that create lasting impressions.",
      icon: <FaTags size={40} className="mb-3 text-warning" />,
    },
    {
      title: "Personalised Touch",
      text: "Show clients and employees you care with customised designs.",
      icon: <FaHeart size={40} className="mb-3 text-danger" />,
    },
  ];

  // Animation variants for staggered fade-in
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      style={{
        position: "relative",
        padding: "60px 0",
        background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
        overflow: "hidden",
      }}
    >
      {/* Top Wave */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          transform: "rotate(180deg)",
          zIndex: 0,
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 80 }}
        >
          <path
            d="M0,0V46.29c47.75,22,103.59,29,158,17.39C230,51.63,284,12.66,339,1.11c54-11.26,108,7.73,162,24.45,54,16.72,108,30.16,162,21.19C717,39,771,9,826,5.52c55-3.61,109,15.28,163,30.51,54,15.46,108,27,162,13.15,54-14.17,109-52.28,163-71.24V0Z"
            opacity=".25"
            fill="#e0f7fa"
          ></path>
          <path
            d="M0,0V15.81C47.75,39.06,103.59,57.67,158,57.93,230,58.43,284,39,339,28.74c54-10.12,108-8.1,162,5.63,54,13.89,108,38.69,162,40.29,54,.73,108-21.55,163-35.3,55-13.93,109-17.66,163-9.61,54,8.09,108,27.18,162,34.4,54,7.44,109,2.28,163-8.11V0Z"
            opacity=".5"
            fill="#e0f7fa"
          ></path>
          <path
            d="M0,0V5.63C47.75,22,103.59,44,158,54.54c72,13.45,126-1.41,181-13.25,54-11.95,108-17.65,162-10.07,54,7.6,108,27.36,162,33.46,54,6.22,108-1.38,163-10.06,55-8.82,109-18.47,163-14.74,54,3.69,108,19.47,162,29.14,54,9.7,109,13.49,163,11.07V0Z"
            fill="#e0f7fa"
          ></path>
        </svg>
      </div>

      <Container style={{ position: "relative", zIndex: 1 }}>
        <motion.h2
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ zIndex: 99 }}
        >
          Why Customised Water Bottles?
        </motion.h2>

        <motion.p
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Customised water bottles are more than just drinkware—they’re powerful
          branding tools that combine practicality with visibility. Here’s why
          your business should use them:
        </motion.p>

        <Row>
          {benefits.map((benefit, idx) => (
            <Col md={6} lg={3} key={idx} className="mb-4">
              <motion.div
                custom={idx}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                  <Card className="h-100 shadow-sm text-center p-3 border-0">
                    <Card.Body>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        {benefit.icon}
                      </motion.div>
                      <Card.Title className="mt-2">{benefit.title}</Card.Title>
                      <Card.Text>{benefit.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Bottom Wave */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          zIndex: 0,
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 80 }}
        >
          <path
            d="M0,0V46.29c47.75,22,103.59,29,158,17.39C230,51.63,284,12.66,339,1.11c54-11.26,108,7.73,162,24.45,54,16.72,108,30.16,162,21.19C717,39,771,9,826,5.52c55-3.61,109,15.28,163,30.51,54,15.46,108,27,162,13.15,54-14.17,109-52.28,163-71.24V0Z"
            opacity=".25"
            fill="#e0f7fa"
          ></path>
          <path
            d="M0,0V15.81C47.75,39.06,103.59,57.67,158,57.93,230,58.43,284,39,339,28.74c54-10.12,108-8.1,162,5.63,54,13.89,108,38.69,162,40.29,54,.73,108-21.55,163-35.3,55-13.93,109-17.66,163-9.61,54,8.09,108,27.18,162,34.4,54,7.44,109,2.28,163-8.11V0Z"
            opacity=".5"
            fill="#e0f7fa"
          ></path>
          <path
            d="M0,0V5.63C47.75,22,103.59,44,158,54.54c72,13.45,126-1.41,181-13.25,54-11.95,108-17.65,162-10.07,54,7.6,108,27.36,162,33.46,54,6.22,108-1.38,163-10.06,55-8.82,109-18.47,163-14.74,54,3.69,108,19.47,162,29.14,54,9.7,109,13.49,163,11.07V0Z"
            fill="#e0f7fa"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default WhyCustomisedWaterBottles;
