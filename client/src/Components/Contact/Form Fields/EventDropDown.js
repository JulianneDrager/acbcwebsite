import React, { useEffect, useState } from "react";
import { Card, Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useContactContext } from "../../Context/ContactContext";

const EventDropDown = () => {
  const { eventDropDown, setEventDropDown } = useContactContext();
  const nameContact = ContactStyle.nameContact;
  const [selected, setSelected] = useState(false);

  const showMessage = (e) => {
    if (eventDropDown === "2025 Dallas, Texas Round Up") {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };

  console.log("eventDropDown", eventDropDown);

  useEffect(() => {
    showMessage();
  }, [eventDropDown]);

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
            <option value="2024 Grand Rapids, Michigan Round Up">
              2024 Grand Rapids, Michigan Round Up
            </option>
            <option value="2025 Dallas, Texas Round Up">
              2025 Dallas, Texas Round Up
            </option>
            {/* Add more options for event one */}
          </Form.Select>
          <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
            EventDropDown field is required
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      {selected && (
        <Card style={{ marginTop: ".1rem" }}>
          <Card.Text
            style={{
              color: "black",
              padding: ".5rem",
              background: "#ffc107",
              borderRadius: "5px",
            }}
          >
            <b>Please note</b>: There is a $25.00 registration fee to attend
            this event. Please complete the form, to access the payment link.
          </Card.Text>
        </Card>
      )}
    </>
  );
};
export default EventDropDown;
