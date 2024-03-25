import { useState, useEffect, useContext } from "react";
import ContactStyle from "./Contact.module.css";
import {
  Accordion,
  Button,
  AccordionContext,
  useAccordionButton,
} from "react-bootstrap";
const mapStyle = ContactStyle.mapStyle;
const mapIconStyle = ContactStyle.mapIconStyle;

const ContactBtnCard = ({ visibility, setVisibility, ...props }) => {
  const [key, setKey] = useState(Math.random());

  // useEffect(() => {
  // const script = document.createElement("script");
  // script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY";
  // script.async = true; // This line makes the script load asynchronously
  // script.onload = () => {
  //   setKey(Math.random()); // change key state to force re-render
  // };
  // document.body.appendChild(script);
  // }, [visibility]);

  const mapBtnText = ContactStyle.mapBtnText;
  const hrStyle = { margin: ".3rem", border: "none" };

  // Function to toggle the read more button --------------------------------
  const ContextAwareToggle = ({ children, eventKey, callback }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );
    const isCurrentEventKey = activeEventKey === eventKey;

    // const buttonTextToggle = () => {
    //   if (props.btnText === "CLICK TO VIEW MAP") {
    //     setVisibility(visibility);
    //   } else {
    //     setVisibility(!visibility);
    //   }
    // };

    const handleClick = () => {
      decoratedOnClick(); // This will toggle the accordion section
      // buttonTextToggle();
      // console.log("visibility", visibility);
    };
    // ------------------------------------------------------------------------

    return (
      <Button
        type="button"
        className={mapIconStyle}
        onClick={handleClick}
        // className={readMoreButton}
      >
        <p className={mapBtnText}>
          {isCurrentEventKey ? "CLOSE" : "CLICK TO VIEW MAP"}
        </p>
      </Button>
    );
  };

  return (
    <>
      {/* Accordion ------------------------------------------- */}
      <section>
        {/* MapButton ------------------------------------------- */}
        <Accordion defaultActiveKey="0" alwaysOpen={false}>
          <ContextAwareToggle
            setVisibility={setVisibility}
            eventKey="1"
          ></ContextAwareToggle>
          <Accordion.Collapse eventKey="1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13377.61513532414!2d-96.84213361728139!3d33.0458348768378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c23610566b37d%3A0x29a2d373cc0a895d!2s6009%20W%20Parker%20Rd%2C%20Plano%2C%20TX%2075093!5e0!3m2!1sen!2sus!4v1711224527054!5m2!1sen!2sus"
              className={mapStyle}
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </Accordion.Collapse>
        </Accordion>
        <hr style={hrStyle} />
      </section>
    </>
  );
};

export default ContactBtnCard;
