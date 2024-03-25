import React from "react";
import { Button } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";

const SubmitButtonDisabled = ({ ffIsValid, validated }) => {
  const btnContactDisabled = ContactStyle.btnContactDisabled;
  const btnContainer = ContactStyle.btnContainer;

  return (
    <div className={btnContainer}>
      <Button
        disabled={true}
        variant="light"
        type="submit"
        value="send"
        className={btnContactDisabled}
      >
        SUBMIT
      </Button>
    </div>
  );
};
export default SubmitButtonDisabled;
