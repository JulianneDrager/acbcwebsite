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
import Company from "./Form Fields/Company";
import LastName from "./Form Fields/LastName";
import SponsorCard from "./SponsorCard";
import SponsorData from "./SponsorData ";
import Nav from "../Nav/Nav";
import smoothscroll from "smoothscroll-polyfill";
import Address2 from "./Form Fields/Address2";
import { useContactContext } from "../Context/ContactContext";

smoothscroll.polyfill();

const Sponsor = ({ sendEmailHandler }) => {
  const { type, setType } = useContactContext();

  useEffect(() => {
    setType("sponsor");
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  // Map function to show the accordion for MEET THE TEAM section.
  const SponsorMap = SponsorData.map((item, index) => {
    return <SponsorCard key={index} {...item} />;
  });
  // ---------------------------------------------------------------

  const sponsorFormStyle = ContactStyle.sponsorFormStyle;
  const contact = ContactStyle.contact;
  const checkForm = ContactStyle.checkForm;
  const sponsorH1 = ContactStyle.sponsorH1;
  const nameDiv = ContactStyle.nameDiv;
  const sponsorFormFields = ContactStyle.sponsorFormFields;

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

  // ----------------------------------------------------------------------

  return (
    <>
      <Nav />
      <Form
        id="sponsor"
        ref={refForm}
        onSubmit={sendEmailHandler}
        // validated={validated}
        className={contact}
        autoComplete="on"
      >
        <Card className={sponsorFormStyle}>
          <h1 className={sponsorH1}>BECOME A SPONSOR</h1>
          {/* Sponsor Accordion -------------------------------    ---- */}
          {SponsorMap}
          {/* ------------------------------------------------*/}
          <div className={sponsorFormFields}>
            <div className={nameDiv}>
              <Name />
              <LastName />
            </div>
            <Phone />
            <Email />
            <Company />
            <Address />
            <Address2 />
            <br />
            How would you like to sponsor our event?
            <Message />
            <input type="hidden" name="type" value={type} />
          </div>
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
export default Sponsor;
