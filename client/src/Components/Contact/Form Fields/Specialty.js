import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useContactContext } from "../../Context/ContactContext";

const Specialty = () => {
  const { specialty, setSpecialty } = useContactContext();
  const nameContact = ContactStyle.nameContact;

  return (
    <>
      {/* <Form.Label className={labelForm}>Name</Form.Label> */}
      <Form.Group as={Col}>
        <InputGroup hasValidation>
          <Form.Control
            id="specialty"
            className={nameContact}
            name="specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            type="text"
            placeholder="SPECIALTY"
            required
            minLength={3}
            maxLength={20}
          />
          <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
            Specialty field is required
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default Specialty;
