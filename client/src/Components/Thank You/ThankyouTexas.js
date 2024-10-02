import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import ThankyouStyle from "./Thankyou.module.css";
import Wrapper from "./Wrapper";

import { Card } from "react-bootstrap";
import ContactStyle from "../Contact/Contact.module.css";

const ThankyouTexas = ({ sendEmailHandler }) => {
  const { firstName } = useParams();

  const formStyle = ContactStyle.formStyle;
  const contact = ContactStyle.contact;
  const contactTitle = ContactStyle.contactTitle;
  const spanText = ContactStyle.spanText;

  return (
    <>
      <div className={contact}>
        <Card
          className={formStyle}
          style={{ color: "white", textAlign: "center" }}
        >
          <p className={contactTitle}>
            Thank <span className={spanText}>You </span>
          </p>
          <h1>
            Hello
            <b> {firstName},</b>
          </h1>
          <p>
            Thank you for your submission.
            <hr style={{ margin: ".3rem", border: "none" }} />
            Please click the link below to complete your registration.
            <br />
            --Sincerely, Your ACBC Team
            <hr style={{ margin: ".5rem" }} />
            <Button
              style={{
                marginTop: "1rem",
                background: "#d4ba66",
                border: "none",
                color: "black",
                width: "50%",
              }}
              href="https://square.link/u/HSyWHezW"
            >
              PAY $25 REGISTRATION FEE
            </Button>
            <br />
          </p>

          <div style={{ textAlign: "center" }}>
            <Button
              style={{
                marginTop: "1rem",
                background: "none", // "rgba(0, 0, 0, 0.5)
                border: "none",
                color: "white",
                width: "30%",
              }}
              href="/"
            >
              BACK TO WEBSITE
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};
export default ThankyouTexas;
