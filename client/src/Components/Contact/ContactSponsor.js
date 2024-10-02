import { Col, Row } from "react-bootstrap";
import Sponsor from "./Sponsor";
import { useContactContext } from "Components/Context/ContactContext";

const ContactSponsor = () => {
  const { sendEmailHandler } = useContactContext();
  return (
    <>
      <Row>
        <Col>
          <Sponsor sendEmailHandler={sendEmailHandler} />
        </Col>
      </Row>
    </>
  );
};
export default ContactSponsor;
