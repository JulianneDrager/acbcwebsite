import React from "react";
import { Button } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";

const SubmitButton = ({ ffIsValid, validated }) => {
  const btnContact = ContactStyle.btnContact;
  const btnContainer = ContactStyle.btnContainer;

  return (
    <div className={btnContainer}>
      <Button type="submit" value="send" className={btnContact}>
        SUBMIT
      </Button>
    </div>
  );
};
export default SubmitButton;
