import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Form, InputGroup, Card, Button } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useContactContext } from "../../Context/ContactContext";
import MyPaymentForm from "Components/Sqare/PaymentForm";

const IndividualDown = () => {
  const { individualDown, setIndividualDown } = useContactContext();
  const nameContact = ContactStyle.nameContact;
  const btnContact = ContactStyle.btnContact;

  const [selected, setSelected] = useState(false);

  const showMessage = (e) => {
    if (individualDown === "No I am not") {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };

  console.log("eventDropDown", individualDown);

  useEffect(() => {
    showMessage();
  }, [individualDown]);

  // console.log("IndividualDown", IndividualDown);
  return (
    <>
      {/* <Form.Label className={labelForm}>Name</Form.Label> */}
      <Form.Group as={Col}>
        <InputGroup hasValidation>
          <Form.Select
            id="IndividualDown"
            className={nameContact}
            name="IndividualDown"
            value={individualDown}
            onChange={(e) => setIndividualDown(e.target.value)}
            type="text"
            placeholder="IndividualDown"
            required
          >
            <option value=""> WHO IS REGISTERING</option>
            <option value="Pharmacy Rep">PHARMACY REP</option>
            <option value="No I am not">INDIVIDUAL</option>
            {/* Add more options for event one */}
          </Form.Select>
          <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
            IndividualDown field is required
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      {selected && (
        <Card style={{ marginTop: ".1rem" }}>
          <Card.Text
            style={{
              color: "black",
              padding: ".5rem",
              background: "#f2eded",
              borderRadius: "5px",
            }}
          >
            <b>Please note</b>: There is a $27.00 registration fee to cover the
            cost of your t-shirt for this event. Once Payment is received, you
            will be taken to the registration form.
          </Card.Text>
        </Card>
      )}
      <br />
      {selected && <MyPaymentForm />}
      {/* for pharma reps to fill out form */}
      {!selected && (
        <Button href={"/register"} className={btnContact}>
          SUBMIT
        </Button>
      )}
    </>
  );
};
export default IndividualDown;
