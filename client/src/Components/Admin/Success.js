import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ContactStyle from "../Contact/Contact.module.css";

const Success = ({ sendEmailHandler }) => {
  const formStyle = ContactStyle.formStyle;
  const contact = ContactStyle.contact;

  return (
    <>
      <div className={contact}>
        <Card
          className={formStyle}
          style={{ color: "white", textAlign: "center" }}
        >
          <p>
            Registrant successfully added!
            <br />
          </p>

          <div style={{ textAlign: "center" }}>
            <Button
              style={{
                marginTop: "1rem",
                background: "#d4ba66",
                border: "none",
                color: "black",
                width: "50%",
              }}
              href="/admin"
            >
              BACK TO DASHBOARD
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};
export default Success;
