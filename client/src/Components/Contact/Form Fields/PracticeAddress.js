import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useContactContext } from "../../Context/ContactContext";

const PracticeAddress = () => {
  const { practiceAddress, setPracticeAddress } = useContactContext();
  const nameContact = ContactStyle.nameContact;

  return (
    <>
      {/* <Form.Label className={labelForm}>Name</Form.Label> */}
      <Form.Group as={Col}>
        <InputGroup hasValidation>
          <Form.Control
            id="PracticeAddress"
            className={nameContact}
            name="PracticeAddress"
            value={practiceAddress}
            onChange={(e) => setPracticeAddress(e.target.value)}
            type="text"
            placeholder="STREET, CITY, STATE, ZIP"
            required
            minLength={3}
            maxLength={50}
          />
          <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
            Practice Address is required
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default PracticeAddress;
