import BottleAnimation from "./Components/Banner/BottleAnimation";
import NavbarTop from "./Components/NavbarTop/NavbarTop";
import { Container } from "react-bootstrap";
import WhyCustomisedWaterBottles from "./Components/WhyCustomisation/WhyCustomisation";
import WhyUs from "./Components/WhyUs/WhyUs";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <Container fluid className="p-0 m-0">
      <NavbarTop />
      <BottleAnimation />
      <WhyCustomisedWaterBottles />
      <WhyUs />
      <HowItWorks />
      <ContactUs />
      <Footer />
    </Container>
  );
}
