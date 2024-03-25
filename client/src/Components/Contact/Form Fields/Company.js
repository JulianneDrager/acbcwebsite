import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useContactContext } from "../../Context/ContactContext";

const Company = () => {
  const { company, setCompany } = useContactContext();
  const nameContact = ContactStyle.nameContact;

  return (
    <>
      {/* <Form.Label className={labelForm}>Name</Form.Label> */}
      <Form.Group as={Col}>
        <InputGroup hasValidation>
          <Form.Control
            id="company"
            className={nameContact}
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            placeholder="COMPANY"
            required
            minLength={3}
            maxLength={20}
          />
          <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
            Company field is required
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default Company;
