import { Card, Form } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

import Name from "./Form Fields/Name";
import Phone from "./Form Fields/Phone";
import Email from "./Form Fields/Email";
import SubmitButton from "./Form Fields/SubmitButton";
import ContactStyle from "./Contact.module.css";
import SubmitButtonDisabled from "./Form Fields/SubmitButtonDisabled";
import Specialty from "./Form Fields/Specialty";
import Company from "./Form Fields/Company";
import Nav from "Components/Nav/Nav";
import smoothscroll from "smoothscroll-polyfill";
import LastName from "./Form Fields/LastName";
import { useContactContext } from "../Context/ContactContext";
import Practice from "./Form Fields/Practice";
import PracticeAddress from "./Form Fields/PracticeAddress";
import EventDropDown from "./Form Fields/EventDropDown";
import ShirtSize from "./Form Fields/ShirtSize";
import IndividualDown from "./Form Fields/IndividualDown";
import MyPaymentForm from "Components/Sqare/PaymentForm";

smoothscroll.polyfill();

const RegisterForm = () => {
  const { type, setType, RegisterHandler, sendEmailHandler } =
    useContactContext();

  // const currentYear = new Date().getFullYear();

  useEffect(() => {
    setType("register");
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
  const [boxIsChecked, setBoxIsChecked] = useState(false);

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

  const [errorMessage, setErrorMessage] = useState("");

  // Function to check if the protocol is HTTPS
  const isSecureConnection = () => {
    return window.location.protocol === "https:";
  };

  const combinedHandler = (e) => {
    if (!isSecureConnection()) {
      e.preventDefault(); // Prevent form submission
      setErrorMessage(true);
      return;
    }

    RegisterHandler(e);
    sendEmailHandler(e);
  };

  return (
    <>
      <Nav />
      <Form
        id="register"
        ref={refForm}
        onSubmit={combinedHandler}
        // validated={validated}
        className={contact}
        autoComplete="on"
      >
        <Card className={subscribeFormStyle}>
          <h1 className={subscribeH1}>EVENT REGISTRATION</h1>
          <p style={{ margin: "1rem 0 0 0" }}>
            Fill out the form below to register via email.
          </p>

          {errorMessage && (
            <div style={{ color: "red" }}>
              Form submission is only allowed over a secure HTTPS connection.{" "}
              <a
                style={{ color: "white" }}
                href="https://accesscoordinatorbootcamp.com/event-details/grand-rapids-michigan-round-up-2024"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click HERE to register securely
              </a>
            </div>
          )}
          {/* <IndividualDown /> */}
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
          <Company />
          <ShirtSize />
          <br />
          {/* payment form -------------------------------- */}
          {/* <MyPaymentForm /> */}

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
          {/* added */}

          {!checked ? <SubmitButton /> : <SubmitButtonDisabled />}
        </Card>
      </Form>
    </>
  );
};
export default RegisterForm;
