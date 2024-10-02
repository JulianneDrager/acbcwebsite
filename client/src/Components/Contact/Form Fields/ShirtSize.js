import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useContactContext } from "../../Context/ContactContext";

const ShirtSize = () => {
  const { shirtSize, setShirtSize } = useContactContext();
  const nameContact = ContactStyle.nameContact;

  return (
    <>
      {/* <Form.Label>
        WHAT IS YOUR SHIRT SIZE? S, M, L, XL, 2XL, 3XL, 4XL
      </Form.Label> */}
      <Form.Group as={Col}>
        <InputGroup hasValidation>
          <Form.Control
            id="shirtSize"
            className={nameContact}
            name="shirtSize"
            value={shirtSize}
            onChange={(e) => setShirtSize(e.target.value)}
            type="text"
            placeholder="WRITE YOUR SHIRT SIZE"
            required
            minLength={1}
            maxLength={20}
          />
          <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
            Shirt Size is required
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default ShirtSize;
