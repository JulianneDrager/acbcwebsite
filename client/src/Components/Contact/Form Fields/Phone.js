import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useContactContext } from "../../Context/ContactContext";

const Phone = () => {
  const { phone, setPhone } = useContactContext();
  const phoneContact = ContactStyle.phoneContact;
  return (
    <>
      {/* <Form.Label className={labelForm}>Phone Number</Form.Label> */}
      <Form.Group as={Col} sm={12}>
        <InputGroup hasValidation>
          <Form.Control
            className={phoneContact}
            name="phone_number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            placeholder="PHONE"
            required
          />
          <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
            Please enter a valid phone number format
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default Phone;
