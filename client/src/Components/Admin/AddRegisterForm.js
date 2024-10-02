import { Button, Card, Form } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useContactContext } from "../Context/ContactContext";

import Name from "../Contact/Form Fields/Name";
import Phone from "../Contact/Form Fields/Phone";
import Email from "../Contact/Form Fields/Email";
import SubmitButton from "../Contact/Form Fields/SubmitButton";
import ContactStyle from "../Contact/Contact.module.css";
import Specialty from "../Contact/Form Fields/Specialty";
import smoothscroll from "smoothscroll-polyfill";
import LastName from "../Contact/Form Fields/LastName";
import Practice from "../Contact/Form Fields/Practice";
import PracticeAddress from "../Contact/Form Fields/PracticeAddress";
import EventDropDown from "./EventDropDown";
import ShirtSize from "../Contact/Form Fields/ShirtSize";

smoothscroll.polyfill();

const AddRegisterForm = () => {
  const { type, setType, RegisterHandler } = useContactContext();

  const subscribeAddFormStyle = ContactStyle.subscribeAddFormStyle;
  const contact = ContactStyle.contact;
  const nameDiv = ContactStyle.nameDiv;

  useEffect(() => {
    setType("add-register");
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  //for validate
  const [checked, setChecked] = useState(true);

  const refForm = useRef();

  const combinedHandler = (e) => {
    RegisterHandler(e);
  };

  return (
    <>
      <Form
        id="add-register"
        ref={refForm}
        onSubmit={combinedHandler}
        // validated={validated}
        // className={contact}
        autoComplete="on"
      >
        <Card className={subscribeAddFormStyle}>
          <EventDropDown />
          <div className={nameDiv}>
            <Name />
            <LastName />
          </div>
          <Email />
          <Phone />

          <Specialty />
          <Practice />
          <PracticeAddress />
          {/* <Company /> */}
          <ShirtSize />

          <input type="hidden" name="type" value={type} />

          <SubmitButton />
        </Card>
      </Form>
    </>
  );
};
export default AddRegisterForm;
