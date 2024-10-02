import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useContactContext } from "../../Context/ContactContext";

const EventDropDown = () => {
  const { eventDropDown, setEventDropDown } = useContactContext();
  const nameContact = ContactStyle.nameContact;

  return (
    <>
      {/* <Form.Label className={labelForm}>Name</Form.Label> */}
      <Form.Group as={Col}>
        <InputGroup hasValidation>
          <Form.Select
            id="EventDropDown"
            className={nameContact}
            name="EventDropDown"
            value={eventDropDown}
            onChange={(e) => setEventDropDown(e.target.value)}
            type="text"
            placeholder="EventDropDown"
            required
          >
            <option value="">SELECT AN EVENT</option>
            {/* <option value="2024 Grand Rapids, Michigan Round Up">
              2024 Grand Rapids, Michigan Round Up
            </option> */}
            <option value="2025 Frisco, Texas Round Up">
              2025 Dallas, Texas Round Up
            </option>
            {/* Add more options for event one */}
          </Form.Select>
          <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
            EventDropDown field is required
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default EventDropDown;
