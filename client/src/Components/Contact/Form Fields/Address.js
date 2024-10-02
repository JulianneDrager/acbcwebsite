import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useContactContext } from "../../Context/ContactContext";

const Address = () => {
  const { address, setAddress } = useContactContext();
  const nameContact = ContactStyle.nameContact;

  return (
    <>
      {/* <Form.Label className={labelForm}>Name</Form.Label> */}
      <Form.Group as={Col}>
        <InputGroup hasValidation>
          <Form.Control
            id="address"
            className={nameContact}
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="ADDRESS, CITY, STATE, ZIP"
            required
            minLength={3}
            maxLength={50}
          />
          <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
            Address is required
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default Address;
