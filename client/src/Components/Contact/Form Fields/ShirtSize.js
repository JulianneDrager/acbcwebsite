import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useContactContext } from "../../Context/ContactContext";

const ShirtSize = () => {
  const { shirtSize, setShirtSize } = useContactContext();
  const nameContact = ContactStyle.nameContact;

  return (
    <>
      {/* <Form.Label className={labelForm}>Name</Form.Label> */}
      <Form.Group as={Col}>
        <InputGroup hasValidation>
          <Form.Select
            id="shirt-size"
            className={nameContact}
            name="shirt-size"
            value={shirtSize}
            onChange={(e) => setShirtSize(e.target.value)}
            type="text"
            placeholder="ShirtSize"
            required
          >
            <option value="">SELECT A SHIRT SIZE</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="LG">LG</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            {/* Add more options for event one */}
          </Form.Select>
          <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
            Shirt Size is required
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default ShirtSize;
