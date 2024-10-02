import { Card, Form } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

import SubmitButton from "./Form Fields/SubmitButton";
import ContactStyle from "./Contact.module.css";

import Nav from "Components/Nav/Nav";
import smoothscroll from "smoothscroll-polyfill";

import { useContactContext } from "../Context/ContactContext";

import IndividualDown from "./Form Fields/IndividualDown";

smoothscroll.polyfill();

const Payment = () => {
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
  const subscribeH1 = ContactStyle.subscribeH1;

  //for validate

  // for dropdown
  const [selectedOption, setSelectedOption] = useState("");
  console.log("selectedOption", selectedOption);
  // for dropdown
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
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
        id="register-pharma"
        ref={refForm}
        onSubmit={combinedHandler}
        // validated={validated}
        className={contact}
        autoComplete="on"
      >
        <Card className={subscribeFormStyle}>
          <h1 className={subscribeH1}>EVENT REGISTRATION</h1>
          <p style={{ margin: "1rem 0 0 0" }}>
            Please choose the appropriate option below to begin registration for
            the event.
          </p>

          {errorMessage && (
            <div style={{ color: "red" }}>
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

          {/* PAYMENT ---------------------------------------- */}
          <IndividualDown onChange={handleDropdownChange} />

          <input type="hidden" name="type" value={type} />

          {selectedOption === "Pharmacy rep" ? <SubmitButton /> : null}
        </Card>
      </Form>
    </>
  );
};
export default Payment;
