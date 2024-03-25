import React from "react";
import FooterStyle from "./FooterStyle.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerDesktop = FooterStyle.footerDesktop;
  const linkStyle = { color: "#aeaeae", textDecoration: "none" };
  const underline = { color: "#aeaeae" };
  const divWrapper = FooterStyle.divWrapper;
  const brDisplay = FooterStyle.brDisplay;

  const linkedin =
    "https://www.linkedin.com/posts/brandis-boyd-cooper-cma-cdt-b534431a5_access-activity-7115025415395545088-CpSG?utm_source=share&utm_medium=member_android&fbclid=IwAR0kEDt7lFxUzC2evdHFfIzwJjUubZDA_oANCDtKFaKEL6FCVAKWEqMpTi4";
  const hrSelector = { margin: ".5rem 0", border: "none" };

  return (
    <footer className={footerDesktop} style={{ padding: "0" }}>
      <div className={divWrapper} style={{ padding: ".5rem .16rem" }}>
        <h6 style={{ fontWeight: "normal" }}>
          Biologic Coordinators Available <br className={brDisplay} />{" "}
          Nationally & Locally
        </h6>

        {/* linked in */}
        <h6 style={{ fontWeight: "normal" }}>
          We are located at 6009 W. Parker Rd
          <br />
          Ste 149-248 Plano, TX 75093 <br className={brDisplay} />
          {/* phone */}
          <hr style={hrSelector} /> Call Today:{" "}
          <a style={underline} href={"tel:4693733545"} alt="general phone">
            469-373-3545
          </a>
          <hr style={hrSelector} /> Fax Number:{" "}
          <a style={underline} href={"tel:4693733545"} alt="general phone">
            469-373-3741
          </a>
          <hr style={hrSelector} /> Connect with us:{" "}
          <a style={underline} href={linkedin} alt="LinkedIn Profile">
            LinkedIn
          </a>
        </h6>
        <h6>
          <Link to="/faq" style={underline}>
            FREQUENT ASKED QUESTIONS
          </Link>
        </h6>
      </div>
      <div style={{ backgroundColor: "#18374f", padding: ".3rem" }}>
        COPY RIGHT @ 2021- {currentYear} BioMazze Coordination <br />
        Website designed and developed by{" "}
        <a style={linkStyle} href="https://www.designinglory.com">
          DESIGNINGLORY.COM
        </a>
      </div>
    </footer>
  );
};

export default Footer;
