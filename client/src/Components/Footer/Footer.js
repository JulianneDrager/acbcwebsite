import React from "react";
import FooterStyle from "./FooterStyle.module.css";
import { Link } from "react-router-dom";
import Title from "Components/Contact/Form Fields/Title";
import FooterTitle from "Components/Contact/Form Fields/FooterTitle";
import { Container } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerDesktop = FooterStyle.footerDesktop;
  const linkStyle = { color: "#aeaeae", textDecoration: "none" };
  const underline = { color: "#aeaeae" };
  const divWrapper = FooterStyle.divWrapper;
  const brDisplay = FooterStyle.brDisplay;

  const linkedin =
    "https://www.linkedin.com/company/access-coordinator-boot-camp";
  const hrSelector = { margin: ".5rem 0", border: "none" };

  return (
    <footer className={footerDesktop} style={{ padding: "0" }}>
      <Container style={{ padding: "1rem" }}>
        <FooterTitle />
      </Container>
      <div style={{ backgroundColor: "#18374f", padding: ".3rem" }}>
        COPY RIGHT @ {currentYear} ACCESSCOORDINATORBOOTCAMP.com <br />
        Website designed and developed by{" "}
        <a style={linkStyle} href="https://www.designinglory.com">
          DESIGNINGLORY.COM
        </a>
      </div>
    </footer>
  );
};

export default Footer;
