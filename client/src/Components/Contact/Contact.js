import { Card, Col, Form, Row } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

import Title from "./Form Fields/Title";
import Name from "./Form Fields/Name";
import Email from "./Form Fields/Email";
import SubmitButton from "./Form Fields/SubmitButton";
import ContactStyle from "./Contact.module.css";
import Message from "./Form Fields/Message";
import SubmitButtonDisabled from "./Form Fields/SubmitButtonDisabled";
import ContactBtnCard from "./ContactBtnCard";
// import ContactBtnData from "./ContactBtnData";
import { Link } from "react-router-dom";
import LastName from "./Form Fields/LastName";
import { useContactContext } from "../Context/ContactContext";

const Contact = ({ sendEmailHandler }) => {
  const { type, setType } = useContactContext();

  useEffect(() => {
    setType("contact");
  }, []);

  const [visibility, setVisibility] = useState(false);

  const formStyle = ContactStyle.formStyle;
  const contact = ContactStyle.contact;
  const checkForm = ContactStyle.checkForm;
  const sponsorStyle = ContactStyle.sponsorStyle;
  const mapBtnText = ContactStyle.mapBtnText;
  const subscribeStyle = ContactStyle.subscribeStyle;
  const nameDiv = ContactStyle.nameDiv;

  // Map function to show the accordion for Map Btn ------------
  // const ContactBtnMap = ContactBtnData.map((item, index) => {
  //   return (
  //     <ContactBtnCard
  //       key={index}
  //       {...item}
  //       visibility={visibility}
  //       setVisibility={setVisibility}
  //     />
  //   );
  // });

  // ---------------------------------------------------------------

  //scroll to top of component -------------------------------------
  // const myRef = useRef(null);
  // useEffect(() => {
  //   myRef.current.scrollIntoView({ behavior: "smooth" });
  // }, []);

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
  // ---------------------------------------------------------------

  const SponsorButton = (
    <Link
      type="button"
      className={subscribeStyle}
      to={"/subscribe"}
      // onClick={scrollToTop}
      style={{ textDecoration: "none" }}
      // className={readMoreButton}
    >
      <p className={mapBtnText}>SUBSCRIBE FOR UPDATES</p>
    </Link>
  );

  const SubscribeButton = (
    <Link
      type="button"
      className={sponsorStyle}
      to={"/sponsor"}
      // onClick={scrollToTop}
      style={{ textDecoration: "none" }}
      // className={readMoreButton}
    >
      <p className={mapBtnText}>BECOME A SPONSOR</p>
    </Link>
  );

  const refForm = useRef();

  return (
    <>
      <Row>
        <Col>
          <Form
            id="contact"
            // ref={refForm}
            onSubmit={sendEmailHandler}
            // validated={validated}
            className={contact}
            autoComplete="on"
          >
            <Card className={formStyle}>
              <Title />
              {/* Map Btn & Subscribe Btn ----------------------------*/}
              {
                <ContactBtnCard
                // visibility={visibility}
                // setVisibility={setVisibility}
                />
              }

              {/* Sponsor Btn ---------------------------------*/}
              {SponsorButton}

              {/* Subscribe Btn ---------------------------------------*/}
              {SubscribeButton}

              {/* Form Fields ---------------------------------*/}
              {!visibility && (
                <>
                  <div className={nameDiv}>
                    <Name />
                    <LastName />
                  </div>
                  <Email />

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
                      // ref={myRef}
                      name="content"
                      label="By checking the box you agree to us contacting you."
                      className={checkForm}
                      value={boxIsChecked}
                      onChange={onChangeChoice1}
                      required
                      onClick={() =>
                        setBoxIsChecked(
                          "I agree to Community of Love contacting me. "
                        )
                      }
                    />
                  </div>
                  {!checked ? <SubmitButton /> : <SubmitButtonDisabled />}
                </>
              )}
            </Card>
          </Form>
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <div className={contactDivider}></div>
        </Col>
      </Row> */}
    </>
  );
};
export default Contact;
