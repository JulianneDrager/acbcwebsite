import {
  Accordion,
  AccordionContext,
  Button,
  useAccordionButton,
} from "react-bootstrap";
import { useContext } from "react";

import ContactStyle from "./Contact.module.css";

const SponsorCard = (props) => {
  const readMoreButton = ContactStyle.readMoreButton;

  const hrStyle = { margin: ".3rem", border: "none" };
  const hrStyle2 = { margin: "1rem", border: "none" };

  // ----------------------------------------------------------------------

  const ContextAwareToggle = ({ children, eventKey, callback }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );
    const isCurrentEventKey = activeEventKey === eventKey;

    const handleClick = () => {
      decoratedOnClick(); // This will toggle the accordion section
    };

    return (
      <Button
        type="button"
        style={{
          display: isCurrentEventKey ? "none" : "inline",
        }}
        onClick={handleClick}
        className={readMoreButton}
      >
        {isCurrentEventKey ? "CLOSE" : "READ MORE"}
      </Button>
    );
  };

  return (
    <>
      <h1>{props.h1text}</h1>
      {/* Accordion ------------------------------------------- */}
      <section>
        {/* MapButton ------------------------------------------- */}
        <Accordion defaultActiveKey="0" alwaysOpen={false}>
          <p>{props.h6Text}</p>
          <hr style={hrStyle} />
          <li>{props.liText1}</li>
          <hr style={hrStyle} />
          <li>{props.liText2}</li>
          <hr style={hrStyle} />
          <li>{props.liText3}</li>
          <hr style={hrStyle} />
          <ContextAwareToggle eventKey="1"></ContextAwareToggle>
          <Accordion.Collapse eventKey="1">
            <>
              <li>{props.liText4}</li>
              <hr style={hrStyle} />
              <li>{props.liText5}</li>
              <hr style={hrStyle} />
            </>
          </Accordion.Collapse>
        </Accordion>

        <hr style={hrStyle2} />
        <p>{props.paragraphText}</p>
      </section>
    </>
  );
};
export default SponsorCard;
