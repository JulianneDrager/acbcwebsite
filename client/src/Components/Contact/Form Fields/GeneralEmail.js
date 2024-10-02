import React from "react";
import { Form } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useContactContext } from "../../Context/ContactContext";

const Email = () => {
  const { email, setEmail } = useContactContext();
  const emailContact = ContactStyle.emailContact;
  return (
    <>
      <Form.Control
        className={emailContact}
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        rows={3}
        placeholder="EMAIL"
        required
      />
    </>
  );
};
export default Email;
