import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import ContactStyle from "../Contact.module.css";

const SubmitButton = ({ ffIsValid, validated }) => {
  const btnContact = ContactStyle.btnContact;
  const btnContainer = ContactStyle.btnContainer;
  const btnContactAdd = ContactStyle.btnContactAdd;

  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (location.pathname === "/admin/") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  console.log("SHOW", location.pathname);

  return (
    <div className={btnContainer}>
      {!show && (
        <Button type="submit" value="send" className={btnContact}>
          SUBMIT
        </Button>
      )}
      {show && (
        <Button type="submit" value="send" className={btnContactAdd}>
          ADD TO LIST
        </Button>
      )}
    </div>
  );
};
export default SubmitButton;
