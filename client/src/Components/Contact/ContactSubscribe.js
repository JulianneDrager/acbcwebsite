import { Col, Row } from "react-bootstrap";
import Subscribe from "./Subscribe";
import { useContactContext } from "../Context/ContactContext";

const ContactSubscribe = () => {
  const { sendEmailHandler } = useContactContext();
  return (
    <>
      <Row>
        <Col>
          <Subscribe sendEmailHandler={sendEmailHandler} />
        </Col>
      </Row>
    </>
  );
};
export default ContactSubscribe;
