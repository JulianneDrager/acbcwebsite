import React from "react";
import { Form } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useContactContext } from "../../Context/ContactContext";

const Message = () => {
  const { message, setMessage } = useContactContext();
  const messageContact = ContactStyle.messageContact;
  return (
    <>
      {/* <Form.Label className={labelForm}>Reason for Connecting</Form.Label> */}

      <Form.Control
        className={messageContact}
        as="textarea"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        rows={3}
        placeholder="MESSAGE"
      />
    </>
  );
};
export default Message;
