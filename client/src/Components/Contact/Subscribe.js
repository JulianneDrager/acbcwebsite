import { Card, Form } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

import Name from "./Form Fields/Name";
import Phone from "./Form Fields/Phone";
import Email from "./Form Fields/Email";
import SubmitButton from "./Form Fields/SubmitButton";
import ContactStyle from "./Contact.module.css";
import Message from "./Form Fields/Message";
import SubmitButtonDisabled from "./Form Fields/SubmitButtonDisabled";
import Address from "./Form Fields/Address";
import Specialty from "./Form Fields/Specialty";
import Position from "./Form Fields/Position";
import Company from "./Form Fields/Company";
import Nav from "Components/Nav/Nav";
import smoothscroll from "smoothscroll-polyfill";
import LastName from "./Form Fields/LastName";
import { useContactContext } from "../Context/ContactContext";

smoothscroll.polyfill();

const Subscribe = ({ sendEmailHandler }) => {
  const { type, setType } = useContactContext();

  useEffect(() => {
    setType("subscribe");
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const subscribeFormStyle = ContactStyle.subscribeFormStyle;
  const contact = ContactStyle.contact;
  const checkForm = ContactStyle.checkForm;
  const subscribeH1 = ContactStyle.subscribeH1;
  const nameDiv = ContactStyle.nameDiv;

  //for validate
  const [checked, setChecked] = useState(true);

  // for checkbox
  const [boxIsChecked, setBoxIsChecked] = useState(false); //fried chicken leg white sandwich

  // for checkbox
  const onChangeChoice1 = (e) => {
    if (e.target.name === "content" && e.target.checked === true) {
      setChecked(false);
    }

    if (e.target.checked === false) {
      setChecked(true);
    }
  };

  const refForm = useRef();

  return (
    <>
      <Nav />
      <Form
        id="contact"
        ref={refForm}
        onSubmit={sendEmailHandler}
        // validated={validated}
        className={contact}
        autoComplete="on"
      >
        <Card className={subscribeFormStyle}>
          <h1 className={subscribeH1}>SUBSCRIBE FOR UPDATES</h1>
          <p>Fill out the from below to subscribe for updates via email</p>

          <div className={nameDiv}>
            <Name />
            <LastName />
          </div>
          <Email />
          <Phone />
          <Address />
          <Specialty />
          <Position />
          <Company />
          <Message />
          <input type="hidden" name="type" value={type} />

          <div
            style={{
              padding: "1rem",
              backgroundColor: "#5a6f8ea1",
              margin: "1rem 0",
              borderRadius: ".3rem",
            }}
          >
            <Form.Check
              id="content"
              name="content"
              label="By checking the box you agree to us contacting you."
              className={checkForm}
              value={boxIsChecked}
              onChange={onChangeChoice1}
              required
              onClick={() =>
                setBoxIsChecked("I agree to Community of Love contacting me. ")
              }
            />
          </div>
          {!checked ? <SubmitButton /> : <SubmitButtonDisabled />}
        </Card>
      </Form>
    </>
  );
};
export default Subscribe;
