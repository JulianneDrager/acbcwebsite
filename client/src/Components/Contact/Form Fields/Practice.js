import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useContactContext } from "../../Context/ContactContext";

const Practice = () => {
  const { practice, setPractice } = useContactContext();
  const nameContact = ContactStyle.nameContact;

  return (
    <>
      {/* <Form.Label className={labelForm}>Name</Form.Label> */}
      <Form.Group as={Col}>
        <InputGroup hasValidation>
          <Form.Control
            id="practice"
            className={nameContact}
            name="practice"
            value={practice}
            onChange={(e) => setPractice(e.target.value)}
            type="text"
            placeholder="PRACTICE"
            required
            minLength={3}
            maxLength={40}
          />
          <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
            practice field is required
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default Practice;
